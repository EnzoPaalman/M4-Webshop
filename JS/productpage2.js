let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");

setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

window.scrollTo(0, 0);

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

let priceFilter = document.getElementById("price-filter");

priceFilter.onchange = function(){
    let selectedValue = priceFilter.value;
    if(selectedValue !== ""){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === selectedValue){    
                allGames[i].style.display = "block";
            }
            else{
                allGames[i].style.display = "none";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            allGames[i].style.display = "block";
        }
    }
};