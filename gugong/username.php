<?php
	include_once("conn.php");
	$username = trim($_POST['username']);
    $loginSQL = "select * from user where userName='$username'";
    $resultLogin = mysqli_query($conn,$loginSQL);
    if (mysqli_num_rows($resultLogin) > 0) {
        echo true;
    } else {
        echo false;
    }
   //关闭连接
	mysqli_close($conn);
?>