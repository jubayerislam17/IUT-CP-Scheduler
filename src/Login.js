import React, { useState } from 'react';
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useLogin } from './hooks/useLogin';


const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const {login , error , isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(id, password)
  }

  return (
    <>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <MDBInput className="mb-4" type="id" name="id" id="form3Example3" label="ID" value={id} onChange={(e) => setId(e.target.value)} required />
          <MDBInput className="mb-4" type="password" name="password" id="form2Example2" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center">
              <MDBCheckbox id="form2Example3" label="Remember me" defaultChecked />
            </MDBCol>
            <MDBCol>
              <a href="#!">Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <MDBBtn type="submit" className="mb-4" block disabled={isLoading}>
            Sign in
          </MDBBtn>

          <div className="text-center">
            <p>
              Not a member? <Link to="/Register">Register</Link>
            </p>
            <p>or sign in with:</p>

            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </div>

          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </>
  );
};

export default Login;
