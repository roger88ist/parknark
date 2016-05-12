class CreateSightings < ActiveRecord::Migration
  def change
    create_table :sightings do |t|
      t.string :day
      t.float :latitude
      t.float :longitude

      t.timestamps null: false
    end
  end
end
