function validateForm(){
  //validate name input
  if(document.forms[0].fullName.value == ""){
    document.getElementById("fullName").focus();
    alert("You must enter your name");
    return false;
  } //end if statement for name input

  // validate email input
  if(document.forms[0].email.value == "") {
    document.getElementById("email").focus();
    alert("You must enter an email address");
    return false;
  } //end of if statement for email input

  if(document.forms[0].order.value == "") {
    document.getElementById("email").focus();
    alert("You must enter a detailed description of your order for a quote.");
    return false;
  } //end of if statement for order input

  return true;
} //end of validateForm function


//Function to validate the comments form
function validateFormTwo(){
  if(document.forms[1].comments.value == ""){
    document.getElementById("comments").focus();
    alert("You must enter some comments before submission.");
    return false;
  } else{
    return true;
  }
}
