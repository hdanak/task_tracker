$('.task-panel').on('click', '.closed,.open', function(evt) {
  if ($(this).is(evt.target) || $(this).find('> span').is(evt.target)) {
    $(this).siblings('li.open').toggleClass('open closed');
    $(this).toggleClass('open closed');
  }
  return false;
}).on('click', '.open > button.icon-remove', function(evt) {
  $(this).parent('li').remove();
}).on('submit', '.new.activity > form', function(evt) {
  $(this).parent().before('<li class="closed activity">'
      + '<span>' + $(this).find('> input').val() + '</span>'
      + '<button class="icon-remove"></button>'
      + '<ul class="task-list"></ul>'
    + '</li>');
  return false;
});

/*
d3.select('.task-panel .activity-list')
.enter().append('li')
*/
