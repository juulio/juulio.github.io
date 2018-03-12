<?php

//Consulta de todos los paises
function getPaises($idIdioma) {
	$query = "SELECT * FROM `paises` WHERE idIdioma=".$idIdioma;
	$mysql = mysql_query($query);
	return $mysql;
}

// Consulta de todos los regalos de todas las categorias
function getRegalosByPais($idPais) {
	$query = "SELECT idRegalo, nombreRegalo, precioRegalo, estadoRegalo, fk_idCategoria FROM  `regalos` WHERE fk_idPais=".$idPais.' ORDER BY idRegalo';
	$mysql = mysql_query($query);
	return $mysql;
}

// Consulta de todos los regalos de todas las categorias
function getTodosRegalos() {
	$query = "SELECT idRegalo, nombreRegalo, precioRegalo, nombreCategoria FROM  `regalos`, `categorias` WHERE fk_idCategoria=idCategoria";
	$mysql = mysql_query($query);
	return $mysql;
}

// Consulta de todos los regalos de una categoria
function getRegalos($idCategoria) {
	$query = "SELECT * FROM  `Regalos` WHERE fk_idCategoria=".$idCategoria;
	$mysql = mysql_query($query);
	return $mysql;
}

// Devuelve un string de acuerdo con la categoria seleccionada
function getClaseCategoria($idCategoria) {
	$claseCategoria = '';
		
	switch ($idCategoria)
	{
	case 1:
	  $claseCategoria = 'trans';
	  break;
	case 2:
	  $claseCategoria = 'hotel';
	  break;
	case 3:
	  $claseCategoria = 'food';
	  break;
	case 4:
	  $claseCategoria = 'enter';
	  break;
	default:
	  $claseCategoria = 'trans';
	}
	
	return $claseCategoria;
}

// Devuelve un string con la clase del estado del Regalo
function getClaseEstadoRegalo($idEstadoRegalo) {
	$claseEstadoRegalo = '';
		
	switch ($idEstadoRegalo)
	{
	case 0:
	  $claseEstadoRegalo = 'disponible';
	  break;
	case 1:
	  $claseEstadoRegalo = 'reservado';
	  break;
	case 2:
	  $claseEstadoRegalo = 'regalado';
	  break;
	default:
	  $claseEstadoRegalo = 'disponible';
	}
	
	return $claseEstadoRegalo;
}

// Consulta de regalos de acuerdo con su estado
function getRegalosParaConsulta($estadoRegalo) {
	$query = "SELECT idRegalo, nombreRegalo, precioRegalo, fechaReservacion FROM  `regalos` WHERE estadoRegalo=".$estadoRegalo;
	$mysql = mysql_query($query);
	return $mysql;
}

// Consulta de regalos Reservados y Regalados
function getRegalosInterfazConsultas() {
	$query = "SELECT idRegalo, nombreRegalo, precioRegalo, fechaReservacion, estadoRegalo  FROM  `regalos` WHERE estadoRegalo=1 OR estadoRegalo=2 ORDER BY estadoRegalo";
	$mysql = mysql_query($query);
	return $mysql;
}

function getEstadoRegalo($idEstadoRegalo) {
	$nombreEstadoRegalo = '';
		
	switch ($idEstadoRegalo)
	{
	case 0:
	  $nombreEstadoRegalo = 'disponible';
	  break;
	case 1:
	  $nombreEstadoRegalo = 'reservado';
	  break;
	case 2:
	  $nombreEstadoRegalo = 'regalado';
	  break;
	default:
	  $nombreEstadoRegalo = 'disponible';
	}
	
	return $nombreEstadoRegalo;
}

function modificarEstadoRegalo($idRegaloRehabilitar, $nuevoEstadoRegalo) {
	if($nuevoEstadoRegalo==0){
		$query = "UPDATE `regalos` SET estadoRegalo=".$nuevoEstadoRegalo.",fechaReservacion='' WHERE idRegalo=".$idRegaloRehabilitar;
	}
	else {
		$query = "UPDATE `regalos` SET estadoRegalo=".$nuevoEstadoRegalo." WHERE idRegalo=".$idRegaloRehabilitar;	
	}
	
	$mysql = mysql_query($query);
	return $mysql;
}

function modificarEstadoYFechaRegalo($idRegaloRehabilitar, $nuevoEstadoRegalo) {
	$query = "UPDATE `regalos` SET estadoRegalo=".$nuevoEstadoRegalo.", fechaReservacion=CURDATE() WHERE idRegalo=".$idRegaloRehabilitar;
	$mysql = mysql_query($query);
	return $mysql;
}

?>