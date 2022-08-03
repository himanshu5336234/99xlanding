//transition text //

let topics = ["Mobile Apps ", "Websites ", "Products"];

new Typed("#typed", {
	strings: topics,
	typeSpeed: 80,
	delaySpeed: 80,
	loop: true,
});

new Typed("#type", {
	strings: topics,
	typeSpeed: 80,
	delaySpeed: 80,
	loop: true,
});

$( document ).ready(function() {

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (decodeURIComponent(pair[0]) == variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	console.log("Query variable %s not found", variable);
}

// video load function
var video = $("#myvideo");
var myVar = setInterval(myTimer, 1000);
async function myTimer() {
	if (video[0].readyState === 4) {
		$("#loader").css("height", "0px");
		setTimeout(() => {
			$("#loader").css("display", "none");
			$(".header-right").css("display", "flex");
			$("#bottom-section").css("display", "block");
//video unmute mute function

video.click(function () {
	$(this).prop("muted", !$(this).prop("muted"));
});

// marquee image ans carousal function

function Marquee() {
	$(".responsive").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		arrows: false,
	});
	$(".marquee-container").marquee({
		direction: "left",
		duration: 14000,
		gap: 50,
		delayBeforeStart: 0,
		duplicated: true,
		startVisible: true,
	});
	$(".marquee-container1").marquee({
		direction: "right",
		duration: 14000,
		gap: 50,
		delayBeforeStart: 0,
		duplicated: true,
		startVisible: true,
	});
}


// latest work para show

$(".row-img").mouseover(function () {
	var para = $(this).find(".row-hide-para");
	para.show(500);
});
$(".row-img").mouseleave(function () {
	var para = $(this).find(".row-hide-para");
	para.hide(500);
});

// boots your startup//
var data = [
	{
		image: "./assest/happy.webp",
		heading: "A Professional Team at your fingertips",
		paragraph:
			"Quickly sign up for the services you need. We take care of the quality & the delivery of the work. Sitback relax and get the best talents and services with ease.",
		comImg: [
			"/assest/replace.webp",
			"/assest/fiverr.webp",
			"/assest/upwork.webp",
			"./assest/toptal.webp",
		],
	},
	{
		image: "./assest/network.webp",
		heading: "Everything from Digital to Design to Tech",
		paragraph:
			"Say goodbye to the limitations. Whether you’re an early Stage Startup or an Enterprise, we cater to services across categories. Plug & Play subscriptions on the fly.",
		comImg: [
			"/assest/replace.webp",
			"/assest/fiverr.webp",
			"/assest/upwork.webp",
			"./assest/toptal.webp",
		],
	},
	{
		image: "./assest/net.webp",
		heading: "Collaboration, Team & Project Management",
		paragraph:
			"Bring your team’s goals, plans, tasks, files, and more together in one shared space. Collaborate with your team, manage projects, and collaborate - all in one workspace.",
		comImg: [
			"/assest/replace.webp",
			"/assest/asana.webp",
			"/assest/trello.webp",
			"/assest/jira.webp",
		],
	},
	{
		image: "./assest/rachel.webp",
		heading: "We are here for you to succeed",
		paragraph:
			"We’d love to solve your problems, in fact, we insist. Our support team is personable, friendly, and always available to help. You can always expect a real human to answer all your questions.",
		comImg: ["", "", "", ""],
	},
	{
		image: "./assest/succes.webp",
		heading: "Try us our 100% Risk-free today!",
		paragraph:
			"You’ll fall in love with us. But, If you don’t and you’re not 100% satisfied after a trial, we’ll refund your money, No questions asked whatsoever. Try us out now risk-free. ",
		comImg: [
			"/assest/replace.webp",
			"/assest/fiverr.webp",
			"/assest/upwork.webp",
			"./assest/toptal.webp",
		],
	},
];
$(".features-titles h3").click(function () {
	var id = $(this).attr("id");
	$(".features-titles h3").removeClass("blue");
	$(this).addClass("blue");
	changeFeature(id);
});
function changeFeature(id) {
	$(".feature-img").attr({ src: data[id].image });
	$(".feature-title").text(data[id].heading);
	$(".feature-desc").text(data[id].paragraph);
	$(".company-img1").attr({ src: data[id].comImg[0] });
	$(".company-img2").attr({ src: data[id].comImg[1] });
	$(".company-img3").attr({ src: data[id].comImg[2] });
	$(".company-img4").attr({ src: data[id].comImg[3] });
}
$(".business-logo").click(function () {
	window.open("mailto:business@99x.network");
});
$("#cut-btn").click(() => {
	$("#popup").css("display", "none");
});
$(".btn-book").click(() => {
	$("#popup").css("display", "flex");
});
//form//
var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	var leadData = new FormData(document.getElementById("form"));
	console.log({ leadData });
	leadData.append("utm_source", getQueryVariable("utm_source"));
	leadData.append("utm_medium", getQueryVariable("utm_medium"));
	leadData.append("utm_campaign", getQueryVariable("utm_campaign"));
	leadData.append("utm_match_type", getQueryVariable("utm_match_type"));
	leadData.append("network", getQueryVariable("network"));
	leadData.append("utm_device", getQueryVariable("utm_device"));
	leadData.append("utm_keyword", getQueryVariable("utm_keyword"));
	fetch("https://api.99x.network/v1/crm/new-lead", {
		method: "POST",
		body: leadData,
	})
		.then((res) => {
			if (res.status === 200) {
				location.assign("./thanku.html");
				$("#form-error").text("");
			}
			return res.json();
		})
		.then((out) => {
			console.log({ out });
			$("#form-error").text(out.message);
		})
		.catch((err) => {
			console.log(err);
		});
});
$("#exceptional").slick({
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	speed: 3000,
	infinite: true,
	// focusOnSelect: false,
	prevArrow: '<button class="carousel-nav left-btn"><i class="fa fa-chevron-left"></i></button>',
	nextArrow: '<button class="carousel-nav right-btn"><i class="fa fa-chevron-right"></i></button>',
});

$(".works").slick({
	dots: false,
	centerMode: false,
	speed: 300,
	slidesToScroll: 1,
	slidesToShow: 1,
	prevArrow: '<button class="carousel-nav left-btn"><i class="fa fa-chevron-left"></i></button>',
	nextArrow: '<button class="carousel-nav right-btn"><i class="fa fa-chevron-right"></i></button>',
	responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 728,
			settings: {
				slidesToShow: 1.5,
				slidesToScroll: 1,
			},
		},
	],
});

$(".slideshow-container").slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<button class="carousel-nav left-btn"><i class="fa fa-chevron-left"></i></button>',
	nextArrow: '<button class="carousel-nav right-btn"><i class="fa fa-chevron-right"></i></button>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
video[0].currentTime = 1;
Marquee();
clearInterval(myVar);
		}, 500);

	} else {
		$("#loader").css("display", "block");
		// $(".container").css("display", "none");
	}
}


})
