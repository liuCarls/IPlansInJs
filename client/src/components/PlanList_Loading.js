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
    useEffect(() => {
        getPlans();
    }, []);
    
    const getPlans = async () => {
        const response = await axios.get('http://localhost:3001/plans');
        setPlan(response.data);
    }
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
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFetch = () => {
      setIsLoading(true);
      fetch("https://reqres.in/api/users?page=0")
        .then((respose) => respose.json())
        .then((respose) => {
           setUsers(respose.data)
           setIsLoading(false)
           // Optional code to simulate delay
           // setTimeout(() => {
           //   setUsers(respose.data);
           //   setIsLoading(false);
           // }, 3000);
        })
        .catch(() => {
           setErrorMessage("Unable to fetch user list");
           setIsLoading(false);
        });
    };
  const renderUser = (
    <div className="userlist-container">
      {users.map((item, index) => (
        <div className="user-container" key={index}>
          <img src={item.avatar} alt="" />
          <div className="userDetail">
            <div className="first-name">{`${item.first_name}                
                                   ${item.last_name}`}</div>
            <div className="last-name">{item.email}</div>
          </div>
        </div>
      ))}
    </div>
  );

    return (
        <div>
          ABC
          {isLoading ? <LoadingSpinner /> :renderUser}
          {errorMessage && <div className="error">{errorMessage}</div>}
          <button onClick={handleFetch} disabled={isLoading}>Fetch All Plans</button>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th></th>
                <th>Standard Plan</th>
                <th>Premium Plan</th>
              </tr>
            </thead>
            <tbody>
              { plans.map((plan, index) => (
                <tr key={ plan.plan_id }>
                  <td>{ plan.plan_name }</td>
                  <td>{(plan.plan_type==1||plan.plan_type==3)?<RiCheckFill />: <RiCloseFill /> } </td>
                  <td>{(plan.plan_type==2|| plan.plan_type==3)?<RiCheckFill />: <RiCloseFill /> }</td>
                </tr>
              )) }
              <tr>
                <td>
                </td>

                <td><input type="radio" value="1" checked={checked.sChec} onChange={changeRadio}/>HK$0/Month</td>
                <td><input type="radio" value="2" checked={checked.pChec} onChange={changeRadio}/>HK$388/Month</td>
              </tr>  
            </tbody>
          </table>
        </div>
    )
}


export default PlanList