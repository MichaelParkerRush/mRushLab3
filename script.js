$(document).ready(function() {
	console.log("It Wroks?!");
	var clickedTable, userName, partySize;
	function popup() {
		$("#form").fadeToggle(400);
	}
	function tableNumUpdate(num) {
		$("#formTableNumber").text(`Table Number: ${num}`);
	}
	function reserveTable(num) {
		$(`#table${num}`).removeClass("available");
		$(`#table${num}`).addClass("reserved");
		$(`#table${num}`).prop('onclick',null).off('click');
		$(`#table${num}`).append(`<div id="infoTable${num}" class="reservedInfo"><p>Name: ${userName}<br>Size of party: ${partySize}</p></div>`);
		$(`.reservedInfo`).hide();
		$(`#table${num}`).on('mouseover', function() {
			$(`#infoTable${num}`).fadeIn(75);
		});
		$(`#table${num}`).on('mouseleave', function() {
			$(`#infoTable${num}`).fadeOut(75);
		});
		$(`#nameInput`).val("");
		$(`#numberInput`).val("");
		$(`#partyInput`).val("");
	}
	function saveSize() {
		partySize = $("#partyInput").val();
	}
	$("#partyInput").on("change", function(){
		saveSize();
	});
	function saveName() {
		userName = $("#nameInput").val();
	}
	$("#nameInput").on("change", function(){
		saveName();
	});
	$(".available").on("click", function(){
		popup();
	});
	$("#closeForm").on("click", function(){
		popup();
	});
	$("#saveForm").on("click", function(){
		popup();
		reserveTable(clickedTable);
	});
	
	// Updated Table Selection
	$(".table").on('click', function() {
		clickedTable=$(this).attr("id").substring(5); // clickedTable=$(this);
		tableNumUpdate(clickedTable);
	});
	
	// Old Table Selection
	// $("#table1").on("click", function(){
		// clickedTable = 1;
		// tableNumUpdate(clickedTable);
	// });
	// $("#table2").on("click", function(){
		// clickedTable = 2;
		// tableNumUpdate(clickedTable);
	// });
	// $("#table3").on("click", function(){
		// clickedTable = 3;
		// tableNumUpdate(clickedTable);
	// });
	// $("#table4").on("click", function(){
		// clickedTable = 4;
		// tableNumUpdate(clickedTable);
	// });
	// $("#table5").on("click", function(){
		// clickedTable = 5;
		// tableNumUpdate(clickedTable);
	// });
	// $("#table6").on("click", function(){
		// clickedTable = 6;
		// tableNumUpdate(clickedTable);
	// });
	// $("#table7").on("click", function(){
		// clickedTable = 7;
		// tableNumUpdate(clickedTable);
	// });
	// $("#table8").on("click", function(){
		// clickedTable = 8;
		// tableNumUpdate(clickedTable);
	// });
	// $("#table9").on("click", function(){
		// clickedTable = 9;
		// tableNumUpdate(clickedTable);
	// });
});