// bagian registrasi
function
registrasiCetakPoster(pesanan){
    console.log("pesanan cetak poster" + pesanan);
masukkankeAntrean(pesanan);
}

//bagian oprator
function opratorProsesPesanan(){
    let pesanan = ambilDariAntrean()

    if(pesanan){
        confirm("desain pesanan dikirim ke mesin cetak");
        //pengecekan oprator
        let kendala = false; 
        //ganti true jika ada kendala
        if(kendala){
            alert("terdapat kendala di tengah jalan")
        
        
        }else{
            //proses cetak selesai
            alert("proses cetak selesai")
       //hasil cetak dimasukan ke rak antrean
       console.log("hasil cetak dimasukan ke rak antrean")
            //hasil cetakan menunggu untuk diambil
            console.log("hasil cetakan menunggu untuk diambil")
            //pindah ke bagian kasir
            pindahkekasir() 

        }

    }
}
//bagian kasir
function pindahkekasir(){
    //pelanggan membayar cetak
    alert("pelanggan membayar biaya cetak")

    //proses order cetak poster selesai
    alert("proses order cetak poster selesai")
    
}

// fungsi antrean let antreanPesanan =[]
function
masukkankeAntrean(pesanan) {
    antreanpesanan.push(pesanan)
}
function ambilDariAntrean(){
    return antreanpesanan.shift()
}
//contoh penggunaan
registrasiCetakPoster("pesanan 1")
opratorProsesPesanan()




