<?php

  $db = new PDO("mysql:host=localhost;dbname=phoneapp", 'root', 'apple360');
  $data = json_decode(file_get_contents("php://input"));
?>
