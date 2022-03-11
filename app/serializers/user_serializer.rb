class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :employees, serializer: EmployeeSerializer
end
