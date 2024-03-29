// 루트 컴포넌트 라우터 등록, 전역
import router from './router/router.js';

const {createApp} = Vue

// link >> to속성(href속성) >> 링크 >> a태그 매핑(변환)
// router-link >> 새로운 렌더링x
// a >> 새로운 렌더링o
// view >>
let template = `
<div>
    <!--<router-link to="/home">home</router-link>-->
    <router-link v-bind:to="{name: 'home'}">home</router-link>
    <router-link v-bind:to="{name: 'postList'}">전체조회</router-link>
    <router-link v-bind:to="{name: 'postInfo'}">단건조회</router-link>
    <!--<router-link v-bind:to="{path: '/home'}">home</router-link>-->
    <!--<a href="/">home</a>-->
    <router-view :key="$route.fullPath" />
</div>
`;

createApp({
    template
})
.use(router)
.mount('#app');