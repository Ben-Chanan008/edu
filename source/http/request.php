<?php
include '../db/database.php';
$data = [];

if (!empty($_POST)) {
	http_response_code(422);
	$data['message'] = 'Given data is invalid.';
	$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	$phone_number = filter_input(INPUT_POST, 'phone_number', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	
	if (!empty($name) && !empty($email) && !empty($password) && !empty($phone_number)) {
		$statement = $conn->query("SELECT * FROM user_info WHERE user_name = '$name'");
		$statement_email = $conn->query("SELECT * FROM user_info WHERE email = '$email'");
		if (!$statement->num_rows && !$statement_email->num_rows) {
			$hashed = password_hash($password, PASSWORD_DEFAULT);
			$sql = "INSERT INTO user_info(user_name, password, phone_number, email) VALUES('$name', '$hashed', '$phone_number', '$email')";
			if ($query = mysqli_query($conn, $sql)) {
				$data['message'] = 'Registration Successful.<br><i class="fa fa-spin fa-spinner-third"></i> Please wait....';
				$data['redirect'] = './edu.php';
				http_response_code(200);
			} else {
				$data['message'] = 'Error occured';
			}
		} else {
			$data['message'] = 'User Exists';
			if ($statement->num_rows)
				$data['errors']['nameValid'] = 'Username Already exits <a href="./login.php" style="text-decoration: underline; color:#000;">Log in</a>';
			if ($statement_email->num_rows)
				$data['errors']['emailValid'] = 'Email has an account already <a href="./login.php" style="text-decoration: underline; color:#000;">Log in</a>';
		}
	} else {
		if (empty($name))
			$data['errors']['nameValid'] = 'Plese fill in field';
		if (empty($email))
			$data['errors']['emailValid'] = 'Plese fill in field';
		if (empty($phone_number))
			$data['errors']['phoneValid'] = 'Plese fill in field';
		if (empty($password))
			$data['errors']['passwordValid'] = 'Plese fill in field';
		$data['message'] = 'Please fill in all fields';
	}
}
echo json_encode($data);
