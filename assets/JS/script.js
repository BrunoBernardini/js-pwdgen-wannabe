/*
esercizio di oggi: (insicurissimo) password generator
nome repo: js-pwdgen-wannabe

1. Chiedi all’utente il suo nome;
2. Chiedi il suo cognome;
3. Chiedi il suo colore preferito;
4. Scrivi sulla pagina nomecognomecolorepreferito22.
 */

let nome, cognome, colore, pwd;
nome = prompt("Inserisci il tuo nome:");
cognome = prompt("Inserisci il tuo cognome:");
colore = prompt("Inserisci il tuo colore preferito:");

pwd = nome + cognome + colore + "22";

const content =
`
  <ul>
    <li>Nome: <strong>${nome}</strong></li>
    <li>Cognome: <strong>${cognome}</strong></li>
    <li>Colore preferito: <strong>${colore}</strong></li>
    <li><strong>Password generata: ${pwd}</strong></li>
  </ul>
`
document.getElementById('result').innerHTML = content;