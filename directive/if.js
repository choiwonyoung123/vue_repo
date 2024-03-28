//if.js
// if 디렉티브 >> 생성 제어, 조건을 만족하지 않으면 해당 태그 생성x
// if 디렉티브 >> 여러개 있어도 조건에 맞는 하나의 태그만 출력, 연속해서 정의하여 사용
// if 디렉티브 >> for 디렉티브보다 우선순위가 높고 함께 사용할 수x
// show >> 조건을 만족하지 않아도 해당 태그 생성, 자주 필요한 경우
// template태그에 v-for사용 >> 자식으로 div태그와 v-if사용, 템플릿 태그와 같이 사용하면 if보다 먼저 사용가능
// template태그 >> 반복문 가지지만 숨겨짐
// key >> 문자열 또는 정수, 객체x배열x, 특정 값을 빠르게 찾아가기 위해 필요, 기본키
let template = `
<div>
    <label>
        <input type="checkbox" v-model="myVisible">표시
    </label>
    <p v-show="myVisible">show 디렉티브</p>
    <p v-if="myVisible">체크박스 ON</p>
    <p v-else>체크박스 OFF</p>
    <hr>
    <label>
        등급: <input type="text" v-model="score">
    </label>
    <p v-if="score >= 90">A</p>
    <p v-else-if="score >= 80">B</p>
    <p v-else-if="score >= 70">C</p>
    <p v-else-if="score >= 60">D</p>
    <p v-else>F</p>
    <hr>
    <template v-for="dan in 9" :key="dan">
        <div v-if="dan % 2 == 0">
            <p v-for="dan2 in 9" :key="dan2">
                {{dan}} * {{dan2}} = {{dan*dan2}}
            </p>
        </div>
    </template>
</div>
`;

export default{
    template,
    data(){
        return{
            myVisible: false,
            score: 0
        }
    }
}