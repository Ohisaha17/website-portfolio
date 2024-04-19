function scrlToContact() {
    // Use setTimeout to allow DOM updates before scrolling

    let a = document.body.offsetHeight;
    setTimeout(() => {
        scrollTo(0, a);
    }, 0);
}


const downLoadButton = document.getElementById("downloadBtn");

downLoadButton.addEventListener("click", function () {

    const fileUrl = "cv.pdf";
    const fileName = "Isita's Resume";

    const link = document.createElement("a");
    link.herf = fileUrl;
    link.download = fileName;

    link.click()
})





document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.getElementById('my-custom-cursor');

    document.addEventListener('mousemove', function (e) {
        const x = e.clientX;
        const y = e.clientY;
        customCursor.style.left = x + 'px';
        customCursor.style.top = y + 'px';
    });
});



// gsap.registerPlugin(ScrollTrigger);


var tl = gsap.timeline()

tl.from("#nav", {
    delay: 0.3,
    opacity: 0,
})

tl.from("#logo , .social-media", {
    y: -80,
    duration: 0.5,
    stagger: 0.3,
})

tl.from(".sidenav , .sidenav a", {
    x: 100,
    opacity: 0,
    delay: 0.3,
    duration: 0.6,
    stagger: 0.5,
})



