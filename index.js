var colors = ["red", "yellow", "green"];
		var currentColorIndex = 0;

		function changeColor() {
			currentColorIndex = (currentColorIndex + 1) % colors.length;
			document.querySelector(".button").style.backgroundColor = colors[currentColorIndex];
		}

		setInterval(changeColor, 10000);