import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
class Kocka {
  constructor(donja, gornja) {
    this.donja = donja;
    this.gornja = gornja;
  }
}
//svaka kocka ima 2 slova ,koja se nalaze na "gornjoj" i "donjoj" strani
//imamo kutiju od 20 kocaka
class kutija {
  constructor(slova) {
    this.kocke = [];
    //ubacujemo kocke u kutiju na temelju niza slova koji nam predstavalja slova na kockama
    for (var i = 0; i < slova.length - 1; i += 2) {
      this.kocke.push(new Kocka(slova[i], slova[i + 1]));
    }
  }
}
//incijaliziramo kutiju preko danih slova,tj. dobivamo 20 kocke sa dvije strane tj. sa 2 slova
let kutija1 = new kutija("BOXKDQCPNAGTRETGQDFSJWHUVIANOBERFSLYPCZM");
console.log(kutija1.kocke.length);
console.log(kutija1.kocke[0].gornja);
function moguLiSastavitiRijec(a) {
  let flag = true;
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < kutija1.kocke.length; j++) {
      //provjeravamo dali se svako slovo nalazi na nekoj od kocki, ako se nalazi onda cijelu kocku brisemo tj. stavljamo prazne stringove ( ako sam dobro shvatio nemoze koristiti donju i gornju stranu iste kocke jer bi se tada rijec "BOOK" mogla napisati)
      if (kutija1.kocke[j].donja === a[i]) {
        kutija1.kocke[j].donja = "";
        kutija1.kocke[j].gornja = "";
        break;
      } else if (kutija1.kocke[j].gornja === a[i]) {
        kutija1.kocke[j].donja = "";
        kutija1.kocke[j].gornja = "";
        break;
      }
      //nismo nasli dano slovo na nijednoj kocki 
      if (j === kutija1.kocke.length - 1) flag = false;
    }
    if (!flag) break;
  }
  return flag;
}
console.log(moguLiSastavitiRijec("BOOK"));
