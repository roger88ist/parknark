class CreateInterestLocations < ActiveRecord::Migration
  def change
    create_table :interest_locations do |t|
      t.float :latitude
      t.float :longitude
      t.integer :radius

      t.timestamps null: false
    end
  end
end
