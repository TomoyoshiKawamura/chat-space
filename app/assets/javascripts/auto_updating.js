$(function(){

  var commentList = $(".messages")

  function buildHTML(message){
    var html = `
                  <div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                  <div class="upper-message__user-name">
                  ${message.name}
                  </div>
                  <div class="upper-message__date">
                  2018/10/06 06:17
                  </div>
                  </div>
                  <div class="lower-meesage">
                  <p class="lower-message__content">
                  ${message.content}
                  </p>

                  </div>
                  </div>
    `
    return html

  }

    setInterval(function() {
    $.ajax({
      get: location.href,
      dataType: 'json'
    })
    .done(function(data) {
      var id = $('.message').last().data('message-id');
      var insertHTML = '';
      data.forEach(function(message){
        if(message.id > id){
        insertHTML += buildHTML(message);
       commentList.append(insertHTML);
     }

      });
    })
    .fail(function() {

    });
  }, 1000 );
});
