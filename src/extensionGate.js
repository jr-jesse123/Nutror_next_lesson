//controla o estado de ligado e desligado da extensãos

function ativar_desativar_extensao() {
    let isActive = localStorage.getItem("nutrorState") != "unActive"

    console.log(isActive)
    
    if (isActive) {
        localStorage.setItem("nutrorState", "unActive"),
        console.log("desativado")
    }
    else
    {
        localStorage.setItem("nutrorState", "")
        console.log("ativado")

    }
}