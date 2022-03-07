<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto text-center">
        <h1>Marketplace Page</h1>
        <span>Your route should be /marketplace.</span>
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
    title: "Marketplace",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "The marketplace page.",
      },
    ],
  },
});
</script>
