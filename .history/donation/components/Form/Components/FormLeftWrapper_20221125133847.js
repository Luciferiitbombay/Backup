// import React from 'react'
import styled from "styled-components"

const FormLeftWrapper = () => {
  return (
    <FormLeft>
        <FormInput>
            <label>Campaign Title</label>
            <Input>

            </Input>
        </FormInput>
      FormLeftWrapper
    </FormLeft>
)
}

const FormLeft =styled.div`
    display: flex;



`
const FormInput=styled.div`
    font-family: 'Courier New', Courier, monospace;
`
const Input=styled.div`
    background-color: ${(props)=>props.theme.};
`


export default FormLeftWrapper
