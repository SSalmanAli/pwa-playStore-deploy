"use client"
import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useState } from "react";
import Image from "next/image";

interface Type {
  email: string,
  firstname: string,
  lastname: string,
  image: string | null;
  dropdown: string 
}

const Signupform = () => {

  const [image, setImage] = useState<string | null>(null);
  const [formDataArray, setFormDataArray] = useState<Type[]>([]);

  const formik = useFormik<Type>({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      dropdown: '',
      image: null,
    },
    validationSchema: Yup.object({
      firstname: Yup.string().max(15, 'must be 15 characters long').required('required'),
      lastname: Yup.string().max(5, 'must be 5 characters long').required('required'),
      email: Yup.string().email('Invalid email address'),
      image: Yup.mixed().required('Image is required'),
      dropdown: Yup.string().required('Select a currency')
    }),
    // validate,
    onSubmit: (values, { resetForm }) => {
      const formData = {
        ...values,
        image, // Include the image in JSON
      };
      setFormDataArray([...formDataArray, formData]); // Store new entry in array
      alert(JSON.stringify(values , null , 2));
      resetForm()
    },
  });

  

 // Handle image upload
 const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setImage(base64String); // Store the image as Base64
      formik.setFieldValue("image", base64String); // Update form value
    };
  }
};

  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      {/* Email */}
      <label htmlFor="email">Email Address</label>
      <input 
      {...formik.getFieldProps('email')}
      type="email" 
      id="email" 
       />
      {formik.touched.firstname && formik.errors.firstname? <div>{formik.errors.firstname}</div> : null}

      {/* Firstname */}
      <label htmlFor="firstname">firstname</label>
      <input 
      {...formik.getFieldProps('firstname')} 
      type="firstname" 
      id="firstname" 
      />
      {formik.touched.firstname && formik.errors.lastname? <div>{formik.errors.lastname}</div> : null}

      {/* lastname */}
      <label htmlFor="lastname">lastname</label>
      <input 
      {...formik.getFieldProps('lastname')} 
      type="lastname" 
      id="lastname" 
      />
      {formik.touched.firstname && formik.errors.email? <div>{formik.errors.email}</div> : null}

      {/* Image Upload */}
      <label htmlFor="image">Upload Image</label>
      <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
      {formik.touched.image && formik.errors.image ? <div>{formik.errors.image}</div> : null}

       {/* Image Preview */}
       {image && <Image src={image} alt="Preview" width={100} height={100} />}

      {/* dropdown */}
      <label htmlFor="dropdown">Select Role</label>
        <select {...formik.getFieldProps("dropdown")} id="dropdown">
          <option value="">Select a role</option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Guest">Guest</option>
        </select>
        {formik.touched.dropdown && formik.errors.dropdown ? <div>{formik.errors.dropdown}</div> : null}


      <button type="submit">Submit</button>
    </form>

          {/* Display Submitted Data */}
          <h3>Submitted Data</h3>
      <ul>
        {formDataArray.map((data, index) => (
          <li key={index}>
            <strong>{data.firstname} {data.lastname}</strong> - {data.email} - {data.image} - {data.dropdown}
          </li>
        ))}
      </ul>

    </div>
  )
}
export default Signupform