<?php
	header('Content-type:text/html; charset=utf-8');
	//设定数据库连接变量
	$ServerName = "localhost";
	$DataBase = "gugong";
	$UserName = "root";
	$UserPass = "123456";

	//建立数据库连接
	$conn = mysqli_connect($ServerName,$UserName,$UserPass,$DataBase) or die("数据库链接错误");
	mysqli_set_charset($conn,"utf8");
/*	if($conn){
        echo"ok成功";
    }else{
        echo"error失败";    
    };*/
?>