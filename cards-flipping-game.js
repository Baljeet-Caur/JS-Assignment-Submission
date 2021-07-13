let cards =[
    {
image:"https://static1.thethingsimages.com/wordpress/wp-content/uploads/2017/09/5-2.jpg?q=50&fit=crop&w=740&h=1111",
value:1,
status:"closed"
    },
 {
 image:"https://static1.thethingsimages.com/wordpress/wp-content/uploads/2017/09/5-2.jpg?q=50&fit=crop&w=740&h=1111",
 value:1,
 status:"closed"
  },
  {
 image:"https://s1.zerochan.net/Ron.Weasley.600.2498944.jpg",
 value:2,
 status:"closed"
  },
 {
 image:"https://s1.zerochan.net/Ron.Weasley.600.2498944.jpg",
 value:2,
 status:"closed"
  },
  {
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJnhR1iHG06G9_kqh5Eszvt6fX3Xp-VQRN2CObBVs440HWB6J4pEH63C5YWBKzE18lOE&usqp=CAU",
  value:3,
  status:"closed"
  },
  {
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJnhR1iHG06G9_kqh5Eszvt6fX3Xp-VQRN2CObBVs440HWB6J4pEH63C5YWBKzE18lOE&usqp=CAU",
  value:3,
  status:"closed"
  },
  {
    image:"https://i.pinimg.com/originals/54/cb/81/54cb81dc8dc7e3ef6a61d89908a6c530.jpg",
    value:4,
    status:"closed"
    },                                              
  {     
    image:"https://i.pinimg.com/originals/54/cb/81/54cb81dc8dc7e3ef6a61d89908a6c530.jpg",
    value:4,
    status:"closed"
  },
  {     
    image:"https://i.pinimg.com/originals/f4/a8/14/f4a8149aeed191af2e3e2663c659b1e2.jpg",
    value:5,
    status:"closed"
  },
  {     
    image:"https://i.pinimg.com/originals/f4/a8/14/f4a8149aeed191af2e3e2663c659b1e2.jpg",
    value:5,
    status:"closed"
  },
]
// shuffling algo
for(let i=cards.length-1; i>=0; i--){
   let j = Math.floor(Math.random()*(i+1));
   let temp = cards[i];
   cards[i] = cards[j];
   cards[j] = temp;
}
console.log(cards);

//making the cards appear on the screen
//let cardsCopy=cards;

function displayCards(data){

  let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
           <div class="overlay ${card.status}"
            onclick="opencard(${index})"></div>
            </div>
            `;
        });
    
    document.getElementById('cards').innerHTML=cardsString;
    
}
displayCards(cards); 

let cardCount=1;
let  val1=null,val2=null;
let score=0;

   function opencard(index){ 
      // console.log(cards);
        cards[index].status ="opened";
        //displayCards(cards);
            if(cardCount===1)
                {
                val1 = cards[index].value;
                cardCount++;
                }
            else if(cardCount===2)
                {
                 val2=cards[index].value;
                 
                
                if(val1===val2)  {
                    score++;
                    document.getElementById("score").innerText=score;
                    alert("you win");
                     val1=null;
                     val2=null;
                     cardCount=1;
                }
                else{
                    alert("game over");
                    location.reload();

                }
            }
            displayCards(cards);
    }