class Employee < ApplicationRecord
    belongs_to :user

    valdidates_presence_of :name, :status, :breed
end
