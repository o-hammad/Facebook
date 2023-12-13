class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']
  
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/sessions/show"
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find_by(id: params[:id]);

    render :show
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :birthday, :gender, :profile_image, :cover_photo)
  end
end
    