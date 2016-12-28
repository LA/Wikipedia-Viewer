function wikiSearch(input) {
    console.log(input);

    var url = "https://en.wikipedia.org/w/api.php" +
"?action=opensearch" +
"&search=" + input +
"&limit=15" +
"&namespace=0" +
"&format=json" +
"&origin=*";

    // Request Wiki API
    $.getJSON(url, function(data) {
        displaySearchResults(data);
    });
}

function displaySearchResults(data) {
    var html = "";
    var results = 15;
    var i = 1;

    for (var j=0; j < results; j++) {
        var link = "article-" + j;
        html += "<a href=\"" + link + "\"" + "target=\"_blank\"" + ">"
        html += "<div class=\"result-box\">"
        html += "<h3>" + cleanedData(data[i][j]) + "</h3>";
        i += 1;
        html += "<p>" + cleanedData(data[i][j]) + "</p>";
        i += 1;
        html = html.replace(link, cleanedData(data[i][j]));
        html += "</div></a>";
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
