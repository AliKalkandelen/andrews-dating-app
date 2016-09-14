<?php
include 'connection.php';


  $password = sha1($data->password);
  $username = $data->username;
  $userInfo = $db->query("SELECT * FROM users WHERE username='$username' AND password='$password'");
  $userInfo = $userInfo->fetchAll();

  if(count($userInfo) == 1){
    echo json_encode($userInfo[0]);
  } else {
    echo "err";
  }



?>
