(function() {

  $(document).click(function(e) {
    $(".search-bar").removeClass('active');
  });

  $(".search-bar").mouseover(function() {
    $(this).addClass('active');
  });

  $(".search-bar").click(function(e) {
    e.stopPropagation();
  });

})();
