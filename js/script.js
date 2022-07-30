let burgerIcon = document.querySelector(".icon-burger"),
    spansInside = document.querySelectorAll(".icon-burger > *");
burgerIcon.addEventListener("click", ()=>{
    if (!spansInside[1].style.display || spansInside[1].style.display === "block") {
        spansInside[0].style.transform =  "translateY(4px) translateX(1px) rotate(45deg)";
        spansInside[1].style.display = "none";
        spansInside[2].style.transform = "translateY(-5px) translateX(1px) rotate(-45deg)";

    } else {
        spansInside[0].style.transform =  "translateY(0px) translateX(0px) rotate(0deg)";
        spansInside[1].style.display = "block";
        spansInside[2].style.transform = "translateY(0px) translateX(0px) rotate(0deg)";
    }
});

let myLinks = document.querySelector(".nav-bar .container .myLinks"),
    linksInside = document.querySelectorAll(".nav-bar .container .myLinks > *");
// Makin the UL FADE-IN-OUT in RESPONSIVE DESIGNS
burgerIcon.addEventListener('click', ()=>{
    !myLinks.style.height || myLinks.style.height === "0px" ?
    myLinks.style.cssText = `transition: height 0.5s ease-in-out; height: 600px;` :
    myLinks.style.height = "0px"
});

// CHANGING THE ACTIVE CLASS FROM LINKS
linksInside.forEach((e)=>{
    e.addEventListener('click', ()=>{
        linksInside.forEach(e=>{
            e.classList.remove("active")
        });
        e.classList.add("active")
    });
});

/* RESET NAV BAR IN RESPONSIVE TEST */
window.addEventListener('resize', (e)=>{
     // Reseting the Burger Icon in-case it was opened, CUZ LIST WILL FADE-OUT, SO THE ICONS RETURN TO NORMAL
    spansInside[0].style.transform =  "translateY(0px) translateX(0px) rotate(0deg)";
    spansInside[1].style.display = "block";
    spansInside[2].style.transform = "translateY(0px) translateX(0px) rotate(0deg)";

    // RESETING LANGS MENU
    pickLangs.style.display = "none";

    if (e.target.innerWidth >= 992) {
        /* Removing the transition action from the ul */
        myLinks.style.cssText = `transition: none; height: 100%`;

    }else{

        myLinks.style.height = "0px";
    }
})

let languages = document.querySelector(".nav-bar .myLinks .link:last-child span"),
    pickLangs = document.querySelector(".nav-bar .myLinks .link:last-child .list-langs");

languages.addEventListener('click', ()=>{
    if(!pickLangs.style.display || pickLangs.style.display === "none" ){
        pickLangs.style.cssText = `display:block; animation: langsOn 0.3s both ease-in-out;` 
    }else {
        pickLangs.style.display = "none";
    }
});


let divs = document.querySelectorAll(".visible"),
    showMore = document.querySelector(".portfolio .bot");

showMore.addEventListener("click", ()=>{
    divs.forEach((e)=>{
        e.classList.contains("visible")? e.classList.remove("visible") : e.classList.add("visible")
    });
});

// SCROLL TO TOP
let toTop = document.querySelector(".toTop");
    if (window.scrollY >= 1000) {
        toTop.style.opacity = "1"
    }else{
        toTop.style.opacity = "0"
    }
window.addEventListener('scroll', ()=>{
    if (window.scrollY >= 1000) {
        toTop.style.opacity = "1"
    }else{
        toTop.style.opacity = "0"
    }
})
toTop.addEventListener("click", ()=>{
    let x = setInterval(()=>{
        console.log(window.scrollY)
        window.scrollTo({
            left: 0,
            top: window.scrollY - 100
        })
        if(window.scrollY == 0) clearInterval(x);
    }, 10);
})

//  SECTION SMOOTH SCROLLING
linksInside.forEach((e)=>{
    e.addEventListener('click', ()=>{
        scrollToSect(e.getAttribute("data-sect"));
    })
})
let footerLinks = document.querySelectorAll("footer ul li");
footerLinks.forEach(e=>{
    e.addEventListener('click', ()=>{
        scrollToSect(e.getAttribute('data-sect'));
    })
})
function scrollToSect(val) {
    let goinDown = scrollY < val ? true : false;
    let x = setInterval(()=>{
        window.scrollTo({
            left: 0,
            top: goinDown ? scrollY + 10 : scrollY - 10,
        })
        if(goinDown){
            if(scrollY >= val) clearInterval(x);
        }else{
            if(scrollY <= val) clearInterval(x);
        }
    }, 1);
}


