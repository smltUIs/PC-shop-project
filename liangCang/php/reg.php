<?php
//解决乱码问题
header("Content-type: text/html; charset=utf-8");
$servername = "localhost";
$username = "root";
$password='root';
$dbname='liangcang';
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn -> connect_error) {
	die("连接失败: " . $conn -> connect_error);
}

//接收数据
	$phone = $_POST['phone'];
	$password = $_POST['password'];

//执行sql语句
//先判断数据库中是否存在
$sqlstr = "select * from user where phone='$phone'";
$result = $conn->query($sqlstr);
if ($result->num_rows > 0) {//此行判断行数
	echo "2";//如果行数大于0了代表数据库中有  返回值是2   ajax中的成功函数date 就是php中echo的值
} else {
	$sqlstr2 = "insert into user values('$phone','$password')";
	$result2 = $conn->query($sqlstr2);
	//判断是否注册成功
	if ($result2) {
		echo "1";
	} else {
		echo "0";
	}
}
$conn->close();
?>