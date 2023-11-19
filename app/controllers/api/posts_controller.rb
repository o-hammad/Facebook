class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)

        if @post.save
            render :show
        else
            render json: { errors: @post.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @post = Post.find_by(id: params[:id])

        if @post.update(post_params)
            render :show
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])

        @post.destroy
    end

    private

    def post_params
        params.require(:post).permit(:poster_id, :postee_id, :body)
    end
end