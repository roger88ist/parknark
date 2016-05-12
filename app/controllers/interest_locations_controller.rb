class InterestLocationsController < ApplicationController
  before_action :set_interest_location, only: [:show, :edit, :update, :destroy]

  # GET /interest_locations
  # GET /interest_locations.json
  def index
    @interest_locations = InterestLocation.all
  end

  # GET /interest_locations/1
  # GET /interest_locations/1.json
  def show
  end

  # GET /interest_locations/new
  def new
    @interest_location = InterestLocation.new
  end

  # GET /interest_locations/1/edit
  def edit
  end

  # POST /interest_locations
  # POST /interest_locations.json
  def create
    @interest_location = InterestLocation.new(interest_location_params)

    respond_to do |format|
      if @interest_location.save
        format.html { redirect_to @interest_location, notice: 'Interest location was successfully created.' }
        format.json { render :show, status: :created, location: @interest_location }
      else
        format.html { render :new }
        format.json { render json: @interest_location.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /interest_locations/1
  # PATCH/PUT /interest_locations/1.json
  def update
    respond_to do |format|
      if @interest_location.update(interest_location_params)
        format.html { redirect_to @interest_location, notice: 'Interest location was successfully updated.' }
        format.json { render :show, status: :ok, location: @interest_location }
      else
        format.html { render :edit }
        format.json { render json: @interest_location.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /interest_locations/1
  # DELETE /interest_locations/1.json
  def destroy
    @interest_location.destroy
    respond_to do |format|
      format.html { redirect_to interest_locations_url, notice: 'Interest location was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_interest_location
      @interest_location = InterestLocation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def interest_location_params
      params.require(:interest_location).permit(:latitude, :longitude, :radius)
    end
end
