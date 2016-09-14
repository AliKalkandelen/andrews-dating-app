<?php
include 'connection.php';

$id = $data->id;
$message = $data->message;


if(is_null($data)){
  // GET THE MESSAGES
  $messageInfo = $db->query("SELECT messages.messageid, users.username, messages.message FROM messages INNER JOIN users ON messages.id=users.id ORDER BY messages.messageid");
  $messageInfo = $messageInfo->fetchAll();

  if(count($messageInfo) > 0){
    echo json_encode($messageInfo);
  } else {
    echo "No Messages";
  }
}else{
  //POST A MESSAGE
  $q = "INSERT INTO messages (id, message) VALUES (:id, :message)";
  $query = $db->prepare($q);
  $execute = $query->execute(array(
      ":id" => $id,
      ":message" => $message
  ));

  echo "WORKING";
}



?>
