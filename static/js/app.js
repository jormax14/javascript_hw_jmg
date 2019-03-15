var tableData = data;

var tbody = d3.select('tbody');

function init() {

    tableData.forEach((ufoReport) => {
        var row = tbody.append('tr');
        Object.entries(ufoReport).forEach(([key, value]) => {  
            var cell = row.append('td');
         cell.text(value);
        });
    });
}


function handleSubmit() {

    d3.event.preventDefault();

    var inputElement = d3.select('#datetime');

    var inputValue = inputElement.property('value');

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    tbody.selectAll('tr').remove();

    filteredData.forEach((ufoRecord) => {
        var row = tbody.append('tr');
        Object.entries(ufoRecord).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
}

init();

d3.select('#filter-btn').on('click', handleSubmit);