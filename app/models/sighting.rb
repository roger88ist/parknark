class Sighting < ActiveRecord::Base
	belongs_to :user

	ALERT_MESSAGE = "Meter maid is around".freeze

	def notify
		@interest_locations = InterestLocation.all
		@interest_locations.each do |interest_location|
			dist = find_distance([self.latitude, self.longitude], [interest_location.latitude, interest_location.longitude])
			if interest_location.radius > dist
				# send_message(interest_location.user.try(:phone_number), ALERT_MESSAGE)
				send_message("+17049955069", ALERT_MESSAGE)
			end
		end
	end

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
			if distance < 1
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
	private
	def send_message(phone_number, alert_message)
		account_sid = ENV['TWILIO_ACCOUNT_SID']
		auth_token = ENV['TWILIO_AUTH_TOKEN']

		# set up a client to talk to the Twilio REST API
		@client = Twilio::REST::Client.new account_sid, auth_token

		@twilio_number = ENV['TWILIO_NUMBER']
		@client.account.messages.create({
			:from => @twilio_number,
			:to => phone_number,
			:body => alert_message
		});
	end

end
