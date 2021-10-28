<template>
  <div class="search-box-container">
    <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        hide-no-data
        hide-selected
        hide-details
        label="Tìm kiếm"
        return-object
        solo
        flat
        class="mx-4"
        dense
        clearable
        full-width
        item-text="Description"
        item-value="API"
    >
      <template v-slot:item="data">
        <div style="height: 50px">
          {{data.item.Description}}
        </div>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
  }),

  computed: {
    fields() {
      if (!this.model) return []

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || 'n/a',
        }
      })
    },
    items() {
      return this.entries.map(entry => {
        const Description = entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + '...'
            : entry.Description

        return Object.assign({}, entry, {Description})
      })
    },
  },

  watch: {
    search(val) {
      console.log(val)
      // Items have already been loaded
      if (this.items.length > 0) return

      if (this.isLoading) return

      this.isLoading = true

      fetch('https://api.publicapis.org/entries')
          .then(res => res.json())
          .then(res => {
            const {count, entries} = res
            this.count = count
            this.entries = entries
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
    },
  },
}
</script>

<style scoped>
.search-box-container {
  width: 400px;
}
</style>
