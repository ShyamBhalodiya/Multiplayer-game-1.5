class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.title = createElement("h2");
        this.greeting = createElement("h1");
    }
    display() {
        this.title.html("Car Racing Game");
        this.title.position(130, 0);
        this.input.position(130, 160);
        this.button.position(250, 200);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount += 1;
            player.index = playercount;
            player.updateplayer();
            player.updatecount(playercount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(130, 100);
        })
    }
    hide() {
        this.title.hide();
        this.greeting.hide();
    }
}