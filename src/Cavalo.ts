import { Animal } from "./Animal";

class Cavalo extends Animal {
    public mustRun : boolean

    constructor (name:string,lifeTime:number,makeNoise:boolean,mustRun:boolean){
        super(name,lifeTime,makeNoise);
        this.mustRun=mustRun;
    }
}

console.log('')
