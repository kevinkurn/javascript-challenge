// from data.js
var tableData = data;

// YOUR CODE HERE!

    if (Object.values(tableData).includes('1/1/2010')) {
        console.log('exists');}
    else {
        console.log('not exist')
  }

// tableData.forEach(function(x) {
//     if (Object.values(x).includes('1/1/2010')) {
//         console.log('exists');}
//     else {
//         console.log('not exist')
//     }
//   })

var tes= Object.entries(tableData)

console.log(tes)