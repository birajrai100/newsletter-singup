

const form = document.querySelector("#form").addEventListener("submit", validate);
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const email = document.querySelector("#email");
const error = document.querySelector("#span");
const success = document.querySelector("#success");
success.addEventListener("click", home);

function validate(e) {
    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/
    if (!(email.value.match(regex))) {
        e.preventDefault()
        error.classList.remove("hide");
        email.classList.add("errorborder");
        email.classList.add("colr");
    }
    else {
        success.classList.remove("hide");
        email.classList.remove("errorborder");
        section1.classList.add("hide");
        section2.classList.add("hide");

        error.classList.add("hide");

    }
};

function home() {
    section1.classList.remove("hide");
    section2.classList.remove("hide");
    success.classList.add("hide");
    error.classList.add("hide");
}
