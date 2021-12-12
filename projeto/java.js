function display(id){
    let display = document.getElementById(id).style.display;
    if(display=="none" || display=="")
    document.getElementById(id).style.display="block";
    else
    document.getElementById(id).style.display="none";

}