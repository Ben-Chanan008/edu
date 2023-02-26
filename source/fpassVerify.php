<?php
$data = [];
$errors = [];
include './session.php';
// print_r($_POST);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);
if (!empty(($_POST))) {
	// if ($_POST['name']) {
	//     $data['redirect'] = './forgot-pass.php';
	// }
	if (!empty($_POST['email']) && !empty($_POST['radio'])) {
		$q = $conn->query("SELECT * FROM user_info WHERE email = '$email'");
		if ($q->num_rows) {
			http_response_code(200);
			$data['redirect'] = './next-verify.php';
			$data['message'] = 'Processing <i class="fa fa-spin fa-spinner-third"></i>';
		} else {
			http_response_code(422);
			$data['error'] = 'Not a valid email';
		}
	} else {
		if (empty($_POST['email'])) {
			http_response_code(422);
			$data['error'] = 'Please put in a mail';
		} else {
			if (empty($_POST['radio'])) {
				http_response_code(422);
				$data['errors']['emailVal'] = 'Please select a verification method.';
			}
		}
	}
	if (isset($_POST['submit'])) {
		if ($_POST['radio'] === 'otp') {
			http_response_code(200);
			$data['next'] = 'Please check your <i class="fas fa-phone"></i> for Code';
			//			print_r($_POST['radio']);
			//			exit();
		}
	}
	echo json_encode($data);
}
