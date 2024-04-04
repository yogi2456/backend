const EventEmitter = require("events")


const event = new EventEmitter();

const hellohandlerfunction = () => {
    console.log("Hello")
}

const byehandlerfunction = () => {
    console.log("Bye")
}

event.on("HelloEvent", hellohandlerfunction)

event.on("ByeEvent", byehandlerfunction)

event.emit("HelloEvent")

event.emit("ByeEvent")