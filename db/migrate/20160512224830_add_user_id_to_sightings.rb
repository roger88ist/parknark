class AddUserIdToSightings < ActiveRecord::Migration
  def change
    add_column :sightings, :user_id, :integer
  end
end
