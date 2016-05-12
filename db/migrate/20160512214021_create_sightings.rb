class CreateSightings < ActiveRecord::Migration
  def change
    create_table :sightings do |t|

      t.timestamps null: false
    end
  end
end
