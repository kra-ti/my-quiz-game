class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
   question.hide()
    //write code to change the background color here
     background("yellow")
    //write code to show a heading for showing the result of Quiz
    text("results",340,50)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
     
      var display_position = 100;
      text("correct answeres highlighted in green",130,230);
      for(var plr in allContestants){

        var correctansweres="2"
        //add 1 to the index for every loop
      
        //use data form the database to display the cars in y direction
     
        if (correctansweres==allContestants[plr].answer)
          
          fill("green")
     else

          fill("red")
         display_position+=30
         textSize(15);
         text(allContestants[plr].name + ": " + allContestants[plr].answer, 230,display_position)
      }
       
      }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
