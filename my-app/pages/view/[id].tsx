import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item/Item";
import { DomesticProductItem } from "../../src/model/domesticProduct";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState<DomesticProductItem | null>(null);
  // useState의 타입을 어떻게 넣어줘야하는지 뭘 생각해서 ? 해야하는지

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  // ${id} 가 들어가는 위치?
  // [id]로 id의 값을 구분함

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setItem(res.data);
    });
  }
  // api 데이터 잡아와서 console.log 에서 확인은 했는데 각각의 id가 있는걸 다시 한번 확인한건가
  // 아 여기선 각각의 id 값을 가져야하기때문에 id를 위한 데이터를 가지고 온거 결구 setItem에 들어갈건 데이터임
  // URL

  useEffect(() => {
    let id = 100 as number;
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  // 최초 한번 데이터

  return <div>{item ? <Item item={item} /> : null}</div>;
  //  domesticProducts | undefined 타입 추론이 이렇게 되니까 undefined 는 저기 타입 정의 안에 들어갈 수 없다 라는데
  // 그럼 여기서 왜 undefined로 정의가 되는걸까요
  // id가 없는 경우가 있어서 그런가
  // undefined일 수 있다 라는 에러가 나옴 , 타입 가드로 해결. 초기값에 null을 주고 리턴문에서 삼항이나 if로 기존 데이터가 있다면.
  // 걔를 보여주고 아니면 null 반환해라 라는 식의 타입 가드를 설정할 수 있음
};

export default Post;

/*query: - 동적 경로 매개변수 Object를 포함하여 개체로 구문 분석된 쿼리 문자열 입니다. 
페이지에서 Server - side Rendering 을 사용하지 않는 경우 사전 렌더링 중에 빈 개체가 됩니다.기본값{ }*/

// 이쪽에서의 역할이 명확하게 모르겠음
