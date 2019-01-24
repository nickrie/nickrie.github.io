$('body').scrollspy({ target: '#navbar' });

// Animate navbar clicks
$('#navbar a').on('click', function(e) {
  e.preventDefault();
  // Empty Hash means they clicked my name, scroll back to the top
  if (this.hash === '') {
    $('html, body').animate({ scrollTop: 0 }, 500);
  }
  // Otherwise scroll to the clicked hash
  else {
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      500,
      function() {
        window.location.hash = hash;
      }
    );
  }
});
