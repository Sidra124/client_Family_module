 <?php
menu_item(‘client_family/memeber/%/delete’)

l(‘Delete’, ‘client_family/memeber/‘.$mid.‘/delete’)

http://efolio/client_family/memeber/3/delete

function _delete_member_form($form, &form_state) {
  $mid = arg(2);
  db_delete(‘link-family’,)
  condition(‘memeber_id’, $mid, ‘=’)
  execute()
  drupal_goto(‘client-family-detail-page’)
}
$count = 0;
foreach ($family_memeber as $key => $value) {
  // from benefirciase section
if(family_memeber_from_profile) {
  <div class=“box”>
    echo $value->name
    echo $value->relation
    echo l(‘Delete’, ‘client_family/memeber/‘.$value->id.‘/delete’)
  </div>
  }
  else {
    $count++;
    <div class=“box”>
    echo $value->name
    echo $value->relation
    echo l(‘Delete’, ‘client_family/memeber/‘.$count.‘/delete’)
  </div>
  }
}