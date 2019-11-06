class Api::UsersController < ApplicationController

    before_action :require_login, only: [:update]

    def create
        debugger
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user.update(change_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
        
    end

    private 

    def user_params
        params.require(:user).permit(:work, :password, :education, :about_me, :first_name, :last_name, :sex, :email, :date_of_birth)
    end

    def change_params
        params.require(:user).permit(:work, :education, :about_me)
    end
end
