<template>
  <Header></Header>
  <div class="font-serif">
    <div
      class="w-[100%] md:h-[300px] 2xl:px-44 xl:px-16 lg:px-16 h-[150px] m-auto bg-black z-10 text-white flex flex-col justify-center md:justify-center lg:items-start items-center"
    >
      <h2 class="text-white text-3xl mb-3">FAQ</h2>
      <div
        class="flex items-center xl:justify-start lg:justify-start justify-evenly lg:mt-4 sm:w-[25%] w-[30%] md:w-[20%] xl:w-full"
      >
        <RouterLink to="/" class="cursor-pointer">
          <a href="" class="text-lime-600 font-bold">Home</a>
        </RouterLink>
        <font-awesome-icon
          icon="fa-solid fa-angle-right"
          class="font-bold text-white hover:text-xl mr-1"
        />

        <p>FAQ</p>
      </div>
    </div>

    <div class="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-48">
      <div
        class="basis-[100%] 2xl:px-28 md:pb-20 md:pt-12 lg:order-first order-last text-left lg:px-16 md:px-0 px-16 pt-10"
      >
        <h3
          class="md:text-4xl text-2xl md:font-bold font-semibold text-black mb-6 font-sarif"
        >
          FAQ
        </h3>
        <div
          class="mt-3 border border-[#00a651] shadow-border-lime-500 rounded-xl my-3 md:w-[95%] w-[90%] px-3 py-4 mb-12"
        >
          <div class="" v-for="(faq, i) in faqBase" :key="i">
            <div class="open_faq text-slate-700" @click="closeAllFaq(faq)">
              <h3 class="mb-3 text-lg text-bold hover:text-[#00a651]">
                {{ faq.q }}
                <span class="material-symbols-outlined"> keyboard_arrow_down </span>
              </h3>
              <p class="invisible text-[#00a651]" :class="faq.open ? 'visible' : ''">
                {{ faq.a }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import Header from "../Header/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    let openfaq = ref(false);
    const faqBase = ref([
      {
        q: "What is an Event?",
        a: `An event can be described as a public assembly for the purpose of celebration,
          education, marketing or reunion. Events can be classified on the basis of their
          size, type and context.`,
        open: false,
      },
      {
        q: "What are the different types of event?",
        a: `Here are the 10 most common types of business events: 1. Trade Show 2.
          Conferences 3. Incentive Trips 4. Holiday Parties 5. Appreciation Events 6.
          Charity Events 7. Board Meetings 8. Product Launches`,
        open: false,
      },
    ]);
    const closeAllFaq = (item) => {
      if (!item.open) {
        faqBase.value.forEach((el) => (el.open = false));
      }
      item.open = !item.open;
    };
    return {
      faqBase,
      openfaq,
      closeAllFaq,
    };
  },
});
</script>
<style scoped>
.invisible {
  visibility: hidden;
  opacity: 0;
  height: 0;
  transition: opacity 0.3s, height 0.3s, visibility 0.3s;
}
.visible {
  visibility: visible;
  height: auto;
  opacity: 1;
  padding: 10px 20px;
}

.open_faq {
  cursor: pointer;
}
.rotate {
  transform: rotate(45sec);
}
.fa-plus {
  transition: transform 0.3s;
}

.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
.background::before {
  color: black;
}
</style>
