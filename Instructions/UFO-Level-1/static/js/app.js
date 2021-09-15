// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the form & button
var button = d3.select("#filter-btn");
var form = d3.select("form");
var tbody = d3.select("tbody");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
    // prevent default
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // obtain filtered data
    // if there are no input, return all of the data stored
    var date_boolean=tableData.filter(data=> data.datetime.includes(inputValue))
    // if the input in date filter is found in the table, filter it

    if (inputValue===""){
        var filteredData = tableData;
    }
    else{
        if(date_boolean){
            var filteredData = tableData.filter(data => data.datetime === inputValue);}

    //if no matches found, return all the available information as a table
        if(date_boolean==false){
            var filteredData = tableData;}
    }

    tbody.html("")
    filteredData.forEach(data => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key,value])=> {
            var cell=row.append("td");
            cell.text(value);
        })
    })

}

// console.log(filteredData)



//---------------------------------------------------------------------------------
// if (Object.values(tableData).includes('1/1/2010')) {
//     console.log('exists');}
// else {
//     console.log('not exist')
// }

// var tes= Object.entries(tableData)

// console.log(tes)

// tableData.forEach(function(x) {
//     if (Object.values(x).includes('1/1/2010')) {
//         console.log('exists');}
//     else {
//         console.log('not exist')
//     }
//   })
