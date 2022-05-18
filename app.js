// Для обработки данных по определенному маршруту можно использовать ряд функций, в частности:

// use

// get

// post

// put

// delete

// Символы подстановок
// Используемые шаблоны адресов могут содержать регулярные выражения или специальные символы подстановок. В частности, мы можем использовать такие символы, как ?, +, * и ().
// К примеру, символ ? указывает, что предыдущий символ может встречаться 1 раз или отсутствовать.
// Символ + указывает, что предыдущий символ может встречаться 1 и более раз:
// Символ звездочка * указывает, что на месте данного символа может находиться любое количество символов:
// Скобки () позволяют оформить группу символов, которые могут встречаться в запросе:



// const express = require("express");
// const app = express();
 
// // обработка запроса по адресу /about
// app.get("/about", function(request, response){
     
//     response.send("<h1>О сайте</h1>");
// });
 
// // обработка запроса по адресу /contact
// app.use("/contact", function(request, response){
     
//     response.send("<h1>Контакты</h1>");
// });
 
// // обработка запроса к корню веб-сайта
// app.get("/", function(request, response){
     
//     response.send("<h1>Главная страница</h1>");
// });

// // Также вместо определения маршрутов мы можем указывать регулярные выражения. Например, необходимо перехватить запрос ко всем файлам html или всем путям, которые в конце имеют ".html":
// app.get(/.*(\.)html$/, function (request, response) {
//     response.send(request.url)
// });
// app.listen(3000);


// В данном случае при обращении по пути "/index" будет идти переадресация на сайт
// const express = require("express");
// const app = express();
 
// app.use("/index",function (request, response) {
//   response.redirect("https://google.com")
// });
 
// app.listen(3000);




// Здесь с ресурса "/home/bar" также идет переадресация на ресурс "about", однако в реальности теперь это будет не http://localhost:3000/about, а http://localhost:3000/home/about. То есть мы как-бы поднимаемся на один уровень вверх - с "home/bar" на "home/" и затем к нему добавляется "about".
const express = require("express");
const app = express();
 
app.use("/home/bar",function (request, response) {
  response.redirect("about")
});
app.use("/home/about", function (request, response) {
  response.send("<h1>About</h1>");

//   Переадресация на уровень выше:
  app.use("/home/foo/bar",function (request, response) {
    response.redirect(".")
  });
//   Переадресация на два уровня выше:
  app.use("/home/foo/bar",function (request, response) {
    response.redirect("..")
  });


});
 
app.listen(3000);