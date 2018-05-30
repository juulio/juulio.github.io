<?php
	$mysql_hostname="localhost";
	$mysql_user="juulio";
	$mysql_password="22274243";
	$mysql_database="boda_churravaro";
	$prefix="";
	$bd=mysql_connect($mysql_hostname,$mysql_user,$mysql_password) or die("Could not connect database");
	mysql_select_db($mysql_database) or die("Could not select database");
?>