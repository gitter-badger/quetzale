var async = require('async');
var ba = require('beer-advocate-api');
beers = ["Achouffe La Chouffe",
"Allagash White",
"Baladin Super Florale",
"Ballast Point Tongue Buckler",
"Ballast Point Sculpin",
"Blue Moon White",
"Blue Mountain  Wallonia Saison",
"Boulevard Harvest Dance",
"Breckenridge Lucky U (Nitro)",
"Brew By Numbers 04/02",
"Brewers Art Sun Roi",
"Brewers Art Resurrection",
"Bruxton Nth Cloud",
"Burley Oak Tart Attack",
"Burley Oak Bling",
"Burning Sky Arise",
"Burning Sky Saison A la Provision",
"Coniston Oatmeal Stout",
"Coniston Bluebird Bitter",
"Crispin Cider",
"Delirium Noel",
"Delirium Tremens",
"Dogfish Head American Beauty",
"Dogfish Head 60 Minute",
"DuClaw Black Jack 2010",
"DuClaw Sweet baby Jesus",
"Firestone Walker Double Jack",
"Flying Dog Double Dog (Nitro)",
"Fruli Strawberry",
"Harpoon UFO Raspberry",
"Harviestoun Old Engine Oil",
"Heavy Seas Loose Cannon",
"Hobsons Postman Knock",
"Hobsons Manor Ale",
"Hofbrau Hefeweizen",
"Ilkley The Mayan",
"Ilkley mary jane",
"Jailbreak Dusk Til Dawn",
"Jw Lees Harvest Ale Champagne",
"Koutska 10",
"Laughing Dog Triple Squared",
"Left Hand Milk Stout (Nitro)",
"Lindemans Framboise",
"Magic Rock Human Cannonball",
"Magic Rock/Evil Twin Pogonophobia",
"Magic Rock/Kissmeyer Salty Kiss",
"Mahrs Christmas bock",
"Maine Mo",
"Mikkeller SpontanRosehips",
"Mikkeller Mexas Ranger",
"Mikkeller Red & White",
"Mont Saleve Imperial Black IPA",
"Mont Saleve Blanche",
"Moor Revival",
"Mystic Eldergood",
"New Belgium Fat Tire",
"New Belium/Alpine Super IPA",
"Olivers Hot Monkey Love Smith Bowman",
"Perennial Ales Dual Artisanship",
"Perennial Ales Hommelbier",
"Pressure Drop Wu Gang Chops the Tree",
"Ridgeway Criminally bad Elf",
"Ridgeway Bitter",
"Ridgeway Insanely Bad Elf",
"Ridgeway Santa's Butt",
"Ridgeway Reindeer Droppings",
"Signature Brew Black Tongue",
"Smuttynose Frankenlager",
"Steigl Lager",
"Stone Smoked Porter w/ Chocolate & Orange",
"Stone Enjoy By 12/26",
"Stone Double Bastard",
"Struise Cuvee Delphine",
"Terrapin Hopsecutioner",
"Terrapin Rye Pale ale",
"Thornbridge Medici",
"Thornbridge Bracia",
"Thornbridge Raven",
"Thornbridge Jaipur",
"Thornbridge Halycon",
"To Ol garden of eden",
"Trois Dames/Sixpoint Jalapenos Raspberry Double",
"Union Duckpin Pale Ale",
"Van Honsebrouck Kasteel Winter",
"Victory Moving parts",
"Victory Australian pale",
"Victory Hop Devil",
"Victory/Earth Bread Earth & Flame",
"Wadworth 6X",
"Weird Beard K*ntish town",
"Weird Beard Holy hoppin Hell Batch 5",
"Weird Beard Hacienda",
"Weird Beard Black Perle",
"Wild Beer Evolver IPA",
"Wild Beer Sour Somerset Wild",
"Yards Love Stout (Nitro)",
"Zeffer Zesty Citrus Cider",
" New Belgium La Folie",
]
async.each(beers, function(beer, callback){

  ba.beerSearch(beer, function(beerData) {
  	var beerJSON = JSON.parse(beerData);

  	if(beerJSON.length > 0){
	  	//console.log(beerJSON[0].beer_url);

	  	ba.beerPage(beerJSON[0].beer_url, function(berr){
	  		console.log(berr);
	  		callback(null);
	  	});
  	}
	});
});


// new way

// bar1.json
// [beerlist]


// var bar1beers = require('bar1beers.json');
// var bar2 = require('bar2.json');

// var bars = [
// 	{ name: 'bar1', beers: bar1beers },
// 	{ name: 'bar1', beers: bar1beers },
// 	{ name: 'bar1', beers: bar1beers },
// 	{ name: 'bar1', beers: bar1beers },
// ]

// async.each(beers, function(beer, callback){

//   ba.beerSearch(beer, function(beerData) {
//   	var beerJSON = JSON.parse(beerData);

//   	if(beerJSON.length > 0){
// 	  	//console.log(beerJSON[0].beer_url);

// 	  	ba.beerPage(beerJSON[0].beer_url, function(berr){
// 	  		console.log(berr);
// 	  		callback(null);
// 	  	});
//   	}
// 	});
// });
