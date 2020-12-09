
class Identify {
    constructor() {
      this.mystorage = window.sessionStorage;
      this.api = "http://dcd0d75986e1.ngrok.io/";
    }
    setData= (name,type)=>{
      let obj={username:name,usertype:type};
      this.mystorage.setItem('loginData', JSON.stringify(obj));
    }
    removeData = ()=>{
      this.mystorage.removeItem('loginData');
    }
    getData= ()=>{
      if(this.mystorage.getItem('loginData')){
        let data=this.mystorage.getItem('loginData');
        data= JSON.parse(data);
        return data;  
      }
      else return "nodata";
    }
  } 
  export default new Identify();