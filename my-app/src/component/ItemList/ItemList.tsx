import Link from "next/link";
import React, { FC } from "react";
import { Grid } from "semantic-ui-react";
import { DomesticProducts } from "../../model/domesticProduct";
import styles from "./ItemList.module.css";

interface Props {
  list: DomesticProducts;
}

const ItemList: FC<Props> = ({ list }) => {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link
                href={"/detail/[id]"}
                as={`/detail/${item.id}`}
                prefetch={false}
              >
                {/* a태그에 href가 빠지면 UX(사용자 경험)에 좋지 않다.
                새 창 또는 새 탭으로 보기가 안됨. 브라우저의 특성같은데, 이동은 되지만 anchor text의 역할을 하지 않기 때문에 새창에서 열리지 않음
                */}
                {/* 단점 2. SEO(검색엔진최적화에 치명적이다) 
                구글(포함 검색엔진)이 사이트를 인덱싱할때 새로운 페이지가 있는지 확인하는 두 가지 방법은
                하나는 사이트맵 , 하나는 페이지 내 모든 <a>태그를 찾아 방문하는 방법이다.
                이때 검색엔진은 <a>태그의 href 속성을 읽어 페이지 콘텐츠를 인덱싱한다.
                따라서 href가 없는 링크는(인덱싱이 필요한 페이지한에서) 검색엔진이 추적못함 */}

                {/* next/link구성 요소 의 사용을 Router#push찾거나 제공된 쿼리에
                필요한 모든 동적 매개변수가 Router#replace있는지 확인합니다 . */}

                {/* 위 내용을 쉽게 말해 as가 핵심이 아니라 동적 매개변수를 as에
                넣어놨었는데 그 내용을 지워서 안된거였다. 
                개발 모드가 중요한게 아니라 Link 사용시 동적 매개변수(위 예제에선 as)를 넣어주지
                않아서 에러가 나왔던 거다. */}

                {/* prefetch 기본값은 true이고 페이지에 보여지기만 하면 호출을 함 , false로 할 시엔 호버시 호출
                자바스크립트 내장 api로 인해 보여지는 기본 아이템 9개 이후 3개 까지 추가적으로 호출함 */}
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
