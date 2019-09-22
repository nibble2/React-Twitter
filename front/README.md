&#128035; React-twitter
=======
~~~
서비스를 제대로 만들어 보고싶어 프로젝트를 시작하게 되었다.
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



***

### &#127827; 새로 알게 된 사실
~~~
Hooks를 사용하면 안되는 경우 
1. 일반 함수
2. 조건문
3. 반복문
```
