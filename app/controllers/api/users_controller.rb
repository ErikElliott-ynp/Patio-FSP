class Api::UsersController < ApplicationController

    before_action :require_login, only: [:update]
    before_action :underscore_params!

    def create
        params[:user][:email].downcase!
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

    def show
        @user = User.find_by[id: params[:id]]
        if @user
            render :show
        else
            render json: ["User not Found"], status: 404
        end
    end

    private 

    def user_params
        params.require(:user).permit(:work, :password, :education, :about_me, :first_name, :last_name, :sex, :email, :date_of_birth)
    end

    def change_params
        params.require(:user).permit(:work, :education, :about_me)
    end


    def underscore_params!
        underscore_hash = -> (hash) do
            hash.transform_keys!(&:underscore)
            hash.each do |key, value|
            if value.is_a?(ActionController::Parameters)
                underscore_hash.call(value)
            elsif value.is_a?(Array)
                value.each do |item|
                next unless item.is_a?(ActionController::Parameters)
                underscore_hash.call(item)
                end
            end
            end
        end
        underscore_hash.call(params)
    end
   
end
