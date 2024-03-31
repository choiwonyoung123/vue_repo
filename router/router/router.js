// router.js
// 라우터 >> get 방식만 가능 - 경로를 입력해야 페이지 이동 가능 >> 컴포넌트만 열어줌, 불러오기
// app.js와 비슷하게 컴포넌트 등록
// 객체 하나당 라우터 하나

import HomeComponent from '../views/home.js'; // 컴포넌트 등록
import PostListComponent from '../views/postList.js';
import PostInfoComponent from '../views/postInfo.js';
import UserListComponent from '../views/userList.js';
import UserInfoComponent from '../views/userInfo.js';

const {createRouter, createWebHistory} = VueRouter // 객체 선언

let routes = [ // 여러개 라우터 정보 등록 >> 배열 형태
    {
        path: '/index.html', // 정규표현식 구성o
        redirect: '/home' // 처음 주소 지정
    },
    {
        path: '/', // uri(호출o)
        name: 'home', // 라우터 이름(호출o)
        component: HomeComponent // 열어줄 컴포넌트 정보 넘김
    },
    {
        path: '/postList', // uri(호출o)
        name: 'postList', // 라우터 이름(호출o)
        component: PostListComponent // 열어줄 컴포넌트 정보 넘김
    },
    {
        path: '/postInfo', // uri(호출o)
        name: 'postInfo', // 라우터 이름(호출o)
        component: PostInfoComponent // 열어줄 컴포넌트 정보 넘김
    },
    {
        path: '/userList', // uri(호출o)
        name: 'userList', // 라우터 이름(호출o) >> app.js에서 호출
        component: UserListComponent // 열어줄 컴포넌트 정보 넘김
    },
    {
        path: '/userInfo', // uri(호출o)
        name: 'userInfo', // 라우터 이름(호출o) >> app.js에서 호출
        component: UserInfoComponent // 열어줄 컴포넌트 정보 넘김
    }
]

const router = createRouter({
    history: createWebHistory(), // 지금까지 접속했던 경로들 접근(고정)
    routes // routes 변수
})

export default router; // 라우터 통채로 default >> app.js >> use(router)