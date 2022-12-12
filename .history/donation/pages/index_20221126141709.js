// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styled from "styled-components"
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import PaidIcon from '@mui/icons-material/Paid'
import Image from 'next/image'
import { Category } from "@mui/icons-material"



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
        
      </CardWrapper>
    </HomeWrapper>

      <div>

      </div>
    )
}