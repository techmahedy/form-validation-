$(document).ready(function(){

     $("#submit").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var re_password = $("#re_password").val();

    if(name.length == "" || email.length == "" || password.length == "" || re_password.length == ""){
        $("#message").html("please fill out this field first").fadeIn();
        $("#message").addClass("error");
         return false;
    }else{  
        $.ajax({
          type : 'POST',
          url  : 'insert.php',
          data : {name:name,email:email,password:password,re_password:re_password},
          success : function(feedback){
             $("#text").html(feedback);
           }
          });     
       }
    });


    $(".name_error_text").hide();
    $(".email_error_text").hide();
    $(".password_error_text").hide();
    $(".re_password_error_text").hide();

    var error_name = false;
    var error_email = false;
    var error_password = false;
    var error_re_password = false;

    $("#name").focusout(function(){
      check_name();
    });
    $("#email").focusout(function(){
      check_email();
    });
    $("#password").focusout(function(){
      check_password();
    });
    $("#re_password").focusout(function(){
     check_re_password();
    });

   function check_name(){
    $("#message").hide(); 
    var name_length = $("#name").val().length;
    if(name_length < 5 || name_length > 20){
         $(".name_error_text").html("Should be between 5-20 characters");
         $(".name_error_text").show().addClass("error");
         error_name = true;
      }else{
         $(".name_error_text").hide();
      }
    }

    function check_email(){
        $("#message").hide(); 
    var pattern = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    if(pattern.test($("#email").val())){
         $(".email_error_text").hide();       
      }else{
         $(".email_error_text").html("Invalid email address");
         $(".email_error_text").show().addClass("error");
         error_email = true;
      }
    }

    function check_password(){
        $("#message").hide(); 
    var password_length = $("#password").val().length;
    if(password_length < 8 ){
         $(".password_error_text").html("Should be at least 8 characters");
         $(".password_error_text").show().addClass("error");
         error_password = true;
      }else{
         $(".password_error_text").hide();
      }
    }

    function check_re_password(){
        $("#message").hide(); 
    var password = $("#password").val();
    var retype_password = $("#re_password").val();
    if(password != retype_password){
         $(".re_password_error_text").html("Password don't match");
         $(".re_password_error_text").show().addClass("error");
         error_re_password = true;
      }else{
         $(".re_password_error_text").hide();
      }
    }
  
});








 
