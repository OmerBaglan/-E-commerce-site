// ---------------------MENU-BAR-CLOSE-----------------------
const NavMenu =document.getElementById("nav-menu");
const MenuToggle=document.getElementById("menu-toggle");
const CloseToggle=document.getElementById("close-toggle");
function toggleMenu() {
    MenuToggle.style.display = MenuToggle.style.display === "none" ? "block" : "none";
    CloseToggle.style.display = CloseToggle.style.display === "none" ? "block" : "none";
    NavMenu.style.top = NavMenu.style.top === "0" ? "-1000%" : "0";
}
function checkScreenWidth() {
    if (window.innerWidth <= 1080) {
        NavMenu.style.top = "-1000%"; 
        MenuToggle.style.display = "block"; 
        CloseToggle.style.display = "none"; 
    } else {
        MenuToggle.style.display = "none"; 
        CloseToggle.style.display = "none";
    }
}
MenuToggle.addEventListener("click", toggleMenu);
MenuToggle.addEventListener("click",()=>{
    NavMenu.style.top="0"
});
CloseToggle.addEventListener("click", toggleMenu);
CloseToggle.addEventListener("click",()=>{
    NavMenu.style.top="-1000%"
})
window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);



// ------------MENU-LİNK------------------
MenuLink =()=>{
  
    const navLinks=document.querySelectorAll(".nav-link");
    navLinks.forEach((link)=>{
        link.addEventListener("click",()=>{
           
              if (window.innerWidth <= 1080) {
                  NavMenu.style.top = "-100%"; 
                  MenuToggle.style.display = "block"; 
                  CloseToggle.style.display = "none"; 
              } else {
                  MenuToggle.style.display = "none"; 
                  CloseToggle.style.display = "none";
              }
           
        })
    })
}


window.addEventListener("DOMContentLoaded",MenuLink)


// -------------SCROLL-UP-----------------


const Header=()=>{
    const HeaderScroll = document.getElementById("header");
    this.scrollY >=50 ? HeaderScroll.classList.add("show-header")
                        : HeaderScroll.classList.remove("show-header")


}
window.addEventListener("scroll",Header)

// -----------------CATEGORİES-ACTİVE------------------

const Categories=document.querySelectorAll(".categori");

CategoriActive=()=>{
    Categories.forEach((categori)=>{
        categori.addEventListener("click",()=>{
            for(let i=0; i<Categories.length;i++){
                Categories[i].classList.remove("active-categori")
            }
            categori.classList.add("active-categori")
        })
    })
}

window.addEventListener("DOMContentLoaded",CategoriActive)




// -------------------SWİPER-CATEGORİES--------------------

SwiperCategori = () => {
    const All = document.getElementById("all");
    const Women = document.getElementById("women");
    const Man = document.getElementById("man");
    const Bag = document.getElementById("bag");
    const Shoes = document.getElementById("shoes");
    const Swipers = document.querySelectorAll(".swiper");
    const Prevs=document.querySelectorAll(".swiper-button-prev");
    const Nexts=document.querySelectorAll(".swiper-button-next");
    const Paginations=document.querySelectorAll(".swiper-pagination");


    All.addEventListener("click",()=>{
        Swipers.forEach((swiper)=>{
            
            if(swiper.classList.contains("all-swiper")){
                swiper.style.display="block";
            }else{
                swiper.style.display="none"
            }
            
        })
        Prevs.forEach((prev) =>{
            if(prev.classList.contains("all-swiper-button-prev")){
                prev.style.display="block";

            }else{
                prev.style.display="none"
            }
        })
        Nexts.forEach((next) =>{
            if(next.classList.contains("all-swiper-button-next")){
                next.style.display="block";

            }else{
                next.style.display="none"
            }
        })
        Paginations.forEach((pagination) =>{
            if(pagination.classList.contains("all-swiper-pagination")){
                pagination.style.display="block";

            }else{
                pagination.style.display="none"
            }
        })
    })

    Women.addEventListener("click",()=>{
        Swipers.forEach((swiper)=>{
            
            if(swiper.classList.contains("women-swiper")){
                swiper.style.display="block";
            }else{
                swiper.style.display="none"
            }
        })
        Prevs.forEach((prev) =>{
            if(prev.classList.contains("women-swiper-button-prev")){
                prev.style.display="block";

            }else{
                prev.style.display="none"
            }
        })
        Nexts.forEach((next) =>{
            if(next.classList.contains("women-swiper-button-next")){
                next.style.display="block";

            }else{
                next.style.display="none"
            }
        })
        Paginations.forEach((pagination) =>{
            if(pagination.classList.contains("women-swiper-pagination")){
                pagination.style.display="block";

            }else{
                pagination.style.display="none"
            }
        })
    })

    Man.addEventListener("click",()=>{
        Swipers.forEach((swiper)=>{
            
            if(swiper.classList.contains("man-swiper")){
                swiper.style.display="block";
            }else{
                swiper.style.display="none"
            }
        })
        Prevs.forEach((prev) =>{
            if(prev.classList.contains("man-swiper-button-prev")){
                prev.style.display="block";

            }else{
                prev.style.display="none"
            }
        })
        Nexts.forEach((next) =>{
            if(next.classList.contains("man-swiper-button-next")){
                next.style.display="block";

            }else{
                next.style.display="none"
            }
        })
        Paginations.forEach((pagination) =>{
            if(pagination.classList.contains("man-swiper-pagination")){
                pagination.style.display="block";

            }else{
                pagination.style.display="none"
            }
        })
    })

    Bag.addEventListener("click",()=>{
        Swipers.forEach((swiper)=>{
            
            if(swiper.classList.contains("bag-swiper")){
                swiper.style.display="block";
            }else{
                swiper.style.display="none"
            }
        })
        Prevs.forEach((prev) =>{
            if(prev.classList.contains("bag-swiper-button-prev")){
                prev.style.display="block";

            }else{
                prev.style.display="none"
            }
        })
        Nexts.forEach((next) =>{
            if(next.classList.contains("bag-swiper-button-next")){
                next.style.display="block";

            }else{
                next.style.display="none"
            }
        })
        Paginations.forEach((pagination) =>{
            if(pagination.classList.contains("bag-swiper-pagination")){
                pagination.style.display="block";

            }else{
                pagination.style.display="none"
            }
        })
    })

    Shoes.addEventListener("click",()=>{
        Swipers.forEach((swiper)=>{
            
            if(swiper.classList.contains("shoes-swiper")){
                swiper.style.display="block";
            }else{
                swiper.style.display="none"
            }
        })
        Prevs.forEach((prev) =>{
            if(prev.classList.contains("shoes-swiper-button-prev")){
                prev.style.display="block";

            }else{
                prev.style.display="none"
            }
        })
        Nexts.forEach((next) =>{
            if(next.classList.contains("shoes-swiper-button-next")){
                next.style.display="block";

            }else{
                next.style.display="none"
            }
        })
        Paginations.forEach((pagination) =>{
            if(pagination.classList.contains("shoes-swiper-pagination")){
                pagination.style.display="block";

            }else{
                pagination.style.display="none"
            }
        })
    })
  
    
}

window.addEventListener("DOMContentLoaded", SwiperCategori);




// -------------SCROLL-UP-----------------

const scrollupElement = document.getElementById("scroll-up");

const scrollup=()=>{
    const scrollup =document.getElementById("scroll-up");
    this.scrollY >=350 ? scrollup.classList.add("show-up")
                        : scrollup.classList.remove("show-up")


}
window.addEventListener("scroll",scrollup)


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollupElement.addEventListener("click", scrollToTop);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
