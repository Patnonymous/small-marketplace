<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Register New Account</h1>
      </div>
    </div>
    <div class="row">
      <div class="col border border-primary rounded">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <!-- Email -->
          <b-form-group
            id="input-group-email"
            label="Email address:"
            label-for="input-email"
            description="Email will be used to log in. Your email will never be displayed or shared publicly with any other users."
          >
            <b-form-input
              id="input-email"
              v-model="form.email"
              :state="emailValidation"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
            <b-form-invalid-feedback :state="emailValidation">
              Email must be between 0 and 255 characters.
            </b-form-invalid-feedback>
          </b-form-group>

          <!-- Username -->
          <b-form-group
            id="input-group-username"
            label="Username: "
            label-for="input-username"
            description="Username will be displayed publicly."
          >
            <b-form-input
              id="input-username"
              v-model="form.username"
              :state="usernameValidation"
              placeholder="Enter username"
              required
            ></b-form-input>
            <b-form-invalid-feedback :state="usernameValidation">
              Username must be between 0 and 32 characters.
            </b-form-invalid-feedback>
          </b-form-group>

          <!-- Password -->
          <b-form-group
            id="input-group-password"
            label="Password: "
            label-for="input-password"
            description="Use a secure password."
          >
            <b-form-input
              id="input-password"
              v-model="form.password"
              :state="passwordValidation"
              type="password"
              required
            ></b-form-input>
            <b-form-invalid-feedback :state="passwordValidation">
              Password must be between 0 and 255 characters.
            </b-form-invalid-feedback>
          </b-form-group>

          <!-- Confirm password. -->
          <b-form-group
            id="input-group-confirm"
            label="Confirm password: "
            label-for="input-confirm"
          >
            <b-form-input
              id="input-confirm"
              v-model="form.confirmPassword"
              :state="confirmPasswordValidation"
              type="password"
              required
            ></b-form-input>
            <b-form-invalid-feedback :state="confirmPasswordValidation">
              The passwords must match.
            </b-form-invalid-feedback>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
          <p v-if="formError" class="text-danger">{{ formError }}</p>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      form: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
      show: true,
      formError: "",
    };
  },
  head: {
    title: "Register New User",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "New user registration form.",
      },
    ],
  },
  methods: {
    onSubmit: function (event: Event) {
      event.preventDefault();
      const TAG = "\nonSubmit(), ";
      console.log(TAG + "Submitting.");

      // Reset error message and check for errors.
      this.formError = "";
      if (!this.emailValidation) {
        this.formError =
          "Invalid email. Email must be between 0 and 255 characters.";
      } else if (!this.usernameValidation) {
        this.formError =
          "Invalid username. Username must be between 0 and 32 characters.";
      } else if (!this.passwordValidation) {
        this.formError =
          "Password error. Password must be between 0 and 255 characters.";
      } else if (!this.confirmPasswordValidation) {
        this.formError = "Password error. The passwords must match.";
      }
    },
    onReset: function (event: Event) {
      const TAG = "\nonReset(), ";
      console.log(TAG + "Resetting.");
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.username = "";
      this.form.password = "";
      this.form.confirmPassword = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  computed: {
    emailValidation(): boolean {
      return (
        this.form.email.trim().length > 0 && this.form.email.trim().length < 255
      );
    },
    usernameValidation(): boolean {
      return (
        this.form.username.trim().length > 0 &&
        this.form.username.trim().length < 32
      );
    },
    passwordValidation(): boolean {
      return (
        this.form.password.trim().length > 0 &&
        this.form.password.trim().length < 255
      );
    },
    confirmPasswordValidation(): boolean {
      return this.form.confirmPassword === this.form.password;
    },
  },
});
</script>