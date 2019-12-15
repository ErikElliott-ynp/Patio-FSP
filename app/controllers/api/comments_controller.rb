class Api::CommentsController < ApplicationController
    before_action :underscore_params!, only: :create
    before_action :require_login

    def index
        search = params.dig(:comment, :post_id)
        @comments = Comment.where('post_id = ?', search)
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        id = params.dig(:id)
        @comment = Comment.find_by(id: id)
        
        if @comment && @comment.author_id == current_user.id && @comment.update(change_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        id = params.dig(:id)
        @comment = Comment.find_by(id: id)

        if @comment && @comment.destroy
            render json: {}
        else
            render json: ["Post not found"], status: 404
        end

    end

    private 
    
    def comment_params
        params.require(:comment).permit(:body, :post_id)
    end

    def change_params
        params.require(:comment).permit(:body)
    end
end
