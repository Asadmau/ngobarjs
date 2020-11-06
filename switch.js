var tema = [];
tema['original'] = '#fff';
tema['dark'] = '#4A4A4A';



function switchTheme(event) {
    if (event.checked) {
        changeColor(tema['dark']);
        setELementWarna('.judul h1', tema['original']);
    } else {
        changeColor(tema['original'])
        setELementWarna('.judul h1', tema['dark']);
    }
}
function changeColor(color) {
    document.body.style.background = color;
}

function setELementWarna(selector, value) {
    document.querySelector(selector).style.color = value
}

window.addEventListener("load", () => {
    changeColor(tema['original']);
    route('home');
    // setRoute('#user', 'none')
    setRoute('.logout', 'none')
    
    setRoute('#admin', 'none')
})

function route(argument) { 
    if (argument == 'login') {
        setRoute('#login', 'block');
        setRoute('.judul', 'none');
        setRoute('.about', 'none');
    }else if(argument == 'about'){
        setRoute('.about', 'block');
        setRoute('#login', 'none');
        setRoute('.judul', 'none');
    }else{
        setRoute('.judul', 'block');
        setRoute('.about', 'none');
        setRoute('#login', 'none');
    }
 }
function setRoute(selector, value){
    document.querySelector(selector).style.display = value;
}

document.getElementById('btn-login').addEventListener('click',function(){
    route('login')
})
document.getElementById('btn-about').addEventListener('click',function(){
    route('about')
})
document.getElementById('btn-home').addEventListener('click',function(){
    route('home')
})

var akun = {
    username : 'rafli',
    password : 'acot123'
}

function login(){
    let username = document.getElementById('txtusername').value;
    let password = document.getElementById('txtpassword').value;
    if (username == akun.username && password == akun.password) {
        setRoute('#admin', 'block')
        setRoute('.logout', 'flex')
        setRoute('#user', 'none')
        setRoute('nav', 'none')
        setRoute('.toggle', 'none')
    }else{
        alert('Salah')
    }
}

function setNilai(id){
    let value = document.getElementById(id).value;
    return value;
}
let files = null;
let url = null;
function tambahData(){
    let nama_produk = setNilai('nama')
    let harga = setNilai('harga')
    let deskripsi = setNilai('desk');
    document.getElementById('lblnama').innerHTML = nama_produk;
    document.getElementById('lblharga').innerHTML = harga;
    document.getElementById('lbldesk').innerHTML = deskripsi;
    document.getElementById('gambar').src = url;

}

function readFile(event){
    files = event.files[0];
    let reader = new FileReader();
    reader.onload((gambar) =>{
        url = gambar.result;
    });
    reader.readAsText(files)
}
