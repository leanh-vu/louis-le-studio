<template>
  <div class="shop-list-container">
    <div class="shop-filter">
      <div class="category" @click="changeCategory(cate)" v-for="cate in category" :key="cate.id">
        {{ cate.label }}
      </div>
    </div>
    <div class="shop-content">
      <div class="content-title-container">
        <v-icon>
          filter_list
        </v-icon>
        <h3 class="title-text">
          {{ currentCategory.label ? currentCategory.label : 'Tủ đồ' }}
        </h3>
      </div>
      <div class="item-list-container">
        <template v-if="shoppingItemList.length > 0">
          <div class="item-wrapper" v-for="item in shoppingItemList" :key="item.id">
            <ShoppingItem class="item" v-bind="item"/>
          </div>
        </template>
        <div v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingItem from "@/components/shoppingList/ShoppingItem";
import getShoppingList from "@/services";

export default {
  name: "ShoppingList",
  components: {
    ShoppingItem
  },
  data: () => ({
    category: [
      {
        id: 't',
        label: 'Áo',
        icon: ''
      },
      {
        id: 'ts',
        label: 'Áo sơ mi',
        icon: ''
      },
      {
        id: 'p',
        label: 'Quần',
        icon: ''
      }
    ],
    currentCategory: "",
    shoppingItemList: [],
    isLoading: false
  }),
  methods: {
    changeCategory(category) {
      this.currentCategory = category
      this.getItemList()
    },
    async getItemList() {
      this.isLoading = true
      try {
        this.shoppingItemList = await getShoppingList()
        this.isLoading = false
      } catch {
        this.isLoading = false
      }
    }
  },
  created() {
    this.getItemList()
  }
}
</script>

<style lang="scss" scoped>
.shop-list-container {
  display: flex;
  position: relative;

  .shop-filter {
    width: 10%;
    margin-top: 30px;

    .category {
      margin: 10px 0 10px 10px;
      cursor: pointer;

      &:hover {

      }
    }
  }

  .shop-content {
    width: 90%;

    .content-title-container {
      display: flex;
      margin-bottom: 25px;

      .title-text {
        margin-left: 5px
      }
    }

    .item-list-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      margin-top: 15px;

      .item-wrapper {
        width: 33%;
        margin-bottom: 45px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .item {
          width: 70%;
        }
      }
    }
  }
}
</style>

