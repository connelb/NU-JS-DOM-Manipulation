var output = d3.select('.myOutput');

// Get a reference to the table body
var tbody = d3.select("tbody");

// Prevent the page from refreshing
//d3.event.preventDefault();

var inputField = d3.select('#datetime');

//dropdowns
var dateDropdown = d3.select('#dateDropdown')
//console.log("selectedDate",selectedDate)

// from data.js
var tableData = data;

// YOUR CODE HERE!
function update(tableData){
  //d3.select("tbody").html("")
  var row = tbody.append("tr");

  tableData.forEach(function (datum) {
    var row = tbody.append("tr");
    //console.log('row', row);
    Object.entries(datum).forEach(([key, value]) => {
      var cell = tbody.append("td");
      //cell.text(value);
    });
  });

}

function myInit() {
  console.log(tableData)

  //d3.select("tbody").html("")

  tableData.forEach(function (datum) {
    var row = tbody.append("tr");
    //console.log('row', row);
    Object.entries(datum).forEach(([key, value]) => {
      var cell = tbody.append("td");
      //cell.text(value);
    });
  });
}

myInit()

// Input fields can trigger a change event when new text is entered.
// inputField.on("change", function () {
//   var newText = d3.event.target.value;
//   console.log(newText);
// });

dateDropdown.on("change", function() {
  selected_date= d3.event.target.value;
  tableData=tableData.filter(row =>row.datetime === selected_date);
  update(tableData);
})

// function getCountryData(value){
//   temp = tableData.filter(row =>{
//     row.forEach(d=>d.country===value)
//   })
//   console.log(temp)
// }


dates = [];
cities = [];
states= [];
countries = [];
shapes = [];


var dateData  = data.forEach(d => {dates.push(d.datetime)});
var cityData = data.forEach(d => {cities.push(d.city)});
var stateData = data.forEach(d => {states.push(d.state)}); 
var countryData = data.forEach(d => {countries.push(d.country)});
var shapeData = data.forEach(d => {shapes.push(d.shape)});

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

var dateOptions = dates.filter(onlyUnique);
var cityOptions = cities.filter(onlyUnique);
var stateOptions = states.filter(onlyUnique);
var countryOptions = countries.filter(onlyUnique);
var shapeOptions = shapes.filter(onlyUnique);

// console.log(dateOptions, cityOptions, stateOptions, countryOptions,shapeOptions)

// populate dates drop-down
d3.select("#dateDropdown")
  .selectAll("option")
  .data(dateOptions)
  .enter()
  .append("option")
  .attr("value", function(option) { return option; })
  .text(function(option) { return option; });

  // populate dates drop-down
d3.select("#cityDropdown")
.selectAll("option")
.data(cityOptions)
.enter()
.append("option")
.attr("value", function(option) { return option; })
.text(function(option) { return option; });

// populate state drop-down
d3.select("#stateDropdown")
  .selectAll("option")
  .data(stateOptions)
  .enter()
  .append("option")
  .attr("value", function(option) { return option; })
  .text(function(option) { return option; });

  // populate country drop-down
d3.select("#countryDropdown")
.selectAll("option")
.data(countryOptions)
.enter()
.append("option")
.attr("value", function(option) { return option; })
.text(function(option) { return option; });

 // populate shapes drop-down
 d3.select("#countryDropdown")
 .selectAll("option")
 .data(shapeOptions)
 .enter()
 .append("option")
 .attr("value", function(option) { return option; })
 .text(function(option) { return option; });