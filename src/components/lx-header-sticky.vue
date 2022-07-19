<script setup lang='ts'>
import LxHeader from "./lx-header.vue";
import { useWindowScroll } from "@vueuse/core";
import { ref } from "vue";
const { y } = useWindowScroll();

const type = ref<string>("default");
</script>

<template>
  <div class="lx-header-sticky" :class="{ active: y > 100 }">
    <LxHeader :type="type">
      <template #nav>
        <ul>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">新品</a>
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">定制</a>
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')"
              >尾货特卖</a
            >
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')"
              >以旧换新</a
            >
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">学生</a>
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">游戏</a>
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">直播</a>
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">0元试用</a>
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">乐豆购</a>
          </li>
          <li>
            <a href="javascript:alert('功能未开发，敬请期待。。。')">0元购</a>
          </li>
        </ul>
      </template>

      <template #login>
        <svg
        @click="type='serach'"
          t="1658143801319"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="924"
          width="20"
          height="20"
        >
          <path
            d="M708.992 769.28a384 384 0 1 1 60.330667-60.330667l156.885333 156.928a42.666667 42.666667 0 0 1-60.330667 60.330667l-156.885333-156.885333zM767.957333 469.333333a298.666667 298.666667 0 1 0-597.333333 0 298.666667 298.666667 0 0 0 597.333333 0z"
            p-id="925"
            fill="#8a8a8a"
          ></path>
        </svg>
        <a href="javascript:alert('功能未开发，敬请期待。。。')">注册</a>
        <i></i>
        <a href="javascript:alert('功能未开发，敬请期待。。。')">登录</a>
        <img src="@/assets/images/navbar/icon-phone.png" alt="" />
      </template>

      <template #serachBox>
        <svg
            t="1658143801319"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="924"
            width="20"
            height="20"
          >
            <path
              d="M708.992 769.28a384 384 0 1 1 60.330667-60.330667l156.885333 156.928a42.666667 42.666667 0 0 1-60.330667 60.330667l-156.885333-156.885333zM767.957333 469.333333a298.666667 298.666667 0 1 0-597.333333 0 298.666667 298.666667 0 0 0 597.333333 0z"
              p-id="925"
              fill="#8a8a8a"
            ></path>
          </svg>
          <input type="text" placeholder="带货节" />

          <svg
          @click="type='default'"
            t="1658147989682"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="924"
            width="20"
            height="20"
          >
            <path
              d="M196.23936 769.8432a40.96 40.96 0 1 0 57.91744 57.91744L512 569.91744l257.8432 257.8432a40.96 40.96 0 0 0 57.91744-57.91744L569.91744 512l257.8432-257.8432a40.96 40.96 0 0 0-57.91744-57.91744L512 454.08256 254.1568 196.1984a40.96 40.96 0 0 0-57.91744 57.91744l257.8432 257.8432-257.8432 257.8432z"
              p-id="925"
              fill="#8a8a8a"
            ></path>
          </svg>
      </template>

      
    </LxHeader>
  </div>
</template>

<style scoped lang="less">
.lx-header-sticky {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: -1;
  opacity: 0;
  &.active {
    transition: 1s linear;
    opacity: 1;
    z-index: 9999;
  }
}
</style>