require 'test_helper'

class InterestLocationsControllerTest < ActionController::TestCase
  setup do
    @interest_location = interest_locations(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:interest_locations)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create interest_location" do
    assert_difference('InterestLocation.count') do
      post :create, interest_location: { latitude: @interest_location.latitude, longitude: @interest_location.longitude, radius: @interest_location.radius }
    end

    assert_redirected_to interest_location_path(assigns(:interest_location))
  end

  test "should show interest_location" do
    get :show, id: @interest_location
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @interest_location
    assert_response :success
  end

  test "should update interest_location" do
    patch :update, id: @interest_location, interest_location: { latitude: @interest_location.latitude, longitude: @interest_location.longitude, radius: @interest_location.radius }
    assert_redirected_to interest_location_path(assigns(:interest_location))
  end

  test "should destroy interest_location" do
    assert_difference('InterestLocation.count', -1) do
      delete :destroy, id: @interest_location
    end

    assert_redirected_to interest_locations_path
  end
end
