const menu = document.querySelector(".text_menu")
const nav = document.querySelector("nav")
var verify = 1
const cima = document.createElement("strong")
cima.setAttribute('id','Rolagem_Topo')
const varX = document.createElement("a")
varX.setAttribute('href','#logo')
const imgRolagem_Topo =document.createElement('img')
const fechar=document.querySelector("span#fechar")

imgRolagem_Topo.setAttribute('src','./src/imagens/chevron-up.svg')
document.querySelector("body").appendChild(cima)
cima.appendChild(varX)
varX.appendChild(imgRolagem_Topo)

menu.addEventListener('click',()=>{
    ++verify
    if(verify%2==0){
        nav.classList.add("menu_visibility")
        document.querySelector("main").addEventListener('click',()=>{
            nav.classList.remove('menu_visibility')
        })
    }else{
        nav.classList.remove("menu_visibility")
    }
})

fechar.addEventListener('click',()=>{
  nav.classList.remove("menu_visibility")
})
//Efeito de zoom,decendo na imagen