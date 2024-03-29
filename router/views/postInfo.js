// postInfo.js
// 단건 조회

let template = `
<div>
    <table>
        <tr>
            <td>id</td>
            <td>{{postInfo.id}}</td>
        </tr>
        <tr>
            <td>title</td>
            <td>{{postInfo.title}}</td>
        </tr>
        <tr>
            <td>userId</td>
            <td>{{postInfo.userId}}</td>
        </tr>
        <tr>
            <td>body</td>
            <td><textarea readonly>{{postInfo.body}}</textarea></td>
        </tr>
    </table>
</div>
`;

export default{
    template,
    data(){
        return{
            postInfo: {}
        }
    },
    created(){
        let id = this.$route.query.id;
        this.getPostInfo(id);
    },
    methods: {
        async getPostInfo(id){
            this.postInfo = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
                                    .then(res => res.json())
                                    .catch(err => console.log(err));
        }
    }
}