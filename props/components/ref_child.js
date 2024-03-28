//ref_child.js

// ref >> 이벤트 강제로 발생
let template = `
<div>
    <button id="cBtn" type="button" @click="childClick()" ref="btn">
        click
    </button>
    <p>{{msg}}</p>
</div>
`;

export default{
    template,
    data(){
        return{
            msg: ''
        }
    },
    mounted(){
        this.$refs.btn.click();
    },
    methods: {
        childClick(){
            console.log('click 이벤트가 발생');
        },
        childFunc(){
            console.log('child method가 실행');
        }
    }
}