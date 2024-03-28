// app.js

// 자식 컴포넌트 임포트
import MyNameComponent from './components/myName.js';
import CheckComponent from './components/check.js';
import RefComponent from './components/ref_parent.js';

// 루트 컴포넌트 만들기
const { createApp } = Vue

let template = `
<div>
    <!--<MyNameComponent/>-->
    <!--<CheckComponent/>-->
    <RefComponent/>
</div>
`;

createApp({
    template,
    components: { // 자식 컴포넌트 정의
        //MyNameComponent,
        //CheckComponent
        RefComponent
    }
}).mount('#app'); // html 마운트