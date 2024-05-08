<?php 
require_once('BaseController.php');

class AdminIndexController extends BaseController
{
    public function index()
    {
        $this->render('admin_index');
    }
}