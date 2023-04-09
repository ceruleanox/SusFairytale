var storyStates = {
    1: 'home',
    2: 'intro',
    3: 'end'
}


let setState = function(storyState){


    // edit number based on number of storyStates
    for(var i = 1; i <= 3; i++){
        var stateText = storyStates[i];
        // console.log("stateText" + stateText);
        if(storyState === i){
            document.getElementById(stateText).hidden = false;
        }else{

            document.getElementById(stateText).hidden = true;
        }
        
    }
    // modify number depending on where end is in storyStates
    if(storyState === 3){
        document.getElementsByClassName('end-box').item(0).style.display = "visible";
        document.getElementsByClassName('end-box').item(0).style.visibility = "visible";
    }
}

let currentState = 1;
let initialSetup = function(){
    
    setState(currentState);
    
}
initialSetup();