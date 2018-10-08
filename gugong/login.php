<?php
	include_once("conn.php");
	$username = trim($_POST['username1']);
	$password = md5($_POST['password1']);

    $loginSQL = "select * from user where username='$username' and password='$password'";
    $resultLogin = mysqli_query($conn,$loginSQL);
    if (mysqli_num_rows($resultLogin) > 0) {
        echo true;
        //header('Location:yzm1.html');
    } else {
        echo false;
    }
   //关闭连接
	mysqli_close($conn);
?>