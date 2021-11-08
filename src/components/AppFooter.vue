<template>
  <v-footer>
    <div class="footer-inner">
      this is footer
      <div v-for="i in 10" :key="i">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores minus obcaecati quae reprehenderit? Adipisci animi atque, dicta dolorum, esse ipsa natus necessitatibus nihil nisi officia praesentium quia quisquam, quod vel!</div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style lang="scss" scoped>
.footer-inner {
  width: 100%;
}
</style>
