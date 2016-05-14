class AddUserToInterestLocations < ActiveRecord::Migration
  def change
    add_reference :interest_locations, :user, index: true, foreign_key: true
  end
end
