export class Course {
    id: number | undefined;
    name: string;
    imgURL: string;
    price: number;
    code: string;
    duration: number;
    rating: number;
    releaseDate: string;

    constructor (username: string,imgURL: string,
                price:number,code:string,
                duration:number,rating:number,
                releaseDate:string){
        this.name = username;
        this.imgURL = imgURL;
        this.price = price;
        this.code = code;
        this.duration = duration;
        this.rating = rating;
        this.releaseDate = releaseDate;
    }
}