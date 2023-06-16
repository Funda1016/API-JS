function Ekle(){
    const i=document.getElementById("myDiv").value;
    const e=document.createElement("p");
    const n=document.createTextNode();
    e.appendChild(n);
    document.getElementById("myDiv").appendChild(e);
}