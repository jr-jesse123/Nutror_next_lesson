let endVideoElement
 

setInterval(() => {
    console.log("iniciando pesquisa")    
    ListenForVideoEnding(endVideoElement)
}, 500);

function ListenForVideoEnding(endVideoElement) {
    
    if (!endVideoElement) {
         endVideoElement =  document.getElementsByClassName("html5-endscreen")[0]
    }
//se o elemento foi encontrado e 
    if (endVideoElement) {
        console.log("elemento de endVideo encontrado")
        
        let isVisible = getComputedStyle(endVideoElement).display == "block"
        if (isVisible) {
                console.log("elemento endvideo visível")
                  
                chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
                    console.log(response);
                  });
            }
    } 
}
