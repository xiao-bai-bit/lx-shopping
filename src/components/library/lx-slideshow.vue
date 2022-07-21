<script setup lang='ts'>
import { onMounted, ref, watch } from "vue";

interface Props {
  autoPlay?: boolean;
  time?: number;
  height?: number;
  data?: object[];
}



const props = withDefaults(defineProps<Props>(), {
  autoPlay: false,
  time: 1000,
  height: 470,
  data: () => [],
});

const index = ref<number>(0);
let timer: NodeJS.Timer;

const autoPlayFn = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    index.value++;
    if (index.value === props.data.length) {
      index.value = 0;
    }
  }, props.time);
};

const stopPlay = () => {
  clearInterval(timer);
};

const startPlay = () => {
  console.log("ddd");
  autoPlayFn();
};

const next = () => {
  index.value++;
  if (index.value === props.data.length) {
    index.value = 0;
  }
};

const last = () => {
  index.value--;
  if (index.value === -1) {
    index.value = props.data.length - 1;
  }
};

onMounted(() => {
  if (props.autoPlay) autoPlayFn();
});
</script>

<template>
  <div class="lx-slideshow" @mouseover="stopPlay" @mouseout="startPlay">
    <div class="lx-slideshow-body">
      <div
        class="lx-slideshow-item"
        :key="i"
        v-for="(item, i) in props.data"
        :class="{ face: i === index }"
        :style="`height:${height}px;background:url(${item})`"
      ></div>

      <svg
        @click="last"
        t="1658233318363"
        class="icon lx-slideshow-next"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2117"
        width="56"
        height="56"
      >
        <path
          d="M703.14666667 918.56592592c-6.18951111 0-12.37902222-2.42725925-17.11217778-7.16041481l-382.29333334-382.29333333c-4.61179259-4.61179259-7.16041482-10.67994075-7.1604148-17.11217778 0-6.43223703 2.54862222-12.62174815 7.1604148-17.11217778l382.29333334-382.29333333c9.46631111-9.46631111 24.87940741-9.46631111 34.34571852 0 9.46631111 9.46631111 9.46631111 24.87940741 0 34.34571852L355.19905185 512l365.18115556 365.18115555c9.46631111 9.46631111 9.46631111 24.87940741 0 34.34571853-4.85451852 4.61179259-11.04402963 7.03905185-17.23354074 7.03905184z"
          p-id="2118"
          fill="#515151"
        ></path>
      </svg>
      <svg
        @click="next"
        t="1658232700791"
        class="icon lx-slideshow-next right"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1613"
        width="56"
        height="56"
        data-spm-anchor-id="a313x.7781069.0.i8"
      >
        <path
          d="M320.85333333 918.56592592c-6.18951111 0-12.37902222-2.42725925-17.11217778-7.16041481-9.46631111-9.46631111-9.46631111-24.87940741 0-34.34571852L668.80094815 512 303.74115555 146.81884445c-9.46631111-9.46631111-9.46631111-24.87940741 0-34.34571853 9.46631111-9.46631111 24.87940741-9.46631111 34.34571853 0l382.29333333 382.29333333c9.46631111 9.46631111 9.46631111 24.87940741 0 34.34571853l-382.29333333 382.29333333c-4.73315555 4.73315555-11.04402963 7.16041482-17.23354075 7.16041481z"
          p-id="1614"
          fill="#515151"
        ></path>
      </svg>

      <div class="lx-slideshow-dot">
        <span
          v-for="(item, i) in props.data"
          @mouseover="index = i"
          :key="i"
          :class="{ active: index === i }"
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.lx-slideshow {
  .lx-slideshow-body {
    position: relative;

    .lx-slideshow-next {
      position: absolute;
      top: 40%;
      z-index: 9999;

      &.right{
        left: 96%;
      }
    }

    .lx-slideshow-item {
      position: absolute;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      z-index: -1;
      opacity: 0;

      &.face {
        position: relative;
        opacity: 1;
        z-index: 99;
        transition: position 0.5s linear;
      }
    }

    .lx-slideshow-dot {
      width: 100%;
      position: absolute;
      top: 90%;
      z-index: 999;
      display: flex;
      justify-content: center;
      span {
        display: block;
        width: 12px;
        height: 12px;
        margin: 0 5px;
        border-radius: 50%;
        background: #000000;
        opacity: 0.4;

        &.active {
          opacity: 1;
          background: rgb(0, 122, 255);
        }
      }
    }
  }
}
</style>