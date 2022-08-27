import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next/types";
import { FC, SetStateAction, useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/component/Item/Item";
import { DomesticProductItem } from "../../src/model/domesticProduct";

interface Props {
  item: DomesticProductItem;
  name: string;
}
//

const Post: NextPage<Props> = ({ item, name }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다
          <Item item={item} />
        </>
      )}
    </>
  );
};

//  domesticProducts | undefined 타입 추론이 이렇게 되니까 undefined 는 저기 타입 정의 안에 들어갈 수 없다 라는데
// 그럼 여기서 왜 undefined로 정의가 되는걸까요
// id가 없는 경우가 있어서 그런가
// undefined일 수 있다 라는 에러가 나옴 , 타입 가드로 해결. 초기값에 null을 주고 리턴문에서 삼항이나 if로 기존 데이터가 있다면.
// 걔를 보여주고 아니면 null 반환해라 라는 식의 타입 가드를 설정할 수 있음

export default Post;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // getServerSideProps 얘는 그냥 말 그대로 서버에서 데이터를 가져와서 넘겨주는거임 저기로
  const id = context.params?.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  // 결국 이 데이터를 data에 담고
  return {
    props: {
      item: data,
      name: process.env.name,
      // 반환된 프롭스를 사용하여 빌드시에 페이지에 먼저 랜더링합니다
      // 여기서 name은 각 env파일에 정의해놓은 name으로 접근해서 각각 받아오는 api의 name이 들어가서 화면에 보여지게 하는거같음
    },
    // 이 컴포넌트 안에서의 프롭스로 data를 item에 담아서 위에 item, name한테 넘겨준거임
  };
};
// 지금 context에서 . 찍고 params.id로 접근하는데 일단 내가 정의한 GetServerSideProps에는 params가 없다는 에러가 뜨는데
// 애초 context 타입 정의가 일단 잘못된건가싶고. (GetServerSidePropsContext 이거 썼어야됐음 잘못된거였음)
// 결국 id로 응답값을 호출하고 받아온 api 결과값을 item에 넣어준건데 그걸 내부 컴포넌트 맨 상단으로 보냄
// 일단 내 해석으로는 결국 이 item이 어디로 보내지냐를 보니까 item 컴포넌트로 보내짐 그럼 저연스럽게 상세 페이지들이 나오는건 이해가 됨
// 외부 데이터를 서버로 받아와서 초기 데이터로 설정하고 페이지로 전달한다.
// 즉 화면이 그려지기 전에 먼저 서버에서 실행이 되는거임 // 페이지 요청 시 마다 실행된다.

/*query: - 동적 경로 매개변수 Object를 포함하여 개체로 구문 분석된 쿼리 문자열 입니다.
페이지에서 Server - side Rendering 을 사용하지 않는 경우 사전 렌더링 중에 빈 개체가 됩니다.기본값{ }*/

// 이제 해야할것  nextjs 사전 랜더링 더 좋은 퍼포먼스 , 검색엔진최적화(SEO)
// 1. 정적 생성
// 2. server side rendering (SSR , Dynamic rendering)
// 차이점은 언제 html을 생성하는가 (아건 무슨 말인지 알겠음)

// 홈페이지는 화면을 그리는 api를 비동기로 호출하고 있음
// 먼저 화면에 들어온 다음에 비동기로 list들을 받기 위해 호출하고 있음 굳이 csr이 필요가 없음
// 이게 뭔 소린가 했는데 csr은 자바스크립트를 사용하여 브라우저에서 직접 랜더링을 하니까 먼저 그려줘야하는 메인에는 핑료가 없는건가

/*[정적 생성]
프로젝트가 빌드하는 시점에 html파일들이 생성
모든 요청에 재사용함
퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
getStaticProps / getStaticPaths

[서버 사이드 랜더링]은 매 요청마다 html을 생성
항상 최신 상태 유지
getServerSideProps
*/
