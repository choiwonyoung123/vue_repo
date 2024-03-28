//check.js

let ChildComponent = {
    template: `
    <div>
        <p>숫자: {{num}}</p>
        <p>문자열: {{str}}</p>
        <p>짝수?: {{even}}</p>
        <p>객체: {{obj}}</p>
    </div>
    `,
    props: { // 객체 형태
        num: { // 데이터 타입 설정
            type: [Number, String], // 타입 하나 또는 여러개
            required: true // 필수 여부 지정
        },
        str: {
            type: String, // 타입
            default: 'Hello!' // 기본값 지정
        },
        even: {
            validator(value){ // 유효성 검사 >> 함수 형태 >> boolean 타입
                return (value % 2 == 0);
            }
        },
        //obj: Object // 타입만 지정
        // object array >> default 정의할때 >> 함수 형태 필요
        obj: {
            type: Object,
            default: () => { // 기본값으로 객체 지정
                return {
                    name: 'Hong',
                    age: 20
                }
            }
        }
    }
};


export default{
    template: `
    <div>
        <ChildComponent v-bind:num="myNumber" v-bind:str="sendMsg" :even="myNumber" :obj="newObj"/>
    </div>
    `,
    data(){
        return{
            myNumber: 55,
            sendMsg: 'Hello, World!',
            newObj: null
        }
    },
    components: {
        ChildComponent
    }
}