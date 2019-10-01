//Thijmen Stegenga 19A3
alert("Welkom bij mijn Adventure Game");
var name = prompt("wat is je naam?")
alert("hallo "+ name +" welkom bij mijn Adventure Game")
alert("U bent wakker geworden op een onbewoon eiland midden op zee. Je moet proberen weg te komen anders zult U sterven")

number = prompt("je kunt 3 dingen doen\n1. Je blijft op het eiland en gaat vuur maken. \n2. Je probeert te zwemmen naar het vaste land om zo terug te keren naar huis \n3. Je bouwt een bootje en gaat naar het vaste land");
if (number == 1){ 
alert("Je maakt het vuur en zorgt ervoor dat je warm blijft")
number = prompt("je hebt niet genoeg hout meer om warm te blijven wat ga je doen? \n1. je gaat zonder vuur verder op het eiland \n2. je probeert nieuw hout te zoeken op de bodem van de oceaan\n3. Je maakt en fles met een boodschap erin en laat hem wegdrijven zodat die aanspoelt en mensen je vinden");
    	if (number == 1){
		alert("je hebt het koud en raakt onderkoeld \nGAMEOVER"); 
		location.reload();
    	} 
    	else if (number == 2){
		alert("je probeert naar de bodem te duiken maar hebt niet genoeg adem en verdrinkt \nGAMEOVER")
		location.reload();
    	}
   		 else if (number == 3){
		alert("je fles is aangekomen bij het vaste land en een helikopter heeft je gevonden en bent op het nippertje niet dood")
    
      		number=prompt("je komt aan bij het vaste land en hebt 3 keuzes \n1.je gaat naar ibiza \n2. je gaat naar de Malediven \n3. je gaat naar Bali")
      		if (number == 1){
      		alert("je komt aan op het vliegveld en hebt je vlucht gemist \nGAMEOVER")
       		}
      		else if (number == 2){
      		alert("je komt aan bij het vliegveld en stapt in je vliegtuig maar hij heeft heeft ee tehcnische storing \nGAMEOVER")
      		}
      		else if (number == 3){
      		alert("je vliegt naar bali en ontmoet daar een leuk meisje en trekt bij haar in")
      		alert("je gaat picknicken met je vriendin in het bos maar er staat een beer voor je in de bosjes")
      	  	number = prompt("wat ga je doen? \n1. je probeert een boom in te klimmen \n2. je probeert weg te rennen maar laat al je spullen liggen \n3. je blijft angstig zitten en beweegt niet")
           		if (number == 1){
           		alert("je klimt net op tijd de boom in maar je vriendin komt niet optijd de boom in en gaat dood \nGAMEOVER")
           		}
           		else if (number == 2){
           		alert("je probeet weg te rennen maar de beer is sneller en eet je op \nGAMEOVER")
           		}
           		else if(number == 3){
           		alert("je hebt niet bewogen en de beer loopt verder en je rent snel terug naar je auto")
           		alert("je bent thuis aangekomen en hebt een brief ontvangen van je werkgever dat je bent ontslagen")
             		number = prompt("je moet solliciteren voor een nieuwe baan wat ga je doen? \n1. Je gaat naar een vacaturebureua en kijkt voor beschikbare banen \n2. je probeert geld van mensen te stelen \n3. je gaat naar Amerika om daar te werken")
             		if (number == 1){
	             	alert("er zijn geen vacatures op dit moment en je vrouw verlaat je omdat je geen geld hebt \nGAMEOVER")
	            	}
             		else if (number == 2){
             		alert("je probeert geld te stelen van een bejaarde dame maar ze pakt een pistol uit haar tas en schiet je dood \nGAMEOVER")
	           		}
	            	else if (number == 3){
             		alert("je neemt de baan aan in Amerika maar en je vriendin mag ook mee")
                 	number = prompt("je vliegt naar Amerika en kunt 3 huizen kiezen \n1. je koopt een mooie vila maar hebt verder nergens geld voor \n2. je koopt een kapot huis en knapt die op \n3. je koopt een rijtjeshuis en hebt verder nog geld over voor een mooie auto")
                 		if (number == 1){
                 		alert("je hebt er 2 mooie weken maar je huis brand af omdat je vergeten was de oven uit te zetten \nGAMEOVER")
                 		}
                		 if (number == 2){
                 		alert("je probeert het huis op te knappen maar het is teveel werk en word verpest door hete slechte weer \nGAMEOVER")
                 		}
                		 if (number == 3){
                 		alert("je hebt het huis uitgebreidt en het huis van je buren erbij gekocht zodat je een groter huis en tuin hebt met een groot zwembad")
                		}	
            		}    
				}
			}
		}
}
   

else if (number == 2){
	alert("je kunt niet zwemmen en verdrinkt \nGAMEOVER")
}
else if (number == 3){
	alert("je bouwt het bootje en komt bij het vaste land aan")
	number = prompt("je kunt 3 kanten op gaan als \n1. je kunt naar Nederland gaan \n2. je kunt naar België gaan \n3. je kunt met de pond overvaren naar England")
	if (number == 1){
		alert("Je komt aan in Nederland en gaat in de buurt rotterdam wonen")
			number = prompt("je kan kiezen of je wilt vertrekken naar het buiteland voor je werk of je in Nederland wilt blijven?")
			if (number == 1){
				alert()
			}
	}
	else if (number == 2){
		alert("je probeert om in een kraakpand te gaan wonen maar de politie ontdekt je en je hebt levenslang \nGAMEOVER")	
	}
	else if (number == 3){
		alert("je zit op de pond maar er zitten teveel mensen op en hij zinkt \n GAMEOVER")
	}

}



 

 
  