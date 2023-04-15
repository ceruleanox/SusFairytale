var cracksClicked = 0;

function removeDamBtn() {
    document.getElementById("crack1").style.display = "none";
}

function showDamBtn() {
    cracksClicked++; 
    // once clicked cracks enough, show button
    if (cracksClicked == 20) {
      document.getElementById('dam-btn').style.visibility = "visible";      
    }
}