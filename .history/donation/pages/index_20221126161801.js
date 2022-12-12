// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styled from "styled-components";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import Image from "next/image";
import { Category } from "@mui/icons-material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import { ethers } from "ethers";
import CampaignFactory from "../artifacts/contracts/Campaign.sol/CampaignFactory.json";
import { useState } from "react";
import { isAddress } from "ethers/lib/utils";

export default function Index(AllData, HealthData, EducationData, AnimalData) {
  comst[(filter, setFilter)] = useState(AllData);
  return (
    <HomeWrapper>
      <FilterWrapper>
        <FilterAltIcon style={{ fontSize: 40 }} />
        <Categorys onClick={() => setFilter(HealthData)}>Health</Categorys>
        <Categorys onClick={() => setFilter(EducationData)}>
          Education
        </Categorys>
        <Categorys onClick={() => setFilter(AnimalData)}>Animal</Categorys>
      </FilterWrapper>

      <CardWrapper>
        {filter.map((e) => {
          return (
            <Card>
              <CardImg>
                <Image layout="fill" src={""} />
              </CardImg>
              <Title>e.title</Title>
              <CardData>
                <Text>
                  Owner
                  <AccountBoxIcon />
                </Text>
                <Text>{isAddress.slice(0,6)}...{address.slice(39)}</Text>
              </CardData>
              <CardData>
                <Text>
                  Amount
                  <PaidIcon />
                </Text>
                <Text>100Matic</Text>
              </CardData>
              <CardData>
                <Text>
                  <EventIcon />
                </Text>
                <Text>2/2/2022, 41:55::66 PM</Text>
              </CardData>
              <Buttons>Go TO Campaign</Buttons>
            </Card>
          );
        })}
      </CardWrapper>
    </HomeWrapper>
  );
}

export async function getStaticProps() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_RPC_URL
  );
  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_ADDRESS,
    CampaignFactory.abi,
    provider
  );

  const getAllCampaigns = contract.filters.campaignCreated();
  const AllCampaigns = await contract.queryFilter(getAllCampaigns);
  const AllData = AllCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURL,
      owner: e.args.owner,
      timeStamp: e.args.timestamp,
      amount:e.args.requiredAmount
    };
  });
  const getHealthCampaigns = contract.filters.campaignCreated(
    null,
    null,
    null,
    null,
    null,
    null,
    "health"
  );
  const HealthCampaigns = await contract.queryFilter(getHealthCampaigns);
  const HealthData = HealthCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURL,
      owner: e.args.owner,
      timeStamp: e.args.timestamp,
      amount:e.args.requiredAmount
    };
  });
  const getEducationCampaigns = contract.filters.campaignCreated(
    null,
    null,
    null,
    null,
    null,
    null,
    "health"
  );
  const EducationCampaigns = await contract.queryFilter(getEducationCampaigns);
  const EducationData = EducationCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURL,
      owner: e.args.owner,
      timeStamp: e.args.timestamp,
    };
  });
  const getAnimalCampaigns = contract.filters.campaignCreated(
    null,
    null,
    null,
    null,
    null,
    null,
    "health"
  );
  const AnimalCampaigns = await contract.queryFilter(getAnimalCampaigns);
  const AnimalData = AnimalCampaigns.map((e) => {
    return {
      title: e.args.title,
      image: e.args.imgURL,
      owner: e.args.owner,
      timeStamp: e.args.timestamp,
    };
  });
  return {
    props: {
      AllData,
      HealthData,
      EducationData,
      AnimalData,
    },
  };
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FilterWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  width: 80%;
  margin-top: 15px;
`;
const Categorys = styled.div`
  display: flex;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.bgDiv};
  margin: 2px 15px;
  border-radius: 20px;
  font-family: "Courier New", Courier, monospace;
  cursor: pointer;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 25px;
`;
const Card = styled.div`
  width: 30%;
  margin-top: 25px;
  background-color: ${(props) => props.theme.bgDiv};
  &:hover {
    transform: translateY(-10px);
    transition: transform 0.5s;
  }

  &:not(:hover) {
    transition: transform 0.5s;
  }
`;

const CardImg = styled.div`
  position: relative;
  height: 120px;
  width: 100px;
`;
const Title = styled.h2`
  font-family: sans-serif;
  font-size: 20px;
  margin: 2px 2px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
`;
const CardData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 2px;
  cursor: pointer;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;
const Buttons = styled.button`
  padding: 8px;
  align-items: center;
  width: 100%;
  background-color: #00b712;
  background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
  border: none;
  cursor: pointer;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
