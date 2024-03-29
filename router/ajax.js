//ajax.js

// 라우터/라우팅 >> 특정 엔드 포인트에 대한 클라이언트 요청에 앱이 응답하는 방법 결정하는 것
// 특정 엔드 포인트 = 메소드 + 경로 (+ 데이터 + 타입) >> 통신 요청
// REST Restful Server
// REST 방식 - uri(자원) + method(기능) >> 데이터 포맷 json
// REST 메소드 - get(조회) post(등록) post->put(수정) get->delete(삭제)
// 단건조회 = get >> get + emps/100
// 전체조회 = get >> get + emps
// 등록 = post >> post + emps
// 수정 = post >> put + emps/100
// 삭제 = get >> delete + emps/100


// 전체조회
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    console.log(response) // 통신 결과 정보
    return response.json() // 받은 결과 파싱 >> 리턴
})
.then(data => { //파싱 결과 정보
    console.log(data); // 파싱 결과 출력
})
.catch(err => console.log(err)); // 에러 출력


// 단건조회
fetch('https://jsonplaceholder.typicode.com/posts/'+1) // rest 방식 >> 경로에 method 추가
.then(response => {
    console.log(response) // 통신 결과 정보
    return response.json() // 받은 결과 파싱 >> 리턴
})
.then(data => { //파싱 결과 정보
    console.log(data); // 파싱 결과 출력
})
.catch(err => console.log(err)); // 에러 출력


// 한건등록 - post >> json 포맷 >> 객체or배열
let post = {
    id: 100, // id 자동 부여 >> 추가되서 출력됨
    title: 'Hello!!',
    userId: 10,
    body: 'Today is Friday!!'
}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post', // post 방식 정의, post 방식은 body 내용 필요
    headers: {
        'Content-type': 'application/json' // body에 들어가는 데이터에 대한 타입 정의
    },
    body: JSON.stringify(post) // body를 json 형태로 변환
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));


// 수정 - put
fetch('https://jsonplaceholder.typicode.com/posts/'+1, { // 특정 대상 지정해서 요청
    method: 'put', // put 방식 정의, put 방식은 rest에서 수정을 위한 방법
    headers: {
        'Content-type': 'application/json' // body에 들어가는 데이터에 대한 타입 정의
    },
    body: JSON.stringify({ // body에 수정하고자 하는 내용을 입력하고 json 형태로 변환, 데이터는 모두 보냄
        title: 'Welcome!!',
        userId: 20,
        body: 'Test!!'
    })
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));


// 삭제 - delete
fetch('https://jsonplaceholder.typicode.com/posts/'+1, { // 특정 대상 지정해서 요청
    method: 'delete', // delete 방식 정의, delete 방식은 rest에서 삭제를 위한 방법, 메소드만 정의
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.then(res => {
    console.log(res.status);
})
.catch(err => console.log(err));