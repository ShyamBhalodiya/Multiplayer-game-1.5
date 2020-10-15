var playercount, database, form, player, game, allplayer, canvas;
var distance = 0;
var gamestate = 0;

function setup() {
    canvas = createCanvas(400, 400);
    database = firebase.database();
    game = new Game();
    game.getstate();
    game.start();
}

function draw() {
    if (playercount === 4) {
        game.updatestate(1);
    }
    if (gamestate === 1) {
        clear();
        game.play();
    }

}
