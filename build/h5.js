const fs = require('fs');
var path = require('path');

var result = "";

var dir = path.resolve(__dirname, '../h5');
readDirSync(dir);
function readDirSync(path) {
    var pa = fs.readdirSync(path);
    result += "<ul>\n";
    pa.forEach (function(item,index) {
        var info = fs.statSync(path + "/" + item);
        if (info.isDirectory()) {
            result += "<li><span>" + item + "</span>\n";
            readDirSync(path + "/" + item);
            result += "<li><span>" + item + "</span>\n";
        } else {
            result += `<li>${item}</li>\n`;
        }
    });
    result += "</ul>\n";
}

fs.writeFile(path.resolve(__dirname, '../dist/h5.html'), result,function(err) {

});

