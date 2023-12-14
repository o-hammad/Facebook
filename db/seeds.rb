require "open-uri"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Friend.destroy_all
  Post.destroy_all
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('posts')
  ApplicationRecord.connection.reset_pk_sequence!('friends')
end

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  demo = User.create!(
    first_name: "Demo",
    last_name: "Lition",
    email: 'demo@user.io', 
    password: 'password',
    birthday: '1985-10-08',
    gender: "M",
    profile_image: "https://facebook85-seeds.s3.amazonaws.com/Avatar1.png",
    cover_photo: "https://facebook85-seeds.s3.amazonaws.com/Background1.jpg"
  )

  # More users

  User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password',
      birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: ["M", "F"].sample,
      profile_image: "https://facebook85-seeds.s3.amazonaws.com/Avatar2.png",
      cover_photo: "https://facebook85-seeds.s3.amazonaws.com/Background2.jpg"
  }) 

  User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password',
      birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: ["M", "F"].sample,
      profile_image: "https://facebook85-seeds.s3.amazonaws.com/Avatar3.png",
      cover_photo: "https://facebook85-seeds.s3.amazonaws.com/Background3.jpg"
  }) 

  User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password',
      birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: ["M", "F"].sample,
      profile_image: "https://facebook85-seeds.s3.amazonaws.com/Avatar4.png",
      cover_photo: "https://facebook85-seeds.s3.amazonaws.com/Background4.jpg"
  }) 

   User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password',
      birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: ["M", "F"].sample,
      profile_image: "https://facebook85-seeds.s3.amazonaws.com/Avatar5.png",
      cover_photo: "https://facebook85-seeds.s3.amazonaws.com/Background5.jpg"
  })

  User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password',
      birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: ["M", "F"].sample,
      profile_image: "https://facebook85-seeds.s3.amazonaws.com/Avatar6.png",
      cover_photo: "https://facebook85-seeds.s3.amazonaws.com/Background6.jpg"
  })

  User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password',
      birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: ["M", "F"].sample,
      profile_image: "https://facebook85-seeds.s3.amazonaws.com/Avatar7.png",
      cover_photo: "https://facebook85-seeds.s3.amazonaws.com/Background7.jpg"
  })

  User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password',
      birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: ["M", "F"].sample,
      profile_image: "https://facebook85-seeds.s3.amazonaws.com/Avatar8.png",
      cover_photo: "https://facebook85-seeds.s3.amazonaws.com/Background8.jpg"
  })

  User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password',
      birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: ["M", "F"].sample,
      profile_image: "https://facebook85-seeds.s3.amazonaws.com/Avatar9.png",
      cover_photo: "https://facebook85-seeds.s3.amazonaws.com/Background9.jpg"
  })

  User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password',
      birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: ["M", "F"].sample,
      profile_image: "https://facebook85-seeds.s3.amazonaws.com/Avatar10.png",
      cover_photo: "https://facebook85-seeds.s3.amazonaws.com/Background10.jpg"
  })

  User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password',
      birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: ["M", "F"].sample,
      profile_image: "https://facebook85-seeds.s3.amazonaws.com/Avatar11.png",
      cover_photo: "https://facebook85-seeds.s3.amazonaws.com/Background11.jpg"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 2,
    body: "Hey, long time no speak!  Let me know how everything is going!"
  })

  Post.create!({
    poster_id: 2, 
    postee_id: 1,
    body: "Great party last night!  Thanks for inviting me!"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 3,
    body: "When are you coming back to the city?"
  })

   Post.create!({
    poster_id: 3, 
    postee_id: 1,
    body: "Did you watch the game yesterday?"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 4,
    body: "Tell Cindy and the kids I say hello!"
  })

  Post.create!({
    poster_id: 4, 
    postee_id: 1,
    body: "Will be out of town for Christmas, will let you know when I'm back!"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 5,
    body: "You going to the Knicks game next week?"
  })

  Post.create!({
    poster_id: 5, 
    postee_id: 1,
    body: "Great show last night!"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 6,
    body: "How's your week going?"
  })

  Post.create!({
    poster_id: 6, 
    postee_id: 1,
    body: "You think you'll be back in time for my party?"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 7,
    body: "I don't think I'll be able to make it next week, sorry!"
  })

  Post.create!({
    poster_id: 7, 
    postee_id: 1,
    body: "Welcome to Facemash!"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 8,
    body: "I'm moving next week, will send you my details so we can keep in touch!"
  })

  Post.create!({
    poster_id: 8, 
    postee_id: 1,
    body: "Have a safe trip, will definately keep in touch!"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 9,
    body: "Welcome to Facebook!"
  })

  Post.create!({
    poster_id: 9, 
    postee_id: 1,
    body: "Welcome back!"
  })

  Friend.create!({
    friender_id: 1, 
    friendee_id: 2,
  })

  Friend.create!({
    friender_id: 1, 
    friendee_id: 3,
  })

  Friend.create!({
    friender_id: 1, 
    friendee_id: 4,
  })

  Friend.create!({
    friender_id: 1, 
    friendee_id: 5,
  })

  Friend.create!({
    friender_id: 1, 
    friendee_id: 6
  })

  Friend.create!({
    friender_id: 1, 
    friendee_id: 7
  })

  Friend.create!({
    friender_id: 1, 
    friendee_id: 8
  })

  Friend.create!({
    friender_id: 1, 
    friendee_id: 9
  })

  Friend.create!({
    friender_id: 1, 
    friendee_id: 10
  })

  Friend.create!({
    friender_id: 2, 
    friendee_id: 1
  })

  Friend.create!({
    friender_id: 2, 
    friendee_id: 3
  })

  Friend.create!({
    friender_id: 2, 
    friendee_id: 4
  })

  Friend.create!({
    friender_id: 2, 
    friendee_id: 5
  })

  Friend.create!({
    friender_id: 2, 
    friendee_id: 6
  })

  Friend.create!({
    friender_id: 2, 
    friendee_id: 7
  })

  Friend.create!({
    friender_id: 2, 
    friendee_id: 8
  })

  Friend.create!({
    friender_id: 2, 
    friendee_id: 9
  })

  Friend.create!({
    friender_id: 2, 
    friendee_id: 10
  })

  Friend.create!({
    friender_id: 3, 
    friendee_id: 1
  })

  Friend.create!({
    friender_id: 3, 
    friendee_id: 2
  })

  Friend.create!({
    friender_id: 3, 
    friendee_id: 4
  })

  Friend.create!({
    friender_id: 3, 
    friendee_id: 5
  })

  Friend.create!({
    friender_id: 3, 
    friendee_id: 6
  })

  Friend.create!({
    friender_id: 3, 
    friendee_id: 7
  })

  Friend.create!({
    friender_id: 3, 
    friendee_id: 8
  })

  Friend.create!({
    friender_id: 3, 
    friendee_id: 9
  })

  Friend.create!({
    friender_id: 3, 
    friendee_id: 10
  })

  Friend.create!({
    friender_id: 4, 
    friendee_id: 1
  })

  Friend.create!({
    friender_id: 4, 
    friendee_id: 2
  })

  Friend.create!({
    friender_id: 4, 
    friendee_id: 3
  })

  Friend.create!({
    friender_id: 4, 
    friendee_id: 5
  })

  Friend.create!({
    friender_id: 4, 
    friendee_id: 6
  })

  Friend.create!({
    friender_id: 4, 
    friendee_id: 7
  })

  Friend.create!({
    friender_id: 4, 
    friendee_id: 8
  })

  Friend.create!({
    friender_id: 4, 
    friendee_id: 9
  })

  Friend.create!({
    friender_id: 4,
    friendee_id: 10
  })

  Friend.create!({
    friender_id: 5,
    friendee_id: 1,
  })

  Friend.create!({
    friender_id: 5, 
    friendee_id: 2
  })

  Friend.create!({
    friender_id: 5, 
    friendee_id: 3
  })

  Friend.create!({
    friender_id: 5, 
    friendee_id: 4
  })

  Friend.create!({
    friender_id: 5, 
    friendee_id: 6
  })

  Friend.create!({
    friender_id: 5, 
    friendee_id: 7
  })

  Friend.create!({
    friender_id: 5, 
    friendee_id: 8
  })

  Friend.create!({
    friender_id: 5, 
    friendee_id: 9
  })

  Friend.create!({
    friender_id: 5, 
    friendee_id: 10
  })

  Friend.create!({
    friender_id: 6, 
    friendee_id: 1
  })

  Friend.create!({
    friender_id: 6, 
    friendee_id: 2
  })

  Friend.create!({
    friender_id: 6, 
    friendee_id: 3
  })

  Friend.create!({
    friender_id: 6, 
    friendee_id: 4
  })

  Friend.create!({
    friender_id: 6, 
    friendee_id: 5
  })

  Friend.create!({
    friender_id: 6, 
    friendee_id: 7
  })

  Friend.create!({
    friender_id: 6, 
    friendee_id: 8
  })

  Friend.create!({
    friender_id: 6, 
    friendee_id: 9
  })

  Friend.create!({
    friender_id: 6,
    friendee_id: 10
  })

  Friend.create!({
    friender_id: 7, 
    friendee_id: 1
  })

  Friend.create!({
    friender_id: 7, 
    friendee_id: 2
  })

  Friend.create!({
    friender_id: 7, 
    friendee_id: 3
  })

  Friend.create!({
    friender_id: 7, 
    friendee_id: 4
  })

  Friend.create!({
    friender_id: 7, 
    friendee_id: 5
  })

  Friend.create!({
    friender_id: 7, 
    friendee_id: 6
  })


  Friend.create!({
    friender_id: 7, 
    friendee_id: 8
  })

  Friend.create!({
    friender_id: 7, 
    friendee_id: 9
  })

  Friend.create!({
    friender_id: 7, 
    friendee_id: 10
  })

  Friend.create!({
    friender_id: 8, 
    friendee_id: 1
  })

  Friend.create!({
    friender_id: 8, 
    friendee_id: 2
  })

  Friend.create!({
    friender_id: 8, 
    friendee_id: 3
  })

  Friend.create!({
    friender_id: 8, 
    friendee_id: 4
  })

  Friend.create!({
    friender_id: 8, 
    friendee_id: 5
  })

  Friend.create!({
    friender_id: 8, 
    friendee_id: 6
  })

  Friend.create!({
    friender_id: 8, 
    friendee_id: 7
  })

  Friend.create!({
    friender_id: 8, 
    friendee_id: 9
  })

  Friend.create!({
    friender_id: 8, 
    friendee_id: 10
  })

  puts "Done!"