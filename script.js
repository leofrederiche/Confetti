$('document').ready(function(){

	const confetti 	= "<div class='confetti'></div>";

	function RandomStyle(){
		return Math.floor((Math.random() * 6))
	}

	function RandomLeft(){
		var screenWidth	= $(window).width() - 20;
		return Math.floor((Math.random() * screenWidth));
	}

	function GenerateConfetti(){
		$(confetti).appendTo('body').css({
			'left': RandomLeft()
		}).addClass(
			'style' + RandomStyle()
		);
	};

	$('.btnSuccess').click(function(){
		var count = 0;

		setInterval(function(){
			if (count < 50){
				GenerateConfetti();	
				count++;
			}

			console.log(count);
		}, 50);
	});

});