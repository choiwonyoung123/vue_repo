//app.js
// => Root Component 를 가기는 놈
import RawComponent from './raw.js'; // 자식 컴포넌트 임포트 >> 독립되어 있어서 하나의 파일에 담겨있음
import InputComponent from './input.js';
import ModelComponent from './exam01.js';
import ListComponent from './list.js';
import ForComponent from './exam02.js';
import IfComponent from './if.js';

const { createApp } = Vue

// 해당위치에 컴포넌트 지정, 카멜/케밥표기법 적용
const template =`
<div>
    <!-- 자식 컴포넌트 추가 -->
    <!-- <raw-component/> -->
    <!-- <RawComponent/> -->
    <!-- <InputComponent/> -->
    <!-- <ModelComponent/> -->
    <!-- <ListComponent/> -->
    <!-- <ForComponent/>-->
    <IfComponent/>
</div>
`;

//컴포넌트
createApp({
    template, // 화면
    components: { // 자식 컴포넌트 등록
        //RawComponent, // 'raw-component': RawComponent >> 이름지정 >> vue가 자동으로 케밥표기법을 카멜표기법으로 바꿈
        //InputComponent
        //ModelComponent
        //ListComponent
        //ForComponent
        IfComponent
    }
})
.mount('#app');