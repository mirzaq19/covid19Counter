import $ from "jquery";
const baseURL = "https://covid19.mathdro.id/api";
function main(){
    const getDataGlobal = () => {
        fetch(`${baseURL}`)
        .then(response => {
            return response.json();
        })
        .then(responeJson => {
            dataCovid(responeJson);
        })
        .catch(error => {
            alert("Check your connection!!!");
        })
        const dataCovid = (hasil) => {
            let konfirmasi = document.querySelector("#konfirmasiGlobal");
            konfirmasi.innerText+=`${hasil.confirmed.value}`;
            let sembuh = document.querySelector("#sembuhGlobal");
            sembuh.innerText+=`${hasil.recovered.value}`;
            let meninggal = document.querySelector("#meninggalGlobal");
            meninggal.innerText+=`${hasil.deaths.value}`;
        }
    }
    getDataGlobal();
    
    
    const getPilihan = () => {
        fetch(`${baseURL}/countries/`)
        .then(response => {
            return response.json();
        })
        .then(responeJson => {
            masukPilihan(responeJson);
        })
        .catch(error => {
            alert("Check your connection!!!");
        })
        const masukPilihan = (hasil) => {
            let cekSatu = true;
            hasil = hasil.countries;
            // console.log(hasil);
            hasil.forEach(negara => {
                pilihanNegara.innerHTML+=`
                        <option value="${negara.iso2}">${negara.name}</option>
                    `;
            });
        }
    }
    getPilihan();
    function selectOption(sel){
        let opt;
        for(let i=0;i<sel.options.length;i++){
            opt = sel.options[i];
            if(opt.selected === true){
                break;
            }
        }
        return opt;
    }
    let pilihanNegara = document.querySelector(".custom-select");

    let tombolCari = document.querySelector(".btn");
    let tempatInfo = document.querySelector(".info");
    tombolCari.addEventListener("click", function () {
        let sekarang = selectOption(pilihanNegara);
        fetch(`${baseURL}/countries/${sekarang.value}`)
        .then(response => {
            return response.json();
        })
        .then(responeJson => {
            if(responeJson.error){
                tempatInfo.innerHTML = "";
                tempatInfo.innerHTML = `
                <div class="alert alert-warning alert-dismissible fade show nothing" role="alert">
                    <strong>Maaf!</strong> Negara ${sekarang.text} belum ada dalam database kami
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                `;
            }else{
                pernegara(responeJson);
            }
        })
        .catch(error => {
            alert("Check your connection!!!");
        })
        const pernegara = (hasil) => {
            let konfirmasi = document.querySelector("#konfirmasi");
            konfirmasi.innerText = "";
            konfirmasi.innerText+=`${hasil.confirmed.value}`;
            let sembuh = document.querySelector("#sembuh");
            sembuh.innerText = "";
            sembuh.innerText+=`${hasil.recovered.value}`;
            let meninggal = document.querySelector("#meninggal");
            meninggal.innerText = "";
            meninggal.innerText+=`${hasil.deaths.value}`;
        }
    })
    $(".info").on('click','button',function(){
        tempatInfo.innerHTML = "";
    })
    
}

export default main;