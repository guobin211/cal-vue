<template>
    <div class="main" v-bind:class="{touched: isTouched}"
         v-on:click="outputValue"
         v-on:mousedown="touch"
         v-on:mouseup="touchOver">
        <span v-html="control" v-bind:class="{primary: isNumber}"></span>
    </div>
</template>

<script>
    export default {
        name: "ButtonControl",
        props: {
            control: String,
            isNumber: String,
        },
        data() {
            return{
                isTouched: false
            }
        },
        methods: {
            outputValue: function () {
                this.$emit('outputValue', this.control);
            },
            touch: function (ev) {
                ev.preventDefault();
                this.isTouched = true;
            },
            touchOver: function (ev) {
                ev.preventDefault();
                setTimeout(() => {
                    this.isTouched = false;
                }, 200);

            },
        },
    }
</script>

<style scoped lang="scss">
    @import "../styles/@mixin.scss";
    @import "../styles/@color.scss";
    .main{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        -moz-box-sizing:border-box; /* Firefox */
        -webkit-box-sizing:border-box; /* Safari */
        font-size: 64px;
        font-weight: 100;
        @include border-1px(1px, solid, $border);
        .primary{
            color: $primary;
        }
    }
</style>
