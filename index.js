function addCss(filename) {
    var head = document.head;
    var link = document.createElement('link');

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = filename;

    head.appendChild(link);
}

addCss('https://cdn.jsdelivr.net/gh/fredbradley/tfl-colours/build/css/style.css');
