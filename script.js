// Skill filter
document.querySelectorAll('.filter').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.skill-group').forEach(function (group) {
      var show = filter === 'all' || group.getAttribute('data-category') === filter;
      group.classList.toggle('hidden', !show);
    });
  });
});

// Expandable project cards
document.querySelectorAll('.card-head').forEach(function (head) {
  head.addEventListener('click', function () {
    var card = head.closest('.card');
    var open = card.classList.toggle('open');
    head.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
