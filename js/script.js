$(document).ready(function() {
	let addButton = $('.add-button');
	let field = $('.add-field');
	let tasks = $('.tasks');

	//Add task
	addButton.on('click', function() {
		let elem = `<li class="task">
						<div class="task-checked col-1">
							<input type="checkbox">
						</div>
						<div class="task-text col-2">${field.val()}</div> 
						<div class="task-remove col-3"></div>
					</li>`; //col-2 field takes the value of whatever the user has currently entered into the field.
		tasks.append(elem); //adding newly created field above, INSIDE the "tasks" class and adds it to the end.
		field.val(''); //resetting the input field after button is pressed
	})

	//Remove task
	tasks.on('click', '.task-remove', function() { //for variable task, on click, (when you click the button with .task-remove), the following happens
		$(this).parent().remove(); //this refers to the specific .task-remove class assocated with its delete button.
									// then it calls parent of "this" (which is the li, then it is removed)
	})

	//Checked
	tasks.on('change', '.task-checked input', function() { //selects the input within the "task-checked class"
		$(this).parent().next().toggleClass('strikeout'); //find parent of checkbox element, task text class is next element so then just add next() to get to it. Then toggle function
	})

	//Sortable
	$('#tasks-list').sortable();

})

