const bear = document.querySelectorAll(".img1")
const one = document.querySelector(".img-one")
const two = document.querySelector(".img-two")
const img = document.querySelectorAll("img")
const three = document.querySelector(".img-three")
const clean = document.querySelector(".btn")

const addBearOne = (e) => {
        if(one.hasAttribute("src") ){
            if (two.hasAttribute("src")){
                if(three.hasAttribute("src") ){ 
                }
                else {
                    let url = e.target.getAttribute("src")
                    three.setAttribute("src", url) 
                }
            }
            else {
                let url = e.target.getAttribute("src")
                two.setAttribute("src", url) 
            }
        }
        else {
            let url = e.target.getAttribute("src")
            one.setAttribute("src", url)  
        }
}

const cleanBear = () => {

    one.removeAttribute("src")
    two.removeAttribute("src")
    three.removeAttribute("src")
}

bear.forEach(el => el.addEventListener("click", addBearOne))
clean.addEventListener("click", cleanBear)










