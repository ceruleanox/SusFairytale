// matches div id in index.html
var storyStates = {
    1: 'home',
    2: 'intro',
    3: 'reef',
    4: 'scavenger',
    5: 'soup',
    6: 'dam',
    7: 'solve',
    8: 'end'
}


let setState = function(storyState){

    // edit number based on number of storyStates
    for(var i = 1; i <= 8; i++){
        var stateText = storyStates[i];
        // console.log("stateText" + stateText);
        if(storyState === i){
            document.getElementById(stateText).hidden = false;
        }else{

            document.getElementById(stateText).hidden = true;
        }
        
    }

    // modify number depending on where end is in storyStates
    if(storyState === 8){
        document.getElementsByClassName('end-box').item(0).style.display = "visible";
        document.getElementsByClassName('end-box').item(0).style.visibility = "visible";
    }
}

// change starting page by storystate; you do not always start at page 1
let currentState = 1;

let initialSetup = function(){
    
    setState(currentState);
    
}
initialSetup();