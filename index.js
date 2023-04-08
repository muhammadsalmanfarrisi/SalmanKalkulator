function luas() {
    alas = document.luas_s.alas.value;
    tinggi = document.luas_s.tinggi.value;

    luas = (alas * tinggi) / 2;

    document.luas_s.hasil.value = luas;
}
function keliling() {
    var s1 = +document.kel_s.s1.value;
    var s2 = +document.kel_s.s2.value;
    var s3 = +document.kel_s.s3.value;

    keliling = s1 + s2 + s3;

    document.kel_s.hasil_ks.value = keliling;
}
function luasj() {
    var alas = document.luas_j.alasj.value;
    var tinggi = document.luas_j.tinggij.value;

    luasj = alas * tinggi

    document.luas_j.hasil_lj.value = luasj;
}
function kelilingj() {
    var alasjs = +document.kel_jg.alasjs.value;
    var sisim = +document.kel_jg.sisim.value;

    b = alasjs + sisim;
    kelilingj = b * 2;

    document.kel_jg.hkel_jg.value = kelilingj;
}