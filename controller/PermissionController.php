<?php
require_once('BaseController.php');
require_once(__DIR__ . '/../model/NguoiDungBUS.php');
class PermissionController extends BaseController
{
    public function index()
    {
        $this->render('admin_permission');
    }
}