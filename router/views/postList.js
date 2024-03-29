// postList.js
// 전체 조회

let template = `
<div>
    <table>
        <thead>
        <tr>
            <th>id</th>
            <th>title</th>
            <th>userId</th>
        </tr>
        </thead>
        <tbody>
            <template v-for="post in postList" :key="post.id">
                <!--<tr v-for="post in postList" :key="post.id">-->
                <tr v-if="post.id <= 10" @click="goToDetail(post.id)">
                    <td>{{post.id}}</td>
                    <td>{{post.title}}</td>
                    <td>{{post.userId}}</td>
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
            postList: []
        }
    },
    created(){ // 비동기 방식, 만들어진 이후 메소드 호출
        this.getPostList();
    },
    methods: { // await async,  비동기 통신 >> 동기 통신 >> 완전히 통신이 끝날때까지 기다림
        async getPostList(){
            this.postList = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .catch(err => console.log(err));
        },
        goToDetail(postId){
            this.$router.push({name: 'postInfo', query: {id: postId}}); // 쿼리로 넘기기 >> 넘기는 대상은 객체 >> get 방식처럼 만들어줌
        }
    }
}