var cracksClicked = 0;



function showDamBtn() {
    cracksClicked++; 
    // once clicked cracks enough, show button
    if (cracksClicked == 5) {
      document.getElementById('dam-btn').style.visibility = "visible";      
    }
}