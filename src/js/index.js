import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline();

tl.from(".hero-wrapper-left h1", {
    duration: 2,
    opacity: 0,
    letterSpacing: "20px",
    x: -200
}).from(".hero-wrapper-left-content span", {
    duration: 1,
    opacity: 0,
    letterSpacing: "20px"
})

let nav = gsap.utils.toArray(".section-nav");
console.log(nav);


gsap.fromTo(nav,
    {
        opacity: 0,
        duration: 1,
        y: 100
    },
    {
        opacity: 1,
        y: 0,
        stagger: 0.3
    }
);


let socialNet = gsap.utils.toArray(".social-media-con");

gsap.from(socialNet, {
    duration: 1,
    opacity: 0,
    x: 200,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".footer-wrapper",
        toggleActions: "restart none none none"
    },
})

let line = gsap.utils.toArray(".line-con");

gsap.fromTo(line,
    {
        opacity: 0,
        scaleY: 0,
        transformOrigin: "center center" // Grows from the center
    },
    {
        duration: 4,
        ease: "power2.out",
        scaleY: 1,
        opacity: 1,
        repeat: -1,
        yoyo: true
    }
);


gsap.from(".hero-left-blur", {
    duration: 1,
    opacity: 0,
    skewY: 100,
    x: -200
})


let inputLen = gsap.utils.toArray(".input-txt");


gsap.fromTo(inputLen,
    {
        opacity: 0,
        width: 0,
        scaleX: 0
    },
    {
        duration: 4,
        width: "100%",
        ease: "power2.out",
        opacity: 1,
        scaleX: 1,
        scrollTrigger: {
            trigger: ".footer-wrapper",
            toggleActions: "restart none none none"
        },
    }
)