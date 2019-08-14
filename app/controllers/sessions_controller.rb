# frozen_string_literal: true

class SessionsController < ApplicationController
  def new; end

  def create
    @user = User.find_by(email: params[:session][:email].downcase)
    authenticate
  end

  def destroy
    log_out
    redirect_to root_url
  end

  private

  def authenticate
    if @user&.authenticate(params[:session][:password])
      log_in @user
      redirect_to posts_path
      flash[:success] = "Welcome back, #{@user.username}"
    else
      flash[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end
end
