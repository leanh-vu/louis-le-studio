<template>
  <v-app>
    <AppHeader @open-payment="togglePayment"/>

    <v-main class="main-container">
      <v-container fluid>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>

    <AppFooter/>

    <Modal v-show="isPaymentShow" @close="togglePayment(false)" :isShow="isPaymentShow">
      <Payment @finish="togglePayment(false)"/>
      <div class="close-button-container">
        <v-btn @click="togglePayment(false)">Huỷ</v-btn>
      </div>
    </Modal>

  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import Payment from "@/views/Payment";
import Modal from "@/components/common/Modal";

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppFooter,
    Payment,
    Modal
  },
  data: () => ({
    isPaymentShow: false,
    drawer: false,
    group: null,
  }),
  methods: {
    togglePayment(status) {
      this.isPaymentShow = status
    }
  },
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}

.close-button-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
