// var hihi;

// function hitung_volume(a,b){
//     var volumeA, volumeB, total;

//     volumeA = a*a*a;
//     volumeB = b*b*b;

//     total = volumeA+volumeB;
//     return total;
// }

// hihi = hitung_volume(4,4);
// console.log(hihi);

//7.array
// var arr = ['lia', 'sul', 'osy', 'bayu', 'farid','wicak'];

// arr.splice(2,0,'wkwkwk', 'hahah')
// console.log(arr.join(' - '))

// var arr2 = ['apasih', 'belajar', 'yang', 'bener'];
// var arr3 = arr2.slice(1,3);
// console.log(arr3.join('-' ))

//6. for eadch
// angka = [1,2,3,4,5,6,7,8,9];

// var cetak = function(e,i){
//     console.log('Mahasiswa ke-'+i+ ' adalah: '+e);
//     // console.log(e);
// }

// arr.forEach(cetak);

//7. map
// var  angka = [1,22,5, 30,4,10,6,7,8,9];
// var angka2= angka.map(function(e){
//     return e*1;
// });

// console.log(angka2.join(' - '));

// angka2.sort();
// console.log(angka2.join(' '))

//9. filter & find
// var  angka = [1,22,5, 30,4,10,6,7,8,9];
// var angka2 = angka.find(function(x){
//     return x > 5;
// });
// console.log(angka2);

// var arr_dont = [1,2,3,4];

// var mhs = {
//     nama: 'Lia Anggraini',
//     nim: '1104141065',
//     email: 'lianggraini98@gmail.com',
//     jurusan: 'Teknik Fisika'
// }

// console.log(mhs);

function buatObjectMahasiswa(nama, nim, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    console.log(this);
    return mhs;
}

var mhs2 = buatObjectMahasiswa('Muhammad Agfian', '1104151064','muhammadagfian96@gmail.com','Teknik Fisika');

buatObjectMahasiswa.halo=function(){
    console.log(this);
}

// function OMahasiswa(nama, nim, email, jurusan){
//     this.nama=nama;
//     this.nim=nim;
//     this.email=email;
//     this.jurusan=jurusan;
// }

// var mhs3 = new OMahasiswa('Agfian', '1104151064','muhammadagfian96@gmail.com','Teknik Fisika');
