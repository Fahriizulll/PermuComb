
// faktorial aman (iteratif, bukan rekursif)
function faktorial(n){
    let hasil = 1;
    for(let i = 1; i <= n; i++){
        hasil *= i;
    }
    return hasil;
}

function hitung(){

    let nInput = document.getElementById("n").value;
    let rInput = document.getElementById("r").value;

    let output = document.getElementById("output");
    let insight = document.getElementById("insight");

    // reset output
    output.classList.add("d-none");

    // VALIDASI 1: kosong
    if(nInput === "" || rInput === ""){
        alert("⚠️ Harap isi semua nilai terlebih dahulu!");
        return;
    }

    let n = Number(nInput);
    let r = Number(rInput);

    // VALIDASI 2: bukan angka
    if(isNaN(n) || isNaN(r)){
        alert("⚠️ Input harus berupa angka!");
        return;
    }

    // VALIDASI 3: harus bilangan bulat
    if(!Number.isInteger(n) || !Number.isInteger(r)){
        alert("⚠️ Gunakan bilangan bulat (tanpa desimal)!");
        return;
    }

    // VALIDASI 4: tidak boleh negatif
    if(n < 0 || r < 0){
        alert("⚠️ Nilai tidak boleh negatif!");
        return;
    }

    // VALIDASI 5: r tidak boleh lebih besar dari n
    if(r > n){
        alert("⚠️ Nilai r tidak boleh lebih besar dari n!");
        return;
    }

    // VALIDASI 6: batas aman (biar tidak overflow)
    if(n > 20){
        alert("⚠️ Nilai n terlalu besar! Maksimal 20 untuk performa.");
        return;
    }

    // PERHITUNGAN
    let permutasi = faktorial(n) / faktorial(n - r);
    let kombinasi = faktorial(n) / (faktorial(r) * faktorial(n - r));

    // TAMPILKAN HASIL
    output.classList.remove("d-none");

    document.getElementById("hasilPermutasi").innerHTML =
    `$$ P(${n},${r}) = \\frac{${n}!}{(${n}-${r})!} = ${permutasi} $$`;

    document.getElementById("hasilKombinasi").innerHTML =
    `$$ C(${n},${r}) = \\frac{${n}!}{${r}!(${n}-${r})!} = ${kombinasi} $$`;

    // INSIGHT DINAMIS (lebih “ngobrol”)
    let insightText = "";

    if(n === 0 && r === 0){
        insightText = "🤯 Menarik! Memilih dari nol tetap menghasilkan 1 kemungkinan.";
    }
    else if(r === 0){
        insightText = "😄 Memilih 0 objek selalu hanya 1 cara.";
    }
    else if(n === r){
        insightText = "😄 Semua objek dipilih! Tidak ada variasi lain.";
    }
    else if(r === 1){
        insightText = "😄 Memilih 1 objek itu sederhana, hasilnya sama dengan n.";
    }
    else if(permutasi > kombinasi){
        insightText = "🔥 Permutasi lebih besar karena urutan diperhitungkan.";
    }
    else{
        insightText = "🧠 Perhatikan hubungan antara permutasi dan kombinasi.";
    }

    insight.innerText = insightText;

    // RENDER ULANG MATHJAX
    MathJax.typeset();
}