var lista_regalos = window.lista_regalos || {};
(function(context, $) {

	function sentPopUp() {
		sent = window.location.search.substr(1);

		if(sent == "sent") {
			$('#sentWrapper').lightbox_me({
				centered : true,
				onClose : function() {
					window.location.replace("http://www.anitayalonso.com/");
				}
			});
		}
	}

	function hideAll(element) {
		$('.containerRegalos:not('+ element +')').fadeOut(100);
	}

	function init() {

		// Verify if pop up was sent
		sentPopUp();

		$(":checkbox").change(function() {

			var costo_total = 0;

			$(".container-seleccionados span").hide();

			$("form#form_lista-de-regalos :checked").each(function() {

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
			var contenidoParaFormulario = '';

			if($("span.regalo").is(":visible")) {
				$('#formularioWrapper').lightbox_me({
					centered : true
				});
				e.preventDefault();
				$("span.montoADepositar").html($("span#costo_total").html());
				$("#formularioOpcionesSeleccionadas").append($(".container-seleccionados span:visible"));
				
				contenidoParaFormulario = '';
			
				$('#formularioOpcionesSeleccionadas span').each(function(){
					contenidoParaFormulario += $(this).text();
					contenidoParaFormulario += '\n';
				});

				// Add the selected gifts to the hidden input element
				$('#inputRegalosSeleccionados').val(contenidoParaFormulario);
			} else
				alert("Debe seleccionar al menos un regalo");

		});

		// Category toggle: when clicking category elements, show/hide gift items
		$('.left-column a').click(function(e){
			$this = $(this),
			id = $this.attr('id'),
			containerId = '#container-'+id
			$containerId = $(containerId);

			e.preventDefault();
			hideAll(containerId);

			$containerId.fadeIn(400);
		});
	}

	$(init);

})(lista_regalos, jQuery);
