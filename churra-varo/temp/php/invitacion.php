<?php

include ('config.php');
	
/* array $HTTP_POST_VARS. */
$name=$HTTP_POST_VARS['name'];
$espacios=$HTTP_POST_VARS['espacios'];
$locationRedirect='churra-varo/temp/index.html?rsvp';
$headers = "From: Lista de Bodas <info@listadebodas.de>";

//Email para Admin
$emailContent="El invitado ".$name."\n\nConfirmó la reservación de ". $espacios." espacio (s).";
$to = 'juulio@gmail.com, jcamposu@bacsanjose.com, varomoca@hotmail.com';
$subjectAdmin = $nombreNovios.' - R.S.V.P.';

if( mail($to, $subjectAdmin, $emailContent, $headers) ) {
	header('Location: http://www.listadebodas.de/'.$locationRedirect);
}

?>