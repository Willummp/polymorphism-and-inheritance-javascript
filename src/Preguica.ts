import { Animal } from "./Animal";
import { IClimbTree }from "./IClimbTree"

class Preguica extends Animal {
    public climbTree : boolean

    constructor (name:string,lifeTime:number,makeNoise:boolean,climbTree:boolean){
        super(name,lifeTime,makeNoise);
        this.climbTree=climbTree;
    }
}

console.log('')
