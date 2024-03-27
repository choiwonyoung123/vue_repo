//exam02.js >> ForComponent
//별찍기 구구단
let template = `
<div>
    <!-- 별찍기 -->
    <div>
        <p v-for="num in 5" v-bind:key="num">
            <span v-for="num2 in num" v-bind:key="num2">{{"*"}}</span>
        </p>
    </div>
    <br>
    <!-- 구구단 -->
    <div>
        <p v-for="num in 9" v-bind:key="num">
            <p v-for="num2 in 9" v-bind:key="num2">
                {{num}} * {{num2}} = {{num * num2}}
            </p>
        </p>
    </div>
</div>
`;


export default{
    template,
    data(){
        return{

        }
    }
}