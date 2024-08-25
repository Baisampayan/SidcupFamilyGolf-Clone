var crsr = document.querySelector('#cursor');
var crsrblr = document.querySelector('#cursor-blur');
document.addEventListener('mousemove', function(e) {
    crsr.style.left = e.x + 'px'
    crsr.style.top = e.y + 'px'
    crsrblr.style.left = e.x - 180 + 'px'
    crsrblr.style.top = e.y - 180 + 'px'
})

gsap.to('#nav', {
    backgroundColor: '#000000',
    height: '100px',
    duration: 0.5,
    scrollTrigger: {
        trigger: '#nav',
        scroller: 'body',
        markers: true,
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1
    }
});

gsap.to('#main', {
    backgroundColor: '#000000',
    scrollTrigger: {
        trigger: '#main',
        scroller: 'body',
        markers: true,
        start: 'top -25%',
        end: 'top -70%',
        scrub: 5
    }
})