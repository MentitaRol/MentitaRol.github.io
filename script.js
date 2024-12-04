var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(500)
    .typeString('Desarrolladora Frontend Junior')
    .pauseFor(300)
    .deleteAll(60)
    .typeString('Apasionada por la programación')
    .pauseFor(300)
    .deleteAll(60)
    .typeString('Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(300)
    .deleteChars(6)
    .typeString('<strong>programar!</strong>')
    .pauseFor(1000)
    .start();