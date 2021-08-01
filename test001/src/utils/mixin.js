export default {
    data () {
        return {
            initData: 'mixin初始数据'
        }
    },
    created () {
        
    },
    mounted () {
        console.log('minxin的挂载输出')
    },

    methods: {
        doubleNum(num){
            debugger
            return num*2
        }
    }
}