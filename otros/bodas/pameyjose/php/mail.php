<?php

include ('config.php');
include ('consultas.php');
	
/* array $HTTP_POST_VARS. */
$email=$HTTP_POST_VARS['email'];
$name=$HTTP_POST_VARS['name'];
$message=$HTTP_POST_VARS['message'];
$montoTotal=$HTTP_POST_VARS['monto'];
$descripcionRegalo=$HTTP_POST_VARS['descripcionRegalo'];
$idRegaloReservar=$HTTP_POST_VARS['idRegalo'];
$idioma=$HTTP_POST_VARS['idioma'];
$locationRedirect='';

//Email para Admin
$emailContent="Email: ".$email."\nNombre: ".$name."\nMensaje: ".$message."\nRegalo: ".$descripcionRegalo."\nTotal: ".$montoTotal;
$to = 'pameyjosepablo@gmail.com';
$subjectAdmin = 'pameyjose.com - nuevo regalo';

//Email para Usuarios
if($idioma=='esp') {
	$subject = "Regalo para Pamela y Jose Pablo.";
	$contentForUser = "Hola ".$name."\n\nUsted hizo una solicitud de regalo para la boda de Pamela Solís y José Pablo González.\n\n";
	$contentForUser = $contentForUser."El regalo reservado es ".$descripcionRegalo." ".$montoTotal.".\n\nPor favor realice el depósito a la cuenta #001-0465776-4 del BCR a nombre de José Pablo González Espinoza, número de cédula 1-1091-0509\n";
	$contentForUser = $contentForUser."#SINPE 15202001046577646 en dolares.\n\nPara transferencias internacionales utilice la cuenta 001-0465776-4 del BCR.\n";
	$contentForUser = $contentForUser."Código SWIFT BCRICRSJ en dolares.\n\nSaludos";
	$contentForUser = $contentForUser."En caso que su dep&oacute;sito no se confirme en 3 d&iacute;as, el regalo escogido quedar&aacute; disponible nuevamente en la Lista de Regalos. Muchas gracias.";
	$locationRedirect=	'lista.php?sent';
}

else if ($idioma=='eng'){
	$subject = "Pamela and Jose Pablo's wedding.";
	$contentForUser = "Hi ".$name."\n\nYou have chosen a present for Pamela Solis and Jose Pablo Gonzalez's wedding.\n\n";
	$contentForUser = $contentForUser."The selected present is ".$descripcionRegalo." ".$montoTotal.".\n\nPlease deposit to this account #001-0465776-4 Bank Banco de Costa Rica registered for José Pablo González Espinoza, Identification Number 1-1091-0509\n";
	$contentForUser = $contentForUser."#SINPE 15202001046577646 US dollars.\n\nFor international transfers use this account 001-0465776-4 Bank Banco de Costa Rica.\n";
	$contentForUser = $contentForUser."SWIFT code BCRICRSJ.\n\nBest regards.";
	$locationRedirect=	'en/lista.php?sent';
}

modificarEstadoYFechaRegalo($idRegaloReservar,1);

if(mail($to, $subjectAdmin, $emailContent) && mail($email, $subject, $contentForUser)) {
	
	header('Location: http://www.pameyjose.com/'.$locationRedirect);
}

?>