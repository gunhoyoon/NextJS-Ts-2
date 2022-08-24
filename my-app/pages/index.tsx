import Axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/component/ItemList/ItemList";
import { DomesticProducts } from "../src/model/domesticProduct";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [list, setList] = useState<DomesticProducts>([]);
  const [isLoading, setIsLoading] = useState<SetStateAction<boolean>>(true);
  // api를 요청하는 그 사이에 아무것도 나오지않아 사용자 입장에서 맨 화면을 바라봐야하는 그 시간을
  // 채워주기 위한 로딩창 , 사용감을 심어주는 느낌임. api가 다 받아와진 후 false로 설정해주면 전까진 사용 이후 사용안함
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
      // api가 다 받아와지면 setIsLoading이 false가 되니까 여기서
      // false가 되는 순간 데이터가 다 받아와진거임
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title> Home | 코딩건호</title>
      </Head>

      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {/* 결국 api를 받아와서 랜더해주는 부분은 이 밑에서부터의 부분이기 때문에
      여기서 조건을 걸어주고 isLoading이 true일뗀 로딩 fasle일땐 api요청을 받아온 후기 때문에
      기존 랜더해주던 부분을 감싸서 실행 */}
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40, paddingLeft: 30 }}>
            베스트 상품
          </Header>
          {/* 이 시맨틱 ui의 header가 담당하는 부분이 뭔지 급 헷갈리네 */}
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40, paddingLeft: 30 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
};
// next 안에서의 index와 app 역할의 차이 ?
// react안에서의 index와 app의 차이 ? 다시 한번 정리

// 슬라이스로 짤라서 신상품 베스트 상품 넘기는거까지 했고, 이제 링크 달아서 상세페이지로 넘어가는거 해야됨
// 이번 새 파일만들면서 놓친 부분이 프롭스 넘길때 넘겨준 파일에서 인터페이스 정의안했고, useState로 상태관리할때 useState한테 타입 안줌
// 그래서 넘겨서 List로 map을 못돌림
// 화면 랜더할때 세로 줄 생기는 이슈 있는데 당장은 안중요하니까 일단 넘김
export default Home;
