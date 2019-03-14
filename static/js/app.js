var tableData = data;

var tbody = d3.select('tbody');

console.log(tableData);

tableData.forEach((ufoReport) => {

    // console.log(ufoReport)
    
    var row = tbody.append('tr');
    Object.entries(ufoReport).forEach(([key, value]) => {
        
        // console.log(key, value);
    
        var cell = row.append('td');
        cell.text(value);
    });
});