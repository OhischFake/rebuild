
// var variable1 = 10;
// var variable2 = 20;

/*var variable3 = 10,
	variable4 = 20,
	variable5 = ['',''],
	variable6 = {eins:'foo',zwei:'bar'};*/

var nameString = 'name',
	TestJSON = [
		{
			"index": 0,
			"balance": "$1,360.38",
			"picture": "http://placehold.it/32x32",
			"age": 24,
			"name": "Kirsten Middleton",
			"tags": [
				"adipisicing",
				"sint",
				"ea",
				"excepteur",
				"proident",
				"ipsum",
				"occaecat"
			],
			"friends": [
				{
					"id": 0,
					"name": "Tamera Kaufman"
				},
				{
					"id": 1,
					"name": "Sellers Randolph"
				},
				{
					"id": 2,
					"name": "Beulah Lindsey"
				}
			],
			"greeting": "Hello, Kirsten Middleton! You have 1 unread messages.",
			"favoriteFruit": "apple"
		},
		{
			"index": 1,
			"balance": "$1,331.68",
			"picture": "http://placehold.it/32x32",
			"age": 38,
			"name": "Roseann Hull",
			"tags": [
				"sit",
				"Lorem",
				"nostrud",
				"quis",
				"quis",
				"sunt",
				"ea"
			],
			"friends": [
				{
					"id": 0,
					"name": "Franks Le"
				},
				{
					"id": 1,
					"name": "Hansen Moses"
				},
				{
					"id": 2,
					"name": "Barrett Armstrong"
				}
			],
			"greeting": "Hello, Roseann Hull! You have 9 unread messages.",
			"favoriteFruit": "apple"
		},
		{
			"index": 2,
			"balance": "$3,174.40",
			"picture": "http://placehold.it/32x32",
			"age": 26,
			"name": "Clarice Luna",
			"tags": [
				"Lorem",
				"et",
				"dolore",
				"labore",
				"esse",
				"eu",
				"dolore"
			],
			"friends": [
				{
					"id": 0,
					"name": "Liza Dean"
				},
				{
					"id": 1,
					"name": "Pope Fleming"
				},
				{
					"id": 2,
					"name": "Reeves Boyer"
				}
			],
			"greeting": "Hello, Clarice Luna! You have 1 unread messages.",
			"favoriteFruit": "banana"
		},
		{
			"index": 3,
			"balance": "$3,142.43",
			"picture": "http://placehold.it/32x32",
			"age": 40,
			"name": "Wilma Compton",
			"tags": [
				"ex",
				"dolor",
				"ut",
				"et",
				"Lorem",
				"fugiat",
				"consequat"
			],
			"friends": [
				{
					"id": 0,
					"name": "Reilly Melton"
				},
				{
					"id": 1,
					"name": "Bates Lowery"
				},
				{
					"id": 2,
					"name": "Opal Knox"
				}
			],
			"greeting": "Hello, Wilma Compton! You have 2 unread messages.",
			"favoriteFruit": "apple"
		},
		{
			"index": 4,
			"balance": "$1,917.31",
			"picture": "http://placehold.it/32x32",
			"age": 32,
			"name": "Jasmine Brewer",
			"tags": [
				"ex",
				"ex",
				"do",
				"fugiat",
				"culpa",
				"tempor",
				"anim"
			],
			"friends": [
				{
					"id": 0,
					"name": "Anderson Curtis"
				},
				{
					"id": 1,
					"name": "Marisa Morgan"
				},
				{
					"id": 2,
					"name": "Todd Schultz"
				}
			],
			"greeting": "Hello, Jasmine Brewer! You have 1 unread messages.",
			"favoriteFruit": "apple"
		}
	];

//console.log('Hallo'+' '+'Welt'); // Voll ungail
//console.log('Hallo','Welt'); // Voll kuhl


//console.log('10'+10);
//console.log(parseInt('10')+10);


//console.log('Ich bin ein String'.split(' ')); // Funktion direkt auf einen String ausführen
//console.log([10,20,30].join(' VERKETTUNG ')); // Funktion direkt auf ein Array ausführen


//console.log(new Array(10,20)); // Array Sucker-Version
//console.log([10,20]); // Array kuhle Version


//console.table(TestJSON); // Objekt als voll gaile Tabelle


//console.log("\n########################\n\n");


//console.log(TestJSON[0].name,'---','Punkt notation');
//console.log(TestJSON[0]['name'],'---','Array string notation');
//console.log(TestJSON[0][nameString],'---','Variable als Objekt index');


//console.log("\n########################\n\n");
/*var age = 0;
var balance = 0;
// i entsprich dem Index
for(var i in TestJSON) {
	//console.log("\n"+i+" ########################\n\n");
	age += TestJSON[i].age;
	balance += TestJSON[i].balance;

	console.log("\n########################\n\n");

	for(var f in TestJSON[i].friends) {
		//console.log(TestJSON[i].name,' - ',TestJSON[i].friends);
		//console.log('Ther are: ' + TestJSON[i].friends[f].name.length + ' characters in ' + TestJSON[i].friends[f].name);
	}
	TestJSON[i].friends[0].name = 'Lorem ipsum';
	console.log(TestJSON[i].friends);
	//console.log(TestJSON[i].age);
	//console.log(TestJSON[i]['name'],'---','Array string notation');
	//console.log(TestJSON[i][nameString],'---','Variable als Objekt index');

	console.log("\n########################\n\n");

	//for(var objektParameterIndexBlah in TestJSON[i]) {
		//console.log(objektParameterIndexBlah,TestJSON[i][objektParameterIndexBlah]);
	//}
}
console.log(balance/TestJSON.length);
console.log(age/TestJSON.length);*/



// i wird hochgezählt
for(i=0;i<5;i++) {
 // ...
}

$(function(){


			//console.log("\n########################\n\n");
		var age = 0,
			  age_summe = 0,
				balance = 0,
				balance_summe = 0,
				test = 0,
				parser = function(stringD) {
						//console.log('has been triggered');
						return parseFloat(stringD.replace(/[^.0-9]*/g,''))
				};
		// i entsprich dem Index
		for(var i in TestJSON) {
			//console.log("\n"+i+" ########################\n\n");
			//parser();
			age_summe += age = TestJSON[i].age;
			balance_summe += balance = parser(TestJSON[i].balance);
			test = TestJSON[i].index;

			//console.log("\n########################\n\n");

			for(var f in TestJSON[i].friends) {
				//console.log(TestJSON[i].name,' - ',TestJSON[i].friends);
				//console.log('Ther are: ' + TestJSON[i].friends[f].name.length + ' characters in ' + TestJSON[i].friends[f].name);
			}

			//String erstzen in jeweils ersten Freundname
			///TestJSON[i].friends[0].name = 'Lorem ipsum';
			//console.log(TestJSON[i].friends);


			//console.log('This is ', test);

			$('<p>' + age + '</p>').appendTo('.all');
			$('<p>' + balance + '€</p>').appendTo('.all');

			//console.log(TestJSON[i].age);
			//console.log(TestJSON[i]['name'],'---','Array string notation');
			//console.log(TestJSON[i][nameString],'---','Variable als Objekt index');

			//console.log("\n########################\n\n");

			//for(var objektParameterIndexBlah in TestJSON[i]) {
				//console.log(objektParameterIndexBlah,TestJSON[i][objektParameterIndexBlah]);
			//}
		}
		//console.log(age_summe/TestJSON.length);
		//console.log("Total Balance is: ", (balance/TestJSON.length).toFixed(2).replace('.', ','));
		$('<p> Total Balance is: ' + (balance_summe/TestJSON.length).toFixed(2).replace('.', ',') + '€</p>').appendTo('.all');
});