export class Person {
    private age:number = 0
    public firstname:string = ""
    public lastname:String = ""
    public static COUNTRY:string = "Thailand"

    constructor(){
    }
    setAge(age:number):void{
        this.age = age
    }

    getAge():number{
        return this.age 
    }

    getFullName():string{
        return this.firstname + " " + this.lastname
    }
}