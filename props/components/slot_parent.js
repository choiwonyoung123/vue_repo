//slot_parent.js
// ChildComponent >> 자리에 새로운 내용 덮어 써짐
// v-slot:title >> 해당 태그 자리에 title 이름을 가지는 슬롯 대체
// v-slot:default >> 이름이 없는 슬롯을 대체
// v-slot >> div 태그는 딱히 필요 없음, 태그들 사이에 정의되지 않은 태그 적용x
// v-slot >> 자식에서 지정한 틀을 부모에서 내용을 정의

import ChildComponent from './slot_child.js';

let template = `
<div>
    <!--<ChildComponent>덮어써짐</ChildComponent>-->
    <ChildComponent>
        <template v-slot:title>
            <h1>팝업 타이틀</h1>
        </template>
        <template v-slot:content>
            <p>팝업 콘텐트1</p>
            <p>팝업 콘텐트2</p>
        </template>
        <template v-slot:default>
            <button type="button">닫기</button>
        </template>
    </ChildComponent>
    <hr>
    <ChildComponent>
        <template v-slot:title>
            <h3>info</h3>
        </template>
        <template v-slot:content>
            <p>service</p>
            <input type="radio" v-model="select" value="A">a유형<br>
            <input type="radio" v-model="select" value="B">b유형
        </template>
        <template v-slot:default>
            <button type="button">완료</button>
        </template>
    </ChildComponent>
</div>
`;

export default{
    template,
    data(){
        return{
            select: ''
        }
    },
    components: {
        ChildComponent
    }
}