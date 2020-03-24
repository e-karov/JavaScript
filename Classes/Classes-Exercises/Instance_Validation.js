     // 100 / 100
class CheckingAccount{
    constructor(id, mail, first, last){
        this.clientId = id;
        this.email = mail;
        this.firstName = first;
        this.lastName = last;
    }
      get clientId(){
          return this._clientId;
      }

      set clientId(id){
          if (id.length  != 6) {
              throw new TypeError("Client ID must be a 6-digit number")
          }
          this._clientId = id;
      }

      get email(){
          return this._email;
      }

      set email(value){
          if( ! (/^[a-z0-9]+@[a-z.]+$/).test(value)){
            throw new TypeError ("Invalid e-mail")
      }
            this._email = value;
      } 

      get firstName(){
          return this._firstName;
      }

      set firstName(name){
        if ( !(/.{3,20}/).test(name)) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }

        if (! (/\b[a-zA-Z]+\b/).test(name)) {
            throw new TypeError("First name must contain only Latin characters");
        }

        this._firstName = name;
      }

      get lastName(){
          return this._lastName;
      }

      set lastName(name){
        if ( !(/.{3,20}/).test(name)) {
            throw new TypeError("Last name must be between 3 and 20 characters long")
        }

        if (! (/\b[a-zA-Z]+\b/).test(name)) {
            throw new TypeError("Last name must contain only Latin characters");
        }

          this._lastName = name;
      }
}

let acc = new CheckingAccount('423414', 'petkan@another.co.uk', 'Pesho', 'Draganov')
console.log(acc.clientId)