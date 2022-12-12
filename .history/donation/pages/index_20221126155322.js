// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styled from "styled-components"
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import PaidIcon from '@mui/icons-material/Paid'
import Image from 'next/image'
import { Category } from "@mui/icons-material"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Button } from "@mui/material"
import EventIcon from '@mui/icons-material/Event';
import { ethers } from "ethers"
import CampaignFactory from '../a'


export default function Index() {
  return (
    <HomeWrapper>

      <FilterWrapper>
        <FilterAltIcon style={{fontSize:40}}/>
        <Categorys>Health</Categorys>
        <Categorys>Education</Categorys>
        <Categorys>Animal</Categorys>
      </FilterWrapper>

      <CardWrapper>
      <Card>
        <CardImg>
          <Image layout="fill" src={""}/>
        </CardImg>
        <Title>
          TreatMent of My Dog
        </Title>
        <CardData>
          <Text>Owner<AccountBoxIcon/></Text>
          <Text>0x548...868</Text>
        </CardData>
        <CardData>
          <Text>Amount<PaidIcon/></Text>
          <Text>100Matic</Text>
        </CardData>
        <CardData>
          <Text><EventIcon/></Text>
          <Text>2/2/2022, 41:55::66 PM</Text>
        </CardData>
        <Buttons>
          Go TO Campaign
        </Buttons>
      </Card>
      </CardWrapper>
    </HomeWrapper>
    )
}
const HomeWrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

`

const FilterWrapper=styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  width: 80%;
  margin-top: 15px;

`
const Categorys=styled.div`
  display: flex;
  padding: 10px 15px;
  background-color: ${(props)=> props.theme.bgDiv};
  margin: 2px 15px;
  border-radius: 20px;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
`

const CardWrapper=styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 25px;
`
const Card=styled.div`
  width: 30%;
  margin-top: 25px;
  background-color: ${(props)=> props.theme.bgDiv};
  &:hover{
    transform: translateY(-10px);
    transition: transform 0.5s;
  }
  
  &:not(:hover){
      transition: transform 0.5s;
  }

`

const CardImg=styled.div`
  position: relative;
  height: 120px;
  width:100px;
`
const Title=styled.h2`
  font-family: sans-serif;
  font-size: 20px;
  margin: 2px 2px;
  background-color: ${(props)=>props.theme.bgSubDiv};
  padding:5px;
  cursor: pointer;
`
const CardData=styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0px;
  background-color: ${(props)=>props.theme.bgSubDiv};
  padding: 2px;
  cursor: pointer;
`

const Text=styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`
const Buttons=styled.button`
  padding: 8px;
  align-items: center;
  width: 100%;
  background-color:  #00b712;
  background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
  border: none;
  cursor: pointer;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: bold;

`






