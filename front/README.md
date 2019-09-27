&#128035; React-twitter
=======
~~~
서비스를 제대로 만들고 배포하고싶어 시작한 프로젝트!
~~~

&#127853; front-end
-------------

### 초기 환경 셋팅
> npm init

> npm i react react-dome next

> npm i -D nodemon web pack

> npm i -D eslint

> mkdir .eslintrc 

> mkdir pages
```
페이지를 이동할때 react router를 이용할 수 있지만 next 자체에 라우터가 있음
```

> npm i -D eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks

> sudo npm i -g next --unsafe-perm

```
package.json
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
```

***

### 프로젝트 START !!
> npm run dev

*** 

### ant를 이용하여 화면 꾸미기(https://ant.design/)
> npm i antd

***

### &#127793; 진행상황

* 회원가입페이지(signup.js)
- [x] 디자인
- [x] useState
- [x] useCallback

* _app.js로 컴포넌트 쪼개기

* prop-types
> npm i -prop-types


***

### &#127827; 새로 알게 된 사실
~~~
Hooks를 사용하면 안되는 경우 
1. 일반 함수
2. 조건문
3. 반복문
~~~
~~~
2-1
useCallback을 사용할 때
props로 넘겨주는 메서들이나 함수들은 useCallbak으로 감싸줘야한다.
그 이유는 State가 변경될 때마다 함수(함수도 객체)들이 새로 생성되고 또 그 자식컴포넌트들도 새로 생성된다.
~~~
~~~
2-2
prop-types 부모로 부터 받은 props를 자식이 제대로 받았는지 확인하는 것
<https://www.npmjs.com/package/prop-types>

_Document.js: html,head.body
_app.js: root
pages: 실제 컴포넌트
_error.js
~~~