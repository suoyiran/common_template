<template>
  <ul id="footer">
    <router-link tag="li" to="/home">
      <i class="iconfont icon-jiayouzhan" />
      <p>首页</p>
    </router-link>
    <router-link tag="li" to="/shopping">
      <i class="iconfont icon-mall" />
      <p>商城</p>
    </router-link>
    <router-link tag="li" to="/cinema">
      <i class="iconfont icon-chongzhi" />
      <p>充值</p>
    </router-link>
    <router-link tag="li" to="/mine">
      <i class="iconfont icon-wode" />
      <p>{{number}}</p>
    </router-link>
    <button @click="cyy"></button>
  </ul>
</template>

<script>
export default {
  props: ['number'],
  methods: {
    cyy () {
      this.$emit("zifu", "子夫传旨")
    }
  }
};
</script>

<style scoped lang="scss">
#footer {
  width: 100%;
  height: 50px;
  background: #ffffff;
  position: fixed;
  bottom: 0px;
  border-top: 1px solid #f5f5f5;
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
  z-index: 9999;
}
#footer li {
  flex: 1;
  padding-top: 3%;
  height: 100%;
  line-height: 50px;
  color: #8c8c8c;
}
#footer li.active {
  color: #e63442;
}
#footer li.router-link-active {
  color: #e63442;
}
#footer i {
  font-size: 20px;
}
#footer p {
  font-size: 12px;
  line-height: 30px;
}
</style>
