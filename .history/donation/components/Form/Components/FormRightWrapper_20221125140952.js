// import React from 'react'
import styled from "styled-components"

const FormRightWrapper = () => {
  return (
    <FormRight>
        <FormInput>
            <FormRow>
                <RowFirstInput></RowFirstInput>
                <label>Required Amount</label>
                <RowInput></RowInput>
            </FormRow>
        </FormInput>
    </FormRight>
  )
}

const FormRight=styled.div`
    width:50%;
`
const FormInput=styled.div`
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    width: 100%;
    flex-direction:column;
    margin-top: 15px;
`
const FormRow=styled.div`

`

const RowInput=styled.input`
    padding: 8px;
    background-color: ${(props)=>props.theme.bgDiv};
    color: ${(props)=>props.theme.color};
    width: 50%;
    margin-top: 4px;
    border: none;
    border-radius: 20px;
    outline: none;
    font-size: large;

`



export default FormRightWrapper