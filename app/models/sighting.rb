class Sighting < ActiveRecord::Base
	belongs_to :user


	def self.get_cordinates(arr)
		arr.map do |element|
			[element.latitude, element.longitude]
		end
	end

	def to_radians(degree)
		degree * Math::PI / 180
	end

	def find_distance(last_post, user_settings)
		r = 6373
		dlon = to_radians(user_settings[1] - last_post[1])
		dlat = to_radians(user_settings[0] - last_post[0])
		a = (Math.sin(dlat/2) * Math.sin(dlat/2)) + (Math.cos(to_radians(last_post[0])) * Math.cos(to_radians(user_settings[0])) * (Math.sin(dlon/2) * Math.sin(dlon/2)))
		c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
		d = r * c
	end

	def target_users(array1, array2)
		users = []
		array2.each do |instance|
			distance = find_distance(array1, [instance.latitude, instance.longitude])
			# 0.402 km equals 1/4 mile. 
			# This will be the radius for now.
			# the circle on interest_locations map reflects that as it is set to 531
			if distance < (0.402)
				users.push(instance.user_id)
			end
		end
		users.uniq
	end

	def send_email(array)
		puts "*********************************"
		array.each do |x|
			person = User.find(x)
			puts "Send an email to #{person.email}"
		end
		puts "USERS IS: #{array}"
		puts "*********************************"
	end

end
