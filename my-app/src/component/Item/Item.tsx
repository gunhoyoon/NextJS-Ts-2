import React, { FC, useState } from "react";
import { Button, Divider, Header, ItemDescription } from "semantic-ui-react";
import { DomesticProductItem } from "../../model/domesticProduct";
import styles from "./Item.module.css";

interface Props {
  item: DomesticProductItem;
}

const Item: FC<Props> = ({ item }) => {
  // 여기서도 상세 페이지로 넘어갈때의 로딩을 걸어주려 하는데 이전 스테이트 만든걸 가져올 수 있는건가, 가져온다해도 어떨때 setIsLoading의 값을 false로 해주는지
  // 문제를 바라볼때 얘를 결국 어디서 랜더해주는지를 찾아가면 편함 어차피 이 파일 혼자 자기를 드러낼 수가 없기때문에 누군가를 통해서 나온다는걸 잊지말자
  // 얘를 보여주는 곳은 id니까 id에서
  const {
    name,
    image_link,
    price,
    description,
    category,
    product_type,
    product_link,
  } = item;
  return (
    <>
      <div className={styles.item_wrap}>
        <div className={styles.img_item}>
          <img src={image_link} alt={name} />
        </div>
        <div className={styles.info_item}>
          <strong className={styles.tit_item}>{name}</strong>
          <strong className={styles.num_price}>${price}</strong>
          <span className={styles.txt_info}>
            {category ? `${category}/` : ""}
            {/* 카테고리가 없는 경우도 있기때문에 삼항으로 조건 걸어줌 */}
            {product_type}
          </span>
          <div className={styles.product_button}>
            <Button color="orange">구매하기</Button>
          </div>
        </div>
      </div>
      <Divider />
      <Header className={styles.tit_des} as="h3">
        Description
      </Header>
      <p
        style={{
          paddingBottom: 20,
          fontSize: 18,
          marginTop: 10,
          marginLeft: 10,
        }}
      >
        {description}
      </p>
      <Divider />
    </>
  );
};
// 여기다가 받아온 더미로 그려주면됨 상세페이지를

export default Item;

// link id로 클릭시 상세 페이지 접근하고
// 각각 id를 가진 페이지로 넘어오는데 그걸 item ts로 연결시키지
//

// export type domesticProductItem = {
//   api_featured_image: string;
//   brand: string;
//   category: null;
//   created_at: string;
//   currency: null;
//   description: string;
//   id: number;
//   image_link: string;
//   name: string;
//   price: string;
//   price_sign: null;
//   product_api_url: string;
//   product_colors: [];
//   product_link: string;
//   product_type: string;
//   rating: number;
//   tag_list: [];
//   updated_at: string;
//   website_link: string;
// };
// export type domesticProducts = domesticProductItem[];
