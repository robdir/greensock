// $(document).ready(function() {
//     var logo = $('#logo')
//     TweenLite.to(logo, 1, { left: "632px" });
// })

// $(document).ready(function () {
//     var div = $('#demo')
//     div.on('click', function() {
//         TweenLite.to(demo, 1, { left: "632px" });
//     })
// })

// shorthand!! 
// $(document).ready(function() {
//     TweenLite.to("#demo", 2, { backgroundColor: "#ff0000", width: "50%", top: "100px", ease: Power2.easeInOut });
// })

// window.onload = function() {
//     restartBtn = document.getElementById("restartBtn"),
//     tween = TweenLite.to('#logo', 1, { left: "440px" });

//     restartBtn.onclick = function() {
//         tween.restart();
//     }
// }


window.onload = function() {
animate = document.getElementById("animate")
animate.onclick = function() {
    var sun = document.getElementById("adsun")
    TweenLite.to(sun, 2, {directionalRotation:"360_cw"})
    var text = document.getElementById("text")
    TweenLite.to(text, 2, { bottom: "50px", delay: 2})
    }
}

// window.onload = function() {
//     trip = document.getElementById("trippy")
//     TweenMax.from(trip, 2, {directionalRotation:"360_cw", repeat:-1})
// }