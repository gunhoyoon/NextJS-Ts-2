import Axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../src/component/ItemList/ItemList";
import { domesticProducts } from "../src/model/domesticProduct";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [list, setList] = useState<domesticProducts>([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res) => setList(res.data));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title> Home | 코딩건호</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40 }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
};

export default Home;
