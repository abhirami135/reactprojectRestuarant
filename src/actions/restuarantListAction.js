import axios from "axios";
import {R_SUCCESS,R_FAIL} from '../constants/restuarantConstant'
// action files used to define the logic  for updating state for a particular component
export  const  allRestuarantsList = ()=> async (dispatch) =>{
  try{
  const {data} = await axios.get('/restaurants .json')
  console.log(data);
  dispatch({
      type:R_SUCCESS,
      payload:data.restaurants
  })
}
catch(error){
  dispatch({
    type:R_FAIL,
    error:error
  })
}
}
