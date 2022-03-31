class Employee < ApplicationRecord
    belongs_to :user

    validates_presence_of :name, :age, :status, :gender

    def self.by_ages
        employees = Employee.all.order(age: :asc)
    end
end
