<template>
    <div class="box">
        <h1>To Do List</h1>
        <P>~Today I need to Do~</P>
        <Header1 @submit="push"></Header1>
        <Body1 v-for="item in list"
         :key="item.id"
         :isActive="item.isActive"
         :text="item.text"
        ></Body1>
        <Footer1></Footer1>

    </div>
</template>

<script>
import Header1 from './components/Header1.vue'
import Body1 from './components/Body1.vue'
import Footer1 from './components/Footer1.vue'


export default {
    name: 'App',
    data() {
        return {
            isActive: false,
            curIndex: 0,
            count: 0,
            list: [{
                id: 2024,
                thing: "唱歌",
                checked: false,
            }]
        }
    },
    methods: {
        push(text) {
            this.list.push({
                id: Date.now(),
                text,
                isActive: false
            })
        },
        done() {
            this.list = this.list.filter(item => item.checked)
            //  console.log(this.list)
        },
        todo() {
            this.list = this.list.filter(item => !item.checked)
        },
        clear() {
            this.list = this.list.filter(item => !item.checked)
        }

    },
    components: {
        Header1,
        Body1,
        Footer1
    },
    computed: {
        total() {
            this.count = 0
            this.list.map(item => {
                if (!item.checked) {
                    this.count++
                }
            })
            return this.count
        },

    }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    background-color: #F1B8B5;
}

h1 {
    background-color: #ED774F;
    width: 180px;
    height: 50px;
    margin: 10px auto 10px;
}

.box {
    width: 500px;
    height: 450px;
    margin: 80px auto;
    border-radius: 10px;
    background-color: #FDFDFD;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
</style>
