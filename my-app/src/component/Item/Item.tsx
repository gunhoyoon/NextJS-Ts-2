import React, { FC } from "react";
import { Button, Divider, Header, ItemDescription } from "semantic-ui-react";
import { DomesticProductItem } from "../../model/domesticProduct";
import styles from "./Item.module.css";

interface Props {
  item: DomesticProductItem;
}

const Item: FC<Props> = ({ item }) => {
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
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          <img src={image_link} alt={name} />
        </div>
        <div className={styles.info_item}>
          <strong className={styles.tit_item}>{name}</strong>
          <strong className={styles.num_price}>{price}</strong>
          <span className={styles.tst_info}>
            {category ? `${category}/` : ""}
            {/* 카테고리가 없는 경우도 있기때문에 삼항으로 조건 걸어줌 */}
            {product_type}
          </span>
          <Button color="orange">구매하기</Button>
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
