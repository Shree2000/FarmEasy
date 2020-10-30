


class Identify {
    constructor() {
      this.username ='';
      this.usertype='';
    }


    setData= (name,type)=>{
        this.username=name;
        this.usertype=type;
    }
    removeData = ()=>{
        this.username ='';
        this.usertype='';
    }

    // login() {
    //   this.authenticated=true;
    
    // }
  
    // logout(cb) {
    //   this.authenticated = false;
    //   cb();
    // }
    
    // isAuthenticated() {
    //   return this.authenticated;
    // }
  }
  
  export default new Identify();
  