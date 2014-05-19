require "securerandom"
require "csv"

class Project < ActiveRecord::Base
	attr_accessible :email0, :email1, :email2, :email3, :email4, :gende3, :gender0, :gender1, :gender2, :gender4, :is_tech, :major0, :major1, :major2, :major3, :major4, :mobile0, :mobile1, :mobile2, :mobile3, :mobile4, :name0, :name1, :name2, :name3, :name4, :project_abstract, :project_category, :project_details, :project_meaning, :project_name, :project_schedule, :project_target, :qq0, :qq1, :qq2, :qq3, :qq4, :school0, :school1, :school2, :school3, :school4, :uuid
	before_create :generate_uuid

	def self.to_csv(options = {})
		CSV.generate(options) do |csv|
			csv << column_names
			all.each do |item|
				csv << item.attributers.values_at(*column_names)
			end
		end
	end

	private
	def generate_uuid
		self.uuid = SecureRandom.uuid
	end
end
