const http = require('http');
const dateTimeET = require('./src/dateTimeET.js');

const pageHead = '<!DOCTYPE html><html lang="et"><head><meta charset="UTF-8"><title>Veebiserver</title></head><body>';
const pageBody = '\t<h1>Sofia Jürgenson, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna Ülikoolis</a> ning ei sislda tõsiseltvõetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(pageHead);
    res.write(pageBody);
    res.write('\n\t<p>Leht avati: ' + dateTimeET.day() + ', ' + dateTimeET.date() + ', kell ' + dateTimeET.time() + '.</p>');
    res.write('\n\t<p>Rahvakalendri järgi: ' + dateTimeET.day() + ', ' + dateTimeET.date(1) + ', kell ' + dateTimeET.time() + '.</p>');
    res.write(pageFoot);
    return res.end();
}).listen(5215);