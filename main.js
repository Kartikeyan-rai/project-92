var player1=localStorage.getItem("user1");
var player2=localStorage.getItem("user2");
player1_score=0;
player2_score=0;
var question_turn="player1";
var answer_turn="player2";
document.getElementById("player1_name").innerHTML=player1+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_name").innerHTML=player2+":";
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn - "+player1;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2;
function send(){
   getanswer1=document.getElementById("number1").value;
   getanswer2=document.getElementById("number2").value;
   answer=parseInt(getanswer1) * parseInt(getanswer2);
   console.log(answer);
    question=getanswer1+"X"+getanswer2;
    question1="<h4 id='word_display'>Q. "+question+"</h4>";
    input_box="<br>Answer :<input id='input_check_box' type='text'>";
    button="<br><br><button id='check'class='btn btn-info'onclick='check()'>Check</button>";
    row=question1+input_box+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";

}function check(){

    useranswer=document.getElementById("input_check_box").value;
    
    if(answer==useranswer){
       if(answer_turn=="player1"){
           player1_score=player1_score+1;
           document.getElementById("player1_score").innerHTML=player1_score;
       } 
    else{player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;
    }
    }
    if(question_turn=="player1"){
     question_turn="player2";
     document.getElementById("player_question").innerHTML="Question Turn - "+player2;
     answer_turn="player1";
     document.getElementById("player_answer").innerHTML="Answer Turn - "+player1;
     }else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn - "+player1;
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player2;
     }
     document.getElementById("output").innerHTML="";}