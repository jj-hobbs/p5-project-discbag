# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Disc.destroy_all
Comment.destroy_all
Bag.destroy_all

puts "Creating Users..."

User.create(
    name: "Justin Hobbs",
    email: "justinhobbs@fastmail.com",
    username: "jhobbs",
    password: "jhjhjh"
)

User.create(
    name: "Alyssa Hobbs",
    email: "alyssa.reed@icloud.com",
    username: "areed",
    password: "061921"
)

User.create(
    name: "Antonio Reid",
    email: "antonioreid@flatiron.com",
    username: "antonioreid",
    password: "areid22"
)

puts "Making Discs..."

Disc.create([
        {
            brand: "Discraft", 
            mold: "Anax", 
            image: "https://www.discraft.com/product/image/medium/mcbethanax_anax-green.png",
            speed: 10,
            glide: 6,
            turn: 0,
            fade: 3,
            description: "The Anax (pronounced 'Onyx') is Paul McBeth's new signature fairway/power driver. This 10 speed driver will fight the wind and stay straight down the fairway before a nice fade at the end. Slower arm speeds will find this disc to be very reliable for shorter fairway drivers. Big arms can expect big distance out of the Anax. ",
            user_id: 1
        }, 
        {
            brand: "Discraft", 
            mold: "APX", 
            image: "https://static.wixstatic.com/media/b32cf7_2684c97c597041869ff3383ea9f3d14a~mv2_d_1680_1680_s_2.png/v1/fill/w_1588,h_1568,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/bigz_undertaker.png",
            speed: 2,
            glide: 2,
            turn: -1,
            fade: 1,
            description: "The Discraft Soft APX is a super-soft flexible putter made with a special elite plastic. The outstanding grip helps this disc to provide consistent releases and successful putts. The APX is slightly understable. It has an overall straight flight path with minor turn and limited fade.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Archer", 
            image: "https://www.discraft.com/product/image/medium/zarcher_max-br_1.jpg",
            speed: 5,
            glide: 4,
            turn: -4,
            fade: 1,
            description: "The Discraft Archer is an understable midrange disc released during the 2016 Ace race. This is an excellent touch disc that with a very straight flight path with a hyzer flip. The Archer is a great all purpose disc for beginners that glides very well.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Avenger SS", 
            image: "https://www.discraft.com/product/image/medium/pmeavengerss_1.jpg",
            speed: 10,
            glide: 5,
            turn: -3,
            fade: 1,
            description: "The Avenger was a popular Discraft mold, so why not produce it in a Super Straight version? That’s exactly what Discraft did, and the Avenger SS has become more popular than the mold that inspired it. The Discraft Avenger SS is the perfect disc for intermediate players who want more distance with their backhand throws. This understable disc if fast, but doesn’t require so much speed that it prematurely fades before achieving max distance. Watch this disc turn, glide, and go farther than any other driver in your bag.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Banger GT", 
            image: "https://www.discraft.com/product/image/medium/jbangergt_max-dk_1.jpg",
            speed: 2,
            glide: 3,
            turn: 0,
            fade: 1,
            description: "The Banger GT (Groove Top) is a unique Discraft putter that has a Groove around the top and a large bead that help provide an enhanced grip. The GT is very popular for hyzer putts and offers a consistent release. It is a slightly overstable putter with a very straight flight path.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Buzzz", 
            image: "https://www.discraft.com/product/image/medium/bzbuzzz_2.jpg",
            speed: 5,
            glide: 4,
            turn: -1,
            fade: 1,
            description: "The Buzzz is Discgolf’s most popular midrange due to its consistency and compatibility with a wide range of players styles. The Buzzz is a low profile modern midrange that is the gold standard for straight to stable flights players can trust.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Buzzz OS", 
            image: "https://www.discraft.com/product/image/medium/zbuzzzos_max-br_1.jpg",
            speed: 5,
            glide: 4,
            turn: 0,
            fade: 3,
            description: "The most popular mid-range in the world now has a more overstable brother — the Buzzz OS. This new disc has the same great feel disc golfers have grown to love, with additional stability. The Buzzz OS is ideal for those times when the wind picks. This disc is also an excellent choice for forehand shots that need to fly on a straight line.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Buzzz SS", 
            image: "https://www.discraft.com/product/image/medium/tibuzzzss_max-br_1.jpg",
            speed: 5,
            glide: 4,
            turn: -2,
            fade: 1,
            description: "The Buzzz SS is a less stable verzion of the ultra popular Discraft Buzzz. This midrange disc is great for beginners who have a hard time controlling fade.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Captain's Raptor", 
            image: "https://otbdiscs.b-cdn.net/wp-content/uploads/2021/12/8e4ca15a-d090-6bc0-90cb-2918d68ce19d.png",
            speed: 9,
            glide: 3,
            turn: 1,
            fade: 4,
            description: "The Captain's Raptor is a modified Raptor. It has a similar feel to the Raptor, with a flat top and similar rim. This disc is designed to be more overstable than the Raptor. Providing a beefier version that can slice through the air and provide an even more reliable flight. This disc that will be reliable in even more adverse weather conditions.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Challenger", 
            image: "https://www.discraft.com/product/image/medium/challenger_1.png",
            speed: 2,
            glide: 3,
            turn: 0,
            fade: 2,
            description: "The Challenger is a tall overstable putter with a deep rim and a tiny bead. It has a Discraft stability rating of 1, and as an overstable putter is able to handle long approach shots without turning over. This putter is popular for advanced disc golfers.",
            user_id: 1
        },
       
        {
            brand: "Discraft", 
            mold: "Challenger OS", 
            image: "https://www.discraft.com/product/image/medium/challengeros_1.png",
            speed: 2,
            glide: 3,
            turn: 0,
            fade: 3,
            description: "The Challenger OS is a more overstable, flat-topped version of the popular Challenger. This putter works best for driving, throwing into headwinds, weaving forehand approaches, and tossing hyzer putts. It is overstable enough to meet a majority of a player's needs without becoming a meat hook.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Challenger SS", 
            image: "https://www.discraft.com/product/image/medium/jchallengerss_max-dk_1.jpg",
            speed: 2,
            glide: 3,
            turn: -1,
            fade: 2,
            description: "The Challenger SS is a putter originally debuted as a 'Test Flight' disc during the 2017 Ledgestone Open. It is a more understable version of the popular Challenger putter, with a flat-top and rounded edge and comfortable grip.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Comet", 
            image: "https://www.discraft.com/product/image/medium/bzcomet_1.jpg",
            speed: 4,
            glide: 5,
            turn: -2,
            fade: 1,
            description: "The Discraft Comet is a very popular straight-flying, slightly understable midrange disc. This is a versatile disc that can handle all kinds of shots and conditions.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Crank", 
            image: "https://www.discraft.com/product/image/medium/ecrank_max-br_1.jpg",
            speed: 13,
            glide: 5,
            turn: -2,
            fade: 2,
            description: "Fast stable driver suitable for big arm disc golfers looking for the right mix of stability and speed. The Discraft Crank is described as a cross between the Nuke and the Nuke SS. Intermediate disc golfers who are looking for a longer drive will also enjoy this disc.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Crank SS", 
            image: "https://www.discraft.com/product/image/medium/zcrankss_max-br_1.jpg",
            speed: 13,
            glide: 5,
            turn: -3,
            fade: 2,
            description: "The Crank SS is designed to give disc golfers who don't have a lot of power more distance. More advanced disc golfers will find the Crank SS flips up easily on hyzer releases.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Fierce", 
            image: "https://www.discraft.com/product/image/medium/piercefierce_1.jpg",
            speed: 3,
            glide: 4,
            turn: -2,
            fade: 0,
            description: "The Fierce is Paige Pierce's new signature putter model. It's a beadless, understable putter with a grippy plastic feel. This putter is perfect for draining putts from any distance. It will become your new go-to putter!",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Flick", 
            image: "https://www.discraft.com/product/image/medium/tiflick_max-br_1.jpg",
            speed: 12,
            glide: 3,
            turn: 1,
            fade: 5,
            description: "If you’re looking for a disc that won’t turn over on your power forehand flicks, this disc is for you. The Flick can be thrown with big anhyzer angles, and it will always fade back. This disc is incredibly thin and has a completely flat top. This is an excellent disc for ultra-powerful forehand/sidearm shots and strategic fades.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Focus", 
            image: "https://www.discraft.com/product/image/medium/jfocus_max-br_1.jpg",
            speed: 2,
            glide: 2,
            turn: -1,
            fade: 2,
            description: "The Focus is the perfect disc for disc golfers who really like to concentrate before throwing their disc in the chains. This slightly overstable putter provides a gentle fade and pinpoint accuracy for approach shots.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Force", 
            image: "https://www.discraft.com/product/image/medium/zforce_1.png",
            speed: 12,
            glide: 5,
            turn: 0,
            fade: 3,
            description: "Force your drives into maximum fade with this very overstable distance driver. This disc has a wide rim and travels at very high speeds. The force was built for power throwers looking for more distance, and is Discraft’s fastest flying overstable driver.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Glide", 
            image: "https://www.discraft.com/product/image/medium/zglide_max-br_1.jpg",
            speed: 6,
            glide: 5,
            turn: -3,
            fade: 1,
            description: "Are you looking for a golf disc that will actually turn to the right on backhand throws? There are few slicing understable discs better than the Discraft Glide. While this is considered a fairway driver, new players will see maximum distance when throwing the Glide.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Hades", 
            image: "https://www.discraft.com/product/image/medium/mcbethbzhades_1.png",
            speed: 12,
            glide: 6,
            turn: -3,
            fade: 2,
            description: "The Hades is the newest Paul McBeth Series Driver. It's a straight to understable driver with massive amounts of glide. The Hades will be your new go-to distance driver, especially if you are intermediate to advanced. Players with bigger arms will find this to be an awesome, long bomb understable disc that will glide for days.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Heat", 
            image: "https://www.discraft.com/product/image/medium/xheat_1.png",
            speed: 9,
            glide: 6,
            turn: -3,
            fade: 1,
            description: "The Heat was introduced as Discraft's 2014 Ace Race Disc. This disc has incredible glide and is very easy for newer disc golfers to get distance with. This disc excels on straight line finesse shots where you need distance and long controlled turnover shot.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Impact", 
            image: "https://static.wixstatic.com/media/b32cf7_9dc3f642f2da450382d18c0d5670bb90~mv2_d_1680_1680_s_2.png/v1/fill/w_1588,h_1568,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/bigz_undertaker.png",
            speed: 6,
            glide: 6,
            turn: -3,
            fade: 1,
            description: "Are you looking for a drastic impact on your midrange game? The stable Discraft Impact is sure to get you where you want to be – next to the pin. The rim of the Impact was engineered to keep it flying flat, and minimize low speed fade. This mold is durable, comfortable, and allows for a smooth, consistent release.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Luna", 
            image: "https://www.discraft.com/product/image/medium/luna.22tour_ts-luna.png",
            speed: 3,
            glide: 3,
            turn: 0,
            fade: 3,
            description: "The Luna is the first putter in the Paul McBeth line for Discraft. It is his primary putter and it more overstable than a lot of other putters. It works great as a low-glide, beadless putter for players who putt with a lot of confidence. It will be a popular putter due to the reputation of Paul McBeth as a winner and will serve other experienced players well.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Machete", 
            image: "https://www.discraft.com/product/image/medium/zmachete_max-br_1.jpg",
            speed: 11,
            glide: 4,
            turn: 0,
            fade: 4,
            description: "The Machete will slice through the wind and carry you onto victory. This is a low profile disc with a medium thickness rim. The Machete is overstable and will hold perfect hyzer lines and power through any headwind. The Machete will surprise you with it's speed and ease of distance!",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Magnet", 
            image: "https://www.discraft.com/product/image/medium/softmagnet_soft-magnet-blue.jpg",
            speed: 2,
            glide: 3,
            turn: -1,
            fade: 1,
            description: "The Magnet is a good sized putter that is attracted to metal chains. This is Discraft’s flagship putter, and is used by disc golfers all over the world. The Magnet is shorter than most putters and has a very narrow rim. It has a mostly stable flight path with a mild fade at the end. The disc is not too firm, nor too soft, and does a good job of grabbing the chains and landing in the basket.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Malta", 
            image: "https://www.discraft.com/product/image/medium/mcbethmalta_malta1.jpg",
            speed: 5,
            glide: 4,
            turn: 1,
            fade: 3,
            description: "The Malta is Paul McBeth's 4th disc, an overstable midrange. The Malta has a strong and controllable flight. It has a similar feel and flight to the Zone, but having the distance and trustworthiness as a Buzzz. The Diameter is slightly bigger than a Zone, but not as wide as a full size wide-diameter mid range.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Mantis", 
            image: "https://www.discraft.com/product/image/medium/zmantis_1.png",
            speed: 8,
            glide: 4,
            turn: -2,
            fade: 2,
            description: "The Mantis is a reliable fairway driver that was originally released as the 2013 Ace Race disc in Titanium plastic. This disc provides a straight flight path, comfortable feel and excellent glide. The later runs have a lower profile and it is slightly more domey to make it easier to control with additional glide.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Meteor", 
            image: "https://www.discraft.com/product/image/medium/zmeteor_max-dk_1.jpg",
            speed: 5,
            glide: 5,
            turn: -3,
            fade: 0,
            description: "As one of the understable midrange discs in Discraft’s lineup, the Meteor is great for controlled turnover throws. If you are right handed, throw backhand, and need a disc that is going to fly to the right, this is the disc you’re looking for. The Meteor will turn and glide giving beginners more control and distance.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Nuke", 
            image: "https://www.discraft.com/product/image/medium/nuke.22tour_ts-nuke.png",
            speed: 13,
            glide: 5,
            turn: -1,
            fade: 3,
            description: "The Discraft Nuke is one of the most popular distance drivers in the world. This fast flying driver has an ultra-thick rim (2.5cm) and maintains maximum speed for a long time. While this disc is ultra-fast, it is relatively stable for power throwers.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Nuke OS", 
            image: "https://www.discraft.com/product/image/medium/enukeos_1.jpg",
            speed: 13,
            glide: 4,
            turn: 0,
            fade: 4,
            description: "The extra overstable version of the popular Discraft Nuke, the Nuke OS is made for advanced players with the most powerful arms. This disc has the same thick rim that the Nuke offers, but will finish its flight with a sharp overstable fade every time. Players who throw discs this hard are going to want them to maintain their flight characteristics. ",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Nuke SS", 
            image: "https://www.discraft.com/product/image/medium/tinukess_max-br_1.jpg",
            speed: 13,
            glide: 5,
            turn: -3,
            fade: 3,
            description: "The Nuke SS is the “super straight” version of the popular Nuke driver. While this maximum distance driver has an extra wide rim and is still very fast, it can be thrown by less experienced players. The Nuke SS has a high degree of high speed turn that is followed by an equally high degree of low speed fade. The flight path of the Nuke SS is fairly similar to the Innova Katana. If you like discs with thick wing length, you’ll love the distance you can get from the Nuke SS.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Passion", 
            image: "https://www.discraft.com/product/image/medium/pppassion.firstrun_1.png",
            speed: 8,
            glide: 5,
            turn: -1,
            fade: 1,
            description: "The Passion is a Paige Pierce branded fairway driver with a straight flight and a unique flat outer rim configuration. It is very similar to the classic Discraft Cyclone but with less of a bead, tuning it for a straighter, more dependable flight for precision placement on the fairway.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Predator", 
            image: "https://www.discraft.com/product/image/medium/bzpredator_1.jpg",
            speed: 9,
            glide: 4,
            turn: 1,
            fade: 4,
            description: "The Predator is a predictable, overstable fairway driver. It is not the fastest disc on the market, but it has a reliable and consistent fade. Discraft gives this disc a stability rating of 2.5. This is the perfect disc for forehand flicks.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Raptor", 
            image: "https://www.discraft.com/product/image/medium/bzraptor_1.jpg",
            speed: 9,
            glide: 4,
            turn: 0,
            fade: 3,
            description: "The Raptor is speed 9 disc with a flat top and overstable finish. It is designed to slice through the air in any weather conditions for reliable flight. You'll find that the Raptor feels extremely comfortable as a forehand and backhand driver. ",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Ringer", 
            image: "https://static.wixstatic.com/media/b32cf7_0a2b00e5eb8246328f794d4d739484c6~mv2_d_1680_1680_s_2.png/v1/fill/w_1588,h_1568,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/bigz_undertaker.png",
            speed: 4,
            glide: 4,
            turn: 0,
            fade: 2,
            description: "If you like firm, thin, putters that just feel good in your hand, the Discraft Ringer is for you. The Ringer is an overstable putter with a low profile. The excellent feel this disc provides will help you gain confidence and make more putts.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Ringer GT", 
            image: "https://www.discraft.com/product/image/medium/jringergt_max-br_1.jpg",
            speed: 4,
            glide: 4,
            turn: 0,
            fade: 3,
            description: "The Ringer GT is a modified Ringer putt and approach disc. The top features a subtle groove track for grip confidence, and the disc is slightly more overstable now. The Ringer GT is an excellent disc for bold approaches and drivers, working for backhand or forehand control when a soft landing is needed.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Roach", 
            image: "https://www.discraft.com/product/image/medium/roach_orange_roach_putterline.jpg",
            speed: 2,
            glide: 4,
            turn: 0,
            fade: 1,
            description: "The 2015 Ace Race disc. A straight flier with extra glide, the Roach is crafty in avoiding danger while incessantly pursuing chains. Just point and shoot. It's beadless too and feels great in the hand. Try a Roach on your next approach!",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Scorch", 
            image: "https://www.discraft.com/product/image/medium/escorch_1.png",
            speed: 11,
            glide: 6,
            turn: -2,
            fade: 2,
            description: "The Scorch is an understable distance driver. This is like a longer Avenger SS. Making it a great distance driver that will have some turn and a decent amount of fade providing a consistent 'S' curve flight path.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Sol", 
            image: "https://www.discraft.com/product/image/medium/ppzsol_pp%205x%20stock%20sol%20blue.jpg",
            speed: 4,
            glide: 5,
            turn: -3,
            fade: 0,
            description: "The Discraft Sol is the 2018 Ace Race Disc. This thin rim low profile midrange is perfect for touch approach shots. The Sol is a great disc for players of all skill level, allowing them to shape shots, weave through trees, and hit those difficult lines.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Stalker", 
            image: "https://www.discraft.com/product/image/medium/ppestalker_pp%205x%20esp%20stalker%20blue%20green.jpg",
            speed: 7,
            glide: 5,
            turn: -1,
            fade: 2,
            description: "The Discraft Stalker is one of the straightest flying drivers on the market. It offers a narrow rim that helps provide more control for backhand throws. This disc is perfect for dependable straight shots and lowering disc golf scores.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Sting", 
            image: "https://www.discraft.com/product/image/medium/zsting_1.jpg",
            speed: 7,
            glide: 5,
            turn: -2,
            fade: 1,
            description: "The Discraft Sting was released as the 2017 Ace Race disc. This understable driver provides long glide and more distance for newer disc golfers. The Sting is easy to control.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Stratus", 
            image: "https://www.discraft.com/product/image/medium/xstratus_max-dk_1.png",
            speed: 5,
            glide: 4,
            turn: -4,
            fade: 1,
            description: "The Discraft Stratus is one of the best golf discs for beginners. This understable midrange will fly straight and far for players learning throwing techniques. For players with a little more power, the Stratus makes a good turnover disc that will curve towards the anhyzer side.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Surge", 
            image: "https://www.discraft.com/product/image/medium/surge.22tour_ts-surge.png",
            speed: 11,
            glide: 5,
            turn: -1,
            fade: 3,
            description: "The Surge is one of Discraft’s signature drivers. This is an outstanding driver, great for intermediate and professional players. The Surge is a fast flying disc with a moderate sized rim. It has a degree of high speed turn, incredible glide, and a healthy amount of low speed fade. The Surge performs well for both backhand and forehand throws.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Surge SS", 
            image: "https://www.discraft.com/product/image/medium/zsurgess_1.jpg",
            speed: 11,
            glide: 5,
            turn: -2,
            fade: 2,
            description: "The Surge SS is a more understable version of the ultra-popular Discraft Surge. The ‘SS’ has a straighter edge that enhances control-ability and minimizes low speed fade, allowing this disc to fly even farther for less powerful players. The Surge SS works well for both forehand and backhand drives.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Thrasher", 
            image: "https://www.discraft.com/product/image/medium/tithrasher_max-br_1.png",
            speed: 12,
            glide: 5,
            turn: -3,
            fade: 2,
            description: "The Thrasher by Discraft is a distance driver that is not too fast for most players, plus it has plenty of turn before the end-fade, making it a great choice for most players.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Undertaker", 
            image: "https://www.discraft.com/product/image/medium/eundertaker_esp-13.png",
            speed: 9,
            glide: 5,
            turn: -1,
            fade: 2,
            description: "The Discraft Undertaker is a moderately overstable driver released in the summer of 2016. This disc offers some turn in flight but will finish with a manageable fade. The Undertaker will take on headwinds and offer a flight that can be utilized for both backhand and forehand throws.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Vulture", 
            image: "https://www.discraft.com/product/image/medium/zvulture_1.jpg",
            speed: 10,
            glide: 5,
            turn: 0,
            fade: 2,
            description: "The Discraft Vulture is described as a beat in Predator that is less overstable and offers more glide. This fairway driver has excellent control and is stable enough to manage moderate headwinds.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Wasp", 
            image: "https://www.discraft.com/product/image/medium/zwasp_max-br_1.jpg",
            speed: 5,
            glide: 3,
            turn: 0,
            fade: 2,
            description: "The Wasp is one of the more popular overstable midrange discs. This is a great disc for windy conditions and strategic fading shots.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Zeus", 
            image: "https://www.discraft.com/product/image/medium/mcbethzeus_zeus4%20copy.jpg",
            speed: 12,
            glide: 5,
            turn: -1,
            fade: 3,
            description: "This Paul McBeth signature disc is similar to the popular Innova Destroyer in flight and feel. The Zeus is a go to driver for power throwers looking for max distance and consistency. The Zeus has a fairly wide rim with a wing length. This is an excellent disc for both forehand and backhand throws for players who can handle the stability.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Zombee", 
            image: "https://www.discraft.com/product/image/medium/zzombee_1.jpg",
            speed: 6,
            glide: 4,
            turn: -1,
            fade: 1,
            description: "The Zombee is a fairway driver that was introduced by Discraft for the 2012 Ace Race. This is a tall, super straight flyer with a predictable end of flight fade. This disc is like a cross between the midrange Buzzz and the Stalker driver.",
            user_id: 1
        },
        {
            brand: "Discraft", 
            mold: "Zone", 
            image: "https://www.discraft.com/product/image/medium/zflxzone_max-dk_1.jpg",
            speed: 4,
            glide: 3,
            turn: 0,
            fade: 3,
            description: "The Discraft Zone is a slim putter with a thick rim that gives you something to hold on to. This is a very overstable putter that is good for headwinds, strategic fades, forehand throws, flick putts, and slamming into chains at just the right angle. Many Discraft enthusiasts will have a Zone in their bag as a putter that gets them out of a situation where a Flick, or sidearm putt is their only option. Being so overstable, this disc can handle the torque that a Flick will put on it!",
            user_id: 1
        },
        
        
])

puts "Writing Comments..."

Comment.create(
    content: "This is THE approach disc.",
    commented_disc_id: 52,
    commenter_id: 1
)

Comment.create(
    content: "This is my go-to bomber disc.",
    commented_disc_id: 21,
    commenter_id: 1
)

Comment.create(
    content: "I'm trying to learn how to control this disc better.",
    commented_disc_id: 9,
    commenter_id: 1
)

Comment.create(
    content: "My putter of choice.",
    commented_disc_id: 24,
    commenter_id: 1
)

Comment.create(
    content: "I love flexing this disc to unique shots.",
    commented_disc_id: 42,
    commenter_id: 1
)

Comment.create(
    content: "I love how straight and controllable this disc is.",
    commented_disc_id: 29,
    commenter_id: 2
)

Comment.create(
    content: "Great beginner midrange disc!",
    commented_disc_id: 6,
    commenter_id: 2
)

Comment.create(
    content: "I love how much this disc turns.",
    commented_disc_id: 9,
    commenter_id: 3
)

Comment.create(
    content: "Testing out this putter this week.",
    commented_disc_id: 18,
    commenter_id: 3
)

puts "Finished seeding!"