<template>
  <Header></Header>
  <div>
    <img
      src="../../assets/images/company_tin.jpeg"
      class="w-[70%] h-[auto] m-auto"
      alt="tin"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Header from "../Header/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
  setup() {},
});
</script>
