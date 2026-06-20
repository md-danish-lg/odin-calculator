function showOutput(){

    const systemKeys = ['=', 'clear', 'del']
    let mainContainer = document.querySelector(".main-container")
    let output = document.querySelector(".output")

    mainContainer.addEventListener("click", (e) =>{
        if (e.target.classList.contains = "interface"){
            if (!(systemKeys.includes(e.target.id))){
                output.textContent += " " + e.target.id;
            }
        }
    })


}

showOutput();


