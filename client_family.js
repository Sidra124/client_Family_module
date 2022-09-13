
(function($) {

  Drupal.behaviors.clientFamily = {
    attach: function (context, settings) {

      $('#add-btn').click(function() {
        $('form#-client-family-form').slideDown('slow');  
      });
       $('form#-client-family-form').hide();
     
       $('#delete-btn').click(function() {
        $('form#-client-family-delete-form').show();
      });
       $('form#-client-family-delete-form').hide();
    }
  }
  $(document).ready(function() {
    var pageURL = $(location).attr("href");
    if (pageURL.indexOf("/client_family/") >= 0 && pageURL.indexOf("/detail") >= 0) {
      $("<div class='client-family-overlay'>").prependTo($("body"));
    }
  });
})(jQuery);
