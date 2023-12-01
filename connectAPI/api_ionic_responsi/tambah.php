<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
//terima data dari mobile
$nama=trim($data['nama']);
$nilai=trim($data['nilai']);
http_response_code(201);
if($nama!='' and $nilai!=''){
 $query = mysqli_query($koneksi,"insert into peserta(nama,nilai) values('$nama','$nilai')");
 $pesan = true;
}else{
 $pesan = false;
}
echo json_encode($pesan);
echo mysqli_error($koneksi);