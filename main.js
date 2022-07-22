

d3.csv("./Data Sets/polygamy_data.csv")
.then((data) => {

	const options = data.map((whatever) => whatever.country)


// d3 selects our element with id of "country"
d3.select("#country")
	// go and select our future "option" elements with the class "opt" - transforming raw data into html output
	.selectAll("option.opt")
	// bind our data to that selection
	.data(options)
	// join to our selection
	// this is the same as .enter().append("option")
	.join("option") 
	// give that option a class, so that it matches our original selection above: option.opt
	.attr("class","opt")
	// set the value as king, random name again,  which in this case is the country
	.attr("value",(king) => king)
	// set the text as queen, random name,  which in this case is the details
	.text((queen) => queen);


// Select the button with the id name of polygamy in index.html
d3.select("button#polygamy")
	// give it a click event listener
	.on("click", () => {
		// Select span tag polygamyDetails in index.html
		d3.selectAll(".polygamyDetails")
			// Remove the class hide
			.classed("hide", false)

		// Get the country value from the dropdown menu
		const cat = d3.select("#country").node().value

		// Filter the data for country, apple here is random
		const filtered = data.filter((apple) => apple.country == cat)

		// Select the element with the class result in index.html
		d3.select(".result")
			//And set the text as the name of the first element
			//go thru the csv and stop at the first row of details that matches the 
			//country name
			.text(filtered[0].details)
		
	})
}) 



d3.csv("./Data Sets/incest_data.csv")
.then((incest_data) => {

const options = incest_data.map((whatever2) => whatever2.country2)

// d3 selects our element with id of "year"
d3.select("#country2")
	// go and select our future "option" elements with the class "opt" - transforming raw data into html output
	.selectAll("option.giant")
	// bind our data to that selection
	.data(options)
	// join to our selection
	// this is the same as .enter().append("option")
	.join("option") 
	// give that option a class, so that it matches our original selection above: option.opt
	.attr("class","giant")
	// set the value as king, random name again,  which in this case is the country
	.attr("value",(boy) => boy)
	// set the text as queen, random name,  which in this case is the details
	.text((girl) => girl);


// Select the button with the id name = incest in index.html
d3.select("button#incest")
	// give it a click event listener
	.on("click", () => {
		// Select span tag polygamyDetails in index.html
		d3.selectAll(".incestDetails")
			// Remove the class hide
			.classed("hide", false)

		// Get the country value from the dropdown menu
		const cat2 = d3.select("#country2").node().value

		// Filter the data for country, apple here is random
		const filtered = incest_data.filter((apple2) => apple2.country2 == cat2)

		// Select the element with the class result in index.html
		d3.select(".incestResult")
			//And set the text as the name of the first element
			//go thru the csv and stop at the first row of details that matches the 
			//country name
			.text(filtered[0].isLegal)
		
	})
}) 





