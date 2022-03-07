<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto text-center">
        <h1>This is a testing page.</h1>
        <span>Your route should be /testing.</span>
      </div>
    </div>

    <!-- Testing row. -->
    <div class="row">
      <div class="col">
        <ShopItem
          :id="1"
          :item-quantity="25"
          item-name="Test Item"
          item-description="This is a testing item. It doesn't exist!"
          item-type="Developer Items"
        />
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
    title: "Testing",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Testing page.",
      },
    ],
  },
});
</script>
