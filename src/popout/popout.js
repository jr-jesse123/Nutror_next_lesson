let toogle = document.getElementById('toogle')
toogle.addEventListener("click", ativar_desativar)

function ativar_desativar(){
    
    //TODO: conseguir desativar a extensão
    // chrome.tabs.executeScript({code: "console.log(document.getRootNode())"});
    chrome.tabs.executeScript({code: "ativar_desativar_extensao()"});

}
