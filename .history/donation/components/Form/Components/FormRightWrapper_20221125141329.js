// import React from 'react'
import styled from "styled-components"

const FormRightWrapper = () => {
  return (
    <FormRight>
        <FormInput>
            <FormRow>
                <RowFirstInput>
                    <label>Required Amount</label>
                    <Input></Input>
                </RowFirstInput>
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
    display: flex;
    justify-content: space-between;
    width: 100%;

`

const Input=styled.input`
    padding: 8px;
    background-color: ${(props)=>props.theme.bgDiv};
    color: ${(props)=>props.theme.color};
    width: 100%;
    margin-top: 4px;
    border: none;
    border-radius: 20px;
    outline: none;
    font-size: large;

`
const RowFirstInput=styled.div


export default FormRightWrapper