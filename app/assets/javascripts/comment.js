$(function(){
  function buildHTML(message){
    var html = `<div class="message">
<div class="upper-message">
<div class="upper-message__user-name">
${message.user_name}
</div>
<div class="upper-message__date">
2018/10/06 07:46
</div>
</div>
<div class="lower-meesage">
<p class="lower-message__content">
${message.content}
</p>
</div>
</div>`
$('.messages').append(html)
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType:false,
    })
    .done(function(data){
      buildHTML(data);
      $('.form__message').val('')
      $('.form__submit').prop('disabled',false)
    })
    .fail(function(){
      alert('error');
    })
  });
});
