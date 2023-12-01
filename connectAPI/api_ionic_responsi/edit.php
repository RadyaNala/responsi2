<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
//terima data dari mobile
$id=trim($data['id']);
$nama=trim($data['nama']);
$nilai=trim($data['nilai']);
http_response_code(201);
if($nama!='' and $nilai!=''){
 $query = mysqli_query($koneksi,"update peserta set nama='$nama',nilai='$nilai' where
id='$id'");
 $pesan = true;
}else{
 $pesan = false;
}
echo json_encode($pesan);
echo mysqli_error($koneksi);