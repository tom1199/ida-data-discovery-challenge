function changeSection(clicked_id) {
	clicked_id = clicked_id.substring(clicked_id.indexOf('-')+1);
	console.log(clicked_id);

	switch(clicked_id) {
		case "home":
			active = "home";
			inactive1 = "theme";
			inactive2 = "data";
			inactive3 = "events";
			inactive4 = "register";
			inactive5 = "prizes";
			inactive6 = "faq";
			break;
		case "theme":
			active = "theme";
			inactive1 = "home";
			inactive2 = "data";
			inactive3 = "events";
			inactive4 = "register";
			inactive5 = "prizes";
			inactive6 = "faq";
			break;
		case "data":
			active = "data";
			inactive1 = "home";
			inactive2 = "theme";
			inactive3 = "events";
			inactive4 = "register";
			inactive5 = "prizes";
			inactive6 = "faq";
			break;
		case "events":
			active = "events";
			inactive1 = "home";
			inactive2 = "theme";
			inactive3 = "data";
			inactive4 = "register";
			inactive5 = "prizes";
			inactive6 = "faq";
			break;
		case "register":
			active = "register";
			inactive1 = "home";
			inactive2 = "theme";
			inactive3 = "data";
			inactive4 = "events";
			inactive5 = "prizes";
			inactive6 = "faq";
			break;
		case "prizes":
			active = "prizes";
			inactive1 = "home";
			inactive2 = "theme";
			inactive3 = "data";
			inactive4 = "events";
			inactive5 = "register";
			inactive6 = "faq";
			break;
		case "faq":
			active = "faq";
			inactive1 = "home";
			inactive2 = "theme";
			inactive3 = "data";
			inactive4 = "events";
			inactive5 = "register";
			inactive6 = "prizes";
			break;
	}

	$("#" + inactive1 + "-section").hide();
	$("#" + inactive2 + "-section").hide();
	$("#" + inactive3 + "-section").hide();
	$("#" + inactive4 + "-section").hide();
	$("#" + inactive5 + "-section").hide();
	$("#" + inactive6 + "-section").hide();
	$("#link-" + inactive1).removeClass("active-link");
	$("#link-" + inactive2).removeClass("active-link");
	$("#link-" + inactive3).removeClass("active-link");
	$("#link-" + inactive4).removeClass("active-link");
	$("#link-" + inactive5).removeClass("active-link");
	$("#link-" + inactive6).removeClass("active-link");

	$("#" + active + "-section").show();
	$("#link-" + active).addClass("active-link");
}