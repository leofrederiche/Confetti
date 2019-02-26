$('document').ready(function(){

	const confetti 	= "<div class='confetti'></div>";
	var hexColors 	= ['#e74c3c', '#e67e22', '#9b59b6', '#3498db', '#2ecc71', '#ecf0f1'];
	var screenWidth	= $(window).width() - 20;

	function RandomColor(){
		return Math.floor((Math.random() * 6))
	}

	function GenerateConfetti(){
		var color 		= hexColors[RandomColor()];
		var left 		= Math.floor((Math.random() * screenWidth));
		var rotation	= [0,0,0,0];

		rotation[0] 	= Math.floor((Math.random() * 2));
		rotation[1]		= Math.floor((Math.random() * 2));
		rotation[2]		= Math.floor((Math.random() * 2));
		rotation[3]		= Math.floor((Math.random() * 1000));

		$(confetti).appendTo('body').css({
			'background' : color,
			'left': left

		}).addClass(
			'down' + RandomColor()
		);
	};

	$('.btnSuccess').click(function(){
		var count = 0;

		setInterval(function(){
			GenerateConfetti();
			count++;
		}, 100);
	});

});