let config = {
    type: Phaser.CANVAS,
    width: 400,
    height : 300,

    scene: {
        preload: preload,
        create: create,
        update: update,   
    }
};

let game = new Phaser.Game(config);

function preload() {
    console.log("In preload");
    //loading images using load object of 'this'
    this.load.image('background','./resources/bg.jpg')
    console.log(this);
    this.load.image('wheel','./resources/wheel2.png')
    this.load.image('pin','./resources/pin.png')
    this.load.image('stand','./resources/stand.png')
}

function create() {
    console.log("Create");
    let  w = game.config.width
    let h = game.config.height
    let background = this.add.sprite(w/2,h/2,'background')
    //sprite is a phaser image
    background.setScale(0.20)

    //creating the obejects
    this.wheel = this.add.sprite(w/2,h/2,'wheel')
    this.wheel.setScale(0.12)
    this.pin = this.add.sprite(w/2,h/10,'pin')
    this.pin.setScale(0.1)
    
    this.stand = this.add.sprite(w/2,0.96*h,'stand')
    this.stand.setScale(0.1)


    //eventlistener
    this.input.on("pointerdown",spinwheel,this)

    //create text obj
    font_style = {
        font: "bold 10pt Roboto",
        align: "center",
        ccolor: "red",
    }
    this.game_text = this.add.text(10,10,"Welcome to spin and win",font_style)
}


function update() {
    console.log("Inside update");
    this.wheel.angle += 2
}

function spinwheel() {
    console.log("mouse clicked");
    console.log("Start spin");
    this.game_text.setText("You clicked the mouse")
}
