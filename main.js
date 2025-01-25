console.log('password')
const passwordinput = document.getElementById('password');
const toggleButton = document.getElementById('togglepassword');

toggleButton.addEventListener("click",function(){
    if (passwordinput.type === 'password') {
        passwordinput.type ='text';
        toggleButton.textContent = 'password';
    } else {
        passwordinput.type = 'password';
        toggleButton.textContent = 'Показать';
    }

});