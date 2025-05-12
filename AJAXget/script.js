$(document).ready(function () {

    // Hide the data container initially

    $("#data-container").hide();
    // Show the loading message
    $("#load-data").click(function () {
        $("#data-container").empty();
    $.getJSON("data.json", function (response) {
        var tableWrapper = $("<div></div>").addClass("table-responsive");

        var table = $("<table></table>").addClass("table table-striped table-bordered table-hover");
        var thead = $("<thead></thead>").addClass("thead-dark");
        var headerRow = $("<tr></tr>");
        headerRow.append($("<th></th>").text("Name"));
        headerRow.append($("<th></th>").text("Age"));
        headerRow.append($("<th></th>").text("City"));
        thead.append(headerRow);
        table.append(thead);

        var tbody = $("<tbody></tbody>");
        $.each(response.data, function (index, item) {
            var row = $("<tr></tr>");
            row.append($("<td></td>").text(item.name));
            row.append($("<td></td>").text(item.age));
            row.append($("<td></td>").text(item.city));
            tbody.append(row);
        });
        table.append(tbody);

        tableWrapper.append(table);
        $("#data-container").append(tableWrapper).show();
    });
    });


    // Hide the data container when the close button is clicked
    $("#Submit").click(function () {
       $.post("savedata.json", function (response) {
        // Handle the response from the server if needed
        console.log("Data saved successfully:", response);
        // Optionally, you can show a success message or perform other actions
        });
    });
});
