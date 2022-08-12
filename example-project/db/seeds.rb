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

Disc.create([
        {
            brand: "Discraft", 
            mold: "Anax", 
            image: "https://www.discraft.com/product/image/medium/mcbethanax_anax-green.png",
            speed: 10,
            glide: 6,
            turn: 0,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        }, 
        {
            brand: "Discraft", 
            mold: "APX", 
            image: "https://static.wixstatic.com/media/b32cf7_2684c97c597041869ff3383ea9f3d14a~mv2_d_1680_1680_s_2.png/v1/fill/w_1588,h_1568,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/bigz_undertaker.png",
            speed: 2,
            glide: 2,
            turn: -1,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Archer", 
            image: "https://www.discraft.com/product/image/medium/zarcher_max-br_1.jpg",
            speed: 5,
            glide: 4,
            turn: -4,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Avenger SS", 
            image: "https://www.discraft.com/product/image/medium/pmeavengerss_1.jpg",
            speed: 10,
            glide: 5,
            turn: -3,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Banger GT", 
            image: "https://www.discraft.com/product/image/medium/jbangergt_max-dk_1.jpg",
            speed: 2,
            glide: 3,
            turn: 0,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Buzzz", 
            image: "https://www.discraft.com/product/image/medium/bzbuzzz_2.jpg",
            speed: 5,
            glide: 4,
            turn: -1,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Buzzz OS", 
            image: "https://www.discraft.com/product/image/medium/zbuzzzos_max-br_1.jpg",
            speed: 5,
            glide: 4,
            turn: 0,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Buzzz SS", 
            image: "https://www.discraft.com/product/image/medium/tibuzzzss_max-br_1.jpg",
            speed: 5,
            glide: 4,
            turn: -2,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Captain's Raptor", 
            image: "https://otbdiscs.b-cdn.net/wp-content/uploads/2021/12/8e4ca15a-d090-6bc0-90cb-2918d68ce19d.png",
            speed: 9,
            glide: 3,
            turn: 1,
            fade: 4,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Challenger", 
            image: "https://www.discraft.com/product/image/medium/challenger_1.png",
            speed: 2,
            glide: 3,
            turn: 0,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
       
        {
            brand: "Discraft", 
            mold: "Challenger OS", 
            image: "https://www.discraft.com/product/image/medium/challengeros_1.png",
            speed: 2,
            glide: 3,
            turn: 0,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Challenger SS", 
            image: "https://www.discraft.com/product/image/medium/jchallengerss_max-dk_1.jpg",
            speed: 2,
            glide: 3,
            turn: -1,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Comet", 
            image: "https://www.discraft.com/product/image/medium/bzcomet_1.jpg",
            speed: 4,
            glide: 5,
            turn: -2,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Crank", 
            image: "https://www.discraft.com/product/image/medium/ecrank_max-br_1.jpg",
            speed: 13,
            glide: 5,
            turn: -2,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Crank SS", 
            image: "https://www.discraft.com/product/image/medium/zcrankss_max-br_1.jpg",
            speed: 13,
            glide: 5,
            turn: -3,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Fierce", 
            image: "https://www.discraft.com/product/image/medium/piercefierce_1.jpg",
            speed: 3,
            glide: 4,
            turn: -2,
            fade: 0,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Flick", 
            image: "https://www.discraft.com/product/image/medium/tiflick_max-br_1.jpg",
            speed: 12,
            glide: 3,
            turn: 1,
            fade: 5,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Focus", 
            image: "https://www.discraft.com/product/image/medium/jfocus_max-br_1.jpg",
            speed: 2,
            glide: 2,
            turn: -1,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Force", 
            image: "https://www.discraft.com/product/image/medium/zforce_1.png",
            speed: 12,
            glide: 5,
            turn: 0,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Glide", 
            image: "https://www.discraft.com/product/image/medium/zglide_max-br_1.jpg",
            speed: 6,
            glide: 5,
            turn: -3,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Hades", 
            image: "https://www.discraft.com/product/image/medium/mcbethbzhades_1.png",
            speed: 12,
            glide: 6,
            turn: -3,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Heat", 
            image: "https://www.discraft.com/product/image/medium/xheat_1.png",
            speed: 9,
            glide: 6,
            turn: -3,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Impact", 
            image: "https://static.wixstatic.com/media/b32cf7_9dc3f642f2da450382d18c0d5670bb90~mv2_d_1680_1680_s_2.png/v1/fill/w_1588,h_1568,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/bigz_undertaker.png",
            speed: 6,
            glide: 6,
            turn: -3,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Luna", 
            image: "https://www.discraft.com/product/image/medium/luna.22tour_ts-luna.png",
            speed: 3,
            glide: 3,
            turn: 0,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Machete", 
            image: "https://www.discraft.com/product/image/medium/zmachete_max-br_1.jpg",
            speed: 11,
            glide: 4,
            turn: 0,
            fade: 4,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Magnet", 
            image: "https://www.discraft.com/product/image/medium/softmagnet_soft-magnet-blue.jpg",
            speed: 2,
            glide: 3,
            turn: -1,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Malta", 
            image: "https://www.discraft.com/product/image/medium/mcbethmalta_malta1.jpg",
            speed: 5,
            glide: 4,
            turn: 1,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Mantis", 
            image: "https://www.discraft.com/product/image/medium/zmantis_1.png",
            speed: 8,
            glide: 4,
            turn: -2,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Meteor", 
            image: "https://www.discraft.com/product/image/medium/zmeteor_max-dk_1.jpg",
            speed: 5,
            glide: 5,
            turn: -3,
            fade: 0,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Nuke", 
            image: "https://www.discraft.com/product/image/medium/nuke.22tour_ts-nuke.png",
            speed: 13,
            glide: 5,
            turn: -1,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Nuke OS", 
            image: "https://www.discraft.com/product/image/medium/enukeos_1.jpg",
            speed: 13,
            glide: 4,
            turn: 0,
            fade: 4,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Nuke SS", 
            image: "https://www.discraft.com/product/image/medium/tinukess_max-br_1.jpg",
            speed: 13,
            glide: 5,
            turn: -3,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Passion", 
            image: "https://www.discraft.com/product/image/medium/pppassion.firstrun_1.png",
            speed: 8,
            glide: 5,
            turn: -1,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Predator", 
            image: "https://www.discraft.com/product/image/medium/bzpredator_1.jpg",
            speed: 9,
            glide: 4,
            turn: 1,
            fade: 4,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Raptor", 
            image: "https://www.discraft.com/product/image/medium/bzraptor_1.jpg",
            speed: 9,
            glide: 4,
            turn: 0,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Ringer", 
            image: "https://static.wixstatic.com/media/b32cf7_0a2b00e5eb8246328f794d4d739484c6~mv2_d_1680_1680_s_2.png/v1/fill/w_1588,h_1568,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/bigz_undertaker.png",
            speed: 4,
            glide: 4,
            turn: 0,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Ringer GT", 
            image: "https://www.discraft.com/product/image/medium/jringergt_max-br_1.jpg",
            speed: 4,
            glide: 4,
            turn: 0,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Roach", 
            image: "https://www.discraft.com/product/image/medium/roach_orange_roach_putterline.jpg",
            speed: 2,
            glide: 4,
            turn: 0,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Scorch", 
            image: "https://www.discraft.com/product/image/medium/escorch_1.png",
            speed: 11,
            glide: 6,
            turn: -2,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Sol", 
            image: "https://www.discraft.com/product/image/medium/ppzsol_pp%205x%20stock%20sol%20blue.jpg",
            speed: 4,
            glide: 5,
            turn: -3,
            fade: 0,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Stalker", 
            image: "https://www.discraft.com/product/image/medium/ppestalker_pp%205x%20esp%20stalker%20blue%20green.jpg",
            speed: 7,
            glide: 5,
            turn: -1,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Sting", 
            image: "https://www.discraft.com/product/image/medium/zsting_1.jpg",
            speed: 7,
            glide: 5,
            turn: -2,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Stratus", 
            image: "https://www.discraft.com/product/image/medium/xstratus_max-dk_1.png",
            speed: 5,
            glide: 4,
            turn: -4,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Surge", 
            image: "https://www.discraft.com/product/image/medium/surge.22tour_ts-surge.png",
            speed: 11,
            glide: 5,
            turn: -1,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Surge SS", 
            image: "https://www.discraft.com/product/image/medium/zsurgess_1.jpg",
            speed: 11,
            glide: 5,
            turn: -2,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Thrasher", 
            image: "https://www.discraft.com/product/image/medium/tithrasher_max-br_1.png",
            speed: 12,
            glide: 5,
            turn: -3,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Undertaker", 
            image: "https://www.discraft.com/product/image/medium/eundertaker_esp-13.png",
            speed: 9,
            glide: 5,
            turn: -1,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Vulture", 
            image: "https://www.discraft.com/product/image/medium/zvulture_1.jpg",
            speed: 10,
            glide: 5,
            turn: 0,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Wasp", 
            image: "https://www.discraft.com/product/image/medium/zwasp_max-br_1.jpg",
            speed: 5,
            glide: 3,
            turn: 0,
            fade: 2,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Zeus", 
            image: "https://www.discraft.com/product/image/medium/mcbethzeus_zeus4%20copy.jpg",
            speed: 12,
            glide: 5,
            turn: -1,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Zombee", 
            image: "https://www.discraft.com/product/image/medium/zzombee_1.jpg",
            speed: 6,
            glide: 4,
            turn: -1,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        {
            brand: "Discraft", 
            mold: "Zone", 
            image: "https://www.discraft.com/product/image/medium/zflxzone_max-dk_1.jpg",
            speed: 4,
            glide: 3,
            turn: 0,
            fade: 3,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust."
        },
        
        
])

10.times{
    Bag.create(
        name: Faker::Adjective.positive,
        user_id: User.all.ids.sample, 
        disc_id: Disc.all.ids.sample,
    )
}