<script>
import {Book} from "@/models/Media";

export default {
  name: "BookItem",

  props: {
    item: {
      type: Book,
    }
  },
}
</script>

<template>
  <div>
    <h3 class="card-title">{{item.title}}</h3>
    <p v-if="item.pages" class="card-text">Pages: {{item.pages}}</p>
  </div>
</template>

<style scoped>
//can do style scope lang='scsss'
//will have to install nmp -D scss
//then it will compile sass as the same time.
//in scss folder create a variable file to put the variables like $primary: blue
//
.card-title {
  color : dodgerblue;
}
</style>


