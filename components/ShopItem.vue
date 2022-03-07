<template>
  <div>
    <b-card
      :title="this.itemName"
      :sub-title="this.itemQuantityFormatted"
      :footer="this.itemTypeFormatted"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ itemDescription }}
      </b-card-text>

      <label for="userQuantity">Amount:</label>

      <input
        class="mr-4"
        type="number"
        id="userQuantity"
        name="userQuantity"
        min="1"
        :max="this.itemQuantity"
      />

      <b-button href="#" variant="primary">Add to Cart</b-button>
    </b-card>
  </div>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ShopItem",
  data() {
    return {};
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    itemQuantity: {
      type: Number,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    itemDescription: {
      type: String,
      required: true,
    },
    itemType: {
      type: String,
      required: true,
    },
  },
  computed: {
    itemTypeFormatted: function () {
      return `Type: ${this.itemType}`;
    },
    itemQuantityFormatted: function () {
      return `Quantity: ${this.itemQuantity}`;
    },
  },
});
</script>