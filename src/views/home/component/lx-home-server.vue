<script setup lang='ts'>
import { ref, onMounted } from "vue";
import { getServer } from "@/api/home";
interface serve {
  name: string;
  plus: string;
  minus: string;
}
const serve = ref<[serve]>();

onMounted(async () => {
  const { data } = await getServer();
  serve.value = data;
});
</script>

<template>
  <div class="lx-home-scope">
    <div class="container lx-home-main">
      <ul>
        <li v-for="(item, i) in serve" :key="i">
          <a href="javascript:alert('功能未开发，敬请期待。。。。。。')">
            <img :src="item.plus" alt="" />
            <img :src="item.minus" alt="" />
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.lx-home-scope {
  background-color: #ffffff;
  .lx-home-main {
    ul {
      display: flex;
      li {
        a {
          position: relative;
          height: 95px;
          width: 96px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &:hover {
            transition: bottom 1s linear;

            bottom: 5px;
            box-shadow: rgba(226, 18, 18, 0.26) 0px 0px 4.10778px 0px;

            span {
              color: rgb(225, 20, 10);
            }

            img:nth-child(2) {
              display: block;
            }

            img:nth-child(1) {
              display: none;
            }
          }

          span {
            display: block;
            font-size: 13px;
            line-height: 16px;
            color: rgb(80, 80, 80);
          }
          img {
            width: 30px;
            height: 30px;
          }

          img:nth-child(2) {
            display: none;
          }
        }
      }
    }
  }
}
</style>