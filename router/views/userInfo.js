// postInfo.js
// 단건 조회

let template = `
<div>
    <table>
        <tr>
            <td>id</td>
            <td>{{userInfo.id}}</td>
        </tr>
        <tr>
            <td>name</td>
            <td>{{userInfo.name}}</td>
        </tr>
        <tr>
            <td>username</td>
            <td>{{userInfo.username}}</td>
        </tr>
        <tr>
            <td>email</td>
            <td>{{userInfo.email}}</td>
        </tr>
    </table>
</div>
`;

export default{
    template,
    data(){
        return{
            userInfo: {}
        }
    },
    created(){
        let id = this.$route.query.id;
        this.getUserInfo(id);
    },
    methods: {
        async getUserInfo(id){
            this.userInfo = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
                                    .then(res => res.json())
                                    .catch(err => console.log(err));
        }
    }
}