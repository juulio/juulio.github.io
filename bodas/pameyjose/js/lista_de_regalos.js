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

		sentPopUp();
		
		$('span.button').click(function(e) {
			e.preventDefault();
			
			var $listItem = $(this).parents('.listItem'),
				$linkID = $(this).find('a').attr('id');

			//info a mostrar en el lightbox
			var descripcion, precio;
			
			descripcion = $listItem.find('.desc').html();
			precio = $listItem.find('.price').html();
						
			window.scrollTo(0,30);
			$('#formularioWrapper').lightbox_me({
				centered : true,
				overlayCSS : {background: '#000000', opacity: .8}
			});
			
			$("#montoADepositar").html(precio);
			$("#regaloSeleccionado").html(descripcion);
			$('input[name=idRegalo]').val($linkID);
			$('input[name=monto]').val(precio);
			$('input[name=descripcionRegalo]').val(descripcion);
		});

	}
	


  


	$(init);

})(lista_regalos, jQuery);
