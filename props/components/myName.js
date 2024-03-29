// myName.js

// 부모 - 자식 간 데이터 및 이벤트 주고받는 방식
// 부모 >> 자식 = 자식입장 - props['attr'] / 부모입장 - v-bind:attr="" - :attr=""
// 부모 << 자식 = 자식입장 - $emit('custom-event', data1, ..) / 부모입장 - v-on:custom-event="" - @:custom-event=""
// $emit을 이용해 이벤트 전달하는 경우 괄호 사용x
// props: [] >> 배열 >> 유효성검사x
// props: {} >> 객체 >> 유효성검사o >> 프로퍼티별 데이터 타입, 필수 여부, 기본값, 유효성검사 정의


// 자식 컴포넌트 정의, data 옵션x
let ChildComponent = {
    template: `
        <div>
            <p>내 이름은 {{ myName }} 입니다.</p>
            <p>변경할 이름</p>
            <input type="text" v-model.lazy="updateName" @keyup.enter="updateMyName()">
        </div>
    `,
    props: ['myName'], // 부모 프로퍼티 받아온 데이터(단방향), v-bind 사용(부모), 부모-자식 연결 통로, 리드 온리, 사용할 이름 선언, 배열로 선언 >> 원하는 만큼 가능
    data(){
        return{
            updateName: ''
        }
    },
    methods: {
        updateMyName(){ // 자식으로부터 부모 프로퍼티 이름 바꾸기, emit >> 이벤트 전달
            this.$emit('update-name', this.updateName, '업데이트 진행'); // 커스텀 이벤트, (이벤트이름, 데이터1, 데이터2 ...)
        }
    }
}

// parent 부모 입장
export default{
    // 자식 컴포넌트 바인드, 바인드 속성으로 연결, 프로퍼티 설정
    // update-name >> 자식으로부터 받아와서 on 디렉티브로 연결
    template: `
    <div>
        <ChildComponent myName="first"/>
        <ChildComponent v-bind:myName="first" v-on:update-name="getName"/>
        <ChildComponent :myName="first" @update-name="getName"/>
        <ChildComponent v-bind:myName="second"/>
    </div>
    `,
    data(){ // 부모 프로퍼티
        return{
            first: 'Hong',
            second: 'Kang'
        }
    },
    components: { // 자식 컴포넌트 정의
        ChildComponent
    },
    methods: { // 매개변수를 가지지거나 호출하는 형태가 아닌 함수 전체를 넘김
        getName(data, msg){
            console.log(data, msg);
        this.first = data;
        }
    }
}