jQuery.fn.taskTracker = function() {
  var elem_protos = {
    task_tracker: (
      '<div class="task-tracker">' +
      '  <ul class="activity-list">' +
      '    <li class="new activity">' +
      '      <form><input></input></form>' +
      '    </li>' +
      '  </ul>' +
      '</div>'
    ),
    task: (
      '<li class="unchecked task">' +
      '  <span class="button-panel">' +
      '    <button class="icon-remove"></button>' +
      '    <button class="icon-pencil"></button>' +
      '  </span>' +
      '  <span class="label"></span>' +
      '</li>'
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
      '      <form><input></input></form>' +
      '    </li>' +
      '  </ul>' +
      '</li>'
    )
  }

  $(elem_protos.task_tracker).prependTo(this)
    .on('submit', '.new > form', function(evt) {
      var type = $(this).parent().hasClass('task') ? 'task' : 'activity'

      var label = $(this).find('> input').val()
      $(this).find('> input').val('')

      $(this).parent().before(
        $(elem_protos[type]).find('> .label').text(label).parent()
      )
      return false
    })
    .on('submit', '.edit > form', function(evt) {
      var label = $(this).find('> input').val()
      return false
    })
    .on('click', '.button-panel > .icon-remove', function(evt) {
      $(this).parents('li:first').remove()
    })
    .on('click', '.button-panel > .icon-pencil', function(evt) {
      var $label = $(this).parents('li:first').addClass('edit').find('> .label')
      $label.replaceWith('<form><input>' + $label.text())
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
