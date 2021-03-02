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
}

function create() {
    console.log("Create");
}

function update() {
    console.log("Inside update");
}

