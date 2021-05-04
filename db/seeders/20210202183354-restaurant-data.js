"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Restaurants", [
      {
        name: "Perla's",
        category: "Seafood",
        description:
          "Fish, oysters & surf 'n' turf are dished at this laid-back spot with an open kitchen & shaded patio.",
        streetAddress: "1400 S Congress Ave",
        city: "Austin",
        state: "TX",
        zipCode: 78704,
        img:
          "https://lostinaustin.org/listify/wp-content/uploads/2019/07/blog-lostinaustin-best-of-south-congress-perlas.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Home Slice Pizza",
        category: "Pizza",
        description:
          "Thin-crust slices & pies for dining in or carry out, open late for takeaway on weekends.",
        streetAddress: "1415 S Congress Ave",
        city: "Austin",
        state: "TX",
        zipCode: 78704,
        img:
          "https://media.bizj.us/view/img/11097933/home-slice*1024xx604-340-0-23.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Matt's El Rancho",
        category: "Mexican",
        description:
          "Family-friendly Tex-Mex spot that's been drawing crowds with enchiladas & margaritas since 1952.",
        streetAddress: "2613 S Lamar Blvd",
        city: "Austin",
        state: "TX",
        zipCode: 78704,
        img: "https://roadfood.com/wp-content/uploads/2016/03/rfl_26268.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Franklin Barbecue",
        category: "Barbecue",
        description:
          "Long lines form early for brisket, pulled pork & other smoked meats at this lunch-only spot.",
        streetAddress: "900 E 11th St",
        city: "Austin",
        state: "TX",
        zipCode: 78702,
        img:
          "https://3q87le1gsko01ibim33e4wib-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/franklinbarbecue-21200xx5760-3246-0-592-640x440.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jeffrey's",
        category: "Steak house",
        description:
          "Posh fine-dining icon featuring upscale New American cuisine in a tony setting plus an active bar.",
        streetAddress: "1204 W Lynn St",
        city: "Austin",
        state: "TX",
        zipCode: 78703,
        img:
          "https://jeffreysofaustin.com/wp-content/uploads/2015/02/JEFFREYS_Austin_04.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Veracruz",
        category: "Mexican",
        description:
          "Simple spot for authentic tacos with spit-grilled meats or veggie options, plus juice & Machinehead coffee.",
        streetAddress: "2505 Webberville Rd",
        city: "Austin",
        state: "TX",
        zipCode: 78702,
        img:
          "https://www.veracruzallnatural.com/wp-content/uploads/2020/06/webberville-1954x1200.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lucky Robot",
        category: "Sushi",
        description:
          "Hip option for Tokyo-inspired street fare including Asian tacos, sushi & dumplings, plus sake punch.",
        streetAddress: "1303 S Congress Ave",
        city: "Austin",
        state: "TX",
        zipCode: 78704,
        img:
          "https://roadfood.com/wp-content/uploads/2018/11/20181103_180955.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Okeechobee Steak House",
        category: "Steak house",
        description:
          "This standby for steak draws a crowd with a meat-centric menu plus a varied wine selection.",
        streetAddress: "2854 Okeechobee Blvd",
        city: "West Palm Beach",
        state: "FL",
        zipCode: 33409,
        img: "https://www.okeesteakhouse.com/global/gallery/Y0B7YLPD.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Eagle Grill & Oyster Bar",
        category: "Seafood",
        description:
          "Convivial pub with wooden booths featuring a range of American eats & raw bar selections.",
        streetAddress: "4636 Jog Rd",
        city: "Greenacres",
        state: "FL",
        zipCode: 33467,
        img:
          "https://media-cdn.tripadvisor.com/media/photo-s/0c/d7/f5/0f/eagle-grill.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Big Bear Brewing Company",
        category: "American",
        description:
          "Bustling brewpub serving up home-brewed beer plus American comfort food such as beer cheese soup.",
        streetAddress: "1800 N University Dr",
        city: "Coral Springs",
        state: "FL",
        zipCode: 33071,
        img:
          "https://floridabeerblog.files.wordpress.com/2014/06/wpid-20140530_202353.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bern's Steak House",
        category: "Steak house",
        description:
          "Opened in 1956, this destination features dry-aged steaks, a huge wine list & flocked wallpaper.",
        streetAddress: "1208 S Howard Ave",
        city: "Tampa",
        state: "FL",
        zipCode: 33606,
        img:
          "https://media.bizj.us/view/img/10420602/ft4a0194*1200xx5375-3026-0-179.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Old Key Lime House",
        category: "Seafood",
        description:
          "Palapa-roofed hut & historic house with regular live tunes, casual seafood & Intracoastal views.",
        streetAddress: "300 E Ocean Ave",
        city: "Lantana",
        state: "FL",
        zipCode: 33462,
        img:
          "https://zagat-photos.imgix.net/ChIJqSZjQwHZ2IgRchlF4a-XR38/ad5bb38f49524c8e3119fa1e98a8c2ca.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cafe Hollander",
        category: "Belgian",
        description:
          "Breakfast, lunch, dinner, weekend brunch, amazing selection of craft and Belgian biers, bloody marys",
        streetAddress: "2608 N Downer Ave",
        city: "Milwaukee",
        state: "WI",
        zipCode: 53211,
        img:
          "https://cafehollander.com/wp-content/uploads/2017/05/hollander-3.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cafe Corazon",
        category: "Mexican",
        description:
          "Colorful eatery for area-sourced Mexican fare with vegan options, margaritas & weekend brunch.",
        streetAddress: "2394 Kinnickinnic Ave",
        city: "Milwaukee",
        state: "WI",
        zipCode: 53211,
        img:
          "https://images.happycow.net/venues/1024/45/65/hcmp45657_424844.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Centro Cafe",
        category: "Italian",
        description:
          "Great Italian food at reasonable prices, amazing wine selection along with thoughtful craft cocktails! ",
        streetAddress: "808 E Center St",
        city: "Milwaukee",
        state: "WI",
        zipCode: 53211,
        img:
          "https://cdn.usarestaurants.info/assets/uploads/fd78e490b008c2838227e86fc2046beb_-united-states-wisconsin-milwaukee-county-milwaukee-centro-cafe-414-455-3751htm.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kopp's Frozen Custard",
        category: "Fast Food",
        description:
          "Iconic spot with a line of cow sculptures outside & a menu of frozen custards & jumbo burgers.",
        streetAddress: "5373 N Port Washington Rd",
        city: "Milwaukee",
        state: "WI",
        zipCode: 53211,
        img:
          "https://milwaukeerecord.com/wp-content/uploads/2017/08/kopps1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Beans and Barley",
        category: "Deli",
        description:
          "Health-conscious breakfast fare & sandwiches in airy, cheerful digs with a deli & organic market.",
        streetAddress: "1901 E North Ave",
        city: "Milwaukee",
        state: "WI",
        zipCode: 53211,
        img:
          "https://www.beansandbarley.com/wp-content/uploads/2018/03/BeansExterior1-edit-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Honey Butter Fried Chicken",
        category: "American",
        description:
          "A perennial North Side favorite, Honey Butter Fried Chicken comes from a pair of talented chefs whose chicken specials delighted the underground dinner scene. These crisp and skinless pieces of meat come with the restaurant's signature honey butter.",
        streetAddress: "3361 N Elston Ave",
        city: "Chicago",
        state: "Il",
        zipCode: 60618,
        img:
          "https://media1.fdncms.com/chicago/imager/honey-butter-fried-chicken/u/zoom/11301780/honeybutter.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "SuperDawg Drive-in",
        category: "Fast Food",
        description:
          "Superdawg's founders, Maurie and Flaurie Berman, stand guard over this venerable Chicago drive-in; customers can spot those giant hot dog statues bearing their likenesses from miles away at the intersection of Devon, Nagle, and Milwaukee. Superdawg is a throwback dining experience where customers park their cars and talk to staff through crackling drive-in speakers and carhops bring out trays of food. Superdawg's offering isn't a traditional Chicago-style dog, but it is a tradition.",
        streetAddress: "6363 N Milwaukee Ave",
        city: "Chicago",
        state: "Il",
        zipCode: 60646,
        img:
          "https://cdn.vox-cdn.com/thumbor/zx-gLX0YYKjCT1-WC0SUdak3xxU=/0x0:3500x2118/1200x0/filters:focal(0x0:3500x2118):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19819287/blb23327_49672830403_o.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Smoque BBQ",
        category: "Barbecue",
        description:
          "With two smokers to prep meaty St. Louis-style and baby-back ribs, tender brisket, apple-and-oak-smoked pulled pork and more, this destination on the Northwest Side neighborhood of Irving Park delivers barbecue in the style of Kansas City and Memphis. Over the summer, owner Barry Sorkin converted his parking lot into a socially distant and friendly covered patio.",
        streetAddress: "3800 N Pulaski Rd",
        city: "Chicago",
        state: "Il",
        zipCode: 60641,
        img:
          "https://cdn.vox-cdn.com/thumbor/vQaqHEwWRl7wi_VjlKWwTcWjGf4=/0x0:1000x667/1200x800/filters:focal(420x254:580x414)/cdn.vox-cdn.com/uploads/chorus_image/image/62842059/6945953682_b5dc73bcc6_b.0.0.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Parachute",
        category: "Korean-American",
        description:
          "Beverly Kim and Johnny Clark's Korean-American restaurant in Avondale is one of the most critically acclaimed restaurants in America, and for good reason. The Michelin-starred restaurant has leaned into carryout with Lil' Parachute. It's a vehicle for Parachute's popular dishes, the onces that fare better to go. Find bing bread, short ribs, and fried chicken.",
        streetAddress: "3500 N Elston Ave",
        city: "Chiacgo",
        state: "Il",
        zipCode: 60618,
        img:
          "https://zagat-photos.imgix.net/ChIJMZ6CO4XND4gRfdN0r9Ojzg4/a2c20fb0c993960910d1ac2e83e8d125.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Coalfire Pizza",
        category: "Pizza",
        description:
          "Coalfire serves an American spin on traditional Neapolitan-style pizza. Its signature: a thin crust emerging slightly charred and bubbly from an 800-degree oven fueled by clean burning coal.The award - winning pizza is so popular that customers are willing to wait longer for tables(there are no reservations at Coalfire).Ingredients are sourced from local artisan butchers and growers, who produce hormone - free, humanely raised meats and organic, non - GMO fresh produce.",
        streetAddress: "1321 W Grand Ave",
        city: "Chiacgo",
        state: "Il",
        zipCode: 60642,
        img:
          "https://d253b1eioa5z7b.cloudfront.net/venue_images/medium_241c2873-7be7-49c5-9ed9-f975e3edb803.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Carnivale",
        category: "Latin American",
        description:
          "Immerse yourself in the festive, eclectic, and global atmosphere of Carnivale that is inspired by the cuisine & culture of Mexico, South America, and Central America. Enjoy Latin fusion cuisine, exotic cocktails & one of a kind desserts. With a lush interior and original artwork, the Carnivale experience makes every meal a celebration.",
        streetAddress: "702 Fulton St",
        city: "Chicago",
        state: "Il",
        zipCode: 60661,
        img:
          "https://assets.hospitalityonline.com/photos/employers/254500/662188_l.jpg",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Restaurants", null, {});
  },
};
