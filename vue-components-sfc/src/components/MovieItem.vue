<script>
import {Movie} from "@/models/Media";

export default {
  name: "MovieItem",

  props: {
    item: {
      type: Movie,
    }
  },
}
</script>

<template>
  <div>
    <h3 class="card-title">{{item.title}}</h3>
    <p v-if="item.runtime" class="card-text">Runtime: {{item.runtime}}</p>
  </div>
</template>

<style scoped>

</style>


