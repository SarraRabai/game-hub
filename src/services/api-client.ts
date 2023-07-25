import axios from "axios";


 export default axios.create({
    baseURL:'https://api.rawg.io/api',
   params :{
     key:'10d87f9c010a4e3898c228a1e8553028'
   }


})