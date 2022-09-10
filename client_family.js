
/*function myFunction() {
  swal("Are you sure you want to delete family?", {
    buttons: ["Yes!", "No!"],
  });*/
  
  // function id_ajax(i,user_id){
  //    console.log(i, user_id);
  // }



(function($) {
  

  Drupal.behaviors.clientFamily = {
    attach: function (context, settings) {

      $('.remove_fam_member').click(function() {
        var client_id = $(this).data('user-id');
        var member_id = $(this).data('key');
       
        function id_ajax(client_id, member_id){
          console.log(client_id, member_id);
          $.ajax({
            url: 'user/'+client_id+ '/client_family/'+member_id+'/delete',
            type: 'GET',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            success: function (response) {
                alert(response.status);
            },
            error: function () {
                alert("error");
            }
        }); 
         } 

      });

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
