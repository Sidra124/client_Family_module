
(function($) {

  Drupal.behaviors.clientFamily = {
    attach: function (context, settings) {

      $('#add-btn').click(function() {
      //  $('form#-client-family-form').show();  
        $('form#-client-family-form').slideDown('slow');  
      //  $('.client-family-overlay').removeClass('overlay-visible');
       // $('.client-family-overlay').addClass('overlay-visible');  
      });
       $('form#-client-family-form').hide();
     
       $('#delete-btn').click(function() {
        $('form#-client-family-delete-form').show();
        
      });
       $('form#-client-family-delete-form').hide();

      $('.page-user-client-family form#-client-family-form a').click(function(){
        $(this).parents('form').hide('slow');
        $('.client-family-overlay').removeClass('overlay-visible');
        return false;
      });
      $('.page-user-client-family form#-client-family-delete-form a').click(function(){
        $(this).parents('form').hide('slow');
        $('.client-family-overlay').removeClass('overlay-visible');
        return false;
      });
      if($('.page-user-client-family .messages.error').length > 0) {
        $('form#-client-family-form').show();
      }
    }
  }
  $(document).ready(function() {
    var pageURL = $(location).attr("href");
    if (pageURL.indexOf("/client_family/") >= 0 && pageURL.indexOf("/detail") >= 0) {
      $("<div class='client-family-overlay'>").prependTo($("body"));
    }
  });
})(jQuery);
