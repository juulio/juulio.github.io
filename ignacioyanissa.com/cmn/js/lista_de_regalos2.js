var lista_regalos = window.lista_regalos || {};
(function(context, $) {

	function validateForm() {
		var formStatus = false;
		if(verifyRequiredFields() && verifyEmail()) {
			formStatus = true;
		} else
			formStatus = false;

		return formStatus;
	}

	function verifyRequiredFields() {
		var fieldsStatus = false;

		if($("input#name").val() == "" || $("input#email").val() == "" || $("textarea#mensajeParaNovios").val() == "") {
			fieldsStatus = false;
			alert("Por favor digite todos los campos.")
		} else
			fieldsStatus = true;

		return fieldsStatus;
	}

	function verifyEmail() {
		var emailFieldStatus = false;
		var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

		if(document.formulario.email.value.search(emailRegEx) == -1) {
			emailFieldStatus = false;
			alert("Por favor digite un e-mail en el campo requerido.")
		} else
			emailFieldStatus = true;

		return emailFieldStatus;
	}

	function esconderTodosRegalosSeleccionados() {
		$(".listaRegalosColumnaDerecha span").hide();
	}

	function sentPopUp() {
		sent = window.location.search.substr(1);

		if(sent == "sent") {
			$('#sentWrapper').lightbox_me({
				centered : true,
				onClose : function() {
					window.location.replace("http://www.ignacioyanissa.com/");
				}
			});
		}
	}

	function init() {

		sentPopUp();

		$(":checkbox").change(function() {

			var costo_total = 0;
			esconderTodosRegalosSeleccionados();

			$("form#form_lista_de_regalos :checked").each(function() {

				var checkbox_id = $(this).attr("id");
				var valor_item = $(this).attr("value");
				var regalos_id = checkbox_id.substr(4);

				$("#" + regalos_id).css('display', 'block');
				costo_total += parseInt(valor_item);

			});

			$("span#costo_total").show();
			$("span#costo_total").html(costo_total);
			$('input[name=monto]').val(costo_total);
		});

		$('a#btn_abrirForm').click(function(e) {
			if($(".listaRegalosColumnaDerecha span.regalo").is(":visible")) {
				$('#formularioWrapper').lightbox_me({
					centered : true
				});
				e.preventDefault();
				$("span.montoADepositar").html($("span#costo_total").html());
				//$("#formularioOpcionesSeleccionadas").html($(".listaRegalosColumnaDerecha").html());
				$("#formularioOpcionesSeleccionadas").html($(".listaRegalosColumnaDerecha").html());
			} else
				alert("Debe seleccionar al menos un regalo");

		});

		$("#formulario").submit(function(event) {

			event.preventDefault();

			if(validateForm()) {

				$.ajax({
					type : "POST",
					dataType : "text",
					data : $(this).serialize(),
					url : "mail.php",
					success : function(data) {
						alert('exito');
					}
				});
			}
		});
	}

	$(init);

})(lista_regalos, jQuery);
