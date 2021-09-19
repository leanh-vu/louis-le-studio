<template>
  <div class="service-container">
    <div v-for="service in servicesList" :key="service.id" class="service-item" :style="{'background': service.color}">
      <h3 class="service-title">{{ service.label }}</h3>
      <div>{{ service.icon }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
  data: () => ({
    servicesList: [
      {
        id: 1,
        label: 'Xây dưng Software',
        icon: 'website',
        color: '#add3fb'
      },
      {
        id: 2,
        label: 'Thiết kế Software',
        icon: 'website',
        color: '#bfe6df'
      },
      {
        id: 3,
        label: 'Tư vấn thiết kế và xây dựng Software',
        icon: 'website',
        color: '#eecaff'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.service-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 5px;
    height: 300px;
    transition: transform .2s;
    margin: 10px;
    padding: 15px 10px;
    &:hover {
      transform: scale(1.1)
    }
    .service-title {
      text-align: center;
    }
  }
}
</style>
