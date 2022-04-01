class Employee < ApplicationRecord
    belongs_to :user

    validates :name, presence:true
    validates :age, presence: true
    validates :status, presence: true
    validates :gender, presence: true

    def self.by_ages
        employees = Employee.all.order(age: :asc)
    end


    def self.by_names
        employees = Employee.all.order(name: :asc)
    end
end
