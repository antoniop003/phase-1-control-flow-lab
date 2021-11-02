function scuberGreetingForFeet(Ride){
  if(Ride <= 400)
  return 'This one is on me!';

  else if (Ride >=2000 && Ride < 2500)
  return 'I will gladly take your thirty bucks.' ;

  else if (Ride >=2500)
  return 'No can do.'

}

function ternaryCheckCity(NYC){
  return NYC === 'NYC'? 'Ok, sounds good.' :'No go.'
}
 

  


function switchOnCharmFromTip(Tip){
 switch(Tip){
   case 'generous':
     return 'Thank you so much.'
     case 'not as generous':
       return 'Thank you.'
       case 'thanks for everything':
         return 'Bye.'
       
    
 }
}