var myform = $("form#form-contact");
myform.submit(function(event){
  event.preventDefault();
  var params = myform.serializeArray().reduce(function(obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});
  var service_id = "default_service";
  var template_id = "template_Up4cDo4h";
  myform.find("button").text("Отправка...");
  emailjs.send(service_id, template_id, params)
    .then(function(){
      alert("Спасибо! Письмо отправлено!");
      myform.find("button").text("Отправлено");
    }, function(err) {
      alert("Не удалось отправить письмо!\r\n Ответ:\n " + JSON.stringify(err));
      myform.find("button").text("Send");
    });
  return false;
});
