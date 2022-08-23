import Link from "next/link";
import React, { FC } from "react";
import { Grid } from "semantic-ui-react";
import { domesticProducts } from "../../model/domesticProduct";
import styles from "./ItemList.module.css";

interface Props {
  list: domesticProducts;
}

const ItemList: FC<Props> = ({ list }) => {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href={`/view/${item.id}`}>
                <a>
                  {/* 링크로 각각 id가 있으니까 해당 상세페이지 접근 가능  */}

                  <div className={styles.wrap}>
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className={styles.img_item}
                    />
                    <strong className={styles.tit_item}>{item.name}</strong>
                    <span className={styles.txt_info}>{item.product_type}</span>
                    <strong className={styles.num_price}>${item.price}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;

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
