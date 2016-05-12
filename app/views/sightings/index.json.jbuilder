json.array!(@sightings) do |sighting|
  json.extract! sighting, :id
  json.url sighting_url(sighting, format: :json)
end
