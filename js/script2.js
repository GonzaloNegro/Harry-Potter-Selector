const casa = document.querySelector('#casa');
const search = document.querySelector('#search');

search.addEventListener("click", ()=>{
    casa.style.visibility = "visible";
    search.style.visibility = "hidden";
    casa.innerHTML = "Mmmm..."
    setTimeout(() => {
        casa.innerHTML = `Tu casa será: <br><h1>${sortear()}</h1>`;
    }, 2000);
})

function sortear(){
    var aleatorio = Math.floor(Math.random()*10);

    if(aleatorio >= 8){
        aleatorio = "Gryffindor"
    } else if (aleatorio >= 6){
        aleatorio = "Ravenclaw";
    }else if (aleatorio >= 3){
        aleatorio = "Hufflepuff";
    }else{
        aleatorio = "Slytherin";
    }

    return aleatorio;
}