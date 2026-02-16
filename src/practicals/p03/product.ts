export class Product {
    public readonly name: string ;
    protected price: number
    public static readonly DISCOUNT_PERCENT: number = 10;
    
    constructor(name?: string , price?: number){
        this.name = name || '' 
        this.price = price || 0
    }

    getPrice():number{
        return this.price
    }
    setPrice(price: number):void{
        this.price = price   
    }
}

