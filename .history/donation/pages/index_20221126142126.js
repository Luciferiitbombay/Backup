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
        <Buttons></Buttons>
      </CardWrapper>
    </HomeWrapper>

      <div>

      </div>
    )
}