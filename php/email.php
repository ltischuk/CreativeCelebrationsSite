<?php

	function inputWithFallback($ary,$key,$fallback = NULL) {
	    $result=NULL;
	    if(! is_array($ary)) { return $result; }
	    if(array_key_exists($key,$ary)){
	       $result = htmlspecialchars(trim($ary[$key]));
	    } elseif ($fallback != NULL) {
	       if(array_key_exists($fallback,$ary)) {
	            $result = htmlspecialchars(trim($ary[$fallback]));
	       }
	    }
	    return $result;
	}

 	$resultHTML = "success";
	$email = inputWithFallback($_POST,'email');
  $subject = inputWithFallback($_POST,'subject');
  $message = inputWithFallback($_POST,'message');
  $headers = "From: " . $email ."\r\nReply-To: creativecelebrationsfl@gmail.com\r\nReturn-Path: creativecelebrationsfl@gmail.com\r\n";

  //send email
	$result = mail("creativecelebrationsfl@gmail.com", "$subject", $message, $headers);

	if(!$result){
        http_response_code (403);
        $resultHTML = "Error 403: Forbidden";
    }else{
		http_response_code (200);
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
</head>
<body>
<?php echo $resultHTML;?>
</body>
</html>
