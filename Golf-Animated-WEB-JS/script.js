var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", (dets)=>{
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";

    cursorBlur.style.left = dets.x - 250 + "px";
    cursorBlur.style.top = dets.y - 250 + "px";
})

let h4Nav = document.querySelectorAll("#nav h4");
h4Nav.forEach(element => {
    element.addEventListener("mouseenter", ()=>{
        cursor.style.scale = 3;
        cursor.style.border = "1px solid white";
        cursor.style.backgroundColor = "transparent";
    })

    element.addEventListener("mouseleave", ()=>{
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95C11E";
        cursor.style.backgroundColor = "#95C11E";
    })
});



gsap.to("#nav", {
    backgroundColor: "#000",
    duration : 0.5,
    height : "110px",
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub :  1,
    }
  });

  gsap.to("#main", {
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start : "top -25%",
        end : "top : -75%",
        scrub : 2,
    }
  })

  gsap.from("#about-us img, #about-us-in", {
     y : 90, 
     opacity : 0, 
     duration : 1,
     stagger : 0.3,
     scrollTrigger : {
        trigger : "#about-us",
        scroller : "body",
        // markers : true,
        start : "top 70%",
        end : "top 65%",
        scrub : 3,
     }
  })

  gsap.from(".card", {
    scale :0.8,
    // opacity : 0, 
    duration : 1,
    stagger : 0.1,
    scrollTrigger : {
       trigger : "#about-us",
       scroller : "body",
       // markers : true,
       start : "top 70%",
       end : "top 65%",
       scrub : 2,
    }
 })

 gsap.from("#quote1", {
    y : -70,
    x : -70,
    scrollTrigger : {
        trigger :"#quote1",
        scroller : "body",
        // markers :true,
        start : "top 55%",
        end : "top 45%",
        scrub : 4,
    }
 })

 gsap.from("#quote2", {
    y : 70,
    x : 70,
    scrollTrigger : {
        trigger :"#quote1",
        scroller : "body",
        // markers :true,
        start : "top 55%",
        end : "top 45%",
        scrub : 4,
    }
 })

 gsap.from("#page4 h1", {
    y : 50,
    scrollTrigger : {
        trigger :"#page4 h1",
        scroller : "body",
        // markers :true,
        start : "top 85%",
        end : "top 70%",
        scrub : 3,
    }
 })