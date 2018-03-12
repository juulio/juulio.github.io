<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Pamela y Jose - Interfaz de Consultas</title>
		<link rel="stylesheet" media="screen" type="text/css" href="stylesheets/interfazConsultas.css" />
	</head>

	<body>
		<?php
			include ('php/config.php');
			include ('php/consultas.php');
	
			$selfUrl = $_SERVER['PHP_SELF'];
			
			if(isset($_POST['disponible']) || isset($_POST['reservado']) || isset($_POST['confirmado'])) {
				$idRegaloModificar = $_POST['idRegalo'];
			}
			
			if(isset($_POST['disponbible'])){
				modificarEstadoRegalo($idRegaloModificar, 0);
			}
	
			if(isset($_POST['reservado'])) {
				modificarEstadoRegalo($idRegaloModificar, 1);
			}
			
			if(isset($_POST['regalado'])) {
				modificarEstadoRegalo($idRegaloModificar, 2);
			}
			
		?>
		
		<div id="wrapper">

			<h1>INTERFAZ DE CONSULTAS</h1>

			<form name="formRegalos" method="post" action="<?php echo $selfUrl; ?>">
			<table border="1" id="tableInterfazConsultas">

				<tr class="tableHeaders">
					<th>DESCRIPCI&Oacute;N REGALO</th>
					<th>PRECIO</th>
					<th>FECHA</th>
					<th>ESTADO</th>
					<th colspan="3">CAMBIAR ESTADO REGALO</th>
				</tr>
				
				<?php
					//$regalosReservados = getRegalosParaConsulta(1);
					$regalosReservados = getRegalosInterfazConsultas();

					while ($rowRegalosReservados = mysql_fetch_array($regalosReservados)) {
						$idRegalo = $rowRegalosReservados['idRegalo'];
						$nombreRegalo = $rowRegalosReservados['nombreRegalo'];
						$precioRegalo = $rowRegalosReservados['precioRegalo'];
						$estadoRegalo = $rowRegalosReservados['estadoRegalo'];
						$nombreEstadoRegalo = getEstadoRegalo($estadoRegalo);
						$fecha = $rowRegalosReservados['fechaReservacion'];
						
						if($estadoRegalo == 1){
							echo '<tr class="regaloReservado">';	
						}
						else {
							echo '<tr>';
						}
						echo '<td>'.$nombreRegalo.'</td>';
						echo '<td>'.$precioRegalo.'</td>';
						echo '<td>'.$fecha.'</td>';
						echo '<td>'.$nombreEstadoRegalo.'</td>';
						echo '<input type="hidden" name="idRegalo" value="'.$idRegalo.'">';
						echo '<td><input type="submit" name="disponible" value="disponible">';
						echo '<td><input type="submit" name="reservado" value="reservado">';
						echo '<td><input type="submit" name="regalado" value="regalado">';
						echo '</tr>';
					}
					
				?>

			</table>
			</form>
			
		</div><!-- wrapper -->
		<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
		<script>
			window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')
		</script>
	</body>
</html>

