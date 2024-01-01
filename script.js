

// function init() {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector(".main"),
//         smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(".main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//     });

//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();

// }
// init()

// var crsr = document.querySelector(".cursor")
// var main = document.querySelector(".main")
// document.addEventListener("mousemove", function (dets) {
//     crsr.style.left = dets.x + 20 + "px"
//     crsr.style.top = dets.y + 20 + "px"
// })

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h5",
        // scroller: ".main",
        // markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3
    }
})
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h2",
        // scroller: ".main",
        // markers: true,
        start: "top -120%",
        end: "top -130%",
        scrub: 3
    }
})
var tlp = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 p",
        // scroller: ".main",
        // markers: true,
        start: "top -120%",
        end: "top -130%",
        scrub: 3
    }
})



tl.to(".page1 h5", {
    x: -100
}, "anim")

tl.to(".page1 h2", {
    x: 100
}, "anim")

tl.to(".page1 p", {
    x: -100
}, "anim")




tl2.to(".main", {
    backgroundColor: "#dee7f4",
})


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 p",
        // scroller: ".main",
        // markers: true,
        start: "top -350%",
        end: "top -180%",
        scrub: 3
    }
})

tl3.to(".main", {
    backgroundColor: "#000",
})


$(function () {

    'use strict';


    //Lenis Smooth scroll
    const lenis = new Lenis({
        duration: 1.2
    })

    lenis.on('scroll', (e) => {

    })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    //Integration Lenis on GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    //Create animation ScrollTrigger
    function scrollTrig() {

        gsap.registerPlugin(ScrollTrigger);

        let gsapBl = $('.gsap__bl').width();

        //On full width
        // $('.gsap__item').css('width', gsapBl + 'px');

        //Transform slider track
        let gsapTrack = $('.gsap__track').width();
        let scrollSliderTransform = gsapTrack - gsapBl

        //Create ScrollTrigger
        gsap.to('.gsap__track', {
            scrollTrigger: {
                trigger: '.gsap_slider',
                // scroller: ".main",
                start: 'center center',
                end: () => '+=' + gsapTrack,
                pin: true,
                scrub: true,
                // markers: true
            },
            x: '-=' + scrollSliderTransform + 'px'
        });

    }
    scrollTrig();

    //resize window
    const debouncedResize = _.debounce(onWindowResize, 500);
    function onWindowResize() {
        console.log('Window resized!');
        // location.reload();
    }
    $(window).on('resize', debouncedResize);
});


var t7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".mygrid",
        // scroller: ".main",
        // markers: true,
        start: "450% center",
        end: "500% center",
        scrub: 1.5,
    }
});

t7.to(".mygrid", {
    opacity: "1",
})




var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".blog",
        // scroller: ".main",
        markers: true,
        start: "1050% center",
        end: "1150% center",
        scrub: 1.5,
        pin: true,
    }
});
tl
    .to("#lineone", {
        marginTop: "-120vh",
    }, 'baba')
    .to("#linetwo", {
        marginTop: "20vh",
    }, 'baba')