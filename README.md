# 화장품 쇼핑몰 사이트

> 사용자에게 화장품 목록을 제공하고, 아이템 클릭시 상세 정보까지 확인 가능합니다.

# 사용 기술

> Next JS 기반 프로젝트입니다.

데이터 받아오는 방식으로 브라우저 호환성이 뛰어나고
데이터 다루기가 편리함의 이유로 Axios 를 사용하였습니다.

# 당면했던 문제

처음 상세 페이지를 Server Side Props 로 만들어주었습니다.

이후 상세 페이지가 매번 최신화된 데이터를 전달해야하는 고민을 했고,

그럴 필요가 없다는 판단하에 get Static Props 로 변경해주었습니다.

## 프로젝트 실행 방법

> My App > 터미널 오픈

> npm install

> npm run dev
