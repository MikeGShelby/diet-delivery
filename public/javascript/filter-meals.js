// Add event listeners and callback functions here for diet filter buttons

const buttons=document.querySelectorAll(".filter-button");



    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", e => {
            console.log("buttonclicked", e.target.innerText);
        }
        )
    }

