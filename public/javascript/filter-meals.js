// Add event listeners and callback functions here for diet filter buttons

<<<<<<< HEAD
const filterMeals = () => {
    
}
    document.querySelector('filter-button').addEventListener('click', filterMeals);
=======
const buttons=document.querySelectorAll(".filter-button");

    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", e => {
            console.log("buttonclicked", e.target.innerText);
        }
        )
    }
>>>>>>> f4281a13db017283605fae88a1c3ca17245bb496

