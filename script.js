function addRecommendation() {

  let recommendation = document.getElementById("new_recommendation");
  
  
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");


    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";
    document.getElementById("all_recommendations").appendChild(element);
    saveRecommendationToLocalStorage(recommendation.value);
    recommendation.value = "";
    showPopup(true);
  }
}


function saveRecommendationToLocalStorage(recommendation) {

  let recommendations = JSON.parse(localStorage.getItem("recommendations")) || [];

  recommendations.push(recommendation);

  localStorage.setItem("recommendations", JSON.stringify(recommendations));
}


function loadRecommendations() {
  let recommendations = JSON.parse(localStorage.getItem("recommendations")) || [];

  recommendations.forEach(function(rec) {
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + rec + "<span>&#8221;</span>";
    document.getElementById("all_recommendations").appendChild(element);
  });
}

window.onload = function() {
  loadRecommendations();
};


function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
