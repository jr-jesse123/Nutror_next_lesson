


//iframe do youtube 
//obter o elemento de fim de vídeo do yotuube
let endVideoElement =  document.getElementsByClassName("html5-endscreen")[0]


//iframe principal -> clica no botão do próximo vídeo
document.getElementsByClassName("button-container next false")[0].click()

//Obtem a velocidade de reprodução atual
let actualSpeed = document.evaluate("//*[@id='ytp-id-17']/div/div/div[2]/div[3]",document,null, XPathResult.FIRST_ORDERED_NODE_TYPE)
                                                                                                            .singleNodeValue.textContent

function AjustarVelocidade(indice){
    let engrenagemNode = document.evaluate("//*[@id='movie_player']/div[27]/div[2]/div[2]/button[2]", document, null    , XPathResult.FIRST_ORDERED_NODE_TYPE)
    engrenagemNode.singleNodeValue.click()
    let velocidadeNode = document.evaluate("//*[@id='ytp-id-17']/div/div/div[2]/div[2]", document, null    , XPathResult.FIRST_ORDERED_NODE_TYPE)
    velocidadeNode.singleNodeValue.click()

    let velocidadesNodes = document.evaluate("//*[@id='ytp-id-17']/div/div[2]", document, null    , XPathResult.FIRST_ORDERED_NODE_TYPE)
    let opcoesVelçocidades = velocidadesNodes.singleNodeValue.getElementsByClassName("ytp-menuitem")
    opcoesVelçocidades[indice].click()
    engrenagemNode.singleNodeValue.click()
}



//disparar autoplay
function DispararPlayer() {
    let playerElement = document.getElementsByTagName("iframe")[0]
    let allows = playerElement.getAttribute("allow")
    playerElement.setAttribute("allow", allows + ";autoplay") 
    let src = playerElement.getAttribute("src")
    playerElement.setAttribute("src", src + "&autoplay=1")        
}


