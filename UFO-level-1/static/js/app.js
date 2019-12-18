// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Add all rows on load
data.forEach((ufoSighting) => {
    //if (ufoSighting.datetime === "1/11/2010"){
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    //}
});

// Filter button function
function filterByDate(date) {
    var Table = document.getElementById("mytable");
    Table.innerHTML = "";
    var filterDate = document.getElementById('datetime').value
    data.forEach((ufoSighting) => {
        if (ufoSighting.datetime === filterDate){
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        }
    });
}
