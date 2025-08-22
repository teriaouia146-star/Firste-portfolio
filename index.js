function ChangeColor() {
    document.getElementById("java").innerHTML = " a back-end devlopper";
    document.getElementById("java").style.color = "green";
    setTimeout(Wer, 2500);

}

function Wer() {
    document.getElementById("java").innerHTML = " a Fullstack Developer";
    setTimeout(Color, 2500);
}



function Color() {
    document.getElementById("java").innerHTML = " a front-end devlopper";
    document.getElementById("java").style.color = "green";
    setTimeout(ChangeColor, 2500);


}
setTimeout(ChangeColor, 2500);
// -------------------------------------------------------------------------\
let fullname=document.getElementById("name").innerHTML;
let incomplet="";
let i=0;



function Fullname(){
 function Name(){
    
        while(i<fullname.length){
            incomplet+=fullname.charAt(i);
            i++;
            document.getElementById("name").innerHTML=incomplet;
            green();
            return document.getElementById("name").innerHTML

            
        }

}
setInterval(Name,240);
}
setTimeout(Fullname,2400);






function green(){
    document.getElementById("name").style.color="green";
}


