<?php

include ('config.php');
	
/* array $HTTP_POST_VARS. */
$nombreInvitados=$HTTP_POST_VARS['nombreInvitado'];
$espacios=$HTTP_POST_VARS['espacios'];
$locationRedirect='churra-varo/index.html?rsvp';
$headers = "From: Lista de Bodas <info@listadebodas.de>";
$nombreNovios = "Jennifer y Alvaro";

//Email para Admin
$emailContent="El invitado -".$nombreInvitados."- confirmó la reservación de ". $espacios." espacio (s).";
$to = 'juulio@gmail.com, jcamposu@bacsanjose.com, varomoca@hotmail.com, allansegura@mkinnovations.net';
$subjectAdmin = $nombreNovios.' - R.S.V.P.';

if( mail($to, $subjectAdmin, $emailContent, $headers) ) {
	header('Location: http://www.listadebodas.de/'.$locationRedirect);
}

?>