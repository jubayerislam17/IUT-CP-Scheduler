import React from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import './Log-reg.css';
import Register from './Register';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
        <div className="main">
                <form>
                    <MDBInput className='mb-4' type='id' name='id' id='form3Example3' label='ID' />
                    <MDBInput className='mb-4' type='password' name='password' id='form2Example2' label='Password' />

                    <MDBRow className='mb-4'>
                        <MDBCol className='d-flex justify-content-center'>
                            <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                        </MDBCol>
                        <MDBCol>
                            <a href='#!'>Forgot password?</a>
                        </MDBCol>
                    </MDBRow>

                    <MDBBtn type='submit' className='mb-4' block>
                        Sign in
                    </MDBBtn>

                    <div className='text-center'>
                        <p>
                            Not a member? <Link to='/Register'> Register</Link>
                        </p>
                        <p>or sign in with:</p>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </div>
                </form>
        </div>
            
        </>
        
    );
}