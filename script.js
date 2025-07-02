// Duita method "to" ra "from" hunxa

// Initial position bata Final position laijana .to use hunxa 
// Final position bata Initial position laijana .from use hunxa 

// gsap.to("#box",{  //Write ID of element
//     x:1200,
//     y:600,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:2,
// }) 
// gsap.from("#box1",{  
//     x:1200,
//     duration:5,
//     delay:1,
// }) 

// gsap.to("#box1",{  
//     x:1300,
//     duration:4,
//     delay:1,
//     rotate:250,
//     repeat:-1, //Infinite / Loop
//     yoyo:"true", //Bounce Back Property
// }) 
// gsap.from(,{})

// gsap.from("h1",{
//     color:"red",
//     opacity:0,
//     duration:3,
//     y:20,
//     delay:1,
//     stagger:0.5,  //Stagger le chai palai palo aauxa element haru
// })

// gsap.to("#box1",{  
//     x:1300,
//     duration:4,
//     delay:1,
//     rotate:360,
// }) 

// gsap.to("#box2",{  
//     x:1000,
//     duration:4,
//     delay:5,
//     rotate:360, 
// }) 
// gsap.to("#box3",{  
//     x:1300,
//     duration:4,
//     delay:9,
//     rotate:360, 
// }) 



// var tl = gsap.timeline() //Timeline ma sync ma chalxa 

// tl.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:2,
//     delay:1,
//     yoyo:"true",
// })
// tl.to("#box2",{
//     x:1500,
//     duration:2,
//     yoyo:"true",
// })
// tl.to("#box3",{
//     x:1500,
//     rotate:360,
//     duration:2,
//     yoyo:"true",

// })

// x

var tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity: 0,
    duration:2,
    delay:0.5,
})
tl.from("h4",{
    y:-30,
    opacity: 0,
    duration:1,
    delay:0.5,
    stagger:0.3,
})

