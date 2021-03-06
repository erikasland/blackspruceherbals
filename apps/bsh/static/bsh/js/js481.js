$(document).ready(function(){
	var screenWidth = $("html")[0].clientWidth
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

	// if(screenWidth < 1024){
	// 	// Sets footer's position for differnt pages
	// 	var footerPosition = function(clientHeight, offsetTop){
	// 		footer.css("bottom", "-" + (clientHeight - offsetTop + (offsetTop / 2)) + "px")
	// 	}
		
	// 	footer.css({position: "absolute", bottom: "0"});
	// 	// Checks what page you are currently on and sets the footer accordingly
	// 	if(window.location.pathname == "/essence" || window.location.pathname == "/your-session" || window.location.pathname == "/about"){
	// 		footerPosition(essenceContainer[0].clientHeight, essenceContainer[0].offsetTop)
	// 	}else if(window.location.pathname == "/contact"){
	// 		footerPosition(contactForm[0].clientHeight, contactForm[0].offsetTop)
	// 	}
	// }

		// Toggles mobile nav links visibility by setting container's height
		$(".menu-btn").click(function(){  
			if(mobMenuContain[0].offsetHeight === 0){
				menuBtn.css("border-top", "2px solid white");
				if(screenWidth < 481){
					bigOpaqBackground.css("height", "14.6em")
				}else{
					bigOpaqBackground.css("height", "16em")
				}
				mobMenuContain.animate({height: "12em"},400, function(){
					bigOpaqBackground.animate({opacity: ".9"}, 400);
				});

				// if(window.location.pathname == "/"){
				// 	footer.animate({bottom: "-12em"}, 400);
				// }

			}else{
				mobMenuContain.animate({height: "0em"}, 400, function(){
					menuBtn.css("border-top", "");
					aboutDDContainer.css("height", "0em")

				})
				bigOpaqBackground.animate({opacity: "0.0"}, 100);
				opaqBackground.animate({opacity: "0.0"}, 100);

				// if(window.location.pathname == "/"){
				// 	footer.animate({bottom: "0em"}, 400);
				// }
			}
		})

		// Toggles mobile 'about' sub links visibilty by setting container's height
		$("#mob-about-link").click(function(){  
			if(aboutDDContainer[0].clientHeight === 0){
				aboutDDContainer.animate({height: "9em"}, 400);
				mobMenuContain.animate({height: "21em"}, 400, function(){
					opaqBackground.animate({opacity: ".9"}, 400);
				});

				if(screenWidth < 481){
					bigOpaqBackground.animate({opacity: ".9", height: "23.6em"}, 400);
				}else{
					bigOpaqBackground.animate({opacity: ".9", height: "25em"}, 400);
				}

				// if(window.location.pathname != "/"){  // If not home page, adjust footer differently
				// 	var pixelsFromTop = footer[0].offsetTop + 144;
				// 	footer.css({top: "" + pixelsFromTop + "px"});
				// }else{
				// 	footer.animate({bottom: "-21em"}, 400);
				// }
			}else{ 
				aboutDDContainer.animate({height: "0em"}, 400);
				mobMenuContain.animate({height: "12em"}, 400);
				opaqBackground.animate({opacity: "0.0"}, 400);

				if(screenWidth < 481){
					bigOpaqBackground.animate({opacity: ".9", height: "14.6em"}, 400);
				}else{
					bigOpaqBackground.animate({opacity: ".9", height: "16em"}, 400);
				}
				// if(window.location.pathname != "/"){
				// 	var pixelsFromTop = footer[0].offsetTop -	 144;
				// 	footer.css({top: "" + pixelsFromTop + "px"});
				// }else{
				// 	footer.animate({bottom: "-12em"}, 400);
				// }
			}
		})	

		$("#about-link").hover(function(){
			$(".about-drop-down-container").css('visibility', 'visible');
		}, function(){
			$(".about-drop-down-container").css('visibility', 'hidden');
		})

		$(".about-drop-down-container").hover(function(){
			$(".about-drop-down-container").css('visibility', 'visible');
		}, function(){
			$(".about-drop-down-container").css('visibility', 'hidden');
		})
})