const reproductor = { 
    play: function (song) {
        console.log(`Playing: ${song}`);
    }
}

const stopping = () => {
    console.log("Stopping...");
}

reproductor.stop = stopping;


console.log(reproductor.play("La camisa negra"));
console.log(reproductor.stop());