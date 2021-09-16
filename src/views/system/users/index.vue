
<template>
  <div>
    users
    <p>菜单权限和用户挂钩，中间表存储用户id和菜单path的对应关系。登录后加载菜单权限进行匹配显示。</p>
    <p>按钮权限和用户挂钩、有crud四个基础权限。</p>
    <p>每次点击按钮发起请求之前，先判断当前用户是否有权限，若无权限，则终止请求，并提示用户。</p>
  </div>
</template>
<script>
export default {
  name: "users",
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>