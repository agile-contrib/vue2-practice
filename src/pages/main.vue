<template>
  <div class='main-view'>
    <header>
      <h2>
        Vue2 Practice
      </h2>
      <ui-userinfo></ui-userinfo>
    </header>
  </div>
</template>
<script>
import UiUserinfo from "../component/userinfo.vue";
export default {
  components: {
    UiUserinfo,
  },
};
</script>
<style lang='scss' scoped>
.main-view {
  & > header {
    height: 0.5rem;
    background-image: url("../assets/logo.png");
    background-size: auto 60%;
    background-repeat: no-repeat;
    background-position: 0.5rem center;
    box-shadow: 0px 3px 3px 1px #d4d4e2;
    & > h2 {
      line-height: 0.5rem;
      margin-left: 1.3rem;
      color: #34495e;
      font-family: fantasy;
      display: inline-block;
    }
  }
}
</style>
