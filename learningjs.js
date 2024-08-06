document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const anchor = document.getElementById('anchor')
    const rekt1 = eye1.getBoundingClientRect();
    const rekt2 = eye2.getBoundingClientRect();
    const anchorx1 = rekt1.left + rekt1.width / 2;
    const anchory1 = rekt1.top + rekt1.height / 2;
    const angleDeg1 = angle(mouseX, mouseY, anchorx1, anchory1)
    const anchorx2 = rekt2.left + rekt2.width / 2;
    const anchory2 = rekt2.top + rekt2.height / 2;
    const angleDeg2 = angle(mouseX, mouseY, anchorx2, anchory2)
    console.log(angleDeg1)
    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye => {
        eye1.style.transform = `rotate(${90+ angleDeg1}deg)`;
        eye2.style.transform = `rotate(${90+ angleDeg2}deg)`;
    })
})

function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI;
    return deg
}