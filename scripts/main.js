$(function() {
	/*
	JSON Approach:
	$("#getQuote").on("click", function() {
		$.ajax({
			type: "GET",
			url: "http://quotes.rest/qod.json",
			success: localJsonCallback,
			dataType: "json"
		});
	});
	*/

	// JSONP approach

	$("#getQuote").on("click", function() {
		$.ajax({
			type: "GET",
			url: "http://quotes.rest/qod.js",
			dataType: "jsonp",
			success: localJsonpCallback
		});

		$(this).hide();
	});

	function localJsonCallback(json) {
		$("#displayQuote").html('"' + json.contents.quotes[0].quote + '" -- ' + json.contents.quotes[0].author);
	}

	function localJsonpCallback(json) {
		var data = json.data;
		$("#displayQuote").html('"' + data.contents.quotes[0].quote + '" -- ' + data.contents.quotes[0].author);
	}
});