"use strict";

var alunos = [{
  nome: "João",
  nota: 8.5
}, {
  nome: "Renata",
  nota: 5
}, {
  nome: "Maria",
  nota: 7
}, {
  nome: "Felipe",
  nota: 9
}, {
  nome: "Lucia",
  nota: 6
}, {
  nome: "Ricardo",
  nota: 3
}];
var alunosAprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(alunosAprovados);