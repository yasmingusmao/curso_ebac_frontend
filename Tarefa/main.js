$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#button_cancel-task').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const taskText = $('#new__task').val().trim();
        
        if (taskText !== " " ) {
            const newTask = `
                <li>
                    <input type="checkbox" id="task-${Date.now()}">
                    <label for="task-${Date.now()}">${taskText}</label>
                </li>
            `;

            $("#task_list").append(newTask);

            $("#new__task").val(" ");
        }
    });
});