<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   
	<style type="text/css">
		.error{
			color:red;
      font-size: 20px;
		}
	</style>

	<title>Ajax & javascript & jquery</title>
</head>
<body>
  <div class="col-md-8" style="margin-top:100px; margin-left: 300px;">
    <h1 style="color: #002244; font-family: impact;">Create an account</h1>
  	<p id="text"></p>
  	 <form action="index.php" method="post">
       <table>
        <p id="text"></p>
        <p id="message"></p>
        <tr>
          <td>Name</td>
          <td><input type="text" id="name" placeholder="Enter name" class="form-control" name="name">
         </td>
         <td><span> <p class="name_error_text"></p></span></td>
        </tr>
  	 	
  	 	
      <tr>
        <td>Email</td>
        <td><input type="email" id="email" placeholder="Enter email" class="form-control" name="email">
       </td>
       <td><span> <p class="email_error_text"></p></span></td>
      </tr>        
  	 
  	 	<tr>
    <td>Password</td> 
  <td> <input type="password" id="password" placeholder="Enter password number" class="form-control" name="password">
       </td>
       <td><span> <p class="password_error_text"></p></span></td>
    </tr>
       
  	 	
  	 <tr>
      <td>Retype Password</td>
      <td> <input type="password" id="re_password" placeholder="Re enter password number" class="form-control" name="re_password">
      </td> 
      <td><span> <p class="re_password_error_text"></p></span></td>
     </tr>
       
     <tr>
       <td></td>
       <td> <input type="submit" id="submit" value="Submit" style="margin-top: 5px;" class="btn btn-danger"></td>
     </tr>

  	 
      </table>
  	 </form>
 </div>



   
    <script  src="function.js"></script>
    <script  src="bootstrap.min.js"></script>
    <script  src="jquery.min.js"></script>
</body>
</html>