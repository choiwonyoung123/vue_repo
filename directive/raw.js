// text속성
// v-text >> 자바스크립트 부분, 함수호출도 가능, 닫는태그 없음, innerText사용x, innerText를 덮어씀
// 따옴표 >> 리터럴 문자열, vue문법 >> 변수
// {{}} >> vue 사용되는 부분, 연산가능, 자바스크립트 가능, 따옴표는 문자열
// 스타일 >> 여러개라서 객체 형태, 케밥표기법을 카멜표기법으로 바꾸기, 표기법 바꾸기 싫으면 따옴표로 문자열로 바꾸기, 스타일자체를 객체를 담은 변수로 가져오기
// 클래스 바인딩 >> 배열 형태, 객체x
// 불린타입 >> true/false 스타일 토글, 사용사 선택 가능
// 모델 디렉티브 >> 양방향, input-select-textarea(value속성), 속성표시x, :속성 대신 :프로퍼티
// 모델 디렉티브 >> 체크박스-라디오박스 다른 형태, checked, value속성 별도 바인딩 필요 :value,
let template = `
<div>
    <!-- 텍스트 디렉티브 -->
    
    <p v-text="'hello, '+title"/> 
    <p v-text="'hello, '+title+((new Date()).getFullYear())"/> 
    <p>Hello, {{ title}} </p>
    <p>Hello, {{ title}}! today is ... </p>


    <!-- 바인드 디렉티브 -->
    
    <p v-bind:id="postId" name="temp" text="Testing"/>
    <img v-bind:src="fileName">
    <a v-bind:href="url">링크</a>


    <!-- 바인드 디렉티브 style -->
    
    <p style="color: blue;">문자색 직접 지정</p>
    <p v-bind:style="{color: myColor}">vue 방식</p>
    <p style="color: blue; font-size: 200%;">두가지 속성 직접 지정</p>
    <p v-bind:style="{color: myColor, fontSize: myfont}">vue 방식</p>
    <p v-bind:style="myStyle">vue 방식</p>

    <!-- 바인드 디렉티브 class -->

    <p class="emphasis">직접 강조</p>
    <p v-bind:class="myClass">vue 강조</p>
    <p class="bg emphasis">직접 복수 클래스 적용</p>
    <p v-bind:class="[bgClass, myClass]">vue 복수 클래스 적용</p>
    <p v-bind:class="{'text' : isSelected}">class 적용 여부 제어</p>

    <!-- 모델 디렉티브 --> 
</div>
`;

// 컴포넌트는 기본적으로 화면과 데이터가 필요
export default{ // export >> import >> 값 꺼내기
    template, // 화면(뷰)
    data(){ // 데이터(프로퍼티) >> 문자열 형태
        return{
            title: 'Vue.js', // 텍스트 영역 내용
            postId: 'raw',
            fileName: 'pre-crunch-hotdog-mo.jpg',
            url: 'http://www.google.com',
            myColor: 'red',
            myFont: '200%',
            myStyle: {
                color: 'red',
                fontSize: '200%'
            }, // 객체를 담는 변수
            myClass: 'emphasis',
            bgClass: 'bg',
            isSelected: false
        }
    }
}