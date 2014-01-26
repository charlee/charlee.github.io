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

  var myCallback = function() {
    if (document.readyState == 'complete') {
      // Document is ready when CSE element is initialized.
      // Render an element with both search box and search results in div with id 'test'.
      google.search.cse.element.render(
          {
            div: "search-box",
            tag: 'search'
           });
    } else {
      // Document is not ready yet, when CSE element is initialized.
      google.setOnLoadCallback(function() {
         // Render an element with both search box and search results in div with id 'test'.
          google.search.cse.element.render(
              {
                div: "search-box",
                tag: 'search'
              });
      }, true);
    }
  };

  // Insert it before the CSE code snippet so that cse.js can take the script
  // parameters, like parsetags, callbacks.
  window.__gcse = {
    parsetags: 'explicit',
    callback: myCallback
  };

  // load google custom search script
  var cx = '009229273342055016380:64pl6zoxmvs';
  var gcse = document.createElement('script'); gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') +
      '//www.google.com/cse/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);

})();
