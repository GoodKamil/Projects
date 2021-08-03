const add=document.querySelector('.add');
const delet=document.querySelector('.delete');
const text=document.querySelector('.text');
const list=document.querySelector('.list');
const p=document.querySelector('.size');
const progres=document.querySelector('.file');
let val=0;
let size=0;
const product=[];

add.addEventListener('click',function(){
    if(product.length!==10){
  if(text.value && isNaN(text.value) && !product.includes(text.value))
  {
   product.push(text.value);
   list.innerHTML=product.join("\n,");
   size++;
   p.innerHTML="Ilość produktów: " + size;
   val+=10;
   progres.value=val;
  }
  else{
      alert("Podana nazwa produktu już isnieje lub  wartosc została zle wpisana")
  }
}
else{
    alert("Tablica jest pełna");
}
})
delet.addEventListener('click',function(){
    if(product.length!==0){
        product.pop();
        list.innerHTML=product.join("\n,");
        size--;
        p.innerHTML="Ilość produktów: " + size;
        val-=10;
        progres.value=val;
    }
    else{
        alert("Tablica jest pusta");
    }
})