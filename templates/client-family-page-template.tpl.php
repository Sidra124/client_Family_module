<?php
  global $user;
  $current_client_name = get_full_name(arg(1));
  $get_members_count = count(_client_family_all_members());
  $family_head_spouse = (is_spouse_already_exist(arg(1)));
  $benf_name = _client_beneficiaries_name(arg(1));
  $benf_status = _client_beneficiaries_status(arg(1));
  $all_members = _client_family_all_members();
  $get_members_count = count(_client_family_all_members());


?>
<div id="client-family-search-form">
   <?php
    print drupal_render(drupal_get_form('_client_family_form'));
    print drupal_render(drupal_get_form('_client_family_delete_form'));
   ?>
 </div>
<div class="clearAll"></div>
 <?php
  $path = (in_array('administrator', $user->roles) || in_array('clients', $user->roles) || in_array('paid_advisor', $user->roles) || in_array('admn', $user->roles)) ? '/advisor/'.arg(1).'/client' : '/user/'.arg(1).'/myaccount';
 ?>
 <div class="panel panel-primary">
   <div class="panel-heading">
     <span class="family-icon"></span>
     <span class="profile-heading">Family of <?php echo cleanOutput($current_client_name); ?></span>
     <a class="bordered-btn pull-right back-btn-margin" href="<?php echo $path ?>">Back to Summary</a>
     <div class="clearAll"></div>
   </div>
 </div>

 <div class="main-container">
   <div class="container-1">
    <?php
     if($path='/advisor/'.arg(1).'/client') { ?>
     <div class="button-form">
       <a id="delete-btn" class="del-btn" >Delete Family</a>
     </div>
      <?php } ?>
      
      <div class="clearAll"></div>
      <div class="first-line">
        <div class="this-user family-card">
          <img class="user-icon" >
          <p class="user-name"><?php echo cleanOutput($current_client_name); ?></p>
          <p class="user-relation" >Family Head</p>
          <div class = "family-view" >
            <?php if(get_profile_link($current_client_name, '') !== '') 
            { echo '<p class="user-link">'.get_profile_link($current_client_name, 'View').'</p>'; } ?>
          </div>
        </div> 
        <?php if($family_head_spouse) { ?>
        <div class="signup-user family-card">
          <img class="user-icon">
          <p class="user-name"><?php echo $family_head_spouse; ?></p>
          <p class="user-relation">Spouse</p>
          <div class="family-view">
            <?php
              echo $delete_member = '<p class="user-remove"><a class="remove-form" href="#"  >Delete Member</a></p>';
           ?>
          </div>
        </div>
       <?php } ?>
       </div>
       <div class="clearAll"></div>
       <div class="second-line">
       <?php 
      foreach ($benf_name as $key => $value) {
        $name_bnf = $benf_name[$key];
        $status_bnf = $benf_status[$key];
      ?>
        <div class="family-card">
          <img class="user-icon">
          <p class="user-name"><?php echo cleanOutput($name_bnf); ?></p>
          <p class="user-relation"><?php echo cleanOutput($status_bnf); ?></p>
          <div class="family-view">
            <?php
              echo $delete_member = '<p class="user-remove"><a class="remove-form" href="#">Delete Member</a></p>';
            ?>
          </div>
        </div>
      <?php }
           foreach($all_members as $key => $value){
            $relation_name =$value['name']; 
            $client_relation = client_relationship($value['relation']);
            ?>
            <div class="family-card">
            <img class="user-icon">
              <p class="user-name"><?php echo cleanOutput($relation_name); ?></p>
              <p class="user-relation"><?php echo cleanOutput($client_relation); ?></p>
              <div class="family-view">
                
                    <!-- <p class="user-remove"><a class="remove-form remove_fam_member" data-user-id="<?php echo arg(1);?>" data-key="<?php echo $key;?>" href="#" >Delete Member</a></p> -->
                  
                    <p class="user-remove"><a class="remove-form remove_fam_member" data-user-id="<?php echo arg(1);?>" data-key="<?php echo $key;?>" href=" /user/<?php echo arg(1); ?>/client_family/<?php echo $key; ?>/delete" >Delete Member</a></p>
              </div>
            </div>
            <?php }
         
          if(in_array('administrator', $user->roles) || in_array('paid_advisor', $user->roles) || in_array('admn', $user->roles)) { 
            if($get_members_count == 5){?>
               <div class="button-form add-member">
                <button id="add-btn" disabled= "disable" href="#"><span>+</span>Add Member</button>
              </div>
              <?php }
              else{ ?>
              <div class="button-form add-member">
                <button id="add-btn" href="#"><span>+</span>Add Member</button>
              </div>
               <?php } ?>
                <?php 
          } ?>
        
      </div> 
   </div>
</div>

