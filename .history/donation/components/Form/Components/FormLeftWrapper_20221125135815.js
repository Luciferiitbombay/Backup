// import React from 'react'
import styled from "styled-components"

const FormLeftWrapper = () => {
  return (
    <FormLeft>
        <FormInput>
            <label>Campaign Title</label>
            <Input placeholder="Campaign Title">

            </Input>
        </FormInput>
        <FormInput>
            <label>Story</label>
            <TextArea placeholder="Campaign Story">

            </TextArea>
        </FormInput>
    </FormLeft>
)
}

const FormLeft =styled.div`
    /* display: flex; */



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
    color: ${(props)=>props.theme.color};
    width: 100%;
    margin-top: 4px;
    border: none;
    border-radius: 20px;
    outline: none;
    font-size: large;

`
const TextArea=styled.textarea`
    padding: 8px;
    background-color: ${(props)=>props.theme.bgDiv};
    color: ${(props)=>props.theme.color};
    width: 200px;
    margin-top: 4px;
    border: none;
    border-radius: 20px;
    outline: none;
    font-size: large;
    max-width: 50%;
    min-width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
`


export default FormLeftWrapper
