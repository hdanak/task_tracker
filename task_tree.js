$('.task-panel').on('click', '.closed,.open', function(evt) {
  if ($(this).is(evt.target) || $(this).find('> span').is(evt.target)) {
    $(this).siblings('li.open').toggleClass('open closed');
    $(this).toggleClass('open closed');
  }
  return false;
}).on('submit', '.new.activity > form', function(evt) {
  $(this).parent().before('<li class="closed activity">'
      + '<span class="button-panel">'
        + '<button class="icon-remove"></button>'
        + '<button class="icon-pencil"></button>'
      + '</span>'
      + '<span>' + $(this).find('> input').val() + '</span>'
      + '<ul class="task-list">'
        + '<li class="new task">'
          + '<form><input type="text"></input></form>'
        + '</li>'
      + '</ul>'
    + '</li>');
  $(this).find('> input').val('')
  return false;
}).on('click', '.activity > .button-panel .icon-remove', function(evt) {
  $(this).parents('li').first().remove();
}).on('submit', '.new.task > form', function(evt) {
  $(this).parent().before('<li class="task">'
      + '<span class="button-panel">'
        + '<button class="icon-remove"></button>'
        + '<button class="icon-pencil"></button>'
      + '</span>'
      + '<span>' + $(this).find('> input').val() + '</span>'
      + '<ul class="task-list"></ul>'
    + '</li>');
  $(this).find('> input').val('')
  return false;
}).on('click', '.task > .button-panel .icon-remove', function(evt) {
  $(this).parents('li').first().remove();
});

/*
d3.select('.task-panel .activity-list')
.enter().append('li')
*/
