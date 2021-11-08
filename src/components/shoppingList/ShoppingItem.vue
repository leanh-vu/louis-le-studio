<template>
  <div class="item-container" @click="toDetail()">
    <img class="item-img" :src="img" :alt="img">
    <div class="item-info">
      <div  v-if="colorList" class="color-band-container">
        <div class="color-band" v-for="color in colorList" :key="color" :style="{'background': color}"
             @click.stop="toDetail({color})"></div>
      </div>
      <h4 class="item-name">
        {{ name }}
      </h4>
      <h4 v-if="price" class="item-price">
        <v-icon>
          local_atm
        </v-icon>
        {{ price.toLocaleString() }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingItem",
  props: {
    img: {
      type: String
    },
    name: {
      type: String
    },
    colorList: {
      type: Array,
    },
    price: {
      type: Number,
    },
    itemId: {
      type: String,
      require: true
    }
  },
  methods: {
    toDetail(info) {
      this.$router.push({
        name: "ItemDetail",
        query: {
          ...info
        },
        params: {
          id: this.itemId
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.item-container {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: transform .2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  .item-img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  .item-info {
    padding: 0 10px 10px;

    .color-band-container {
      display: flex;
      width: 100%;

      .color-band {
        flex: 1;
        height: 10px;
        transition: transform .2s;
        cursor: pointer;

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    .item-name {
      margin: 10px 0 5px 0;
    }

    .item-price {
      //color: #0587E6
    }
  }
}
</style>
