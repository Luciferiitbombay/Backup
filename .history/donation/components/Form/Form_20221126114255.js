// import React from 'react'
// import { StyledEngineProvider } from "@mui/material";
import styled from "styled-components";
import FormRightWrapper from "./Components/FormRightWrapper";
import FormLeftWrapper from "./Components/FormLeftWrapper";
import { TailSpin } from "react-loader-spinner";
import { ethers } from "ethers";
import { createContext, useState } from "react";

const FormState=createContext();

const Form = () => {
    const [form, setForm] =useState({
        campaignTitle:"",
        story: "",
        requiredAmount: "",
        category:"Education"
   });

   const [storyUrl, setStoryUrl]=useState();
   const [imageUr, setImageUr]=useState();

   const [loading, setLoadiing]=useState(false);
   const [address, setAddress]=useState("");
   



   const FormHandler=(e)=>{
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
   }

   const [image, setImage] =useState(null);
   const ImageHandler=(e)=>{
        setImage(e.target.files[0]);
   }
 
  return (
    <FormState.Provider  value={{form, setForm, image, setImage, ImageHandler, FormHandler, setImageUr, setStoryUrl}}>

    <FormWrapper>
      <FormMain>
      {loading=false?
         address==""? 
            <Spinner><TailSpin height={60}/></Spinner> : 
                <Address>Subram</Address> :      

        
      }
      <FormTitle>Create Campaign</FormTitle>
      <FormInputWrapper>
            <FormLeftWrapper/>
            <FormRightWrapper/>
        </FormInputWrapper>
      </FormMain>
    </FormWrapper>
    </FormState.Provider>
  );
};

const Spinner=styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    align-items: center;
    justify-items: center;


`

const Address = styled.div`
        display: flex;
    width: 100%;
    height: 80vh;
    flex-direction: column;
    background-color: ${(props)= props.theme.bgSubDiv};
    border-radius: 20px;

`
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

export {FormState};
