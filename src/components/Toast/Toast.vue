<template>
  <div class="">
    <div
      class="text-red-800 font-bold bg-red-100 rounded-3xl shadow-lg shadow-red-200 p-5"
    >
      <ul v-for="(error, i) in errors" :key="i">
        <li>{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    errors: Array,
  },
});
</script>

<style>
/* .toast-wrapper {
  position: right;
  width: 100%;
  top: 20px;
  z-index: 0;
}
.toast {
  padding: 20px;
  color: white;
  background: #ff0062;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  
} */
</style>
