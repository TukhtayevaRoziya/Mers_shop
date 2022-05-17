import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { authUserSignOut } from '../redux/actions/authActions';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

const PersistContainer = (props) => {
  const [tokenStateValid, setTokenStateValid] = useState(false);
  const user = useSelector((state) => state.authReducer);
  useEffect(() => {
       if(user.isAuthenticated && localStorage.getItem("access-token")){
        axios.get("https://api.mshop.softcity.uz/api/clientMainsAPI", {
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : "Bearer " + localStorage.getItem("access-token"),
              "Accept": "*/*",
              "Access-Control-Allow-Origin" : "*"
            }
        })
        .then(response => {
          setTokenStateValid(true)
        })
        .catch(err => {
          setTokenStateValid(false)
          props.authUserSignOut()
        })
       }
  }, [user, props])
  return tokenStateValid ?  (
    <Route {...props}/>
  ) : <></>
}

export default connect(null, { authUserSignOut })(PersistContainer)
