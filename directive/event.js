//event.js >>
// method, component >> 복수 s
// 이벤트 >> v-on:click, v-on:dbclick 등
// 이벤트 메소드 >> 현재 객체의 정보 가지는 this 필요
// 이벤트 정의할때 ()없으면 이벤트에 객체 전체 넘김 >> upCounter >> vue에서는 별 필요 없음
// 이벤트 정의할때 ($)하면 이벤트에 객체 받음
// 하나의 이벤트에 콤마로 두개의 이벤트 사용 가능
// 이벤트 정의할때 호출 및 매개변수 형태로 사용
// v-bind 약어>> :
// v-on 약어>> @

let template = `
<div>
    <!-- <button type="button" v-on:click="upCounter">ADD 1</button> -->
    <button type="button" v-on:click="upCounter($), printMsg($)">ADD 1</button>
    <p>The counter is: {{counter}}</p>
    <hr>
    <input type="number" v-model="num">
    <button type="button" v-on:click="increaseCounter(num)">ADD {{num}}</button>
    <p>The counter is: {{sum}}</p>
    <hr>
    <form style="border: 1px solid black" v-on:click="showAlert('form')">
        <div style="border: 1px solid black" v-on:click.self="showAlert('div')">
            <p style="border: 1px solid black" v-on:click.self.once="showAlert('p')">
                <a v-on:click.prevent href="http://www.naver.com">네이버</a>
            </p>
            click div tag
        </div>
    </form>
    <hr>
    <input type="text" v-model="keyword" v-on:keyup.enter="showAlert(keyword)">
</div>
`;

export default{
    template,
    data(){ // data 객체안에 counter 프로퍼티가 담겨있음 >> this로 접근
        return{
            counter: 0,
            num: 0,
            sum: 0,
            keyword: ''
        }
    },
    methods: { // 함수등록
        /*upCounter: function(){

        }*/
        upCounter(data){
            console.log(data); // 이벤트 객체 전체 출력
            this.counter++; // vue는 컴포넌트 객체 내 필드를 생략 >> counter에 바로 접근 가능
            //this.data.counter += 1;
        },
        printMsg(event){
            console.log(event);
        },
        increaseCounter(num){
            this.sum += num; // 매개변수 num >> 로컬 변수 >> 프로퍼티x
        },
        showAlert(tag){
            alert('click ' + tag);
        }
    }
}