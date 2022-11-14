var list = document.getElementsByClassName("view");
for ( i= 0; i< list.length; i++) {
        
        list[i].addEventListener('click',function () {
            change()
            this.classList.add("active-list")
        })
}

function change(){
    for ( i= 0; i< list.length; i++)
        list[i].classList.remove("active-list");
}


///sections
const btn = document.getElementsByClassName('btn-change');
const text =document.getElementsByClassName('container-img');

for (let i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener('click', function(){


        for ( a = i; a < text.length; a++){
                      
             text[a].classList.toggle('active');
            changeName(a)                 
         break;                       
        
        }
        
            
    })
   
}
    
function changeName( a) {
    

        if(btn[a].innerText == "ler mais"){
            btn[a].innerText ='Retornar'
        }else{
            btn[a].innerText ='ler mais'
        }
    

}





btn_conten = document.querySelector('.btn-content');

console.log(btn_conten);
for (let i = 3; i < text.length; i++) {
    
    btn_conten.addEventListener('click', function(){
        text[i].classList.toggle('hideen');
        changeName(a)       
    })
    
   
}