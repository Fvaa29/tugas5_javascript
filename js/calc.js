function tambah(){
    let frm=document.getElementById("formulir");
    let numb1 = formulir.angka1.value;
    var numb2 = formulir.angka2.value;
    if(isNaN(numb1) || isNaN(numb2)){
        frm.hasil.value = alert("Maaf yang Anda Input bukan Angka")
    } else{
        let pjmlhan = parseInt(numb1) + parseInt(numb2);
        frm.hasil.value = pjmlhan;
        return pjmlhan;
    }
}

function kurang(){
    let frm=document.getElementById("formulir");
    let numb1 = formulir.angka1.value;
    var numb2 = formulir.angka2.value;
    if(isNaN(numb1) || isNaN(numb2)){
        frm.hasil.value = alert("Maaf yang Anda Input bukan Angka")
    } else{
        let min = parseInt(numb1) - parseInt(numb2);
        frm.hasil.value = min;
        return min;
    }
}

function kali(){
    let frm=document.getElementById("formulir");
    let numb1 = formulir.angka1.value;
    var numb2 = formulir.angka2.value;
    if(isNaN(numb1) || isNaN(numb2)){
        frm.hasil.value = alert("Maaf yang Anda Input bukan Angka")
    } else{
        let x = numb1 * numb2;
        frm.hasil.value = x;
        return x;
    }
}
function bagi(){
    let frm=document.getElementById("formulir");
    let numb1 = formulir.angka1.value;
    var numb2 = formulir.angka2.value;
    if(isNaN(numb1) || isNaN(numb2)){
        frm.hasil.value = alert("Maaf yang Anda Input bukan Angka")
    } else{
        let pmbagian = parseInt(numb1) / parseInt(numb2);
        frm.hasil.value = pmbagian;
        return pmbagian;
    }
}
function pangkat(){
    let frm=document.getElementById("formulir");
    let numb1 = formulir.angka1.value;
    var numb2 = formulir.angka2.value;
    if(isNaN(numb1) || isNaN(numb2)){
        frm.hasil.value = alert("Maaf yang Anda Input bukan Angka")
    } else{
        let pngkat = Math.pow(numb1, numb2);
        frm.hasil.value = pngkat;
        return pngkat;
    }
}