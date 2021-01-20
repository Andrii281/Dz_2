
const textBlock = document.querySelector('.block').querySelector('.textBlock')

function* createIdGenerator(){
    let id = 1;
    while(true){
        yield id;
        id++
    }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value); 
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function newFontGenerator(startSize){
    return{
        value: startSize,
        next(value){
            if(value === 'up'){
                this.value += 2;
            }

            if(value === 'down'){
                if(this.value > 0){
                this.value -= 2;
                }
            }
            return this;
        }
    }
}

const fontGenerator = newFontGenerator(14);

function downFontSize(){
    textBlock.style.fontSize = fontGenerator.next('down').value +'px';

}

function upFontSize(){
    textBlock.style.fontSize = fontGenerator.next('up').value +'px';
}
