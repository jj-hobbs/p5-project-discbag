# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'


20.times{
    User.create(
        name: Faker::Name.name,
        email: Faker::Internet.email,
        username: Faker::Lorem.word, 
        password: Faker::Lorem.word, 
        admin: Faker::Boolean.boolean(true_ratio: 0.2)
    )
}

52.times{
    Disc.create(
        brand: "Discraft", 
        mold: Faker::Company.name, 
        image: "https://www.discraft.com/product/image/medium/bzbuzzz_2.jpg",
        speed: Faker::Number.between(from: 1, to: 13),
        glide: Faker::Number.between(from: 1, to: 6),
        turn: Faker::Number.between(from: -5, to: 1),
        fade: Faker::Number.between(from: 0, to: 5),
        description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
    )
}

10.times{
    Bag.create(
        name: Faker::Adjective.positive,
        user_id: User.all.ids.sample, 
        disc_id: Disc.all.ids.sample,
    )
}