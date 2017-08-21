$(function() {
	/*
	JSON Approach:
	$("#getQuote").on("click", function() {
		$.ajax({
			type: "GET",
			url: "http://quotes.rest/qod.json",
			success: incorporateQuote,
			dataType: "json"
		});
	});
	*/

	// JSONP approach

	var displayingText;

	$("#getQuote").on("click", function() {
		$.ajax({
			type: "GET",
			url: "http://quotes.rest/qod.js",
			dataType: "jsonp",
			success: localJsonpCallback
		});
	});

	function incorporateQuote(data) {
		displayingText = data.contents.quotes[0].quote + '" -- ' + data.contents.quotes[0].author;
		$("#displayQuote").html(displayingText);
		$("#getQuote").hide();
		var tweetButton = $("<a></a>").attr({"class": "twitter-share-button btn btn-primary", "href": "https://twitter.com/intent/tweet?text=" + displayingText.replace(/ /g, "%20") + "&via=AbdiHami&related=abdihami&hashtags=RandomQuoteGenerator%2CSoftwareEngineerIsLife", "style": "margin-left: 45rem"});
		tweetButton.text("Tweet");
		$("#getQuote").parent().append(tweetButton)
		$("#getQuote").remove();
	}

	function JsonpQuote(jsonp) {
		incorporateQuote(jsonp.data);
	}
});