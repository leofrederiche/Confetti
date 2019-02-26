$('document').ready(function(){

	const confetti 	= "<div class='confetti'></div>";
	var hexColors 	= ['#e74c3c', '#e67e22', '#9b59b6', '#3498db', '#2ecc71', '#ecf0f1'];

	function RandomDownColor(){
		return Math.floor((Math.random() * 6))
	}

	function RandomLeft(){
		var screenWidth	= $(window).width() - 20;

		return Math.floor((Math.random() * screenWidth));
	}

	function GenerateConfetti(){
		var color 	= hexColors[RandomDownColor()];

		$(confetti).appendTo('body').css({
			'background' : color,
			'left': RandomLeft()

		}).addClass(
			'down' + RandomDownColor()
		);
	};

	$('.btnSuccess').click(function(){
		setInterval(function(){
			GenerateConfetti();
		}, 100);
	});

});