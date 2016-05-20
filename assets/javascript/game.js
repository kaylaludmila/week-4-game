	var crystalCounter = 0;
	var yourScore = 0;
	var winCounter = 0;
	var lossCounter = 0;
	var blueGem = 0;
	var greenGem = 0;
	var pinkGem = 0;
	var yellowGem = 0;


	function startGame ()
	{
		$('#yourScore').html(0);
		crystalCounter = (Math.floor(Math.random() * 120) + 19);
		$('#crystalCounter').html(crystalCounter);
		$('#winCounter').html(winCounter);
		$('#lossCounter').html(lossCounter);
		yellowGem = (Math.floor(Math.random() * 12) + 1);
		pinkGem = (Math.floor(Math.random() * 12) + 1);
		greenGem = (Math.floor(Math.random() * 12) + 1);
		blueGem = (Math.floor(Math.random() * 12) + 1);
		yourScore = 0;
	}

startGame();


function youLose ()
	{
		alert("You Lose!");
		lossCounter++;
		$('#lossCounter').html(lossCounter);
		startGame ();
	}

function youWin ()
	{
		alert("You Win!");
		winCounter++;
		$('#winCounter').html(winCounter);
		startGame ();
	}


$('#blue').on('click', function() {
		yourScore = blueGem + yourScore;
		$('#yourScore').html(yourScore);
	if (yourScore > crystalCounter) {
		youLose();
	}
	if (yourScore === crystalCounter) {
		youWin();
	}
})

$('#green').on('click', function() {
		yourScore = greenGem + yourScore;
		$('#yourScore').html(yourScore);

	if (yourScore > crystalCounter) {
		youLose();
	}
	if (yourScore === crystalCounter) {
		youWin();
	}
})

$('#pink').on('click', function() {
		yourScore = pinkGem + yourScore;
		$('#yourScore').html(yourScore);

	if (yourScore > crystalCounter) {
		youLose();
	}
	if (yourScore === crystalCounter) {
		youWin();
	}
})

$('#yellow').on('click', function() {
		yourScore = yellowGem + yourScore;
		$('#yourScore').html(yourScore);

	if (yourScore > crystalCounter) {
		youLose();
	}
	if (yourScore === crystalCounter) {
		youWin();
	}
})

