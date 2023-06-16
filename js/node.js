const nodelist=document.body.childNodes;
let text=" ";
for(let i=0;i<nodelist.length;i++){
    text+=nodelist[i].nodeName+"<br";
}
document.getElementById("demo1").innerHTML=text;