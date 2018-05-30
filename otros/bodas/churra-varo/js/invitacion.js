var invitacion = window.invitacion || {};
(function(context, $) {

	function sentPopUp() {
		var rsvp = window.location.search.substr(1);

		if(rsvp==='rsvp') {
			$('#sentWrapper').lightbox_me({
				centered : true
			});
		}
	}
	
	function init() {
		
		sentPopUp();
		
		$('#rsvp').click(function(){
			window.scrollTo(0,30);
			$('#rsvpForm').show();
			$('#formularioInnerWrapper').show();
			
			$('#rsvpForm').lightbox_me({
				centered : true,
				overlayCSS : {background: '#000000', opacity: .8}
			});
		});
		
		$('#formularioInvitacion').validate({
			rules: {
				nombreInvitado: {
					required: true,
					minlength: 2	
				} 
			},
			messages: {
				nombreInvitado: "Por favor digite su nombre"
			}
		});
	}

	$(init);

})(invitacion, jQuery);
