<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto text-center">
        <h1>This is a testing page.</h1>
        <span
          >Your route should be /testing. For relevant API endpoints see
          market-api code. API testers like Postman also work.
        </span>
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

      <!-- API Ping Buttons -->
      <div class="col">
        <div class="row">
          <div class="col">
            <b-form-input
              v-model="testApiRoute"
              placeholder="Enter the route to test."
            ></b-form-input>
          </div>

          <div class="col-auto">
            <b-button @click="pingApiRoute"
              >Ping the route. (Response in console.)</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      testApiRoute: "",
    };
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
  methods: {
    pingApiRoute: function () {
      const TAG: string = "pingApiRoute(), ";
      console.log(`${TAG} Pinging the following route: ${this.testApiRoute}`);

      this.$axios
        .$get(this.testApiRoute)
        .then(function (response) {
          console.log("Success.");
          console.log(response);
        })
        .catch(function (error) {
          console.log("Failure.");
          console.error(error);
        });
    },
  },
});
</script>
