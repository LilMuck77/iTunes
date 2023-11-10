<script>
import LibraryCollection from "@/models/LibraryCollection";
import {Book, Movie} from "@/models/Media";
import LibraryItem from "@/components/LibraryItem.vue";

export default {
  name: "LibraryItemList",
  components: {LibraryItem},

  data() {

    return {
      library: new LibraryCollection()
          .addItem(new Book('Dangerous Lies', 345))
          .addItem(new Movie('Fight Club', 96))
          .addItem(new Book('Harry Potter', 370))
          .addItem(new Movie('Wizards', 129))
    }
  },
}
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="item in library" :key="item.title">
      <library-item :item="item"></library-item>
      <button @click="library.sortBy('title')">Sort By Title</button>
    </div>
  </div>
</template>

<style scoped>

</style>