<template>
  <div class="pt-20 pb-[87px] bg-[#f4f4fc]">
    <div class="mx-auto max-w-[1372px]">
      <div class="mb-11 ml-4">
        <h1 class="font-bold text-4xl italic md:text-4xl mb-2 text-black md:mb-2">
          Most happening events
        </h1>
        <span class="inline-block w-[50px] h-[2px] bg-[#00a651] mt-3"></span>
      </div>
    </div>
    <div>
      <!-- -->
      <Carousel :autoplay="2000" :wrap-around="true" :breakpoints="breakpoints">
        <Slide v-for="slide in faqBase" :key="slide" class="">
          <div class="mr-2">
            <img
              class="rounded-tl-md rounded-tr-md w-[350px] h-[500px]"
              :src="slide.img"
              alt=""
            />
          </div>
        </Slide>

        <template #addons>
          <Pagination class="mt-9" />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<style scoped></style>
<script>
import { defineComponent, ref } from "vue";
import event_picture1 from "../../assets/gallery/Ga;;ary Slider 1.png";
import event_picture2 from "../../assets/gallery/Untitled design (5).png";
import event_picture3 from "../../assets/gallery/Untitled design (7).png";
import event_picture4 from "../../assets/gallery/Untitled design (8).png";
import event_picture5 from "../../assets/gallery/Untitled design (9).png";
import event_picture6 from "../../assets/gallery/c7dc7075-c5a4-471b-a1ff-c40343ddd915.jpeg";
import event_picture7 from "../../assets/gallery/Untitled design (10).png";
import event_picture8 from "../../assets/gallery/Untitled design (11).png";

import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  setup() {
    const faqBase = ref([
      {
        img: event_picture1,
      },
      {
        img: event_picture2,
      },
      {
        img: event_picture3,
      },
      {
        img: event_picture4,
      },
      {
        img: event_picture5,
      },
      {
        img: event_picture6,
      },
      {
        img: event_picture7,
      },
      {
        img: event_picture8,
      },
    ]);
    return {
      faqBase,
    };
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
});
</script>
