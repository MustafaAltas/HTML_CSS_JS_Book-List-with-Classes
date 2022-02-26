const form = document.getElementById("book-form");
const başlıkGirdi = document.getElementById("title");
const yazarGirdi = document.getElementById("author");
const barkodGirdi = document.getElementById("isbn");
const tableList = document.getElementById("table");

console.log(form.secondElementChild);

class Kitap {
  constructor(başlık, yazar, barkod) {
    this.başlık = başlık;
    this.yazar = yazar;
    this.barkod = barkod;
  }
}
//******************************** */
class UI {
  static hataMesaj() {
    const div = document.createElement("div");
    div.style.backgroundColor = "rgba(255,0,0,0.2)";
    div.style.borderRadius = "10px";
    div.style.textAlign = "center";
    div.innerText = "Lütfen Eksik Bilgi Girmeyiniz!";
    form.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 1000);
  }
  static onayMesaj() {
    const div = document.createElement("div");
    div.style.backgroundColor = "rgba(0,255,0,0.2)";
    div.style.borderRadius = "10px";
    div.style.textAlign = "center";
    div.innerText = "Kitap Bilgileri Eklendi";
    form.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 1000);
  }
  static onayMesaj2() {
    const div = document.createElement("div");
    div.style.backgroundColor = "rgba(0,255,0,0.2)";
    div.style.borderRadius = "10px";
    div.style.textAlign = "center";
    div.innerText = "Başarıyla silindi";
    form.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 1000);
  }
  static eklemeİşlemi(yeniFilm) {
    const tBody = document.getElementById("book-list");
    tBody.innerHTML += `
        <tr class = "trlist">
           <td>${yeniFilm.başlık}</td>
           <td>${yeniFilm.yazar}</td>
           <td>${yeniFilm.barkod}</td>
           <td><button class="sil">sil</button></td>
        </tr>`;
  }
  static temizlik(e1, e2, e3) {
    e1.value = "";
    e2.value = "";
    e3.value = "";
  }
  static silmeİşlemi(e) {
    if (e.target.className == "sil") {
      e.target.parentElement.parentElement.remove();
    }
    UI.onayMesaj2();
  }
  static hepsiniSilmeİşlemi(){
      const trlist = document.querySelectorAll(".trlist")
      trlist.forEach(e => {
          e.remove();
      })

  }
}
//*************************************** */

tümEventler();

function tümEventler() {
  form.addEventListener("submit", kitapEkle);
  tableList.addEventListener("click", tektekSil);
  tableList.addEventListener("click",hepsiniSilme)
}

function kitapEkle(e) {
  const başlık = başlıkGirdi.value;
  const yazar = yazarGirdi.value;
  const barkod = barkodGirdi.value;

  if (başlık === "" || yazar === "" || barkod === "") {
    console.log("olmaz");
    UI.hataMesaj();
  } else {
    const yeniKitap = new Kitap(başlık, yazar, barkod);
    UI.eklemeİşlemi(yeniKitap);
    UI.onayMesaj();
  }
  UI.temizlik(başlıkGirdi, yazarGirdi, barkodGirdi);
  e.preventDefault();
}

function tektekSil(e) {
    UI.silmeİşlemi(e);
    

}

function hepsiniSilme(e){
    if(e.target.className == "hepsinisil"){
        UI.hepsiniSilmeİşlemi();
        
    }
}
