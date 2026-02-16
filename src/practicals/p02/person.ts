export class Person {
    private age:number= 0
    public firstname:string = ""
    public lastname:String = ""
    public static COUNTRY:string = "Thailand"

    constructor(){
    }

    setAge(age:number){
        this.age = age
    }

    getAge(){
        return this.age 
    }

    getFullName(){
        return this.firstname + " " + this.lastname
    }
}