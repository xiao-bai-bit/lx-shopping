<script setup lang='ts'>
import {ref} from 'vue'
import {getSlideshow} from '@/api/home';
import LxSlideshow from '@/components/library/lx-slideshow.vue';
import { onMounted } from '@vue/runtime-core';
import LxHomeServer from './component/lx-home-server.vue';

const slideshow = ref<[]>()
onMounted(async()=>{
  const {data} = await getSlideshow()
  slideshow.value = data
})
</script>

<template>
  <div class="lx-home">
    <LxSlideshow :data="slideshow" :auto-play="true"></LxSlideshow>
    <LxHomeServer></LxHomeServer>
    <div class="container">
      
    </div>
  </div>
</template>

<style scoped>

</style>