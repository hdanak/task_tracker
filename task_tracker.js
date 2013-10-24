jQuery.fn.taskTracker = function() {
  var templates = {
    task_tracker: (
      '<div class="task-tracker">' +
      '  <ul class="activity-list">' +
      '    <li class="new activity">' +
      '      <form><input/></form>' +
      '    </li>' +
      '  </ul>' +
      '</div>'
    ),
    activity: (
      '<li class="closed activity">' +
      '  <span class="button-panel">' +
      '    <button class="icon-remove"></button>' +
      '    <button class="icon-pencil"></button>' +
      '  </span>' +
      '  <span class="label"></span>' +
      '  <ul class="task-list">' +
      '    <li class="new task">' +
      '      <form><input/></form>' +
      '    </li>' +
      '  </ul>' +
      '</li>'
    ),
    task: (
      '<li class="unchecked task">' +
      '  <span class="button-panel">' +
      '    <button class="icon-remove"></button>' +
      '    <button class="icon-pencil"></button>' +
      '  </span>' +
      '  <span class="label"></span>' +
      '</li>'
    )
  }

  $(templates.task_tracker).prependTo(this)
    .on('submit', '.new > form', function(evt) {
      var type = $(this).parent().hasClass('task') ? 'task' : 'activity'

      var label = $(this).find('> input').val()
      $(this).find('> input').val('')

      var $new_item = $(templates[type]).find('> .label').text(label).parent()
      $(this).parent().before($new_item)

      if (type == 'activity')
        $new_item.click()

      return false
    })
    .on('submit', '.edit > form', function(evt) {
      $(this).parents('li:first').find('> .label').text(
        $(this).find('> input').val()
      )
      return false
    })
    .on('click', '.button-panel > .icon-remove', function(evt) {
      $(this).parents('li:first').remove()
    })
    .on('click', '.button-panel > .icon-pencil', function(evt) {
      var $label = $(this).parents('li:first').find('> .label')

      if ($label.hasClass('edit')) {
        $label.text($label.find('input').val())
      } else {
        $label.html(
          $('<form><input>').find('> input').val($label.text()).parent()
        )
      }

      $label.toggleClass('edit')

      return false
    })
    .on('click', '.closed,.open', function(evt) {
      if ($(this).add('> .label', this).is(evt.target)) {
        $(this).siblings('.open').toggleClass('open closed')
        $(this).toggleClass('open closed')
      }
      return false
    })
    .on('click', '.checked,.unchecked', function(evt) {
      if ($(this).add('> .label', this).is(evt.target)) {
        $(this).toggleClass('checked unchecked')
      }
      return false
    })
}
