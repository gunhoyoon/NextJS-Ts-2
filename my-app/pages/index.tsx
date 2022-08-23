import Axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../src/component/ItemList/ItemList";
import { DomesticProducts } from "../src/model/domesticProduct";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [list, setList] = useState<DomesticProducts>([]);
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
      <Header as="h3" style={{ paddingTop: 40, paddingLeft: 30 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40, paddingLeft: 30 }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
};

// 슬라이스로 짤라서 신상품 베스트 상품 넘기는거까지 했고, 이제 링크 달아서 상세페이지로 넘어가는거 해야됨
// 이번 새 파일만들면서 놓친 부분이 프롭스 넘길때 넘겨준 파일에서 인터페이스 정의안했고, useState로 상태관리할때 useState한테 타입 안줌
// 그래서 넘겨서 List로 map을 못돌림
// 화면 랜더할때 세로 줄 생기는 이슈 있는데 당장은 안중요하니까 일단 넘김
export default Home;
