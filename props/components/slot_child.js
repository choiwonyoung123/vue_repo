//slot_child.js

// 모양(골격) 잡아주는 것 필요
// 고정적인 부분은 일반 태그에 작성

let template = `
<div>
    <h1>고정데이터</h1>
    <header>
        <slot name="title"></slot>
    </header>
    <main>
        <slot name="content"></slot>
    </main>
    <footer>
        <slot></slot>
    </footer>
</div>
`;

export default{
    template,
    
}
