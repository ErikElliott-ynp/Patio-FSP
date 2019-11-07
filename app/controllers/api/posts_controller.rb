class Api::PostsController < ApplicationController

    def index 
        @posts = Post.where('author_id = ?', current_user.id)    
        render :index
    end

    def show
        @post = Post.find_by(id: params[:id])
        if @post
            render :show
        else
            render json: ["Post not found"], status: 404
        end
    end

    def create

    end

    private

    def post_params

end
