class InterestLocation < ActiveRecord::Base
	belongs_to :user

	def self.get_cordinates(arr)

		arr.map do |element|
			[element.latitude, element.longitude]
		end

	end
end
