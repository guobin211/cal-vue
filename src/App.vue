<template>
  <div id="app" v-bind:class="{ dark: isDark }">
    <div class="header">
      <DisplayResult v-bind:formula="inputData" v-bind:result="result"></DisplayResult>
    </div>
    <div class="content">
      <div class="row control" v-bind:class="{ dark: isDark }">
        <div class="col">
          <ButtonControl control="r" is-number="false" v-on:outputValue=receive ></ButtonControl>
        </div>
        <div class="col">
          <ButtonControl control="&times" is-number="false" v-on:outputValue=receive ></ButtonControl>
        </div>
        <div class="col">
          <ButtonControl control="&divide" is-number="false" v-on:outputValue=receive ></ButtonControl>
        </div>
        <div class="col">
          <ButtonControl control="c" is-number="false" v-on:outputValue=receive ></ButtonControl>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ButtonControl control="7" v-on:outputValue=receive></ButtonControl>
        </div>
        <div class="col">
          <ButtonControl control="8" v-on:outputValue=receive ></ButtonControl>
        </div>
        <div class="col">
          <ButtonControl control="9" v-on:outputValue=receive ></ButtonControl>
        </div>
        <div class="col control" v-bind:class="{ dark: isDark }">
          <ButtonControl control="-" is-number="false" v-on:outputValue=receive ></ButtonControl>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ButtonControl control="4" v-on:outputValue=receive ></ButtonControl>
        </div>
        <div class="col">
          <ButtonControl control="5" v-on:outputValue=receive ></ButtonControl>
        </div>
        <div class="col">
          <ButtonControl control="6" v-on:outputValue=receive ></ButtonControl>
        </div>
        <div class="col control" v-bind:class="{ dark: isDark }">
          <ButtonControl control="+" is-number="false" v-on:outputValue=receive ></ButtonControl>
        </div>
      </div>
      <div class="last-warp">
        <div class="left">
          <div class="left-warp">
            <ButtonControl control="1" v-on:outputValue=receive ></ButtonControl>
            <ButtonControl control="2" v-on:outputValue=receive ></ButtonControl>
            <ButtonControl control="3" v-on:outputValue=receive ></ButtonControl>
          </div>
          <div class="left-warp">
              <div class="main" v-on:click="changeTheme">
                <transition name="flip">
                  <span class="theme-button" v-show="isDark">
                      白天
                  </span>
                </transition>
              </div>
              <span class="dark-button" v-on:click="changeTheme" v-show="!isDark">
                夜晚
              </span>
            <ButtonControl control="0" v-on:outputValue=receive ></ButtonControl>
            <ButtonControl control="." v-on:outputValue=receive ></ButtonControl>
          </div>
        </div>
        <div class="right">
          <ButtonControl control="=" v-on:outputValue=receive ></ButtonControl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import DisplayResult from "@/components/DisplayResult";
  import ButtonControl from "@/components/ButtonControl";
  import { Calculator } from "@/tools/calculator";
  import { Tools } from "@/tools/tools";

  export default {
    name: 'app',
    components: {
      DisplayResult,
      ButtonControl,
    },
    data() {
      return {
        isDark: false,
        calculator: new Calculator(),
      }
    },
    methods: {
      receive: function (data) {
        switch (data) {
          case 'r':
            return this.calculator.reset();
          case 'c':
            return this.calculator.delete();
          case '=':
            return this.getResult();
          case '&times':
            return this.calculator.push('*');
          case '&divide':
            return this.calculator.push('/');
          default:
            return this.calculator.push(data);
        }
      },
      getCurrent: function () {
        const res = this.calculator.getCurrent();
        if (Tools.isNumber(res[res.length-1])){
          return eval(res);
        } else {
          return eval(res.substring(0, res.length-1));
        }
      },
      getResult: function () {
        const c = this.result;
        if (c){
          this.calculator.reset();
          this.calculator.push(c);
        }

      },
      changeTheme: function () {
        this.isDark = !this.isDark;
      }
    },
    computed: {
      inputData: function () {
        return this.calculator.getShowStr();
      },
      result: function () {
        return this.getCurrent();
      }
    }
  }
</script>

<style lang="scss">
  @import "styles/@color.scss";
  @import "styles/reset.scss";
  .last-warp{
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: row;
    .left{
      width: 75%;
      .left-warp{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
        position: relative;
        .dark-button{
          position: absolute;
          left: 0;
          top: 0;
          width: 33.3%;
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: center;
          transition: ease-in-out;
        }
        div{
          width: 33.3%;
          .theme-button{
            width: 100%;
            height: 100%;
            position: relative;
            background: $primary;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
        }
      }
    }
    .right{
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $primary;
      color: $light;
    }
  }

  .control{
    background: $bg-color;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 11;
    .header{
      height: 34%;
      width: 100%;
      overflow: hidden;
    }
    .content{
      height: 66%;
      width: 100%;
      overflow: hidden;
      position: relative;
    }
  }

  .dark{
    background: $dark;
    color: $light;
  }

  .flip-enter-active, .flip-leave-active {
    transition: all 0.5s ease-in-out;
  }
  .flip-enter, .flip-leave-to{
    opacity: 0;
    transform: rotateY(180deg);
  }
</style>
