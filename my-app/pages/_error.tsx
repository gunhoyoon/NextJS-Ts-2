import { NextPage, NextPageContext } from "next";

interface Props {
  statusCode?: number;
}
//statusCode가 옵셔널하지 않으면 반환값이 promise가될 수 있음
// 옵셔널하게 있어도 되고 없어도 된다하면
const Error: NextPage<Props> = ({ statusCode: statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  // getInitialProps?(context: NextPageContext): Props | Promise<Props> 첫번째 옵셔널 , 여기선 Promise<Props> 로 정의했기때문에
  // 위의 interface에서의 타입이 옵셔널하게 안해주면 Promise의 err값을 정의하지 못하기때문에 옵셔널하게 정의해서 Promise의 err값일 경우까지 커버쳐줌
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
