<template>
  <div>
    <v-footer :padless="true">
      <div class="footer-inner">
        this is footer
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style lang="scss" scoped>
.footer-inner{
  //background: black;
  width: 100%;
}
</style>
