//list.js

// for 디렉티브 >> 반복이 필요한 부분에 사용, 정수 in 최대값
// v-bind 디렉티브 >> : 생략 가능
// for 디렉티브 key 속성 >> 고유값, 특정 대상을 식별, 컨포넌트 구별
// v-bind:key="data" >> data 중요하고 변경되지 않으면
// node.js  vs  cdn
// 배열 탐색 >> for in >> data, index(인덱스)
// 객체 탐색 >> for in >> value, name(필드명) index(인덱스)
// 배열 - 객체 탐색 >> 태그 범위 내에서 중첩 가능, 임의 변수 사용 가능
let template = `
<div>
    <!-- 프로퍼티 없이 v-for -->
    <ul>
        <li v-for="num in 5" v-bind:key="num">{{num}}</li>
    </ul>
    
    <!-- 단일값 배열 활용 -->
    <ul>
        <li v-for="data in myArray">{{data}}</li>
    </ul>
    <ul>
        <li v-for="(data, idx) in myArray" v-bind:key="idx">{{idx}} : {{data}}</li>
    </ul>

    <!-- 객체와 배열 모두 for in -->
    <!-- 1) -->
    <div>
        <ul v-for="user in users" :key="user.id">
            <li>{{user.id}}</li>
            <li>{{user.name}}</li>
            <li>{{user.age}}</li>
        </ul>
    </div>
    <hr>
    <!-- 2) -->
    <div>
        <ul v-for="user in users" :key="user.id">
            <li v-for="(value, name, idx) in user" :key="value">{{name}} : {{value}}, {{idx}}
        </ul>
    </div>
</div>
`;



export default{
    template,
    data(){
        return{
            myArray: ['김밥', '샌드위치', '햄버거', '라면'],
            users: [
                {
                    id: 1,
                    name: 'Hong',
                    age: 20
                },
                {
                    id: 2,
                    name: 'Kang',
                    age: 30
                },
                {
                    id: 3,
                    name: 'Lee',
                    age: 25
                },
            ]
        }
    }
}