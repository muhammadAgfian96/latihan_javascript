var hihi;

function hitung_volume(a,b){
    var volumeA, volumeB, total;

    volumeA = a*a*a;
    volumeB = b*b*b;

    total = volumeA+volumeB;
    return total;
}

hihi = hitung_volume(4,4);
console.log(hihi);

var arr = ['lia', 'sul', 'osy', 'bayu', 'farid','wicak'];

arr.splice(2,0,'wkwkwk', 'hahah')
console.log(arr.join(' - '))

var arr2 = ['apasih', 'belajar', 'yang', 'bener'];
var arr3 = arr2.slice(1,3);
console.log(arr3.join('-' ))

//6. for eadch
angka = [1,2,3,4,5,6,7,8,9]

var cetak = function(e,i){
    console.log('Mahasiswa ke-'+i+ ' adalah: '+e);
    // console.log(e);
}

arr.forEach(cetak);