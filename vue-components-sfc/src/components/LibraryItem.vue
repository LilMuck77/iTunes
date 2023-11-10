<script>
import BookItem from "@/components/BookItem.vue";
import MovieItem from "@/components/BookItem.vue";

export default {
  name: "LibraryItem",
  components: {BookItem, MovieItem},
  props: {
    item: {
      type: Object,
    }
  },
  computed: {
    typeOfComponent(){
      return this.item.constructor.type + 'Item';
    }
  },
}

</script>

<template>
  <div class="card h-100" :class="{'border-success' : item.isAvailable()}">
    <div v-if="edit" class="card-body">
      <input>
    </div>
    <div v-else class="card-body">
      <component :is="typeOfComponent" :item="item"></component>
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button @click="edit = !edit">Edit</button>
      <button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
      <button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
    </div>
  </div>
</template>

<style scoped>

</style>

