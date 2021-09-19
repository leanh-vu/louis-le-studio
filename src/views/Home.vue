<template>
  <div class="home">
    <AppHeader @open-contact="toggleContactMenu(true)"/>
    <MainBody/>
    <AppFooter/>
    <ContactModal v-show="isContactModalShow" :isShow="isContactModalShow" @close="toggleContactMenu(false)"/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import MainBody from "@/components/MainBody";
import AppFooter from "@/components/AppFooter";
import ContactModal from "@/components/ContactModal";

export default {
  name: 'Home',
  components: {
    AppHeader,
    MainBody,
    AppFooter,
    ContactModal
  },
  data: () => ({
    isContactModalShow: false
  }),
  methods: {
    toggleContactMenu(status) {
      this.isContactModalShow = status
    }
  }
}
</script>
