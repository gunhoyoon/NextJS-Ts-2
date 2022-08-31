import axios from "axios";
import Axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { useHref } from "react-router-dom";
import { Divider, Header, Loader } from "semantic-ui-react";
import Button from "../src/component/common/Button";
import Input from "../src/component/common/Input";

import ItemList from "../src/component/ItemList/ItemList";
import {
  DomesticProductItem,
  DomesticProducts,
} from "../src/model/domesticProduct";
import styles from "../styles/Home.module.css";

interface Props {
  list: DomesticProducts;
}
// 프롭스기 때문에 인터페이스로 정의를 해줘야함. 프롭스 = 인터페이스 필수

const Home: NextPage<Props> = ({ list }) => {
  // 밑에서 보면 list.slice를 하는데 배열메서드임 그니까 얘 타입도

  // 여기서의 상태나 로딩 스테이트가 없어진 이유는 스태틱한 페이지를 만들었기에 로딩이 없는게 당연한거고
  // 데이터를 밑에서 받아오기때문에 그 관련 코드들도 지운거임

  // api를 요청하는 그 사이에 아무것도 나오지않아 사용자 입장에서 맨 화면을 바라봐야하는 그 시간을
  // 채워주기 위한 로딩창 , 사용감을 심어주는 느낌임. api가 다 받아와진 후 false로 설정해주면 전까진 사용 이후 사용안함

  // 정적으로 주소 떄려박았을땐 얘도 무조건 있는거 알고 가만히 있는데 변수로 심어줬기때문에

  // api가 다 받아와지면 setIsLoading이 false가 되니까 여기서
  // false가 되는 순간 데이터가 다 받아와진거임
  return (
    <div>
      <Head>
        <title> Home | 코딩건호</title>
      </Head>
      {/* 결국 api를 받아와서 랜더해주는 부분은 이 밑에서부터의 부분이기 때문에
      여기서 조건을 걸어주고 isLoading이 true일뗀 로딩 fasle일땐 api요청을 받아온 후기 때문에
      기존 랜더해주던 부분을 감싸서 실행 */}
      (
      <>
        <Button
          type="button"
          style={{
            backgroundColor: "pink",
            width: 150,
            height: 30,
          }}
          onClick={() => {}}
        ></Button>
        {/* <Input></Input> */}

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
      )
    </div>
  );
};

// react  client side rendering = 클라이언트 환경 그래서 REACT_APP 설정
// server 실행 환경 ssr, scg = 서버환경이기떄문에 NEXT_PUBLIC 접두사가 필요가 없음

// 이 페이지 안에서 스스로의 프롭스를 이해하려면 일단 위의 코드랑 이 밑에 데이터를 받아오는 밑 코드랑 별개로 생각을 하는게 좋아보임
export const getStaticProps: GetStaticProps = async () => {
  const apiUrl = process.env.apiUrl;
  // 스택오버플로우 : https://stackoverflow.com/questions/65078245/how-to-make-next-js-getstaticprops-work-with-typescript
  // getStaticProps 타입정의

  // 클라이언트 환경이 아니기때문에 NEXT_PUBLIC을 붙일 필요가 없다

  const res = await Axios.get(apiUrl!);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
};

// 일단 지금 static한 페이지를 만든다는걸 먼저 생각해야됨 로딩창이 필요없는거처럼 정적으로 움직일때 변경해야할 부분도 생각해봐야함

// NextJS는 기본적으로 모든 페이지들을 PreRendering 함
// 사전에 HTML 파일을 미리 만든다는 의미임
// 이렇게 했을때의 장점은 퍼포먼스 향상이 되고, 검색엔진최적화(SEO)함에 있어 유의함

// 여기서 SEO도 문제없이 처리가 된다고 하는데 그게 head안의 meta 태그들이 이상없이 엘리먼트 파일에 드러나서 SEO가 처리가 잘됐다고 한건지
// nextwork에서 자바스크립트를 차단하니 api호출도 안되고 css도 안되는걸로 보이는데
// 자바스크립트의 역할중에 css를 로드 해주는 일도 있나

// PreRendering은 Static Generation(정적 생성), Server-side Rendering : (서버 사이드 랜더링) 으로 나누는데
// 둘의 차이는 언제 HTML을 생성하냐의 차이임
// Static Generation(정적 생성)은 build시에 HTML을 생성함 , 미리 만들어놓은 HTML을 유저들이 요청할때마다 재사용하면서 보내주는거임
// 유저가 요청을 하기전에 페이지를 미리 만들어도 되는 경우 , 이 방법을 선택함

//  Server-side Rendering : (서버 사이드 랜더링)은 요청을 하면 그때 만들어서 보여줌
// 반면 항상 최신 상태를 유지하고 , 분석 차트같은 최신 페이지가 필요한 경우 이 방법을 선택함

// 정적 생성된 파일은 처음부터 다 가지고 있다가 바로바로 보여주는거임 , 요청을 받으면 재활용임

// 서버 사이드 랜더링은 요청이 있을때마다 제공이니까 상세 페이지 같은 경우에 데이터가 각각 다름
// 그래서 화면을 보여주기전에 데이터를 받아와지 사용 가능

export default Home;
