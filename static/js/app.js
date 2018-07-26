var output = d3.select('.myOutput');


// Get a reference to the table body
var tbody = d3.select("tbody");

 // Prevent the page from refreshing
 //d3.event.preventDefault();

var selectedDate = d3.select('#datetime')
//console.log("selectedDate",selectedDate)

// from data.js
var tableData = data;

// YOUR CODE HERE!

//`date/time`, `city`, `state`, `country`, `shape`, and `comment` 
tableData.forEach(function(datum) {

    var row = tbody.append("tr");
    //console.log('row', row)
    Object.entries(datum).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
      });
  });


  // Input fields can trigger a change event when new text is entered.
//   selectedDate.on("change", function() {
//     var newText = d3.event.target.value;
//     console.log(newText);
//   });

selectedDate.on("change", ()=> {
    var filterDate = d3.event.target.value;
    console.log(filterDate) ;
  });

// function filterFn(d){
//     return 
// }

//   // Function to handle input change
// function handleChange(event) {
//     // grab the value of the input field
//     var inputText = d3.event.target.value;
//     console.log(inputText);

//     output.text(inputText);
//   }
  
  //selectedDate.on("change", handleChange);
  