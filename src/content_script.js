
document.getElementsByClassName("button-container next false")[0].click()

setTimeout(() => {  DispararPlayer(); }, 1500); //TODO: corrigir esta espera para que reaja ao estado do eleemnto ao in´ves de um segundo fechado 

function DispararPlayer() {
    let playerElement = document.getElementsByTagName("iframe")[0]
    let allows = playerElement.getAttribute("allow")
    playerElement.setAttribute("allow", allows + ";autoplay") 
    let src = playerElement.getAttribute("src")
    playerElement.setAttribute("src", src + "&autoplay=1")        
}
