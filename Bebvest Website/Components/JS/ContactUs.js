// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Load Animation                                                       //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

const observer = new IntersectionObserver((entries) => 
{
  entries.forEach((entry) => 
  {
    if (entry.isIntersecting) 
    {
      entry.target.classList.add('show');
    } 
    else 
    {
      entry.target.classList.remove('show');
    }
  })
});

// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Regex Validation                                                     //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

{
  const hiddenElems = document.querySelectorAll('.hidden');
  hiddenElems.forEach((el) => observer.observe(el));

  var nameRegex = /^[a-zA-Z]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var OutputMessage = "";

  function validateName() 
  {
    var Name = document.getElementById("Name").value.trim();
    var Surname = document.getElementById("Surname").value.trim();
    if (!nameRegex.test(Name) || !nameRegex.test(Surname)) 
    {
      OutputMessage += "Invalid Name or Surname!\nOnly letters (lowercase or uppercase) are allowed!\n"
      return false;
    }
    return true;
  }

  function validateEmail() {
    var Email = document.getElementById("Email").value.trim();
    if (!emailRegex.test(Email)) 
    {
      OutputMessage += "Invalid email address!\n";
      return false;
    }
    return true;
  }

  function OnSubmit() 
  {
    OutputMessage = "";
    var isValidName = validateName();
    var isValidEmail = validateEmail();

    if (!isValidName || !isValidEmail) 
    {
      OutputMessage += "Message failed to send!";
      alert(OutputMessage);
      event.preventDefault();
    }
    else
    {
      alert("Message sent successfully!");
    }
  }
}

