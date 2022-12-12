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
`
const Input=styled.div`
    padding: ;
    background-color: ${(props)=>props.theme.bgDiv};

`


export default FormLeftWrapper
