//ref_parent.js
import ChildComponent from './ref_child.js';
// ref >> 이벤트 강제로 발생
// ref >> 선택자 처럼 특정 태그 찾아가기
// ref >> mounted 이후 동작
// ref속성 >> 일반태그 및 자식 컴포넌트 태그에 작성 가능 >> 자식 컴포넌트 태그를 하나의 태그로 인식

let template = `
<div>
    <!-- 자식 컴포넌트 선언 >> 자식 컴포넌트 객체(인스턴스) 생성 >> ref 변수 역할 -->
    <ChildComponent ref="child"/>
    <ChildComponent ref="second"/>
    <button type="button" @click="changeChildData">
        Change Child Data
    </button>
    <button type="button" @click="clickChildEvent">
        Child Click Event
    </button>
    <button type="button" @click="executeChildFun">
        Child Method Execute
    </button>
    <p>{{msg}}</p>
</div>
`;

export default{
    template,
    data(){ // 프로퍼티
        return{
            isMounted: false
        }
    },
    mounted(){ // 마운트 되면 체크 프로퍼티 참 값
        this.isMounted = true;
    },
    computed: {
        msg(){
            return !this.isMounted ? '' : this.$refs.child.msg;
        }
    },
    methods: {
        changeChildData(){
            console.log(this.$refs);
            console.log(this.$refs.child);
            this.$refs.child.msg = 'Data Update1'; // refs 목록에서 찾기
            this.$refs.second.msg = 'Data Update2';
        },
        clickChildEvent(){
            let childCom = this.$refs.child;
            let childBtn = childCom.$refs.btn;
            console.log(childBtn);
            childBtn.click();
            this.$refs.child.$refs.btn.click();
        },
        executeChildFun(){
            this.$refs.child.childFunc();
        }
    },
    components: { // 자식 컴포넌트 등록
        ChildComponent
    }
}