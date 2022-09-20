import { Animal } from "./Animal";

class Cachorro extends Animal {
    public mustRun: boolean

    constructor (name:string,lifeTime:number,makeNoise:boolean){
        super(name,lifeTime,makeNoise);
        this.mustRun=this.mustRun
    }
}