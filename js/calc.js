function hitung(operator) {
  let form = document.getElementById("calcForm");
  let angka1 = parseFloat(form.angka1.value);
  let angka2 = parseFloat(form.angka2.value);
  let hasil = 0;

  
  if (angka1 === "" || angka2 === "")
    alert("Angka 1 dan Angka 2 harus diisi!.");
  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Angka 1 dan Angka 2 harus harus diisi dengan angka!.");
  } else {
    switch (operator) {
      case "tambah":
        hasil = angka1 + angka2;
        break;
      case "kurang":
        hasil = angka1 - angka2;
        break;
      case "kali":
        hasil = angka1 * angka2;
        break;
      case "bagi":
        hasil = angka1 / angka2;
        break;
      case "pangkat":
        hasil = angka1 ** angka2;
        break;
      default:
        hasil = "Error";
    }

    document.getElementById('hasil2').value = hasil;
  }
}
