# 🚀 emotion-diary

리액트로 만드는 감성 일기장

<br>

---

## 프로젝트 셋팅 시 사용한 명령어

```js
// package.json 초기설정
npm init -y

// 디렉토리 폴더 생성
mkdir src
mkdir public
mkdir dist

// 맥 사용시 touch 명령어로 폴더 디렉토리 이동 후 파일 생성가능
// src > touch index.js
// public > touch index.html

// 리액트 패키지를 위한 npm 패키지 설치 (react, babel, webpack 관련 npm 패키지)
// 리액트 코어와 DOM과 react를 연결하는 기본모듈 설치
npm install react react-dom

// 개발을 하기위한 옵션은 -D로 설치해준다.
// 웹팩 코어와 웹팩 커맨드라인 제어, 메모리에 웹팩을 빌드하는 서버구동 모듈 설치
npm install -D webpack webpack-cli webpack-dev-server

// 코드 파일들을 모듈로 인식하게 만들어주는 로더 모듈 설치 (스타일로더)
npm install -D style-loader css-loader

// 코드를 브라우저 별로 적용 가능한 기준에 맞추어 트랜스파일하는 바벨 모듈 설치
npm i -D @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader

// 타입스크립트 관련 설치
// npm i -D @babel/preset-typescript typescript ts-loader @types/react @types/react-dom

// html webpack 플러그인 설치
npm i -D html-webpack-plugin
// npm install --save-dev html-webpack-plugin 같은 명령어

npm i -D webpack-merge

// 웹팩 플러그인 설치
npm i -D clean-webpack-plugin -D
npm i -D react-refresh @pmmmwh/react-refresh-webpack-plugin

// css 플러그인 추가
npm i -D mini-css-extract-plugin
npm i -D css-minimizer-webpack-plugin

// eslint와 prettier 추가
npm i -D eslint prettier

// 명령어 패키지 추가
npm i -D npm-run-all
// 설정한 빌드 명령어
npm run build
// 설정한 리액트 프로젝트 오픈 명령어
npm run start
// start + build 합친 명령어
npm run dev
```

![](https://velog.velcdn.com/images/ninto_2/post/a594e85f-ba5b-40f1-ae66-a6b13bf37de4/image.png)

- webpack을 통해 프로젝트를 구축해본다. (plugin과 loader의 적용법을 배운다.)
- babel을 통해 서로 다른 문법 호환성을 지키는 법을 배운다. (리액트에서 사용한 JSX문법을 파싱)
- 위를 통해 리액트에서 프로젝트 세팅법을 배운다.

루트 경로에 `babel.config.js`와 `webpack.config.js`를 만드는 것으로 환경설정을 시작한다.

**babel.config.js 작성**

- `@babel/preset-env` : ES6 이상의 문법을 ES5 이하로 변환해준다.
- `@babel/preset-react` : JSX문법을 JS코드로 변환해준다.

**webpack.config.js 작성**

- entry : 번들링이 시작되는 파일 지정
- resolve : 번들링의 대상이 될 파일 확장자
- output : 번들링이 완료되면 저장될 경로와 번들링 파일 이름 지정

그 다음 module(webpack에 연결할 loader를 등록하는 객체)객체에 파일들을 등록된 규칙에 맞게 모듈로 연결한다.
이때 등록하는 loader의 순서가 중요하다.

- plugin : 번들링된 결과물에 특정 효과를 주는 도구
- devServer : 객체의 조건에 맞게 개발 서버를 열어준다.

**package.json scripts 작성**

Webpack-dev-server Error 문제는 webpack과 webpack-dev-server 패키지의 버전이 맞지 않는 오류가 있었다. webpack 5버전부터 'serve'로 변경되었다.
