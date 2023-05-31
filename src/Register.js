import React from 'react';
import { useFormik } from "formik"
import * as Yup from "yup"
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import './Log-reg.css';

export default function Register() {

        const formik = useFormik({
            initialValues: {
                name: "",
                id: "",
                password: "",
                cpassword: "",
                cf_handle: "",
                atcoder_username: ""
            },
            validationSchema:Yup.object({
                name: Yup.string()
                    .max(15, "must be 10 characters or more")
                    .required("Required"),
                id: Yup.string()
                    .min(9,)
                    .required("Required"),
                password: Yup.string()
                    .min(8, 'Password must be 8 characters long')
                    .matches(/[0-9]/, 'Password requires a number')
                    .matches(/[a-z]/, 'Password requires a lowercase letter')
                    .matches(/[A-Z]/, 'Password requires an uppercase letter')
                    .matches(/[^\w]/, 'Password requires a symbol')
                    .required("Required"),
                cpassword:Yup.string()
                    .label('confirm password')
                    .required()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required("Required"),
                cf_handle:Yup.string()
                .required("Required"),
                atcoder_username :Yup.string()
                .required("Required"),
            }),
            onSubmit: (values) => {
                console.log(values);
            }
        })

        // console.log(formik.errors);
    return (
        <>
            <div className="main">
            <form onSubmit={formik.handleSubmit}>
            
            <MDBInput className='mb-4' type='name' name='name' id='form3Example3' label='Name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
             />
             {formik.touched.name && formik.errors.name ? <p className='error'>{formik.errors.name}</p> : null }

            <MDBInput className='mb-4' type='id' name='id' id='form3Example3' label='ID'
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            value={formik.values.id}
            />
             {formik.touched.id && formik.errors.id ? <p className='error'>{formik.errors.id}</p> : null }

            <MDBInput className='mb-4' type='password' name='password' id='form3Example4' label='Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
             />
             {formik.touched.password && formik.errors.password ? <p className='error'>{formik.errors.password}</p> : null }

            <MDBInput className='mb-4' type='password' name='cpassword' id='form3Example4' label='Confirm Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cpassword}
             />
             {formik.touched.cpassword && formik.errors.cpassword ? <p className='error'>{formik.errors.cpassword}</p> : null }

            <MDBInput className='mb-4' name='cf_handle' type="text" label='Codeforces handle'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
            value={formik.values.cf_handle}
             />
             {formik.touched.cf_handle && formik.errors.cf_handle ? <p className='error'>{formik.errors.cf_handle}</p> : null }

            <MDBInput className='mb-4' name='atcoder_username' type="text" label='Atcoder username'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
            value={formik.values.atcoder_username}
             />
             {formik.touched.atcoder_username && formik.errors.atcoder_username ? <p className='error'>{formik.errors.atcoder_username}</p> : null }



            <MDBBtn type='submit' className='mb-4' block>
                Sign up
            </MDBBtn>

            <div className='text-center'>
                <p>
                    Not a member? <a href='#!'>Register</a>
                </p>
                <p>or sign up with:</p>

                
                <MDBBtn floating color="secondary" className='mx-1'>
                    <MDBIcon fab icon='google' />
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