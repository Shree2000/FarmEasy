

class Auth {
    constructor() {
     this.Authenticated=false;
    }
  
    login() {
      
      this.Authenticated=true;
    
    }
  
    logout(cb) {
      this.Authenticated=false;
      cb();
    }
    
    isAuthenticated() {
      return this.Authenticated;  
    }
  }

  export default new Auth();
  