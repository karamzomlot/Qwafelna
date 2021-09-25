// Auto Focus in OTP Page
function fillOTP(current, next) {
    if(current.value.length){
        document.getElementById(next).focus();
    }
}