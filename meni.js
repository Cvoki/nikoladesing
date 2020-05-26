function padajuci(){
    document.getElementById("navigacioni-meni").style.display = "block";
    document.getElementById("hamburger-dugme").style.display = "none";
}
function padajucisklanjanje(){
    document.getElementById("navigacioni-meni").style.display = "none";
    document.getElementById("hamburger-dugme").style.display = "block";
}
var brojacpadanje=0;
function projektipadanje(){
    if(brojacpadanje == 0){
        document.getElementById("projekti-padanje").style.display="block";
        brojacpadanje++;
    }
    else{
        document.getElementById("projekti-padanje").style.display="none";
        brojacpadanje--;
    }
}