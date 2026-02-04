const apple=document.getElementById("apple");
const banana=document.getElementById("banana");
const graps=document.getElementById("graps");
const appl=document.getElementById("appl");
const banna=document.getElementById("banna");
const grps=document.getElementById("grps");
const button=document.getElementById("button");
const check=document.getElementById("check");
const radio=document.getElementById("radio");
button.onclick=function(){
    if(apple.checked){
        check.textContent="your selected apple";
    }
    else if(banana.checked){
        check.textContent="your selected a banana";
    }
    else if(graps.checked){
        check.textContent="your selected graps";
    }
    else{
        check.textContent="your not selected!";
    }
    if(appl.checked){
        radio.textContent="your selected apple";
    }
    else if(banna.checked){
        radio.textContent="your selected banana";
    }
    else if(grps.checked){
        radio.textContent="your selected graps";
    }
    else{
        radio.textContent="your not selected!";
    }
}

