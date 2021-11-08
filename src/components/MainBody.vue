<template>
  <div class="home-main-container">
    <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
        hide-delimiters
        interval="4000"
    >
      <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
      >
        <v-sheet
            height="100%"
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <img src="../assets/header-background.jpeg" class="main-banner">
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="main-content">

    </div>
  </div>
</template>

<script>

export default {
  name: "MainBody",
  data: () => ({
    slides: [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
    ],
  })
}
</script>

<style lang="scss" scoped>
.home-main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .main-banner {
    width: 100%;
    height: auto;
    min-height: 100%;
  }

  .main-content {
    width: 95%;
  }

}
</style>
