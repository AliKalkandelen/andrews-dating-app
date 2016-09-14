<?php
include 'connection.php';

    $username = $data->username;
    $password = $data->password;
    $firstName = $data->firstName;
    $lastName = $data->lastName;

    $userInfo = $db->query("SELECT username FROM users WHERE username='$username'");
    $userInfo = $userInfo->fetchAll();

      if(count($userInfo) == 1){
        die("err");
      } else {
        $q = "INSERT INTO users (username, password, firstName, lastName) VALUES (:username, :password, :firstName, :lastName)";
        $query = $db->prepare($q);
        $execute = $query->execute(array(
            ":username" => $username,
            ":password" => sha1($password),
            ":firstName"=> $firstName,
            ":lastName" => $lastName
        ));

        echo json_encode($username);
      }

?>
