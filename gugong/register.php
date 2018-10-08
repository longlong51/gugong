<?php
	include_once("conn.php");
	$username = trim($_POST['username']);
	$password = md5($_POST['password']);
	$password1 = trim($_POST['password1']);
	$phone = trim($_POST['phone']);
	$email = trim($_POST['email']);
	$email1 = trim($_POST['email1']);
	$realname = trim($_POST['realname']);
	$nation = trim($_POST['nation']);
	$nationality = trim($_POST['nationality']);
	$address = trim($_POST['address']);
	$postcode = trim($_POST['postcode']);
	$contact_phone = trim($_POST['contact_phone']);
	$birth = trim($_POST['birth']);
	$education = trim($_POST['education']);

    $registerSQL = "insert into user (id,userName,password,password1,phone,email,email1,realname,nation,nationality,address,postcode,contact_phone,birth,education)  
    values(null,'$username','$password','$password1','$phone','$email','$email1','$realname','$nation','$nationality','$address','$postcode','$contact_phone','$birth','$education')";
    echo $registerSQL;
    $resultregister = mysqli_query($conn,$registerSQL);
    if ($resultregister) {
        echo "注册成功";
        //header('Location:yzm1.html');
    } else {
        echo "注册失败";
    }
   //关闭连接 0000000000
	mysqli_close($conn);
?>