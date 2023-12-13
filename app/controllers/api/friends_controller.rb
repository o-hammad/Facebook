class Api::FriendsController < ApplicationController
    def create
        @friendship = Friend.create({friender_id: params[:friender_id], friendee_id: params[:friendee_id]})
        @friendship_backwards = Friend.create({friender_id: params[:friendee_id], friendee_id: params[:friender_id]})
        
        # @friend = User.find_by(id: params[:friender_id])

        render :show
    end

    def destroy
        @friendship = Friend.find_by(friender_id: params[:user_id], friendee_id: params[:current_user_id])
        @friendship_backwards = Friend.find_by(friender_id: params[:current_user_id], friendee_id: params[:user_id])

        @friendship.destroy
        @friendship_backwards.destroy
        
        # @friend = User.find_by(id: params[:current_user_id])
   
        render :show
    end

    private

    def friends_params
        params.require(:friend).permit(:friender_id, :friendee_id)
    end
end