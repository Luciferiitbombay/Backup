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
    </FormLeft>
)
}

const FormLeft =styled.div`
    display: flex;



`
const FormInput=styled.div`
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    width: 100%;
    flex-direction:column;
`
const Input=styled.input`

    padding: 8px;
    background-color: ${(props)=>props.theme.bgDiv};
    width: 100px;
    margin-top: 4px;
    border: none;
    border-radius: 20px;
    outline: none;
    

`


export default FormLeftWrapper
