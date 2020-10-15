class Game {
    constructor() {

    }
    getstate() {
        var gamestateinfo = database.ref("gamestate");
        gamestateinfo.on("value", (data) => {
            gamestate = data.val();
        })
    }
    updatestate(state) {
        database.ref("/").update({
            gamestate: state
        })
    }
    async start() {
        if (gamestate === 0) {
            player = new Player();
            form = new Form();
            form.display();
            var pcountref = await database.ref("playercount").once("value");
            if (pcountref.exists()) {
                playercount = pcountref.val();
                player.getcount();
            }
        }
    }
    play() {
        form.hide();
        textSize(30);
        text("Game started", 120, 100);
        Player.getplayer();
        if (allplayer !== undefined) {
            var displayY = 130;
            for (var plr in allplayer) {
                if (plr === "player" + player.index) {
                    fill("red");
                }
                else {
                    fill(0);
                }
                displayY += 20;
                textSize(20);
                text(allplayer[plr].name + ":" + allplayer[plr].distance, 100, displayY);
            }

        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 10;
            player.updateplayer();
        }
    }
}