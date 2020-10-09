<template>
  <div>
    <keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="$route.meta.keepAlive" />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import './assets/css/resrt.css'
export default {
  name: 'App',
  components: {},
}
</script>

<style></style>
