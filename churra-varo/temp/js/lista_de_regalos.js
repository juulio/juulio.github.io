var lista_regalos = window.lista_regalos || {};
(function(context, $) {

	function sentPopUp() {
		var sent = window.location.search.substr(1),
			url='';

		if(sent==='sent') {
			$('#sentWrapper').lightbox_me({
				centered : true
			});
		}
	}
	
	function init() {

		$('#accordion').accordion({
			heightStyle: "content"
		});
		
		sentPopUp();
		
		$('.tablaListaRegalos span').click(function(e) {
			e.preventDefault();
			
			var $this = $(this),
				$listItem = $this.parents('.tablaListaRegalos tr'),
				$linkID = $this.find('span').attr('id');

			//info a mostrar en el lightbox
			var descripcion, precio;
			
			descripcion = $listItem.find('.nombreRegalo').html();
			precio = $listItem.find('.precioRegalo').html();
						
			window.scrollTo(0,30);
			$('.formularioDeRegalo').lightbox_me({
				centered : true,
				overlayCSS : {background: '#000000', opacity: .7}
			});
			
			$("#montoADepositar").html(precio);
			$("#regaloSeleccionado").html(descripcion + '   $' + precio);
			$('input[name=idRegalo]').val($linkID);
			$('input[name=monto]').val(precio);
			$('input[name=descripcionRegalo]').val(descripcion);
		});

	}
	

	$(init);

})(lista_regalos, jQuery);
