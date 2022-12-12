// import React from 'react'
// import { StyledEngineProvider } from "@mui/material";
import styled from "styled-components";
import FormRightWrapper from "./Components/FormRightWrapper";
import FormLeftWrapper from "./Components/FormLeftWrapper";
import { createContext } from "react";

const FormState=createContext();

const Form = () => {
    const [form, setForm] =useState({
        campaignTitle:"",
        story: "",
        requiredAmount: "",
        
    });


  return (
    <FormWrapper>
      <FormMain>
        <FormTitle>Create Campaign</FormTitle>
        <FormInputWrapper>
            <FormLeftWrapper/>
            <FormRightWrapper/>
        </FormInputWrapper>
      </FormMain>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const FormMain = styled.div`
  width: 80%;
`;

const FormTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  color: ${(props) => props.theme.color};
  font-size: 40px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin: 40px 0px;
  /* padding: 0px 40px; */
`

const FormInputWrapper=styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2px 20px;


`

export default Form;
