function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x +1+ "px"
  crsr.style.top = dets.y +1+ "px"
})

// var vid1 = document.querySelector(".page1 video")
// vid1.addEventListener("mouseover",function(){
//     crsr.style.padding = ""
//     crsr.innerHTML = "Sound On"
// })
var tim = gsap.timeline()

tim.to(".page1 #fh1",{
    x:-150,  
    scrollTrigger:{
      trigger:"#fh1",
      scroller:".main",
      start:"top 30%",
      end:"top 0%",
      scrub:2
  }
},"same")

tim.to(".page1 #fh2",{
    x:150,  
    scrollTrigger:{
      trigger:"#fh1",
      scroller:".main",
      start:"top 30%",
      end:"top 0%",
      scrub:2
  }
},"same")

tim.to(".page1 video",{
    scale:1.5,
    duration:1,
    scrollTrigger:{
      trigger:"#fh1",
      scroller:".main",
      start:"top 30%",
      end:"top 0%",
      scrub:2
  }
    
})

tim.to(".main",{
    backgroundColor:"white",
    color:"black",
    scrollTrigger:{
      trigger:".page2",
      scroller:".main",
      start:"top 60%",
      end:"top 0%",
      scrub:2
    }
})
tim.from(".capabilties p, .line, .h2-head ",{
  scale:0.2,
  opacity:0,
  duration:2,
  stagger:0.2,
  scrollTrigger:{
    trigger:".capabilties",
    scroller:".main",
    scrub:5,
    start:"top 65%",
    end:"top 95%",
  }
} )

gsap.from(".page3-part1",{
  opacity:0,
  duration:2,
  stagger:0.9,
  scrollTrigger:{
    trigger:".page3-part1",
    scroller:".main",
    start:"top 50%",
  }
})

gsap.from(".page3-part2",{
  opacity:0,
  duration:2,
  stagger:0.9,
  scrollTrigger:{
    trigger:".page3-part2",
    scroller:".main",
    start:"top 50%",
  }
})


var tim2 = gsap.timeline()

tim2.to(".main",{
  backgroundColor:"#0F0D0D",
  color:"white",
  scrollTrigger:{
    trigger:".page4",
    scroller:".main",
    start:"top 70%",
    end:"top 0%",
    scrub:5
  }
})


tim2.from(".box,.box-line",{
  scale:0.2,
  // durations:2,
  opacity:0,
  stagger:0.4,
  scrollTrigger:{
    trigger:".box",
    scroller:".main",
    start:"top 80%",
    end:"top 50%",
    scrub:4
  }
})

var boxes = document.querySelectorAll(".box")


boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
   var att =  elem.getAttribute("data-image")
   crsr.style.width = "300px"
   crsr.style.height = "250px"
  crsr.style.borderRadius= "0"
  crsr.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
    // var att =  elem.getAttribute("data-image")
    
    crsr.style.width = "15px"
    crsr.style.height = "15px"
   crsr.style.borderRadius= "50%"
   crsr.style.backgroundImage = `none`
  })
})

























