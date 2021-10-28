<template>
  <div>
    <v-app-bar app hide-on-scroll>
      <div class="side-bar-button">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>

      <div class="top-bar-container d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <div class="brand-logo" @click="go('Home')"><h3>LOUIS LE STUDIO</h3></div>
          <div class="app-bar-button-container desktop-show">
            <div class="d-flex align-center justify-center">
              <div class="button-header mobile-hide">
                <div class="button-text" @click="go('CategoryListing')">Tủ đồ</div>
              </div>
              <div class="button-header mobile-hide">
                <div class="button-text" @click="toggleHistory(true)">Lịch sử đơn hàng</div>
              </div>
              <div class="button-header mobile-hide">
                <div class="button-text" @click="toggleHistory(true)">Tìm Louis Le Studio</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <v-spacer></v-spacer>
      <SearchBox/>
      <v-badge
          class=""
          :content="1"
          :value="shopList.length"
          color="#1776d1"
          overlap
      >
        <v-icon @click="togglePayment(true)" size="30" color="black">local_mall</v-icon>
      </v-badge>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav dense>
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title @click="go('CategoryListing')">Tủ đồ</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="toggleHistory(true)">Lịch sử đơn hàng</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import {mapState} from "vuex";

export default {
  name: "AppHeader",
  components: {
    SearchBox
  },
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

  computed: {
    ...mapState({
      shopList: state => state.cart.shopList
    })
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  methods: {
    togglePayment(status) {
      this.$emit('open-payment', status)
    },
    toggleHistory(status) {
      this.$emit('open-history', status)
    },
    go(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.top-bar-container {
  width: 100%;
  padding: 0 10px;

  .brand-logo {
    cursor: pointer;
  }
}

.app-bar-button-container {
  display: none;
}

.button-header {
  text-transform: uppercase;
  margin-left: 20px;
  color: black;

  .button-text {
    text-decoration: none;
    color: black;
    display: block;
    position: relative;
    opacity: 0.8;
    padding: 0.2em 0;
    cursor: pointer;
    border: none;
    outline: none;
    text-transform: none !important;

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
      background-color: black;
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
  .desktop-show {
    display: block;
  }
}
</style>
