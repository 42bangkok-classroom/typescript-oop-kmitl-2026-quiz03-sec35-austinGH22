export class Student {
    public firstname: string = ""
    public lastname: string  = ""
    constructor(){}

    printName():void {
        console.log(this.firstname+" "+this.lastname)
    }
}
