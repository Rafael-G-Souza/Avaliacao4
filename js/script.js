var telaMenorBotao = document.getElementById("telaMenorBotao")
var telaMenor = document.getElementById("telaMenor")
var fecharTelaMenor = document.getElementById("fecharTelaMenor")

telaMenorBotao.addEventListener("click", showMenu)
fecharTelaMenor.addEventListener("click", closeMenu)

function showMenu(){
    telaMenorBotao.style.display = "none"
    telaMenor.style.display = "flex"
    telaMenor.style.flexFlow = "column"
}
function closeMenu(){
    telaMenor.style.display = "none"
    telaMenorBotao.style.display = "flex"

}
