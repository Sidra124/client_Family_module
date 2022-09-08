
/*function myFunction() {
  swal("Are you sure you want to delete family?", {
    buttons: ["Yes!", "No!"],
  });*/


(function($) {
  Drupal.behaviors.clientFamily = {
    attach: function (context, settings) {

      $('#add-btn').click(function() {
        $('form#-client-family-form').show();      
      });
       $('form#-client-family-form').hide();
     
      // if($get_members_count == 5)
      //$('#add-btn').attr('disabled','disabled');  

       $('#delete-btn').click(function() {
        $('form#-client-family-delete-form').show();
       // $('form#-client-family-form').hide();
       // $('form#-client-family-delete-form').show();    
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
    if (pageURL.indexOf("/client_family/") >= 0 && pageURL.indexOf("/new") >= 0) {
      $("<div class='client-family-overlay overlay-visible'>").prependTo($("body"));
    }
    if (pageURL.indexOf("/client_family/") >= 0 && pageURL.indexOf("/detail") >= 0) {
      $("<div class='client-family-overlay'>").prependTo($("body"));
    }
  });
})(jQuery);
