function navAnimation() {
    document.querySelector("body").addEventListener('wheel', function (dets) {
        if (dets.deltaY > 0) {
            gsap.to("nav", {
                duration: 0.25,
                transform: `translateX(-50%) translateY(-150%)`
            })
        } else {
            gsap.to("nav", {
                duration: 0.25,
                transform: `translateX(-50%) translateY(0%)`
            })
        }
    })
}



function codingAnimation() {

    var letters = document.querySelectorAll(".letter")


    letters.forEach(function (letter) {

        let movingSpeed = 0
        let stemSpeed = 90

        let currentFlower = letter.childNodes[1]
        let currentStem = letter.childNodes[3]


        let currentStemPath = letter.childNodes[3].childNodes[1].childNodes[1].getAttribute('d')

        currentFlower.addEventListener("mousemove", function (dets) {

            movingSpeed = dets.movementX / 4

            stemSpeed = dets.movementX + 90

            currentStemPath = `M 98.5 650.4 Q 98.5 271 ${stemSpeed} 0.017043337314812446 m -4.914035618599561 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0`

            gsap.to(currentFlower, {
                transform: `translateX(${movingSpeed}%) rotate(${movingSpeed}deg)`,
                // duration:1
            })
            gsap.to(currentStem.childNodes[1].childNodes[1], {
                attr: { d: currentStemPath }
            })

        })

    })


    var valueA = 90
    let targetUp = 120;
    let targetDown = 80;
    let direction = 1;

    var stemPath = `M 98.5 650.4 Q 98.5 271 102.79821907002196 0.017043337314812446 m -4.914035618599561 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0`

    setInterval(function () {

        stemPath = `M 98.5 650.4 Q 98.5 271 ${valueA} 0.017043337314812446 m -4.914035618599561 -5 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0`
        valueA += direction;

        if (valueA >= targetUp) {
            direction = -1; // Start decreasing when the upper limit is reached
        } else if (valueA <= targetDown) {
            direction = 1; // Start increasing when the lower limit is reached
        }
        gsap.to('.stem path', {
            attr: { d: stemPath }
        })
        gsap.to('.flower', {
            transform: `translateX(${(valueA - 90) / 4}%) rotate(${(valueA - 90) / 4}deg)`,
        })
    }, 100)

}


function page2animation() {
    var eyeball = document.querySelector(".eyeball")

document.querySelector("#page2").addEventListener("mousemove", function(dets){
    var seeX = (dets.x - eyeball.getBoundingClientRect().x)/50
    var seeY = (dets.y - eyeball.getBoundingClientRect().y)/50
    console.log(seeX)
    console.log(seeY)
   
    gsap.to(".pupil",{
        transform:`translate(${seeX}% , ${seeY}%)`

    })

})
var pupilNumber= 0
document.querySelector('.eye', function(){
    if(pupilNumber ==0){
        gsap.to('#pupil1',{
            marginTop:'-210px',
            duration:0.5
        })
        pupilNumber =1;
    }
    else {
        gsap.to('#pupil1', {
            marginTop: '-40px',
            duration: 0.5
        })
        pupilNumber = 0
    }
})

var videoPlay = 0;
var video = document.querySelector(".video-div video")

    document.querySelector(".video-div").addEventListener("click", function () {
        if (videoPlay == 0) {
            document.querySelector(".page2-part1 .video-div .play").style.display = 'none'
            video.play()
            videoPlay++
        } else {
            document.querySelector(".page2-part1 .video-div .play").style.display = 'flex'
            video.pause()

            videoPlay--
        }
    })

}
navAnimation()
 codingAnimation()
page2animation()

function page3Page4Animation() {

    var num = 0

    var int

    function userRating() {
        int = setInterval(function () {
            if (num < 49) {
                num += 1
                document.querySelector('#user-review1 .rating h2 span').innerHTML = num / 10
                document.querySelector('#user-review3 .rating h2 span').innerHTML = num / 10
                if (num < 49) {
                    document.querySelector('#user-review2 .rating h2 span').innerHTML = num / 10
                }
            } else {
                clearInterval(int)
            }
        }, 25)
    }

    gsap.from('.user-review', {
        // width:'20%',
        transform: 'translateX(-40%)',
        stagger: {
            amount: 0.5
        },
        onStart: function () {
            userRating()
        },
        duration: 0.7,
        scrollTrigger: {
            trigger: '.all-reviews',
            start: 'top 60%',
        }
    })

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 450,
        centeredSlides: true,
        // freeMode: true,
    });
}
page3Page4Animation()

gsap.to(".scroll",{
    transform:"translateX(-100%)",
    duration:15,
    ease:"none",
    repeat:-1,

})
gsap.from("#page5",{
    y:50,
    duration:2,
    scrollTrigger:{
        trigger: '#page5',
            start: 'top 50%',
            markers:true,
            stagger:2,
    }
})