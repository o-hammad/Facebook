class Api::FriendsController < ApplicationController
    def create
        @friendship = Friend.new([{friender_id: params[:friender_id], friendee_id: params[:friendee_id]}, {friender_id: params[:friendee_id], friendee_id: params[:friender_id]}])

        if @friendship.save
            render :show
        end
    end

    def destroy
        @friendship = Friend.find_by(id: params[:id])

        @friendship.destroy
    end

    private

    def friends_params
        params.require(:friend).permit(:friender_id, :friendee_id)
    end
end