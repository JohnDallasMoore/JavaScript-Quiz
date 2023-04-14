var highScoresPage = document.getElementById("high-scores-container");
var backButton = document.getElementById("back");
var highScoresList = localStorage.getItem("highScores");
var highScoresArray = JSON.parse(highScoresList);

backButton.addEventListener("click", function () {
  window.location.replace("index.html");
});

if (highScoresArray) {
  highScoresArray.sort(function (a, b) {
    return b.score - a.score;
  });
}

var highScoresListEl = document.createElement("ul");
for (var i = 0; i < highScoresArray.length; i++) {
  var player = highScoresArray[i];
  var listItemEl = document.createElement("li");
  listItemEl.textContent = player.initials + ": " + player.score;
  highScoresListEl.appendChild(listItemEl);
  highScoresPage.appendChild(highScoresListEl);
}
