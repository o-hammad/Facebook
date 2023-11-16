class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)

        if @post.save
            render :show
        else
            render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        
    end

    def update

    end

    def destroy

    end

    private

    def post_params
        params.require(:post).permit(:poster_id, :postee_id, :body)
    end
end