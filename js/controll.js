let emailRegex = /\S+@\S+\.\S+/;
let nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ-']+$/;
let nome = document.getElementById("name");
let email = document.getElementById("email");
console.log(nome)

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nome.value == '') {
    alert("Nome error");
    return;
  }


});



