

// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Regex Validation                                                     //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

{
  const hiddenElems = document.querySelectorAll('.hidden');
  hiddenElems.forEach((el) => observer.observe(el));

  var nameRegex = /^[a-zA-Z\s]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var OutputMessage = "";

  function validateName() {
    var Name = document.getElementById("Name").value;
    if (!nameRegex.test(Name)) {
      console.log("Name is invalid");
      return false;
    }
    return true;
  }


  function validateEmail() {
    var Email = document.getElementById("Email").value.trim();
    if (!emailRegex.test(Email)) {
      console.log("Email is invalid");
      return false;
    }
    return true;
  }

  function validateType() {

    var Type = document.getElementById("InvestorType").value;
    if (Type == "None") {
      console.log("Type is none");
      return false;
    }
    return true;
  }

  function FormValidation() {
    OutputMessage = "";
    var isValidName = validateName();
    var isValidEmail = validateEmail();
    var isValidType = validateType();

    if (!isValidName || !isValidEmail || !isValidType) {
      OutputMessage += "Message failed to send\nplease make sure you filled out all the fields correctly and try again";
      alert(OutputMessage);
    }
    else {
      sendMail();
      // alert("Message sent successfully!");
      // document.getElementById("Name").value = "";
      // document.getElementById("Surname").value = "";
      // document.getElementById("Email").value = "";
      // document.getElementById("Message").value = "";
      // document.getElementById("InvestorType").value = "None";
    }
  }
}

// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Sending Emails                                                       //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

{
  const serviceID = "service_e3b9w23";
  const templateID = "template_rphbnjv";

  function sendMail() {
    var params = {
      name: document.getElementById("Name").value,
      email: document.getElementById("Email").value,
      message: document.getElementById("Message").value,
      type: document.getElementById("InvestorType").value
    }

    emailjs.send(serviceID, templateID, params)
      .then(
        res => {
          console.log("success", res.status);
          alert("Message sent successfully!");
          document.getElementById("Name").value = "";
          document.getElementById("Email").value = "";
          document.getElementById("Message").value = "";
          document.getElementById("InvestorType").value = "None";

          AddEmail();
        }
      )
      .catch(
        err => {
          console.log("failed", err);
        }
      )
  }

}