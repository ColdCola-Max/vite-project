<template>
    <div>
        <input ref="inp" type="text" v-model.trim="text" @keydown.enter="submit">
        <button>Submit</button>
    </div>
</template>
<script>
export default {
    name: 'Header',    
    data(){
    return {
        text:''
    }
    },
    props: {
        list:Array,
        curList:Array,
    },
    methods:{
        submit() {
                 if(!this.text){
                    alert('不能输入空内容')
                 }
             this.$emit('submit',this.text)  
             this.text=''
             this.$refs.inp.focus()
                }  
              
    }
}
</script>

<style scoped lang="scss">
input {
    outline: 0;
    border: 0;
    border-bottom: 2px dashed pink;

}
</style>