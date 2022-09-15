let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b3=document.getElementById('b3');
let i2=document.getElementById('i2');
let i3=document.getElementById('i3');
let i4=document.getElementById('i4');
let t1=document.getElementById('t1');
let t2=document.getElementById('t2');
let ss=document.getElementById('ss');
let datan;
if(localStorage.data !=null){
    datan=JSON.parse(localStorage.data);
}
else{
let datan=[];
}
b1.onclick = function() {
    let newdata = {
        username:i1.value,
        password:i2.value
    }
   datan.push(newdata);
  localStorage.setItem('data',JSON.stringify(datan));
  t1.style.display='none';
  t2.style.display='block';
  b3.style.display='none';

}
b3.onclick=function(){

    t1.style.display='none';
    t2.style.display='block';
    b3.style.display='none';

}
b2.onclick=function(){

    for(let i=0;i<datan.length;i++){
        if(datan[i].username.includes(i3.value)==true &&datan[i].password.includes(i4.value)==true){
     t2.style.display='none';
     sm.style.display='block';
     ss.style.display='none';

        }
               
    }
}
ss.onclick=function(){
datan=[];
localStorage.setItem('data',JSON.stringify(datan));

}
var x=0 ;
var s=["cat1.jpg","cat2.jpg","cat3.jpg","cat4.jpeg","cat5.png","cats.jpg"];
function mntr() {
document.sm.src=s[x];
if(x<s.length-1){
x++;
}
else{
x=0;
}
setTimeout("mntr()",2000);
}
mntr() ;
