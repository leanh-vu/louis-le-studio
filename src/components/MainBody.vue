<template>
  <div class="main-container">
    <img src="../assets/header-background.jpeg" class="main-banner">
    <div class="main-content">
      <div id="service">
        <Service />
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit officia quae quo soluta. Animi dolor, dolore eius excepturi fugiat hic impedit ipsa itaque laboriosam minus modi neque perspiciatis sint.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit officia quae quo soluta. Animi dolor, dolore eius excepturi fugiat hic impedit ipsa itaque laboriosam minus modi neque perspiciatis sint.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit officia quae quo soluta. Animi dolor, dolore eius excepturi fugiat hic impedit ipsa itaque laboriosam minus modi neque perspiciatis sint.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit officia quae quo soluta. Animi dolor, dolore eius excepturi fugiat hic impedit ipsa itaque laboriosam minus modi neque perspiciatis sint.
      </div>
    </div>
  </div>
</template>

<script>
import Service from "@/components/Service";

export default {
  name: "MainBody",
  components: {
    Service
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .main-banner {
    width: 100%;
    height: auto;
  }
  .main-content {
    width: 80%;
  }
}
</style>
