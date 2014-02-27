'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text('Tested!');
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);


}

function projectClick(e) {
	//prevent the page from reloading
	//console.log("project clicked.")
	e.preventDefault();

	// in an event handler, $(this) refers to the object that triggered the event
	var projectTitle = $(this).find("p").text();
	//console.log("projectTitle = " + projectTitle);
	var jumbotronHeader = $(".jumbotron h1");
	// .jumbotron => class selector
	// #jumbotron => id selector

	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) {
		containingProject.append("<div class='project-description'> <p> Description of the Project. </p> </div>");
	}
	else
	{
		description.hide();
	}
}

function updateProject(e) {
	console.log("in updateProject");

	// get form info
	var projectID = $('#project').val();
	console.log(projectID);
	
	$(projectID).animate({
		width: $('#width').val()
	});

	var newText=$('#description').val();
	$(projectID + " .project-description").text(newText);



}