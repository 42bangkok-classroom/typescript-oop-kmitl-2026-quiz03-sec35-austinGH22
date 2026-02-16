import { Product } from "./product";

export class Playstation extends Product {
    public generation: number;
    constructor(name: string, generation: number, price: number) {
        super(name, price);
        this.generation = generation;
    }
    
    public getProfile(): string {
        return this.name + "(Gen"+this.generation+")";
    }
    public getDiscountPrice(): number {
      let discount = (this.price * Product.DISCOUNT_PERCENT) / 100;
      return this.price - discount;
    }
}