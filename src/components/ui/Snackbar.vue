<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div name="snackbars">
    <v-snackbar v-model="show" :color="color" :timeout="timeout">
      {{ message }}
      <template v-if="button" v-slot:action="{ attrs }">
        <v-btn
          :color="button.color"
          text
          v-bind="attrs"
          @click="button.callback"
          aria-label="Snackbar Action Button"
        >
          {{ button.text }}
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { useSnackbarStore } from "@/store/snackbar";
export default {
  setup() {
    const snackbarStore = useSnackbarStore();
    return { snackbarStore };
  },
  created() {
    this.snackbarStore.$onAction(({ name, after }) => {
      // eslint-disable-next-line no-unused-vars
      after((result) => {
        if (name === "showSnackbar") {
          this.message = this.snackbarStore.snackbar.message;
          this.color = this.snackbarStore.snackbar.color;
          this.timeout = this.snackbarStore.snackbar.timeout;
          this.show = true;
        }
      });
    });
  },
  data() {
    return {
      show: true,
      color: "",
      message: "",
      timeout: null,
      button: null,
    };
  },
};
</script>
