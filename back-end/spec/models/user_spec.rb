require 'rails_helper' 

RSpec.describe User, :type => :model do 
   it "é válido quando nome, último nome e email estão presentes" do 
  	user = User.new( 
			name: 'Bruce Dickinson',  
   		email: 'bruce@ironmaiden.com',
	 		password: '123456789') 
   
   expect(user).to be_valid 
  end 

 	it "é invalido sem o email" do 
  	user = User.new(email: nil) 
  	user.valid?   
  expect(user.errors[:email]).to include("can't be blank") 
 end  
 
 it "é inválido caso já exista um e-mail igual" do 
  user = User.create( 
		name: 'Steve', 
    email: 'contato@ironmaiden.com',
		password: '1123456789' ) 
  user = User.new( 
		name: 'Bruce', 
    email: 'contato@ironmaiden.com',
	  password: '123456789' ) 
  user.valid? 
  expect(user.errors[:email]).to include('has already been taken')
 end 

end