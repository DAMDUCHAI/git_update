import { baseServices } from "./baseServices";

export class borrowServices extends baseServices {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    getAllBorrowByReader = (id) => {
        return this.get(`/borrow/author/${id}`);
    }
    
    getAllBorrowByIdAcount = (id) => {
        return this.get(`/borrow/author-email/${id}`);
    }
   
   
}


export const BorrowServices = new borrowServices();
