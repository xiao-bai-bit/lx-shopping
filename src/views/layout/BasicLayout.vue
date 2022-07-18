<script setup lang='ts'>

import LxNavbar from '@/components/lx-navbar.vue';
import LxHeaderSticky from '@/components/lx-header-sticky.vue';
import LxHeaderNav from '@/components/lx-header-nav.vue';

</script>

<template>
  <div class="lx-basic">
    <LxNavbar></LxNavbar>
    <LxHeaderNav></LxHeaderNav>
    <LxHeaderSticky></LxHeaderSticky>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>

</style>