#Portfolio Website

![Project ScreenShot0](https://firebasestorage.googleapis.com/v0/b/travelgo-6fa6a.appspot.com/o/Portfolio%2F1704345778942.webp?alt=media&token=33598474-e14e-4493-afe1-9b1e01d5dcde)

<br>

## Portfolio Website는?

제가 현재까지 진행한 프로젝트들, 사용한 기술 스택, 작성한 블로그 등을 이용하여 저를 소개하는 웹사이트를 만들었습니다. Firebase를 통해 데이터를 관리하였으며 스크롤과 Hover 효과를 활용해 보다 자연스러운 시각적 효과를 구현하기 위해 노력하였습니다. 
기존에 React와 Typescript를 이용하여 개발하였지만 초기 렌더링이 빠른 것이 포트폴리오 사이트의 특성 상 중요하다 생각되어 Nex와 Typescript 기반으로 마이그레이션을 진행했습니다.<br>

<br>

## 배포 링크

[https://woodylovesboota.xyz](https://woodylovesboota.xyz/)

<br>

## 기술 스택

- `Typescript`, `Next`
- `Recoil`, `Firebase`, `Responsive Design`, `Framer`
- `Prettier`, `Vercel`

<br>

## 개발 기간

- 2024년 01월

<br>

## 기능 구현
### 동적 애니메이션과 자동 스크롤을 통한 사용자 인터페이스 구현<br>
Navigation Bar의 자동 스크롤 기능을 구현하기 위해 앞에 배치된 컴포넌트 들의 위치와 스크롤 높이를 활용했습니다. 또한, Framer의 useAnimation()과 window의 scrollY를 이용하여 사용자의 동작에 따라 변화하는 동적인 애니메이션을 구현했습니다.
스크롤 등 사용자의 행동을 기반으로 하는 애니메이션을 통해 사용자 인터페이스가 시각적으로 더 자연스럽게 보일 수 있도록 설계하였습니다.<br><br>

## 문제 해결
### SSR(서버 사이드 렌더링)을 통한 데이터 Fetch<br>
React 기반의 프론트엔드 개발 환경에서 Next 기반으로의 마이그레이션 중, Firebase의 데이터를 불러오는 부분에서 문제가 발생했습니다. 기존 React 환경에서 받아온 정보를 전역적으로 관리하기 위해 Recoil을 사용했으며, 새로고침 시 상태가 유지되지 않는 문제를 해결하기 위해 전역 상태를 브라우저의 로컬 스토리지와 연동했습니다.<br>

그러나 Next의 SSR(서버 사이드 렌더링) 기능을 활용하면서 클라이언트 측에서만 작동하는 로컬 스토리지 사용에 제한이 생겼고, 이로 인해 Fetch된 데이터를 처리하는 과정에서 어려움을 겪었습니다. <br>

문제를 해결하기 위해 서버 사이드 렌더링을 지원해주는 getServerSideProps() 함수를 이용하여 서버 측에서 데이터를 fetch 하여 관리하는 방식을 사용하였습니다. 서버에서 데이터를 받은 후 브라우저로 넘겨주는 과정을 통해 key 관리 등 보안상 이점을 얻을 수 있었고, 데이터 관리가 보다 안정적이고 효율적으로 이루어질 수 있게 만들었습니다. 또한 서버 사이드 렌더링을 통해 사용자에게 로딩 문구 없이 완성된 페이지를 보여줌으로서 초기 렌더링 시 사용자 경험을 향상할 수 있었습니다.<br>

<br>

**프로젝트 소개**
![Project ScreenShot1](https://firebasestorage.googleapis.com/v0/b/travelgo-6fa6a.appspot.com/o/Portfolio%2F1704347290241.webp?alt=media&token=7ae62f1d-e8af-43a8-8941-b095f771dac0)
<br>
![Project ScreenShot1](https://firebasestorage.googleapis.com/v0/b/travelgo-6fa6a.appspot.com/o/Portfolio%2F1704346056093.webp?alt=media&token=9f86fe52-a560-4442-9e88-4dd410b88199)


<br>

**기술 스택**
![Project ScreenShot2](https://firebasestorage.googleapis.com/v0/b/travelgo-6fa6a.appspot.com/o/Portfolio%2F1704347267573.webp?alt=media&token=55049ed5-fb7c-4fd7-bedb-9a11f4d55c8c)


