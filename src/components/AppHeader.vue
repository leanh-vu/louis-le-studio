<template>
  <div>
    <v-app-bar
        color="black"
        absolute
        dark
    >
      <div class="side-bar-button">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>

      <div class="top-bar-container d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <div><h1>LOUIS LE STUDIO</h1></div>
          <div class="button-header desktop-show">
            <a href="#service" class="underline--none"><div class="button-text">Dịch vụ</div></a>
          </div>
          <div class="button-header desktop-show">
            <div class="button-text" @click="openContact">Liên hệ</div>
          </div>
        </div>
        <div class="desktop-show">
          <v-col
              cols="12"
              class="py-2 lang-button-container"
          >

            <v-btn-toggle v-model="lang">
              <v-btn v-for="language in langList" :key="language.id">
                <img :src="require(`../assets/${language.img}`)" alt="">
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </div>
      </div>


    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      lang: 2,
      langList: [
        {
          label: 'Vietnamese',
          img: 'ic_vn.png',
          id: 'vi'
        },
        {
          label: 'English',
          img: 'ic_en.png',
          id: 'en'
        }
      ],
      drawer: false,
      group: null,
    }
  },
  methods: {
    openContact() {
      this.$emit('open-contact')
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style lang="scss" scoped>
.top-bar-container {
  width: 100%;
  padding: 0 10px;
  .lang-button-container {
    padding: 0;
  }
}

.button-header {
  text-transform: uppercase;
  margin-left: 20px;

  .button-text {
    text-decoration: none;
    color: white;
    display: block;
    position: relative;
    opacity: 0.7;
    padding: 0.2em 0;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover {
      opacity: 1;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1em;
      background-color: white;
      opacity: 0;
      transition: opacity 300ms, transform 300ms;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
      transform: translate3d(0, 0.2em, 0);
    }
  }
}
.underline--none {
  text-decoration: none;
}
@media only screen and (min-width: 768px) {
  .side-bar-button {
    display: none;
  }
  .des--show {
    display: block;
  }
  .mobile-hide {
    display: block;
  }
}
</style>
