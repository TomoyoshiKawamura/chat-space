json.array! @messages.each do |message|
  json.id                      message.id
  json.content            message.content
  json.image                message.image
  json.group_image       message.group_id
  json.user_id            message.user_id
  json.name             message.user.name
end
