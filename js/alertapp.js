function Myfunction(){
    let text=prompt("lutfen isminizi giriniz");
    //prompt input kismini olusturuyor ve label yzi oluyor
    let x;
    //prompt input veriyor
    if(text==null || text==" "){
        x="iptal edildi";
    }else{
        x="merhaba"+text+"hosgeldin";
    }
  document.getElementById("demo1").innerHTML=x;
}