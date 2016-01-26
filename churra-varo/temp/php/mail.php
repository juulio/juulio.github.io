<?php

include ('config.php');
include ('utils.php');
	
/* array $HTTP_POST_VARS. */
$email=$HTTP_POST_VARS['email'];
$name=$HTTP_POST_VARS['name'];
$message=$HTTP_POST_VARS['message'];
$montoTotal=$HTTP_POST_VARS['monto'];
$descripcionRegalo=$HTTP_POST_VARS['descripcionRegalo'];
$idRegaloReservar=$HTTP_POST_VARS['idRegalo'];
$locationRedirect = 'churra-varo/temp/lista.php?sent';
$nombreNovios='Jennifer y Alvaro';
$headers = "From: Lista de Bodas <info@listadebodas.de>";


//Email para Admin
$emailContent="Email: ".$email."\nNombre: ".$name."\nMensaje: ".$message."\nRegalo: ".$descripcionRegalo." - $".$montoTotal;
$to = 'juulio@gmail.com, jcamposu@bacsanjose.com, varomoca@hotmail.com';
$subjectAdmin = $nombreNovios.' - nuevo regalo';


//Email para Usuarios
$subject = "Regalo para ".$nombreNovios.".";
$contentForUser = "Hola ".$name."\n\nUsted hizo una solicitud de regalo para la boda de ".$nombreNovios.".\n\n";
$contentForUser = $contentForUser."El regalo reservado es ".$descripcionRegalo." $".$montoTotal.".\n\nPor favor realice el depósito a la cuenta en dólares #916441413 de BAC San José a nombre de Jennifer Campos Ulate.\nCuenta cliente SINPE 10200009164414130.\n\nMuchas gracias.";



if(mail($to, $subjectAdmin, $emailContent, $headers) && mail($email, $subject, $contentForUser, $headers)) {
	header('Location: http://www.listadebodas.de/'.$locationRedirect);
}

?>