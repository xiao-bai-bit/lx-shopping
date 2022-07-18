<script setup lang='ts'>
interface Props {
  type?: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: "default",
});
</script>

<template>
  <header class="lx-header">
    <div class="container" :class="{ active: props.type === 'serach' }">
      <div class="lx-header-logo">
        <img src="@\assets\images\header\联想logo.png" alt="" />
      </div>

      <div class="lx-header-nav" v-show="props.type === 'default'">
        <slot name="nav"> </slot>
      </div>

      <div class="lx-header-serach" v-show="props.type === 'default'">
        <slot name="serach"> </slot>
      </div>

      <div class="lx-header-login" v-show="props.type === 'default'">
        <slot name="login"> </slot>
      </div>

      <div class="lx-header-serach-box" v-show="props.type === 'serach'">
        <slot name="serachBox"> </slot>
      </div>
    </div>
  </header>
</template>

<style lang="less">
.lx-header {
  height: 60px;
  background-color: #ffffff;
  .container {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;

    &.active {
      padding-top: 10px;
    }

    .lx-header-logo {
      > img {
        width: 178px;
        height: 36px;
      }
    }

    .lx-header-nav {
      ul {
        display: flex;
        height: 60px;
        li {
          margin-right: 26px;
          a {
            color: #000000;
            font-size: 16px;
            font-family: 微软雅黑;
            line-height: 56px;
          }
          &:hover {
            border-bottom: 4px rgba(225, 39, 38, 0.93) solid;
          }
        }
      }
    }

    .lx-header-serach {
      display: flex;
      align-items: center;
      background: #f4f4f4;
      > svg {
        margin: 0 10px;
      }
      > input {
        width: 230px;
        height: 36px;
        outline: none;
        border: none;
        font-size: 13px;
        background: #f4f4f4;
      }
    }

    .lx-header-login {
      display: flex;
      align-items: center;
      > svg {
        margin-right: 15px;
      }
      a {
        font-size: 12px;
        margin: 0 5px;
        color: #b5b5b5;

        &:hover {
          color: #000000;
        }
      }

      i {
        border-left: 1px solid #b8b8b8;
        height: 11px;
        display: inline-block;
        margin: auto 2px;
      }

      > img {
        margin-left: 10px;
        width: 22px;
        height: 22px;
      }
    }

    .lx-header-serach-box {
      display: flex;
      align-items: center;
      margin-right: 200px;
      width: 670px;
      height: 36px;
      background: #f4f4f4;
      > svg {
        margin: 0 10px;
      }
      > input {
        width: 85%;
        height: 36px;
        outline: none;
        border: none;
        font-size: 16px;
        background: #f4f4f4;
      }
    }
  }
}
</style>