class Api::UsersController < ApplicationController
    def create

    end

    private 

    def user_params
        params.require(:user).permit(:work, :education, :about_me, :first_name, :last_name, :sex, :email, :date_of_birth)
    end
end
