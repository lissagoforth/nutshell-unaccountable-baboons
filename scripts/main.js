const setVisibility = require("./setVisibility")
const addeventlisteners = require("./addeventlisteners")
const addeventchathandler = require("./chat/addEventHandlerChat")
const addeventtaskhandler = require("./tasks/addEventHandlerTasks")
const addeventarticleshandler = require("./articles/addEventHandlerArticles")
const addeventeventlistener = require("./event/addEventListenerEvent")
const displayOnline = require("./Friends/displayfriends")

setVisibility(document.querySelector(".login"), "show")
