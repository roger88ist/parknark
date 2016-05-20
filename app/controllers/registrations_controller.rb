class RegistrationsController < Devise::RegistrationsController

  # def new
  #   @all = Sighting.all
  #   gon.array_of_cor = @all.map do |element|
  #     [element.latitude, element.longitude]
  #   end
  #   super
  # end

  private

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation, :phone)
  end

  def account_update_params
    params.require(:user).permit(:email, :password, :password_confirmation, :current_password, :phone)
  end
end