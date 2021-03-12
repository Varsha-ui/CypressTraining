
export class ResponseData {

    //response data
    getStatus() : number
    {
        let status : number =200;
        return status;
    }

    getProperty() : string
    {
        let page : string = '\'page\', 2'
        return page;
    }

    getLength() : number
    {
        let length : number = 6
        return length;
    }
    getEmail() : string
    {
        let email : string = "michael.lawson@reqres.in"
        return email;
    }

    
}


