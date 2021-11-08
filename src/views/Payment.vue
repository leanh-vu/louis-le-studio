<template>
  <v-stepper flat alt-labels v-model="currentPaymentStep">
    <v-stepper-header>
      <template v-for="(step, index) in stepList">
        <v-stepper-step
            :key="step"
            :complete="orderPaymentStepInfo[step].order < currentPaymentStep"
            :step="orderPaymentStepInfo[step].order"
        >
          {{ orderPaymentStepInfo.orderCheck.label }}
        </v-stepper-step>
        <v-divider v-if="index < (stepList.length - 1)" :key="step + 'divider'"></v-divider>
      </template>

    </v-stepper-header>

    <v-stepper-items>
      <template v-for="(step, index) in stepList">
        <v-stepper-content :key="index + 'content'" :step="orderPaymentStepInfo[step].order">
          <component @next="toStep(2)" :is="orderPaymentStepInfo[step].component"></component>
          <button @click="currentPaymentStep += 1">
            next
          </button>

<!--          <div v-for="x in 100" :key="x">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim excepturi laborum modi quas? A cum delectus eaque eum exercitationem explicabo magnam obcaecati odit quam tempora. Commodi nesciunt possimus sapiente tempora?</div>-->
        </v-stepper-content>
      </template>

      <v-stepper-content :step="5">
        <button @click="finish">
          Finish
        </button>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import OrderCheck from "@/components/payment/OrderCheck";
import DeliveryInfo from "@/components/payment/DeliveryInfo";
import ConfirmOrder from "@/components/payment/ConfirmOrder";
import Pay from "@/components/payment/Pay";

export default {
  name: "Payment",
  components: {
    OrderCheck,
    DeliveryInfo,
    ConfirmOrder,
    Pay
  },
  data: () => ({
    currentPaymentStep: 1,
    stepList: ['orderCheck', 'deliveryInfo', 'confirmOrder', 'pay'],
    orderPaymentStepInfo: {
      orderCheck: {
        id: 'orderCheck',
        order: 1,
        label: "Kiểm tra",
        component: "OrderCheck"
      },
      deliveryInfo: {
        id: 'orderCheck',
        order: 2,
        label: "Thông tin giao hàng",
        component: "DeliveryInfo"
      },
      confirmOrder: {
        id: 'orderCheck',
        order: 3,
        label: "Thông tin giao hàng",
        component: "ConfirmOrder"
      },
      pay: {
        id: 'orderCheck',
        order: 4,
        label: "Thanh toán",
        component: "Pay"
      }
    }
  }),
  methods: {
    toStep(step) {
      this.currentPaymentStep = step
    },
    finish() {
      this.$emit('finish')
    }
    // toStep()
  }
}
</script>

<style scoped>

</style>
