$(document).ready(function() {
	$("input[type='tel']").mask("+7 (999) 999-99-99");

	$("#callBtn").on("click", function(e) {
		e.preventDefault();
		$("#newtellPopup").addClass("visible");
		$("#newtellPopup").addClass("z_index");
	});

	$(".newtel_popup .close_btn, .popup_mask").on("click", function(e) {
		e.preventDefault();
		$("#newtellPopup").removeClass("visible");
		setTimeout(function() {
			$("#newtellPopup").removeClass("z_index");
		}, 350);
	});

	$(this).keydown(function(eventObject){
        if (eventObject.which == 27) {
        	$("#newtellPopup").removeClass("visible");
			setTimeout(function() {
				$("#newtellPopup").removeClass("z_index");
			}, 350);
        }
    });

});