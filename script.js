/*==========================================================
CRONOM ONE
Emergency Operations Platform
JavaScript
==========================================================*/


document.addEventListener("DOMContentLoaded",()=>{


/*==================================================
HEADER SCROLL EFFECT
==================================================*/


const header=document.querySelector("header");


window.addEventListener("scroll",()=>{


if(window.scrollY>60){

header.style.background=
"rgba(6,10,18,.85)";

header.style.backdropFilter=
"blur(20px)";

header.style.borderBottom=
"1px solid rgba(255,255,255,.08)";

}

else{

header.style.background="transparent";

header.style.backdropFilter="none";

header.style.borderBottom="none";

}


});



/*==================================================
CURSOR GLOW
==================================================*/


const cursor=document.getElementById(
"cursor-glow"
);


if(cursor){


document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left=
e.clientX+"px";


cursor.style.top=
e.clientY+"px";


});


}



/*==================================================
MOBILE MENU
==================================================*/


const menu=
document.querySelector(".menu");


const menuButton=
document.querySelector(".menu-toggle");



if(menuButton){


menuButton.addEventListener(
"click",
()=>{


menu.classList.toggle(
"active"
);


});


}



document.querySelectorAll(
".menu a"
)
.forEach(link=>{


link.addEventListener(
"click",
()=>{


menu.classList.remove(
"active"
);


});


});



/*==================================================
SCROLL REVEAL
==================================================*/


const revealElements=
document.querySelectorAll(
"section, .module-card, .platform-item, .capability, .workflow-step, .tech-card, .gallery-card, .benefit"
);



revealElements.forEach(
(el)=>{


el.classList.add(
"reveal"
);


});



const revealObserver=
new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


revealObserver.unobserve(
entry.target
);


}


});


},
{

threshold:.15

});



revealElements.forEach(
(el)=>{

revealObserver.observe(el);

});



/*==================================================
CARD TILT EFFECT
==================================================*/


const tiltCards=
document.querySelectorAll(
".module-card, .platform-item, .capability, .tech-card, .benefit-card, .gallery-item"
);



tiltCards.forEach(
(card)=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect=
card.getBoundingClientRect();


const x=
e.clientX-rect.left;


const y=
e.clientY-rect.top;



const rotateX=
((y-rect.height/2)
/rect.height)
*10;


const rotateY=
((x-rect.width/2)
/rect.width)
*-10;



card.style.transform=
`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;



});



card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});


});



/*==================================================
HERO DATA COUNTERS
==================================================*/


const counters=
document.querySelectorAll(
".hero-data h3"
);



counters.forEach(
(counter)=>{


const text=
counter.innerText;


if(
!isNaN(parseInt(text))
){


let value=0;

const target=
parseInt(text);



const interval=
setInterval(
()=>{


value++;


counter.innerText=
value;



if(value>=target){


clearInterval(interval);

}



},
40);


}



});



/*==================================================
ACTIVE MENU ON SCROLL
==================================================*/


const sections=
document.querySelectorAll(
"section[id]"
);


const navLinks=
document.querySelectorAll(
".menu a"
);



window.addEventListener(
"scroll",
()=>{


let current="";


sections.forEach(
(section)=>{


const sectionTop=
section.offsetTop-150;



if(
scrollY>=sectionTop
){

current=
section.getAttribute(
"id"
);

}


});



navLinks.forEach(
(link)=>{


link.classList.remove(
"active"
);



if(
link.getAttribute("href")
===
"#"+current
){


link.classList.add(
"active"
);


}


});


});



/*==================================================
IMAGE LAZY LOADING
==================================================*/


const images=
document.querySelectorAll(
"img"
);



images.forEach(
(img)=>{


img.loading="lazy";


});



/*==================================================
BUTTON RIPPLE EFFECT
==================================================*/


document.querySelectorAll(
".btn-primary, .btn-secondary, .btn-outline"
)
.forEach(
(button)=>{


button.addEventListener(
"click",
function(e){


const ripple=
document.createElement(
"span"
);


ripple.className=
"ripple";


this.appendChild(
ripple
);



setTimeout(
()=>{

ripple.remove();

},
600
);


});


});



});