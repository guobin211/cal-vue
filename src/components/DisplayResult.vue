<template>
    <div class="warp">
        <div class="result">
            <AnimateCanvas v-bind:time="time"></AnimateCanvas>
        </div>
        <div class="input-data">
            <span class="bar"></span>
            <span v-html="formula" id="scroll-hooks"></span>
        </div>
        <div class="result">
            <span>
                {{result}}
            </span>
        </div>
    </div>
</template>

<script>
    import AnimateCanvas from "@/components/AnimateCanvas";

    export default {
        name: "DisplayResult",
        components: {AnimateCanvas},
        props: {
            formula: String,
            result: Number,
        },
        component: {
            AnimateCanvas
        },
        data() {
            return {
                time: 0,
            }
        },
        watch: {
            formula: function () {
                const el = document.getElementById('scroll-hooks');
                if (el.scrollWidth > window.innerWidth - 40) {
                    el.scrollLeft = el.scrollWidth + 40;
                }
            }
        },
        created() {
            setTimeout(() => {
                this.time = 5;
                console.log(this.time);
            }, 5000);
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/animate.scss";
    @import "../styles/@color.scss";

    .warp {
        .input-data {
            height: 50%;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;

            span {
                font-size: 84px;
                overflow-x: hidden;
                white-space: nowrap;
            }

            span.bar {
                display: block;
                width: 10px;
                height: 90px;
                animation: flash 1s infinite;
                border-left: 1px solid $primary;
            }
        }
        .result {
            height: 25%;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            position: relative;
            span {
                display: inline;
                font-size: 48px;
                overflow-x: hidden;
                white-space: nowrap;
                color: $font;
                margin-right: 10px;
            }
        }
    }
</style>
