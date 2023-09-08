//fungsi yang digunakan untuk mengganti sebuah kata dengan menggunakan 3 parameter
function changeWord(selectedText, changedText, text) {
    return text.replace(selectedText, changedText);
}

const kalimatSatu = "Widia Suka makan Soto";
const kalimatDua = "Pratama mencintaimu selamanya";

// ketika function ini dipanggil dengan variabel kalimatSatu
// maka output yang akan muncul adalah Widia suka makan Bakso
console.log(changeWord("Soto", "Bakso", kalimatSatu));

// ketika function ini dipanggil dengan variabel kalimatDua
// maka output yang akan muncul adalah Adinda sangat membenncimu selamanya
console.log(changeWord("mencintaimu", "membenncimu", kalimatDua));