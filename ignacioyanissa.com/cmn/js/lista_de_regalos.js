var lista_regalos = window.lista_regalos || {};
(function(context, $) {

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

	function hideAll() {
		/*$('.containerRegalos').animate({
			opacity : 0,
			height : '0px'
		}, 500);*/
		$('.containerRegalos').fadeOut(1);
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

		$('#transporte').click(function() {
			hideAll();
			$('#containerTransporte').fadeIn(900);
		});

		$('#alimentacion').click(function() {
			hideAll();
			$('#containerAlimentacion').fadeIn(900);
		});

		$('#hospedaje').click(function() {			
			hideAll();			
			$('#containerHospedaje').fadeIn(900);
		});

		$('#toursSantorini').click(function() {
			hideAll();
			$('#containerToursSantorini').fadeIn(900);

		});

		$('#toursItalia').click(function() {			
			hideAll();
			$('#containerToursItalia').fadeIn(900);
		});

		$('#otros').click(function() {			
			hideAll();
			$('#containerOtros').fadeIn(900);
		});
	}

	$(init);

})(lista_regalos, jQuery);
