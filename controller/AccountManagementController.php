<?php 
require_once('BaseController.php');

class AccountManagementController extends BaseController
{
    public function index()
    {
        $this->render('admin_account');
    }
    
}
