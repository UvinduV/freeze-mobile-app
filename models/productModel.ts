export class ProductModel {
    image: string;
    title: string;
    price: string;
    selectSize: string;

    constructor(image: string, title: string, price: string, selectSize: string) {
        this.image = image;
        this.title = title;
        this.price = price;
        this.selectSize = selectSize;
    }


}