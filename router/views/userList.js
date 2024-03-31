// postList.js
// 전체 조회

let template = `
<div>
    <table>
        <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
        </tr>
        </thead>
        <tbody>
            <template v-for="user in userList" :key="user.id">
                <!--<tr v-for="user in userList" :key="user.id">-->
                <tr v-if="user.id <= 10" @click="goToDetail(user.id)">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.email}}</td>
                </tr>
            </template>
        </tbody>
    </table>
</div>
`;

export default{
    template,
    data(){
        return{
            userList: []
        }
    },
    created(){ // 비동기 방식, 만들어진 이후 메소드 호출
        this.getUserList();
    },
    methods: { // await async,  비동기 통신 >> 동기 통신 >> 완전히 통신이 끝날때까지 기다림
        async getUserList(){
            this.userList = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .catch(err => console.log(err));
        },
        goToDetail(userId){
            this.$router.push({name: 'userInfo', query: {id: userId}}); // 쿼리로 넘기기 >> 넘기는 대상은 객체 >> get 방식처럼 만들어줌
        }
    }
}