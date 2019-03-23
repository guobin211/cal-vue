<template>
    <div>
        <canvas id="animate-canvas"></canvas>
        <p>time: {{time}}</p>
        <p>num: {{num}}</p>
    </div>
</template>

<script>
    import { Circle } from "@/tools/circle";

    export default {
        name: "AnimateCanvas",
        data(){
            return {
                num: 1,
                canvas: null,
            }
        },
        props: {
            time: Number,
        },
        computed: {
            _num: {
                get: function () {
                    return this.num + 1;
                },
                set: function (v) {
                    this.num += v;
                }
            }
        },
        watch: {
            time: function () {
                this.num = this.num + this.time;
                console.log('time更新，_num被更新' + this._num);
            }
        },
        methods: {

        },
        beforeCreate(){
            console.log('beforeCreate');
            // console.log(this.time);
        },
        created() {
            console.log('created');
            console.log('初始化time = ' + this.time);
            console.log('data: num = ' + this.num);
            console.log('初始化_num = num + 1 =' + this._num);
        },
        beforeMount() {
            console.log('beforeMount');
            console.log(this.time);
        },
        mounted() {
            console.log('mounted');
            console.log(this.time);
            this.canvas = new Circle('animate-canvas');
        },
        beforeUpdate() {
            console.log('beforeUpdate');
            console.log(this.time);
        },
        updated() {
            console.log('updated');
            console.log(this.time);
        },
        beforeDestroy() {
            console.log('beforeDestroy');
            console.log(this.time);
        },
        destroyed() {
            console.log('destroyed');
            console.log(this.time);
        }
    }
</script>

<style scoped lang="scss">
    #animate-canvas{
        position: absolute;
        left: 0;
        top: 0;
        height: 50px;
        width: 100%;
    }
</style>
