//input.js
// template >> 감싸는 부분 필요
// template태그 >> 시각적으로 보이지 않음
// div태그 >> 시각적으로 보여줌
// myName 자리에 사용자가 입력 >> myName 값을 p 태그에 입력
// 프로퍼티 자체의 값을 바꿔서 인풋 태그와 바인딩되는 곳을 모두 적용
// select-option >> multiple 옵션하면 데이터 리턴값을 배열로 받기
// checkbox여러개 >> 리턴값 배열로 받기, value 필요
// radio >> value 필요
let template = `
<div>
    <!-- 모델 바인드 input >> value -->

    <input type="text" v-model="myName"><br>
    <p>나는 {{myName}} 입니다.</p>
    <input type="text" v-model.lazy="myName2"><br>
    <p>나는 {{myName2}} 입니다.</p>
    <input v-model.number="myNum"><br>
    <p>계산 결과는 {{myNum + 999}} 입니다.</p>
    <input v-model="myNum2"><br>
    <p>계산 결과는 {{myNum2 + 999}} 입니다.</p>

    <!-- 모델 바인드 textarea >> value -->

    <textarea v-model="myComment"/>
    <div v-text="myComment"/><br>
    <textarea v-model.lazy="myComment2"/>
    <div v-text="myComment2"/>

    <!-- 모델 바인드 select >> value -->

    <select v-model="mySelect" multiple>
        <option>선택1</option>
        <option>선택2</option>
        <option>선택3</option>
    </select><br>

    <!-- 모델 바인드 checkbox >> checked -->

    <!-- checkbox >> 하나 or 여러개 -->
    <input type="checkbox" v-model="myCheck" true-value="확인완료" false-value="미확인">확인여부<br>
    <p>확인여부=> {{myCheck}}</p>
    <input type="checkbox" v-model="myHobbies" value="reading">
    독서
    <input type="checkbox" v-model="myHobbies" value="sports">
    운동
    <input type="checkbox" v-model="myHobbies" value="travel">
    여행
    <p>취미=> {{myHobbies}}</p>

    <!-- 예제-->
    <input type="checkbox" v-model="isAgreed">약관에 동의합니다.<br>
    <button type="button" v-bind:disabled="!isAgreed">회원가입</button><br>

    <!-- 모델 바인드 radio >> checked -->

    <input type="radio" v-model="myGender" value="male">남자
    <input type="radio" v-model="myGender" value="female">여자<br>
    <p>성별: {{myGender}}</p>
</div>    
`;

export default{
    template,
    data(){
        return{
            myName: '', //문자열 초기값
            myName2: '',
            myNum: 0,
            myNum2: 0,
            myComment: '',
            myComment2: '',
            mySelect: [],
            myCheck: '',
            myHobbies: [],
            isAgreed: false,
            myGender: ''
        }
    }
}