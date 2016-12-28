function wikiSearch(input) {
    console.log(input);

    var url = "https://en.wikipedia.org/w/api.php" +
"?action=opensearch" +
"&search=" + input +
"&limit=15" + // 15 results
"&namespace=0" +
"&format=json" +
"&origin=*"; // <-- This is necessary for no browser errors.

    // Request Wiki API
    $.getJSON(url, function(data) {
        displaySearchResults(data);
    });
}

function displaySearchResults(data) {
    var html = "";
    var results = 15;

    // Starting number to index data
    var i = 1;

    // For each result grab the title, description, and url
    for (var j=0; j < results; j++) {
        // Save link for replacing with URL
        var link = "article-" + j;
        // Create anchor tags to hold the link
        html += "<a href=\"" + link + "\"" + "target=\"_blank\"" + ">"
        html += "<div class=\"result-box\">"
        // Add Title
        html += "<h3>" + cleanedData(data[i][j]) + "</h3>";
        i += 1;
        // Add Description
        html += "<p>" + cleanedData(data[i][j]) + "</p>";
        i += 1;
        // Replace 'link' with the actual URL
        html = html.replace(link, cleanedData(data[i][j]));
        html += "</div></a>";
        // Set i back to 1 for the next result
        i = 1;
    }

    $("#result-boxes").html(html);
}

function cleanedData(data) {
    if (data == undefined) {
        return "#";
    } else {
        return data;
    }
}

function clicked() {
    console.log("Test");
}
