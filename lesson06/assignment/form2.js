function validateForm() {
    var nameValue = document.forms["factForm"]["full-name"].value;
    var eMailValue = document.forms["factForm"]["email"].value;
    var textArea1Value = document.forms["factForm"]["textArea1"].value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (nameValue == "") {
        alert("Name must be filled out");
        return false;
    } else if (eMailValue == "") {
        alert("Email must be provided");
        return false;
    } else if (textArea1Value == "") {
        alert("Add a fun fact in the text area");
        return false;
    } else alert("Thanks for submitting your fun fact!");

}