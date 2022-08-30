import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
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

const Post: NextPage<Props> = ({ item, name }) => {
  const router = useRouter();
  // console.log(router.isFallback);
  // isFallback true = 아직 반환하지 않았다. 긍까 난 모르는 페이지임 처음에
  // isFallback false = 반환끝 이제 알고 있음, static , paths는 develop환경에선 매번 처음보는거처럼 동작함 그래서 매번 t f t f 찍힘

  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }

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

export default Post;

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl!);
  const data = res.data;
  return {
    // paths: [
    //   { params: { id: "740" } },
    //   { params: { id: "730" } },
    //   { params: { id: "729" } },
    // ],
    // 위 데이터 형식과 같은 형태로 넘겨줘야함
    paths: data.slice(0, 9).map((item: DomesticProductItem) => ({
      // list결과를 기반으로 Static Path 넘겨주기
      params: {
        id: item.id.toString(),
        // 데이터를 불러오는 순간 가지고 있는 데이터가 되기때문에 자바스크립트를 꺼도 보임
        // 실제로는 데이터를 id를 지정해서 사용하진 않음, 데이터가 변경될 수도 있고 이 제품이 삭제 됐을수도 있으니까
        // 기존 더미데이터로 썼던 paths:[{params:{id:"740"}}] 이런 어지러운 데이터 형식을 맵으로 풀어 쓴거임 이젠 너무 잘보인다 쉽다쉬워
        // 아 같은 구조라서 Id가 문자열로 들어갔으니까 그건 이해가 되는데 생각해보니 왜 문자열로 들어갔던거지 주소값에 들어가는 id라 문자열인건가
        // slice없이 걍 쓰면 너무 많아서 9개만 정적으로 받아오겠음 일단
        // localhost에서 받아오지 않은 id값을 입력하니 지정해놓은 로딩창이뜨면서 데이터 받아옴 그 이후로는 안뜸 로딩창 받아와있는 애니까
      },
    })),
    fallback: true,
    // fallback : false 시에 paths 로 지정해놓지 않은 페이지들로 접근시 404
    // fallback : true 시에 지정해놓지 않은 페이지 접근시 받아오는 그 순간 빈화면이 나오고 받아오고 난 뒤에 정적으로 동작함
    // 개발 환경에서의 getStaticProps, getStaticPaths는 요청할때마다 호출이 된다
  };
}
// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// )
export async function getStaticProps(context: GetServerSidePropsContext) {
  // 프로덕션 환경이랑 다름 / 디벨롭먼트 환경에선 매번 요청을 하기때문에 화면의 깜빡임이 있음(받아오는 동안에)
  const id = context.params?.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}

// 동적인 생성을 하고 싶은데(다이나믹 라우팅), 개수가 한정적이고 그 id 리스트를 미리 알 수 있으면 대응이 가능하다.
// 그럴때 getStaticPath를 이용함 아는만큼 대응이 가능함 대응한다는게 동적으로 생성할 수 있게 대응한다는건지 그 알고 있는 id list들을
