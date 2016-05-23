$(document).ready(function(){
	var screenWidth = $("html")[0].clientWidth
	if(screenWidth < 1024){
		var mobMenuContain = $(".mob-menu-container");
		var menuBtn = $(".menu-btn");
		var aboutDDContainer = $(".about-dd-container");
		var opaqBackground = $("#mob-background-opaq");
		var bigOpaqBackground = $("#big-opaq-background");
		var footer = $("footer");
		var contactForm = $("#contact-form");
		var essenceContainer = $(".essence-container");

		// Hides mobile nav links by setting it's container's height to 0em
		mobMenuContain.css("height", "0em"); 
		aboutDDContainer.css("height", "0em");
		opaqBackground.css("opacity", "0.0");
		bigOpaqBackground.css("opacity", "0.0");
		footer.css({position: "absolute", bottom: "0"});

		// Sets footer's position for differnt pages
		var footerPosition = function(clientHeight, offsetTop){
			footer.css("bottom", "-" + (clientHeight - offsetTop + (offsetTop / 2)) + "px")
		}

		// Checks what page you are currently on and sets the footer accordingly
		if(window.location.pathname == "/essence" || window.location.pathname == "/your-session" || window.location.pathname == "/about"){
			footerPosition(essenceContainer[0].clientHeight, essenceContainer[0].offsetTop)
		}else if(window.location.pathname == "/contact"){
			footerPosition(contactForm[0].clientHeight, contactForm[0].offsetTop)
		}

		// Toggles mobile nav links visibility by setting container's height
		$(".menu-btn").click(function(){  
			if(mobMenuContain[0].offsetHeight === 0){
				menuBtn.css("border-top", "2px solid white");
				mobMenuContain.animate({height: "12em"},500);

				if(window.location.pathname == "/"){
					footer.animate({bottom: "-12em"}, 500);
				}

				bigOpaqBackground.animate({opacity: "0.7"}, 500);
			}else{
				mobMenuContain.animate({height: "0em"}, 500, function(){
					menuBtn.css("border-top", "");

				})
				bigOpaqBackground.animate({opacity: "0.0"}, 100);
				opaqBackground.animate({opacity: "0.0"}, 100);

				if(window.location.pathname == "/"){
					footer.animate({bottom: "0em"}, 500);
				}
			}
		})

		// Toggles mobile 'about' sub links visibilty by setting container's height
		$("#mob-about-link").click(function(){  
			if(aboutDDContainer[0].clientHeight === 0){
				aboutDDContainer.animate({height: "9em"}, 500);
				mobMenuContain.animate({height: "21em"}, 500);
				opaqBackground.animate({opacity: "0.7"}, 500);
				bigOpaqBackground.animate({opacity: "0.7", height: "21em"}, 500);
				if(window.location.pathname != "/"){  // If not home page, adjust footer differently
					var pixelsFromTop = footer[0].offsetTop + 144;
					footer.css({top: "" + pixelsFromTop + "px"});
				}else{
					footer.animate({bottom: "-21em"}, 500);
				}
			}else{ 
				aboutDDContainer.animate({height: "0em"}, 500);
				mobMenuContain.animate({height: "12em"}, 500);
				opaqBackground.animate({opacity: "0.0"}, 500);
				bigOpaqBackground.animate({opacity: "0.7", height: "12em"}, 500);

				if(window.location.pathname != "/"){
					var pixelsFromTop = footer[0].offsetTop -	 144;
					footer.css({top: "" + pixelsFromTop + "px"});
				}else{
					footer.animate({bottom: "-12em"}, 500);
				}
			}
		})	
	}

	if(screenWidth > 1024){
		$(".mob-menu-container").hide();
		$(".mob-nav").hide();

		setInterval(function(){
			var randomInt = Math.floor(Math.random() * 2);
			console.log(randomInt)
			var backgroundImg = ["praise.jpg", "lily.jpg"]
			$("html").css("background", "url(../../static/bsh/images/" + backgroundImg[randomInt] + ") no-repeat center center fixed")
			$("html").css("background-size", "cover")
			$("html").css("-webkit-background-size", "cover")
			$("html").css("-moz-background-size", "cover")
			$("html").css("-o-background-size", "cover")
		}, 10000)
	}
})