function addUser(){
    var player1=document.getElementById("player1_name_input").value;
    var player2=document.getElementById("player2_name_input").value;
    localStorage.setItem("user1",player1);
    localStorage.setItem("user2",player2);
    window.location="game_page.html";
}
