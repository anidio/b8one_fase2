const init = () => {
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const entrar = document.getElementById('enviar');

    entrar.addEventListener('click', (event) =>{
        event.preventDefault();

        fetch("https://test-final.b8one.academy/login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: senha.value 
            })
        }).then((response) => {
            console.log(response)
            return response.json();
        }).then((data) =>{
            const emailError = document.querySelector('.error__email')
            data == true ? window.location.href = "index.html" : emailError.getElementsByClassName.display = "block"
            setTimeout(() => {
                emailError.style.display = "none" 
            }, 5000)
        })
    })
}

window.onload = init