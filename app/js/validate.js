// function validateEmail(email)
// {
// var mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// if(email.match(mailFormat))
//     return true;
// else
//     return false;
// }

const validateEmail = (email=>email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))

document.querySelectorAll('.validate-email').forEach(el => el.addEventListener('input', function(e) {
    if(validateEmail(this.value)){
        e.target.style.backgroundColor = "white"
    }else{
        e.target.style.backgroundColor = "red"
    }
}
    ))


    