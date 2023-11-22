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
    profile_image: "https://facebook85-seeds.s3.amazonaws.com/blank-head-profile-pic-for-a-man.jpg",
    cover_photo: "https://facebook85-seeds.s3.amazonaws.com/pexels-leah-kelley-3935703.jpg"
  )

  # More users
  10.times do 
    User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password',
      birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: ["M", "F"].sample,
      profile_image: "https://facebook85-seeds.s3.amazonaws.com/blank-head-profile-pic-for-a-man.jpg",
      cover_photo: "https://facebook85-seeds.s3.amazonaws.com/pexels-leah-kelley-3935703.jpg"
    }) 
  end

  Post.create!({
    poster_id: 1, 
    postee_id: 2,
    body: "Welcome to Facebook!"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 3,
    body: "Welcome to Facebook!"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 4,
    body: "Welcome to Facebook!"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 5,
    body: "Welcome to Facebook!"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 6,
    body: "Welcome to Facebook!"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 7,
    body: "Welcome to Facebook!"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 8,
    body: "Welcome to Facebook!"
  })

  Post.create!({
    poster_id: 1, 
    postee_id: 9,
    body: "Welcome to Facebook!"
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
    friendee_id: 9
  })

  Friend.create!({
    friender_id: 8, 
    friendee_id: 10
  })

  puts "Done!"