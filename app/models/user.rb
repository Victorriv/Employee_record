class User < ApplicationRecord
    has_many :employees
    validates :username, presence: true, uniqueness: true
end
