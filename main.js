var email = document.getElementById("email");

var btn = document.getElementById("btn");

var errorTxt = document.getElementById("show-error");


btn.addEventListener("click", myFunction);

function myFunction() {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email.value) == false) 
        {
       errorTxt.style.display = "block";
       email.classList.add("show");
        } else{
            errorTxt.style.display = "none";
            email.classList.remove("show");
        }
}
