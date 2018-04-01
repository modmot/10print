let x = 0,
    y = 0,
    spacing = 30,
    fps = 255;

function setup() {
    let w = document.body.clientWidth;
    // let h = document.body.clientHeight;
    createCanvas(w, 800);
    // createCanvas(w, h);
    background(255);
}

function draw() {
    stroke(0);
    if (random(1) < 0.5) {
        line(x, y, x + spacing, y + spacing);
        frameRate(fps);

    } else {
        line(x, y + spacing, x + spacing, y);

    }
    x += spacing;
    if (x > width) {
        x = 0;
        y += spacing;
    }

}