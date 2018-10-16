
var weaponList = document.getElementById('weaponsList'),
	weaponsArray = ['LightSaber','Blast Rifle','Heavy Blaster Pistol','Bowcaster'];
		for (var i = 0; i < weaponsArray.length; i++)
		{
			let option = document.createElement('OPTION'),
				weapon = document.createTextNode(weaponsArray[i]);
				option.appendChild(weapon);
				option.setAttribute('value',weaponsArray[i]);
				weaponList.insertBefore(option, weaponList.lastChild);
		}	 
	 


//  Select Starship Calls <Player 1 && Player2> 
 var shipSelector1 	= document.getElementById('player1');
 var shipResult1 	= document.getElementById('shipInput1');
 var shipResult2 	= document.getElementById('shipInput2');
 var shipSelector2 	= document.getElementById('player2');
 shipSelector1.addEventListener('click', function(){
	 getStarShips(shipResult1);
 });
 shipSelector2.addEventListener('click', function(){
	getStarShips(shipResult2);
 });

 function getStarShips(shipText){
	 let shipIdArray = ['5', '9', '10', '11', '12', '13', '21', '22', '23'];
	 let shipsByRandom  = Math.floor((Math.random() * 9));
	 let shipsUrl = 'https://swapi.co/api/starships/' + shipIdArray[shipsByRandom];

	 axios.get(shipsUrl).then(
		 function(result){
			 populateShipResult(result.data, shipText);
	 }) 
 }

 function populateShipResult(data, text){
	 let resultData = data.name + ' | ' + data.manufacturer;

	 text.innerText = resultData;
 }




//  Select Pilot Calls <Player 1 && Player2>
var pilotSelector1 	= document.getElementById('char1');
var pilotResult1 	= document.getElementById('inputPerson3');
pilotSelector1.addEventListener('click', function(){
	getPilots(pilotResult1);
})
var pilotSelector2 	= document.getElementById('char2');
var pilotResult2 	= document.getElementById('inputPerson4');
pilotSelector2.addEventListener('click',function(){
	getPilots(pilotResult2);
})
function getPilots(pilotText){
	let pilotIdArray = ['1','2','3','4','5','6','7'];
	let characterByRandom  = Math.floor((Math.random() * 7));
	let filmsUrl = 'https://swapi.co/api/films/' + pilotIdArray[characterByRandom];

	axios.get(filmsUrl).then(
		function(results){
			populatePilots(results.data, pilotText);
			
	})
}
function populatePilots(data, text){
	let resultData = data.director;

	text.innerText = resultData;
}



//General Calls <Player 1 && Player2>
var generalSelector1 = document.getElementById('char3');
var generalResult1 	 = document.getElementById('inputPerson5');
generalSelector1.addEventListener('click', function(){
	getGenerals(generalResult1);
})
var generalSelector2 = document.getElementById('char4');
var generalResult2 	 = document.getElementById('inputPerson6');
generalSelector2.addEventListener('click', function(){
	getGenerals(generalResult2);
})
function getGenerals(generalText){
	let generalArray = ['1','2','3','4','5','6','7'];
	let characterByRandom  = Math.floor((Math.random() * 7));
	let filmsUrl = 'https://swapi.co/api/films/' + generalArray[characterByRandom];

	axios.get(filmsUrl).then(
		function(results){
			populateGenerals(results.data, generalText);
	})
}
function populateGenerals(data, text){
	let resultData = data.producer;

	text.innerText = resultData;
	
}




// Soldier Calls <Player 1 && Player2>
var soldierSelector1 = document.getElementById('char5');
var soldierResult1 	 = document.getElementById('inputPerson7');
soldierSelector1.addEventListener('click', function(){
	getSoldiers(soldierResult1);
})
var soldierSelector2 	= document.getElementById('char6');
var soldierResult2 	= document.getElementById('inputPerson8');
soldierSelector2.addEventListener('click', function(){
	getSoldiers(soldierResult2);
})

function getSoldiers(soldierText){

	let soldierArray = ['1','2','3','4','5','6','7','8','9','10'];
	let characterByRandom  = Math.floor((Math.random() * 7) + 1);
	let peopleUrl = 'https://swapi.co/api/people/' + soldierArray[characterByRandom];

	axios.get(peopleUrl).then(
		function(results){
			populateSoldiers(results.data, soldierText);
	})
}
function populateSoldiers(data, text){
	let resultData = data.name +  ' | ' + 'weight:' + ' ' +  data.mass + 'kg';

	text.innerText = resultData;
}











//BEGIN BATTLE SIMULATION FUNCTIONALITY COMING SOON/////////////////////////////////////////////////////////
//// RELEASE: Version 1.
/////RELEASE VERSION 2 COMING SOON////////


function openBattleModal(){
	let x = console.log('Functionality Coming SOON');
	return x;
	}

//////////////////////////////    Battle FIGHT BUTTON FUNCTIONALITY //// AND RESULTS PAGE ARE UNER CONSTRUCTION 
//////////////////////////			LAST UPDATED 10/15/2018  - 11:49AM EST - DARNEL JONES JR.
/////////////////////////

