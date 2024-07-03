function entry(){
    let tl = gsap.timeline()

    tl.from(".line h1", {
        y: 80,
    
        onStart: function () {
            // An event handler that 
            // will be called when the stream is opened and is about
            //  to begin delivering data.
            // set interval means loop
            // setTimeOut means delay
            let change = document.querySelector('#changingtimer')
            let grow = 0
            setInterval(function () {
                if (grow > 100) {
                    change.innerHtml = grow
                }
                else {
                    change.innerHTML = grow++
    
                }
            }, 22)
        },
        // onStart:function(){
        //     let now=document.querySelector("#now")
        // let element=0
        // setInterval(function(){
    
        //     if((element%2)!=0){
        //         now.classList="#now-change"
        //         element++
    
        //     }
        //     else{
        //         now.style.color=white
        //         element++
        //     }
        // })
    
        duration: 1,
        stagger: 0.2,
    
    })
    
    
    tl.to(".loader", {
        opacity: 0,
        duration: 1.7,
        delay: 1.6
    })
    tl.from(".page1", {
        y: 12,
        opacity: 0,
        ease: Power4,
        // ease se aata hua .page1 smooth aata hai
    
        delay: 0.1
    })
    tl.from(".hero h1", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        stagger: 0.1
    
    })
    // 
    //     hero.style.backgroundColor="red"
    // })
    document.addEventListener('mousemove',(dets)=>{
        gsap.to('.cursor',{
            top:dets.y,
            left:dets.x
            })
    })
    
    
    let hero = document.querySelectorAll("#hero3")
    hero.forEach(hero => {
     hero.addEventListener("mousemove", ()=>{
        gsap.to("#hero3 h1",{
            color:red
        })
    })
     })
     Shery.makeMagnet(".hero h1" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    
    
    
    
    
    
    
}

entry()
