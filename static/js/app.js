
// Get a reference to the table body
var tbody = d3.select("tbody");

var row = tbody.append("tr");

var cell = tbody.append("td");

//dropdowns
var dateDropdown = d3.select('#dateDropdown');
var cityDropdown = d3.select('#cityDropdown');
var stateDropdown = d3.select('#stateDropdown');
var countryDropdown = d3.select('#countryDropdown');
var shapeDropdown = d3.select('#shapeDropdown');

// from data.js
var tableData = data;


// Refresh
var submit = d3.select("#submit");
submit.on("click", function () {
  // Prevent the page from refreshing
  d3.event.preventDefault();
})


function update(filteredData) {
  d3.select("tbody").html("");
  filteredData.forEach((datum) => {
    var row = tbody.append("tr");
    Object.entries(datum).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
};


function getDateData(value) {
  let temp = tableData.filter(row => row.datetime === value);

  if (temp) {
    update(temp);
  }
}

function getCityData(value) {
  let temp = tableData.filter(row => row.city === value);

  if (temp) {
    update(temp);
  }
}

function getStateData(value) {
  let temp = tableData.filter(row => row.state === value);

  if (temp) {
    update(temp);
  }
}

function getCountryData(value) {
  let temp = tableData.filter(row => row.country === value);

  if (temp) {
    update(temp);
  }
}

function getShapeData(value) {
  let temp = tableData.filter(row => row.shape === value);

  if (temp) {
    update(temp);
  }

}


dates = [];
cities = [];
states = [];
countries = [];
shapes = [];

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var dateData = data.forEach(d => { dates.push(d.datetime) });
var cityData = data.forEach(d => { cities.push(d.city) });
var stateData = data.forEach(d => { states.push(d.state) });
var countryData = data.forEach(d => { countries.push(d.country) });
var shapeData = data.forEach(d => { shapes.push(d.shape) });

var dateOptions = dates.filter(onlyUnique);
var cityOptions = cities.filter(onlyUnique);
var stateOptions = states.filter(onlyUnique);
var countryOptions = countries.filter(onlyUnique);
var shapeOptions = shapes.filter(onlyUnique);

console.log(dateOptions, cityOptions, stateOptions, countryOptions, shapeOptions)

// populate dates drop-down
d3.select("#dateDropdown")
  .selectAll("option")
  .data(dateOptions)
  .enter()
  .append("option")
  .attr("value", function (option) { return option; })
  .text(function (option) { return option; });

// populate cities drop-down
d3.select("#cityDropdown")
  .selectAll("option")
  .data(cityOptions)
  .enter()
  .append("option")
  .attr("value", function (option) { return option; })
  .text(function (option) { return option; });

// populate state drop-down
d3.select("#stateDropdown")
  .selectAll("option")
  .data(stateOptions)
  .enter()
  .append("option")
  .attr("value", function (option) { return option; })
  .text(function (option) { return option; });

// populate country drop-down
d3.select("#countryDropdown")
  .selectAll("option")
  .data(countryOptions)
  .enter()
  .append("option")
  .attr("value", function (option) { return option; })
  .text(function (option) { return option; });

// populate shapes drop-down
d3.select("#shapeDropdown")
  .selectAll("option")
  .data(shapeOptions)
  .enter()
  .append("option")
  .attr("value", function (option) { return option; })
  .text(function (option) { return option; });



function myInit() {
  tableData.forEach((datum) => {
    var row = tbody.append("tr");
    Object.entries(datum).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

myInit()
