$(function() {

var user_list = $("#user-search-result")
var assign_user_list = $("#chat-group-users")

  function append_assign_list(user_id,user_name){
    var html = `
    <div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
      <input name='group[user_ids][]' type='hidden' value='${user_id}'>
      <p class='chat-group-user__name'>${user_name}</p>
      <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
    </div>
    `
    assign_user_list.append(html);
  }
  function appendList(user){
    var html = `
<div class="chat-group-user clearfix">
  <p class="chat-group-user__name">${user.name}</p>
  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
</div>
    `
    user_list.append(html);
  }
  $(".chat-group-form__search.clearfix").on("keyup", function() {
    var input = $("#user-search-field.chat-group-form__input").val();
        $.ajax({
      type: 'GET',
      url: '/users/',
      data: { keyword: input },
      dataType: 'json'
    })
        .done(function(users){
          if(users.length !== 0){
            users.forEach(function(user){
              appendList(user);
            });
          }
          else{
            console.log("nothing")
          }
        })
        .fail(function(){
    alert('検索に失敗しました');
        })
  });
  $('#user-search-result').on('click','.chat-group-user__btn--add',function(){
    var user_id = $(this).attr('data-user-id');
    var user_name = $(this).attr('data-user-name');
    append_assign_list(user_id,user_name);
    $(this).parent().remove();
  });

  $('#chat-group-users').on('click','.js-remove-btn',function(){
    $(this).parent().remove();
  })

});
