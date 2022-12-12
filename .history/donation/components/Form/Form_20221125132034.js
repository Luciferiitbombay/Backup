// import React from 'react'
import { StyledEngineProvider } from "@mui/material"
import styled from "styled-components"

const Form = () => {
  return (
    <FormWrapper>
    <FormMain>
    <FormTitle>
        Create Campaign
    </FormTitle>

    </FormMain>
    </FormWrapper>
  )
}


const FormWrapper =styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

`
const FormMain=styled.div`
    width: 80%;




`

const FormTitle=styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    color: &{(props)=> props.theme};



`


export default Form
