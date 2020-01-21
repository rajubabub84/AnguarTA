export class Register{
    missioncode:string;
    countrycode:string;
    emailid:string;    
    password:string;
    firstname:string;
    lastname:string;
    contact:string;
    url:string;
    constructor(missioncode:string, countrycode: string,emailid:string,password:string,firstname:string,
        lastname:string,contact:string,url:string ) {
        this.missioncode = missioncode;
        this.countrycode = countrycode;
        this.emailid = emailid;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.contact = contact;
        this.url = url;
     }
}