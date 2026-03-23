interface Iperson{
    getName():string;
    getAge():number;
    // For now we use only string after some time we will use objects
    getDetails():string;
}


abstract class Person implements Iperson{
    readonly id: string;
    readonly dateOfBirth: number;
    readonly dataOfJoining: Date;

    constructor(
        public name: string,
        public age: number,

        public email: string
    )
    {
        this.id = genrateID();
        this.dateOfBirth = new Date();
        this.dataOfJoining = new Date();
    

    }

    private genrateID():string{
        return `ID ${Date.now()}`;
        
    }
}