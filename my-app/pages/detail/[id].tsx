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

export default Post;

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)

  return {
    paths: [
      { params: { id: "740" } },
      { params: { id: "730" } },
      { params: { id: "729" } },
    ],
    fallback: true,
  };
}
// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// )
export async function getStaticProps(context: GetServerSidePropsContext) {
  //  /view/id.tsx 에 있는 서바사이드 프롭스 타입 정의인데 async 붙고 안붙고의 차이 ?
  // 그리고 지그 getStaticProps 의 타입을 따로 정의해두지 않았는데 별 다른 에러가 없다면 상관이 없는건지
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
