/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/===== SIDEBAR SHOW =====/
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar');
    });
}

/===== SIDEBAR HIDDEN =====/
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar');
    });
}
/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent =document.querySelectorAll('[data-content]')

    tabs.forEach(tab =>{
        tab.addEventListener("click",()=>{
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents =>{
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')

            tabs.forEach(tab =>{
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
        })
    })

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card '
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkwork = document.querySelectorAll('.work__item');

function activeWork() {
    linkwork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkwork.forEach(l => l.addEventListener('click', activeWork));

/*===== Work Popup =====*/
// Event listener for clicking on a work button
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});

// Function to toggle the portfolio popup
function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

// Event listener for closing the portfolio popup
document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

// Function to display portfolio item details in the popup
function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portoflioItem.querySelector("work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portoflioItem.querySelector("portfolio__item").innerHTML;
}

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'), // Assuming class name is singular
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
  });

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link");
        }
    });
}


/*=============== SHOW SCROLL UP ===============*/
/*$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });*/

    
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
          scrollProgress.style.display = "grid";
        } else {
          scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
          document.documentElement.scrollTop = 0;
        });
       
      };
      window.onscroll = calcScrollValue;
      window.onload = calcScrollValue;

