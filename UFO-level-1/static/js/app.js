// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

//Console.log the weather data from data.js
  console.log(data);

// Get references to the tbody element, input field and button
    var $tbody = document.querySelector("tbody");
    var $dateSearch = document.querySelector("#datetime");
    var $citySearch = document.querySelector("#city");
    var $stateSearch = document.querySelector("#state");
    var $countrySearch = document.querySelector("#country");
    var $shapeSearch = document.querySelector("#shape");
    var $searchBtn = document.querySelector("#search");


    data.forEach(function(sightingReport) {
        console.log(sightingReport);
        var row = tbody.append("tr");
         Object.entries(sightingReport).forEach(function([key, value]) {
           console.log(key, value);
           var cell = tbody.append("td");
           cell.text(value);
         });
       });

       var submit = d3.select("#submit");

       // function to take input and recreate table
       submit.on("click", function() {
         // stops page from refreshing
         d3.event.preventDefault();
       
         d3.select(".summary").html("");
       
         // user input as variable
         var inputElement = d3.select("#datetime");
         var inputValue = inputElement.property("value");
       
         // Filter Data
         var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
       
         // loop through
         filteredData.forEach((dateData) => {
           var row = tbody.append("tr");
           Object.entries(dateData).forEach(([key, value]) => {
             var cell = tbody.append("td");
             cell.text(value);
           });
         });
       });
      
