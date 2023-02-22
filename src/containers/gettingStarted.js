import React from "react";
import { Link } from "react-router-dom";

const GettingStarted = () => {
  return (
    <div className="App">
      <Link to="/roles"> gettingStarted</Link>
    </div>
  );
};

export default GettingStarted;

// import {useNavigate} from "react-router-dom"
// import {setIsFirstTimeUser} from "../redux/reducers/userSlice"
// import {useDispatch} from "react-redux";
// const GettingStarted =()=> {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const assignVisitor =()=> {
//     dispatch(setIsFirstTimeUser())
//     navigate('/')
//   }
//   return (
//     <div className="App">
//        <button onClick={()=> assignVisitor()}>getting started </button>
//     </div>
//   );
// }

// export default GettingStarted;
