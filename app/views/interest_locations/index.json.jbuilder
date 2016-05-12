json.array!(@interest_locations) do |interest_location|
  json.extract! interest_location, :id, :latitude, :longitude, :radius
  json.url interest_location_url(interest_location, format: :json)
end
