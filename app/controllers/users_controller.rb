class UsersController < ApplicationController

        def index
            users = User.all
            render json: users

        end



        #sign up 
        def create
            user = User.create(user_params)
            render json: user

        end






        private

        def user_params
            params.permit(:username, :password)

        end
end
