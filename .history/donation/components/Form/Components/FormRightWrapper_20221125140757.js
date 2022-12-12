// import React from 'react'
import styled from "styled-components"

const FormRightWrapper = () => {
  return (
    <FormRight>
        <FormInput>
            <FormRow>
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
const RowInput=styled.



export default FormRightWrapper