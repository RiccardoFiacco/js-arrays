const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.toReversed();// reverse va a cambiare anche l'array originario
console.log(reversedTeachers)
//altra soluzione
let reversedTeachers2=[];
let app;
for(i=0;i<teachers.length; i++){
  reversedTeachers2.unshift(teachers[i]);
}
//console.log(reversedTeachers2)
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for(i=0;i<teachers.length; i++){
  if(teachers[i].length>=5){
    longNames.unshift(teachers[i]);
  }
}
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
console.log(teachers);
let index = teachers.indexOf('Ed');
teachers.splice(index, 1);
console.log(teachers);

//aggiungi 'maria' tra phil e carlo (3)
teachers.splice(3,0,'Maria');
console.log(teachers);