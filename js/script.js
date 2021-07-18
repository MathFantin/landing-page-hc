const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;

    if (name == "" || email == "") alert("Favor preencher os dados")
    else {
        localStorage.setItem("dataUser", JSON.stringify({ "name": name, "email": email }));

        setTimeout(() => {
            let formContainer = document.querySelector(".form-container");
            formContainer.innerHTML = "<p id='retorno'>Verifique sua caixa de entrada para confirmar a inscrição.</p>";
        }, 1000);
    }

});