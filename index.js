
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

function newFontGenerator(obj,startSize){
    obj.style.fontSize = startSize + 'px';
    return{
        obj: obj,
        value: startSize,
        next(value){
            if(value === 'up'){
                this.value += 2;
                this.obj.style.fontSize = this.value + 'px';
            }

            if(value === 'down'){
                if(this.value > 0){
                this.value -= 2;
                this.obj.style.fontSize = this.value + 'px';
                }
            }
            return this;
        }
    }
}

const fontGenerator = newFontGenerator(textBlock ,14);

function downFontSize(){
    fontGenerator.next("down").value;

}

function upFontSize(){
    fontGenerator.next("up").value;
}