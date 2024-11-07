const prompt = require('prompt-sync')();
uma nova função que pode ser usada 
function saudacao(nome) {
 console.log(' OI ' + nome);
}
function entradaNome(callback) {
 var nome = prompt('Digite seu nome:');
 callback(nome); 
}
entradaNome(saudacao); 