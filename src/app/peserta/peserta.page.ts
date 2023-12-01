import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peserta',
  templateUrl: './peserta.page.html',
  styleUrls: ['./peserta.page.scss'],
})
export class PesertaPage implements OnInit {

  constructor(public _apiService: ApiService, private modal:ModalController, private router: Router
    ) { }
      dataPeserta: any = [];
      modal_tambah = false;
      id : any;
      nama : any;
      nilai : any;

  ngOnInit() {
    this.getPeserta();
    }
    getPeserta() {
    this._apiService.tampil('tampil.php').subscribe({
    next: (res: any) => {
    console.log('sukses', res);
    this.dataPeserta = res;
    },
    error: (err: any) => {
    console.log(err);
    },
    })
    }

    reset_model() {
      this.id = null;
      this.nama = '';
      this.nilai = '';
      }
      open_modal_tambah(isOpen: boolean) {
        this.modal_tambah = isOpen;
        this.reset_model();
        this.modal_tambah = true;
        this.modal_edit = false;
        }
      cancel() {
      this.modal.dismiss();
      this.modal_tambah = false;
      this.reset_model();
      }

      tambahPeserta() {
        if (this.nama != '' && this.nilai != '') {
        let data = {
        nama: this.nama,
        nilai: this.nilai,
        }
        this._apiService.tambah(data, '/tambah.php')
        .subscribe({
        next: (hasil: any) => {
        this.reset_model();
        console.log('berhasil tambah data nilai');
        this.getPeserta();
        this.modal_tambah = false;
        this.modal.dismiss();
        },
        error: (err: any) => {
        console.log('gagal tambah data nilai');
        }
        })
        } else {
        console.log('gagal tambah data nilai karena masih ada data yg kosong');
        }
        }

        hapusPeserta(id: any) {
          this._apiService.hapus(id,
          '/hapus.php?id=').subscribe({
          next: (res: any) => {
          console.log('sukses', res);
          this.getPeserta();
          console.log('berhasil hapus data');
          },
          error: (error: any) => {
          console.log('gagal');
          }
          })
          }

          ambilPeserta(id: any) {
            this._apiService.lihat(id,
            '/lihat.php?id=').subscribe({
            next: (hasil: any) => {
            console.log('sukses', hasil);
            let peserta = hasil;
            this.id = peserta.id;
            this.nama = peserta.nama;
            this.nilai = peserta.nilai;
            },
            error: (error: any) => {
            console.log('gagal ambil data');
            }
            })
            }

            modal_edit = false;
            
              open_modal_edit(isOpen: boolean, idget: any) {
              this.modal_edit = isOpen;
              this.id = idget;
              console.log(this.id);
              this.ambilPeserta(this.id);
              this.modal_tambah = false;
              this.modal_edit = true;
              }

              editPeserta() {
                let data = {
                id: this.id,
                nama: this.nama,
                nilai: this.nilai
                }
                this._apiService.edit(data, '/edit.php')
                .subscribe({
                next: (hasil: any) => {
                console.log(hasil);
                this.reset_model();
                this.getPeserta();
                console.log('berhasil edit data nilai');
                this.modal_edit = false;
                this.modal.dismiss();
                },
                error: (err: any) => {
                console.log('gagal edit data nilai');
                }
                })
                }

                goToLoginPage() {
                  this.router.navigate(['/login']);
                }
}
