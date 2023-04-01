var body = document.querySelector("body");
var divFormulario = document.createElement("div");
var divCreate = document.createElement("div");
var divSign = document.createElement("div");
var form = document.createElement("form");
var h2 = document.createElement("h2");

divFormulario.setAttribute("class", "formulario");
body.appendChild(divFormulario);
divFormulario.appendChild(form);
divCreate.setAttribute("class","create");
form.appendChild(divCreate);
divSign.setAttribute("class", "sign");
form.appendChild(divSign);

h2.innerText = "Crie uma conta";
divCreate.appendChild(h2);

var labelCreate = document.createElement("label");
labelCreate.innerText = "Use seu e-mail para se cadastrar";
divCreate.appendChild(labelCreate);

var inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("id", "name");
inputName.setAttribute("placeholder", "Nome");
divCreate.appendChild(inputName);

var inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("placeholder", "E-mail");
divCreate.appendChild(inputEmail);

var inputSenha = document.createElement("input");
inputSenha.setAttribute("type", "password");
inputSenha.setAttribute("id", "senha");
inputSenha.setAttribute("placeholder", "Senha");
divCreate.appendChild(inputSenha);

var botaoSignUp = document.createElement("button");
botaoSignUp.setAttribute("id", "botaoSignUp");
botaoSignUp.setAttribute("type", "submit");
botaoSignUp.setAttribute("onclick", "SignUp()"); 
botaoSignUp.innerText = "Cadastrar-se";
divCreate.appendChild(botaoSignUp);

var h2SignIn = document.createElement("h2");
h2SignIn.innerText = "Entrar";
divSign.appendChild(h2SignIn);

var labelSignIn = document.createElement("label");
labelSignIn.innerText = "Use sua conta";
divSign.appendChild(labelSignIn);

var inputEmailSignIn = document.createElement("input");
inputEmailSignIn.setAttribute("type", "email");
inputEmailSignIn.setAttribute("id", "EmailSignIn");
inputEmailSignIn.setAttribute("placeholder", "E-mail");
divSign.appendChild(inputEmailSignIn);

var inputSenhaSignIn = document.createElement("input");
inputSenhaSignIn.setAttribute("type", "password");
inputSenhaSignIn.setAttribute("id", "senhaSignIn");
inputSenhaSignIn.setAttribute("placeholder", "Senha");
divSign.appendChild(inputSenhaSignIn);

var botaoSignIn = document.createElement("button");
botaoSignIn.setAttribute("id", "botaoSignIn");
botaoSignIn.setAttribute("type", "submit");
botaoSignIn.setAttribute("onclick", "SignIn()");
botaoSignIn.innerText = "Entrar";
divSign.appendChild(botaoSignIn);


var a = document.createElement("a");
a.innerText = "Esqueceu sua senha?";
a.setAttribute("href", "https://www.instagram.com/henrygbriell/");
divSign.appendChild(a);

var divIcones = document.createElement("div");
var footer = document.createElement("footer");
footer.innerText = "Henry Gabriel";
body.appendChild(footer);
footer.appendChild(divIcones);

var linkLinkedin = document.createElement("a");
linkLinkedin.setAttribute("href", "https://www.linkedin.com/in/henry-gabriel-13b705208/");
divIcones.appendChild(linkLinkedin);

var iconeLinkedin = document.createElement("img");
iconeLinkedin.setAttribute("src", "imagens/icone-linkedin.png");
iconeLinkedin.setAttribute("alt", "incone-linkedin");
linkLinkedin.appendChild(iconeLinkedin);

var linkInsta = document.createElement("a");
linkInsta.setAttribute("href", "https://www.instagram.com/henrygbriell/");
divIcones.appendChild(linkInsta);

var iconeInsta = document.createElement("img");
iconeInsta.setAttribute("src", "imagens/icone-instagram.png");
iconeInsta.setAttribute("alt", "incone-Insta");
linkInsta.appendChild(iconeInsta);

var linkGitHub = document.createElement("a");
linkGitHub.setAttribute("href", "https://github.com/Henrygbriel");
divIcones.appendChild(linkGitHub);

var inconeGit = document.createElement("img");
inconeGit.setAttribute("src", "imagens/icone-github.png");
inconeGit.setAttribute("alt", "icone-github");
linkGitHub.appendChild(inconeGit);