import React from 'react'
import CustomSelect from '../../components/CustomSelect'
import Count from '../../components/Count'
import Form from '../../components/Form'
import Toggle from '../../components/Toggle'

const page = () => {
  return (
    <div>
      <CustomSelect/>
      <hr />
      <Count/>
      <hr />
      <h1>Welcome to the Next.js App!</h1>
      <p>This is a simple example of a Next.js application with custom components.</p>
      <p>Explore the components to see how they work together.</p>
      <hr />
      <Form/>
      <hr />
      <p>Feel free to modify the components and see how they behave.</p>
      <Toggle/>
    </div>
  )
}

export default page