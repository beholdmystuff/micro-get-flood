var http = require("http");
let interval = 50;
let target = "https://yandex.ru/search/?text=" + encodeURI("путин+лжет");
let targetHost = "yandex.ru";
let proxy = "localhost";
let port = 8888;

var options = {
  host: proxy,
  port: port,
  path: target,
  headers: {
    Host: targetHost
  }
};

function go()
{
    http.get(options, function(res)
    {
        setTimeout(go, interval);
    });
}

go();
