// import React from 'react'
import { Button } from "@mui/material"
import styled from "styled-components"

const FormRightWrapper = () => {
  return (
    <FormRight>
        <FormInput>
            <FormRow>
                <RowFirstInput>
                    <label>Required Amount</label>
                    <Input type={"number"} placeholder="Amount"></Input>
                </RowFirstInput>
                <RowSecondInput>
                    <label>Choose Category</label>
                    <Select>
                        <option>Education</option>
                        <option>Health</option>
                        <option>Animal Welfare</option>
                    </Select>
                </RowSecondInput>
            </FormRow>

        </FormInput>

        <FormInput>
            <label>Select Image</label>
            <Image type={'file'} accept='image/*'></Image>
        </FormInput>
        <Button>
            Upload Files To IPFS
        </Button>
        <Button>
            Start Campaign
        </Button>
    </FormRight>
  )
}

const FormRight=styled.div`
    width:45%;
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
const RowFirstInput=styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`
const RowSecondInput=styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`
const Select=styled.select`
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

const Image=styled.input`
    background-color: ${(props)=>props.theme.bgDiv};
    color: ${(props)=>props.theme.color};
    width: 100%;
    margin-top: 4px;
    border: none;
    border-radius: 20px;
    outline: none;
    font-size: large;
    
    &::-webkit-file-upload-button{
    padding :15px;
    background-color: ${(props)=>props.theme.bgSubDiv};
    color: ${(props)=>props.theme.color};
    border: none;
    outline: none;
    font-weight: bold;
    font-size: large;
    cursor: pointer;
    }

`
const Button=styled.button`
    
    `


export default FormRightWrapper