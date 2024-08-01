// ini javascript

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const address = document.forms["message-form"]["address"].value;
    const gender =document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || address =="" || gender =="" || messages =="") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }
    setSenderUI(name, address, gender, messages);
    return false;

}
 function setSenderUI(name, address, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-address").innerHTML = address;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
 }