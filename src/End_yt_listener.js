var extensaoAtiva = true;

function ativar_desativar_extensao() {
    extensaoAtiva = !extensaoAtiva
    console.log(extensaoAtiva)
}

let endVideoElement
let velocidadeAjustada = false
let velocidadeAnterior =  localStorage.getItem('Velocidade') * 1
if (!velocidadeAnterior) {
    velocidadeAnterior = 3
}


setInterval(() => {
    console.log(extensaoAtiva)
    if (extensaoAtiva) {
        ListenForVideoEnding(endVideoElement)
    }
}, 1000);

function ListenForVideoEnding(endVideoElement) {
   
    if (!endVideoElement) {
         endVideoElement =  document.getElementsByClassName("html5-endscreen")[0]
    }
   
    if (endVideoElement) {
        if (!velocidadeAjustada) {
            AjustarVelocidade(velocidadeAnterior) 
        }
        
        let isVisible = getComputedStyle(endVideoElement).display == "block"
        if (isVisible) {                  
                ArmazenarVelocidade()
                chrome.runtime.sendMessage({command: "proximo"}, function(response) {});
            }
    } 
}

function AjustarVelocidade(indice){
    let engrenagemNode = document.evaluate("//*[@id='movie_player']/div[27]/div[2]/div[2]/button[2]", document, null    , XPathResult.FIRST_ORDERED_NODE_TYPE)
    engrenagemNode.singleNodeValue.click()
    let velocidadeNode = document.evaluate("//*[@id='ytp-id-17']/div/div/div[2]/div[2]", document, null    , XPathResult.FIRST_ORDERED_NODE_TYPE)
    velocidadeNode.singleNodeValue.click()

    let velocidadesNodes = document.evaluate("//*[@id='ytp-id-17']/div/div[2]", document, null    , XPathResult.FIRST_ORDERED_NODE_TYPE)
    let opcoesVelçocidades = velocidadesNodes.singleNodeValue.getElementsByClassName("ytp-menuitem")
    opcoesVelçocidades[indice].click()
    engrenagemNode.singleNodeValue.click()
    
    velocidadeAjustada = !velocidadeAjustada
}

function ArmazenarVelocidade() {
    let actualSpeed = document
        .evaluate(
            "//*[@id='ytp-id-17']/div/div/div[2]/div[3]",
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE)
        .singleNodeValue.textContent

        let indiceVelocidade
        switch (actualSpeed) {
            case "0.25":
                indiceVelocidade =  0
                break;
            case "0.5":
                indiceVelocidade =  1
                break;
            case "0.75":
                indiceVelocidade =  2
                break;
            case "Normal":
                indiceVelocidade =  3
                break;
            case "1.25":
                indiceVelocidade =  4
                break;
            case "1.5":
                indiceVelocidade =  5
                break;
            case "1.75":
                indiceVelocidade =  6
                break;
            case "2":
                indiceVelocidade =  7
                break;
            
            default:
                console.log("velocidade desconhecida")
                break;
        }

    localStorage.setItem('Velocidade', indiceVelocidade)
}
