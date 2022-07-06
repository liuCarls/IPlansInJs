// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
import { useState, useEffect } from 'react'
import axios from "axios";
// import { Link } from "react-router-dom";
import { RiCloseFill, RiCheckFill } from "react-icons/ri";
import LoadingSpinner from "./LoadingSpinner";
import "./styles.css";


const PlanList = () => {
    const [plans, setPlan] = useState([]);
    // useEffect(() => {
        // getPlans();
    // }, []);
    
    // const getPlans = async () => {
        // const response = await axios.get('http://localhost:3001/plans');
        // setPlan(response.data);
    // }
    // let sChec = 0;
    // let pChec = 0;
    
    const [checked, setChecked] = useState({ sChec: false, pChec: false });
    const changeRadio = (e) => {
    setChecked(() => {
      if(e.target.value==1){
        return {
          sChec: true,
          pChec: false,
          [e.target.value]: true
        };
      } else {
        return {
          sChec: false,
          pChec: true,
          [e.target.value]: true
        };
      }
    });
  };
  
  // State to display error message
  // const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFetch = async () => {
      setIsLoading(true);
      const response = await axios.get('http://localhost:3001/plans');
      setPlan(response.data);
      setIsLoading(false)
      // fetch("http://localhost:3001/plans")
        // .then((respose) => respose.json())
        // .then((respose) => {
           // // setUsers(respose.data)
           // setPlan(respose.data)
           // setIsLoading(false)
           // // Optional code to simulate delay
           // // setTimeout(() => {
           // //   setUsers(respose.data);
           // //   setIsLoading(false);
           // // }, 3000);
        // })
        // .catch(() => {
           // setErrorMessage("Unable to fetch user list");
           // setIsLoading(false);
        // });
    };
  const renderUser = (
    <table className="table is-striped is-fullwidth" style={{borderCollapse: "collapse",width:"700px"}}>
      <caption style={{align:"top", height:"60px"}}><div style={{fontWeight:"900", fontSize:"30px"}}>Choose a plan</div></caption>
      <thead>
        <tr style={{height:"100px"}}>
          <th style={{width:"350px"}}></th>
          <th style={{width:"180px", textAlign:"center"}}>
            <div style={{border:"1px solid #000",display:"flex", width:"120px", height:"50px", alignItems:"center", justifyContent:"center"}}>Standard Plan</div>
            
            </th>
          <th style={{width:"180px",textAlign:"center"}}>
            <div style={{border:"1px solid #000",display:"flex", width:"120px", height:"50px", alignItems:"center", justifyContent:"center"}}>Premium Plan</div>
           </th>
        </tr>
      </thead>
      <tbody>
      {
        plans?plans.map((plan, index) => (
          <tr key={ plan.plan_id } style={{borderBottom:"1px solid #000", height:"50px"}}>
            <td>{ plan.plan_name }</td>
            <td style={{fontSize:"25px"}}>&nbsp;&nbsp;&nbsp;&nbsp;{(plan.plan_type==1||plan.plan_type==3)?<RiCheckFill />: <RiCloseFill /> } </td>
            <td style={{fontSize:"25px"}}>&nbsp;&nbsp;&nbsp;&nbsp;{(plan.plan_type==2|| plan.plan_type==3)?<RiCheckFill />: <RiCloseFill /> }</td>
          </tr>
        ))
      :<tr><td colspan="3" >No data</td></tr>}
      {
        <tr style={{height:"60px"}}>
          <td></td>
          <td><input type="radio" value="1" checked={checked.sChec} onChange={changeRadio}/>HK$0/Month</td>
          <td><input type="radio" value="2" checked={checked.pChec} onChange={changeRadio}/>HK$388/Month</td>
        </tr>  
      }
      </tbody>
    </table>
  );
  
  
  return (
      <div>
        
        {isLoading ? <LoadingSpinner /> :renderUser}
        {errorMessage && <div className="error">{errorMessage}</div>}
        <button onClick={handleFetch} disabled={isLoading}>Fetch All Plans</button>
        
      </div>
  )
}


export default PlanList