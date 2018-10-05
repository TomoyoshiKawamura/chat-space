class MessagesController < ApplicationController
  def index
    @group_id = params[:group_id]
  end
end
