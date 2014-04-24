var domReady = require('domready')
domReady(function() {
    var container = document.getElementById('container')
    container.innerHTML = "<p>Hello world</p>"
})