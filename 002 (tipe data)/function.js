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