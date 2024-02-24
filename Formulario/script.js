const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const span = document.querySelectorAll(".span-required");
const sexo = document.getElementsByName("sexo");
const divSexo = document.querySelector(".sexoClass");

//emailRegex serve pra validar o email
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;


form.addEventListener("submit", (event) => {
    event.preventDefault();
    nameValidation();
    emailValidation();
    senhaValidation();
    senhaComparacao();
    sexoValidation();
});

function setError(index){
    campos[index].style.border = "1px solid #a02525";
    span[index].style.display = "block";
    span[index].style.color = "#a02525";
}

function noneError(index){
    span[index].style.display = "none";
    campos[index].style.border = "none";
}

function nameValidation(){
    if(campos[0].value.length < 3){
        setError(0);
    }else{
        noneError(0);
        pessoa.nome = campos[0].value;
    }
    
}

function emailValidation(){
    if(emailRegex.test(campos[1].value)){
        noneError(1);
        pessoa.email = campos[1].value;
    }else{
        setError(1);
    }
}

function senhaValidation(){
    if(campos[2].value.length < 8){
        setError(2);
    }else{
        noneError(2);
    }
}
function senhaComparacao(){
    if(campos[3].value === campos[2].value){
        noneError(3);
        
    }else{
        setError(3);
    }
}

function sexoValidation(){
    if(sexo[0].checked || sexo[1].checked || sexo[2].checked){
        span[4].style.display = "none";
        span[4].style.color = "none";
        divSexo.style.border = "none";
    }else{
        span[4].style.display = "block";
        span[4].style.color = "#a02525";
        divSexo.style.border = "1px solid #a02525";
    }
}
