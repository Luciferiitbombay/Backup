// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styled from "styled-components"
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import PaidIcon from '@mui/icons-material/Paid'
import Image from 'next/image'
import { Category } from "@mui/icons-material"
import { Button } from "@mui/material"



export default function Index() {
  return (
    <HomeWrapper>

      <FilterWrapper>
        <FilterAltIcon style={{fontSize:40}}/>
        <Category>Health</Category>
        <Category>Education</Category>
        <Category>Animal</Category>
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
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 15px;

`
const Category=styled.div`
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
  
  &: not(:hover){
      transition: transform 0.5s;
  }

`

const CardImg=styled.div`
  position: relative;
  height: 120px;
  width:100px;
`
const Title=st





