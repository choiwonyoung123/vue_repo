//watch.js

let template = `
<div>
    공급가액: <input type="number" v-model="price">원
    <p>최종 소비자가: {{taxInclude}}</p>
    <p>최종 소비자가: {{getFinalPrice()}}</p>
    <p>공급가액 50% 할인: {{taxInclude * 0.5}}</p>
    <p>공급가액 50% 할인: {{getFinalPrice() * 0.5}}</p>
    구입개수: <input type="number" v-model.lazy="count">
    <p>결제금액: {{total}}원</p>
    <p>부가세: {{tax}}원</p>
    <p>매출액: {{revenue}}원</p>
    <hr>
    <p>금지문자는 [{{forbiddenText}}]</p>
    <textarea v-model="inputText"></textarea>
</div>
`;

export default{
    template,
    data(){ // v-model 프로퍼티 정의 초기화
        return{
            price: 0,
            count: 0,
            forbiddenText: '오늘',
            inputText: ''
        }
    },
    computed: { // 데이터와는 또다른 프로퍼티, 함수형태, 매개변수x, return 필수, 내부 프로퍼티 중 하나 반드시 사용해야함, vue에서 값 변경 불가, 내부 데이터 변경 감지, 함수 재호출x, 선언하지 않아도 값을 보유
        taxInclude(){ // 정해진 데이터
            return this.price * 1.1;
        },
        total(){ // 정해진 데이터
            return this.taxInclude * this.count; // computed 내 프로퍼티도 사용가능
        },
        tax(){ // 정해진 데이터
            return Math.round(this.total * 0.1);
        },
        revenue(){ // 정해진 데이터
            return this.total - this.tax;
        }
    },
    methods: {
        getFinalPrice(){
            return this.price * 1.1;
        }
    },
    watch: { // 이미 존재하는 프로퍼티를 감시, return없음, 프로퍼티x, 처음에 실행x, 입력해서 값이 바뀔때마다 실행해서 lazy와 함께 사용, 프로퍼티 바뀔때 해야하는 동작(작업) 정의, 출력 또는 통신 등
        count(){
            alert('구입 갯수를 입력했습니다.');
        },
        inputText(){
            let pos = this.inputText.indexOf(this.forbiddenText);
            console.log(pos);
            if(pos > -1){
                alert(this.forbiddenText + '(은/는) 입력할 수 없습니다!');
                this.inputText = this.inputText.substr(0, pos);
            }
        }
    }
}