// import React from 'react'
import { Button } from "@mui/material";
import styled from "styled-components";
import { FormState } from "../Form";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import { create as IPFSHTTPClient } from "ipfs-http-client";

import axios from "axios"
// const client = IPFSHTTPClient("https://ipfs.infura.io:5001/api/v0"); infura discontinued this service 

const JWT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmZjE2OTljMS04MWI0LTQ0NmItYTM4Ni04OTEzNDgyMmJjMWYiLCJlbWFpbCI6InN1YnJhbWRhczEyM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNjUzZTBlOGUwMzcxZDQ3MmM4Y2UiLCJzY29wZWRLZXlTZWNyZXQiOiJlMDY5OGNkMzU3NzZhYjkxNWQwMzQ4YjEzMWI3NWY4Y2ZiZmM2YmMyYTNkNzBiYTcwNzYwMWRkNjJkM2Y2NGMwIiwiaWF0IjoxNjY5NDA4MTM2fQ.QxEDvQxacVBuFapo_fq2gwhC0trees2FeRWWmKwl0Sk`

    const FileUpload = () => {

    const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async() => {

    const formData = new FormData();
    
    formData.append('file', selectedFile)

    const metadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', metadata);
    
    const options = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', options);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  
}







const FormRightWrapper = () => {
  const Handler = useContext(FormState);

  const [uploading, setUploading] = useState(false);

  const [uploaded, setUploaded] = useState(false);

    
  


  const uploadFiles = async (e) => {
    e.preventDefault();
    setUploading(true);
    if (Handler.form.story !== "") {
      try {
        const added = await client.add(Handler.form.story);
        Handler.setStoryUrl(added.path);
      } catch (error) {
        toast.warn("Error Uploading Story");
      }
    }

    if (Handler.image !== '') {
      try {
        const added = await client.add(Handler.image);
        Handler.setImageUr(added.path);
      } catch (error) {
        toast.warn("Error Uploading Image");
      }
    }

    setUploading(false);
    setUploaded(true);
    toast.success("FILES UPLOADED SUCCESSFULLY");
  };

  return (
        


    <FormRight>
      <FormInput>
        <FormRow>
          <RowFirstInput>
            <label>Required Amount</label>
            <Input
              onChange={Handler.FormHandler}
              value={Handler.form.requiredAmpunt}
              name="requiredAmount"
              type={"number"}
              placeholder="Amount"
            ></Input>
          </RowFirstInput>
          <RowSecondInput>
            <label>Choose Category</label>
            <Select
              onChange={Handler.FormHandler}
              value={Handler.form.category}
              name="category"
            >
              <option>Education</option>
              <option>Health</option>
              <option>Animal Welfare</option>
            </Select>
          </RowSecondInput>
        </FormRow>
      </FormInput>

      <FormInput>
        <label>Select Image</label>
        <Image
          onChange={Handler.ImageHandler}
          type={"file"}
          accept="image/*"
        ></Image>
      </FormInput>
      {uploading == true ? (<Buttos>
        <TailSpin color="#fff" height={20} /></Buttos>
      ) : uploaded == false ? (
        <Buttos onClick={FileUpload}>Upload Files To IPFS</Buttos>
      ) : (
        <Buttos style={{cursor: "no-drop"}}>Files Uploaded Succesfully</Buttos>
      )}
      <Buttos>Start Campaign</Buttos>

      <label class="form-label">Choose File</label>
    <input type="file"  onChange={changeHandler}/>
    <button onClick={handleSubmission}>Submit</button>
    </FormRight>
  );
};

const FormRight = styled.div`
  width: 45%;
`;
const FormInput = styled.div`
  font-family: "Courier New", Courier, monospace;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 15px;
`;
const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled.input`
  padding: 8px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  width: 100%;
  margin-top: 4px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: large;
`;
const RowFirstInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
const RowSecondInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
const Select = styled.select`
  padding: 8px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  width: 100%;
  margin-top: 4px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: large;
`;

const Image = styled.input`
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  width: 100%;
  margin-top: 4px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: large;

  &::-webkit-file-upload-button {
    padding: 15px;
    background-color: ${(props) => props.theme.bgSubDiv};
    color: ${(props) => props.theme.color};
    border: none;
    outline: none;
    font-weight: bold;
    font-size: large;
    cursor: pointer;
  }
`;
const Buttos = styled.button`
    display: flex;
    justify-content: center;
  width: 100%;
  padding: 15px;
  background-color: ${(props) => props.theme.bgSubDiv};
  /* color: ${(props) => props.theme.color}; */
  color: white;
  background-image: linear-gradient(180deg, #00b712 20%, #5aff15 50%);
  border: none;
  font-weight: bold;
  font-size: large;
  cursor: pointer;
  margin-top: 30px;
`;

export default FormRightWrapper;
