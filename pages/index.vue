<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto text-center">
        <h1>Ye Olde Small Market</h1>
        <span
          >"Your one stop shop for non existent products since yesterday."</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
  head: {
    title: "Featured Items",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Index featured items.",
      },
    ],
  },
});
</script>
