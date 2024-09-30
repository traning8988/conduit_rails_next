module Api
  class AuthenticationController < ApplicationController
    def login
      @user = User.find_by(email: params[:user][:email])
      if @user&.authenticate(params[:user][:password])
        token = create_token(@user.id)
        render json: {user: {email: @user.email, token: token, username: @user.username}}, status: :ok
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end
  end
end