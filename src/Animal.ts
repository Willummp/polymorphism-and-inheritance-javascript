abstract class Animal {
    public name: string;
    public lifeTime: number;
    public makeNoise: boolean;
  
    constructor (name:string, lifeTime:number, makeNoise:boolean){
      this.name=name;
      this.lifeTime=lifeTime;
      this.makeNoise=makeNoise;
    }
  }
  export { Animal };