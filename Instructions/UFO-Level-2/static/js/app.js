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
    var date_input = d3.select("#datetime");
    var city_input = d3.select("#city_name");
    var state_input = d3.select("#state_name");
    var country_input = d3.select("#country_name");
    var shape_input = d3.select("#shape_name");

    // Get the value property of the input element
    var date_value = date_input.property("value");
    var city_value = city_input.property("value").toLowerCase();
    var state_value = state_input.property("value").toLowerCase();
    var country_value = country_input.property("value").toLowerCase();
    var shape_value = shape_input.property("value").toLowerCase();

    console.log(date_value);
    console.log(city_value);
    console.log(state_value);
    console.log(country_value);
    console.log(shape_value);

    // stage 1: filter the data based on datetime
    // declare a boolean variable (i.e if input is found, filter the data)
    var date_boolean=tableData.filter(data=> data.datetime.includes(date_value))
    // if the input in date filter is found in the table, filter it

    if (date_value===""){
        var filteredData = tableData;
    }
    else{
        if(date_boolean){
            var filteredData = tableData.filter(data => data.datetime === date_value);}

    //if no matches found, return all the available information as a table
        if(date_boolean==false){
            var filteredData = tableData;}
    }

    //----------------------------------------------------------------------------
    //stage 2: filter the filtered data based on City Name
    // declare a boolean variable (i.e if input is found, filter the data)
    var city_boolean=filteredData.filter(data=> data.city.includes(city_value))

    if (city_value===""){
        var filteredData2 = filteredData;
    }
    else{
        if(city_boolean){
            var filteredData2 = filteredData.filter(data => data.city === city_value);}

    //if no matches found, return all the available information as a table
        if(city_boolean==false){
            var filteredData2 = filteredData;}
    }


    //----------------------------------------------------------------------------
    //stage 3: filter the filtered data based on State Name
    // declare a boolean variable (i.e if input is found, filter the data)
    var state_boolean=filteredData2.filter(data=> data.state.includes(state_value))

    if (state_value===""){
        var filteredData3 = filteredData2;
    }
    else{
        if(state_boolean){
            var filteredData3 = filteredData2.filter(data => data.state === state_value);}

    //if no matches found, return all the available information as a table
        if(state_boolean==false){
            var filteredData3 = filteredData2;}
    }

    //----------------------------------------------------------------------------
    //stage 4: filter the filtered data based on Country Name
    // declare a boolean variable (i.e if input is found, filter the data)
    var country_boolean=filteredData3.filter(data=> data.country.includes(country_value))

    if (country_value===""){
        var filteredData4 = filteredData3;
    }
    else{
        if(country_boolean){
            var filteredData4 = filteredData3.filter(data => data.country === country_value);}

    //if no matches found, return all the available information as a table
        if(country_boolean==false){
            var filteredData4 = filteredData3;}
    }

    //----------------------------------------------------------------------------
    //stage 5: filter the filtered data based on shape Name
    // declare a boolean variable (i.e if input is found, filter the data)
    var shape_boolean=filteredData4.filter(data=> data.shape.includes(shape_value))

    if (shape_value===""){
        var filteredData5 = filteredData4;
    }
    else{
        if(shape_boolean){
            var filteredData5 = filteredData4.filter(data => data.shape === shape_value);}

    //if no matches found, return all the available information as a table
        if(shape_boolean==false){
            var filteredData5 = filteredData4;}
    }

    // append the filtered information into html page
    tbody.html("")
    filteredData5.forEach(data => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key,value])=> {
            var cell=row.append("td");
            cell.text(value);
        })
    })
    console.log(filteredData2)
}





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

// const searchText = 'Di';
// const countrySearch = "USA";

// const myArray = [
//     {
//         name: "Tom",
//         country: "UK",
//         active: true
//     },
//     {
//         name: "Dick",
//         country: "USA",
//         active: false
//     },
//     {
//         name: "Dimmon",
//         country: "FR",
//         active: false
//     }
// ]
// console.log('OR')
// console.log(myArray.filter(e => e.active || e.name.includes(searchText)));
// console.log('AND')
// console.log(myArray.filter(e => e.active && e.name.includes(searchText)));
// -------------------------
// if (myArray.filter(e=> e.name.includes(searchText))){
//     var_new_array=myArray.filter(e=> e.name.includes(searchText))
// }

// console.log(var_new_array)