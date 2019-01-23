$('body').scrollspy({ target: '#navbar' });

// Offset anchor links to prevent fixed nav from overlapping text

function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 70);
  }
}

$(document).on('click', 'a[href^="#"]', function(event) {
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

window.setTimeout(offsetAnchor, 0);
