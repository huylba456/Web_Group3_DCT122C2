<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Kiểm tra xem file có được tải lên không
    if (isset($_FILES['file'])) {
        $file = $_FILES['file'];

        // Tạo một đường dẫn mới cho file
        $newFilePath = 'path/to/your/folder/' . $file['name'];

        // Di chuyển file đã tải lên vào thư mục đích
        if (move_uploaded_file($file['tmp_name'], $newFilePath)) {
            echo 'File uploaded successfully.';
        } else {
            echo 'Failed to upload file.';
        }
    }
    
}
?>