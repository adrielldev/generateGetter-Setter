const prompt = require('prompt-sync')();

console.log('Quantas prop p gerar getter e setter?\nDigite um inteiro:')
let nums = prompt('')
let str = '';
for(i=0;i<Number(nums);i++){
    console.log('Digite o nome da propriedade:');
    let prop = prompt('');
    str+=  `get ${prop}(){return this._${prop}};set ${prop}(v){this._${prop} = v}\n`;

       
}
console.log(str);