let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");


setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

window.scrollTo(0, 0);

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

let actie = document.getElementById("checkbox-actie");
let sport = document.getElementById("checkbox-fifa");
let racen = document.getElementById("checkbox-formula1");

actie.onchange = function(){
    if(actie.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "actie"){    
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "actie"){    
                allGames[i].style.display = "none";
            }
        }
    }
}

sport.onchange = function(){
    if(sport.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "sport"){    
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "sport"){    
                allGames[i].style.display = "none";
            }
        }
    }
}

racen.onchange = function(){
    if(racen.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "racen"){    
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "racen"){    
                allGames[i].style.display = "none";
            }
        }
    }
}