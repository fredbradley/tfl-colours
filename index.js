function addCss(filename) {
    var head = document.head;
    var link = document.createElement('link');

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = filename;

    head.appendChild(link);
}

addCss('node_modules/@fredbradley/tfl-colours/build/css/style.css');
