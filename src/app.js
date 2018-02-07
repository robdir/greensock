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
$(document).ready(function() {
    TweenLite.to("#demo", 2, { backgroundColor: "#ff0000", width: "50%", top: "100px", ease: Power2.easeInOut });
})

window.onload = function() {
    restartBtn = document.getElementById("restartBtn"),
    tween = TweenLite.to('#logo', 1, { left: "440px" });

    restartBtn.onclick = function() {
        tween.restart();
    }
}

window.onload = function() {
animate = document.getElementById("animate")
animate.onclick = function() {
    }
}