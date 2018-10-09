$(function() {

var user_list = $(".chat-group-user__name ")

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
    // console.log(input);
        $.ajax({
      type: 'GET',
      url: '/users/',
      data: { keyword: input },
      dataType: 'json'
    })
        .done(function(users){
        $(".chat-group-user__name").empty();
          if(users.length !== 0){
            users.forEach(function(user){
              appendList(user);
            });
          }
          else{
            console.log("nothing")
          }
        })
  });
});
