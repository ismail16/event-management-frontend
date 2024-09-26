<script>
import { defineComponent, ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import Header from "../Header/Header.vue";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export default defineComponent({
  data() {
    return {
      id: "",
    };
  },

  setup() {
    const user_base_url = import.meta.env.VITE_PROJECT_API_SERVER;
    let Phone = ref("");
    const route = useRoute();
    const d = dayjs();
    let ToDay = ref("");
    let time = ref("");
    let ToDate = ref("");
    let ToTime = ref("");
    ToDay.value = new Date().toJSON();
    const state = reactive({
      event: [],
    });
    let id = route.params.id;
    id = id;
    ///api get
    const load_data = () => {
      axios.get(`${user_base_url}/api/event/` + id).then((res) => {
        state.event = res.data.data;
        time.value = state.event.event_start_date;
        ToDate.value = dayjs(time.value).format("D-MMM-ddd,YYYY");
        ToTime.value = dayjs(time.value).format("h:mmA");
      });
    };

    const event_name = reactive({
      name: state.event.name,
    });

    load_data();
    return {
      d,
      ToDate,
      ToTime,
      time,
      Phone,
      id,
      event_name,
      load_data,
      ToDay,
      state,
    };
  },
  name: "Basic",
  components: {
    Header,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<template>
  <Header></Header>
  <div class="h-full 2xl:pb-20 md:pb-0 pb-4">
    <div
      v-for="(img, i) in state.event.images"
      :key="i"
      class="h-auto md:w-[100%] md:h-auto pb-3"
    >
      <img
        v-if="img?.name == 'desktop_image'"
        :src="img?.url"
        class="w-[768px] h-[540px] md:w-[1920px] md:h-[490px] bg-fixed rounded-4xl mx-auto hidden md:block"
        alt=""
      />
      <img
        v-if="img?.name == 'mobile_image'"
        :src="img?.url"
        class="md:hidden block w-[768px] h-[540px]bg-fixed rounded-4xl mx-auto"
        alt=""
      />
    </div>
    <div class="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-48">
      <div class="flex md:flex-row flex-col-reverse">
        <div class="md:w-1/2 md:flex flex-col justify-start px-6">
          <!-- <Carousel>
            <Slide
              v-for="(image, i) in state.event.images"
              :key="i"
              style="width: 100% !important"
            >
              <div class="w-[100%]">
                <img
                  class="sm:h-[400px] sm:w-[851px] w-[552px] h-[150px]"
                  :src="image?.url"
                  alt=""
                />
              </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel> -->
          <div v-for="(img, i) in state.event.images" :key="i" class="w-[100%]">
            <img
              v-if="img.name == 'host_image'"
              class="sm:h-[400px] md:w-[400px] sm:w-[600px] w-[552px] h-[250px]"
              :src="img.url"
              alt="slider"
            />
          </div>
        </div>
        <div
          class="bg-lime-100 md:w-1/2 w-[95%] md:mr-[15px] md:mt-0 m-auto rounded-lg mb-5 mr-4 shadow-lg font-semibold text-white shadow-lime-200"
        >
          <div class="flex flex-col md:items-start items-center">
            <ul class="px-6 lg:py-12 lg:pt-2 lg:pb-2 pb-6 text-lime-700">
              <li class="mt-2">
                <font-awesome-icon icon="fa-solid fa-hand-point-right" />
                <span class="text-black ml-2">{{ state.event.name }}</span>
              </li>
              <li class="mt-2">
                <font-awesome-icon
                  icon="fa-solid fa-calendar-days"
                  class="font-bold hover:text-xl mr-1"
                />
                <span class="text-black ml-2">{{ ToDate }}</span>
              </li>
              <li class="mt-2">
                <font-awesome-icon icon="fa-solid fa-clock" />
                <span class="text-black ml-2">{{ ToTime }}</span>
              </li>
              <li class="mt-2">
                <a :href="state.event?.map_url">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  <span class="text-black ml-2">{{ state.event.venue }}</span>
                </a>
              </li>
              <li class="mt-2">
                <font-awesome-icon icon="fa-solid fa-landmark" />
                <span class="text-black ml-2">{{ state.event.organization }}</span>
              </li>
              <li class="mt-2">
                <font-awesome-icon icon="fa-solid fa-phone" />
                <span class="text-black ml-2">{{ state.event.phone }}</span>
              </li>
              <li class="mt-2">
                <font-awesome-icon icon="fa-solid fa-envelope" />
                <span class="text-black ml-2">{{ state.event.email }}</span>
              </li>
            </ul>
          </div>

          <div
            v-if="
              state.event?.is_registration_allowed === true &&
              state?.event.is_published === true &&
              state.event.reg_end_date >= ToDay
            "
            class="md:ml-6 text-center mb-3"
          >
            <RouterLink :to="{ name: 'register', params: { id: id } }">
              <button
                id="show-modal"
                ref="router_id"
                class="bg-violet-700 hover:bg-violet-500 text-white font-bold py-2 md:py-4 px-6 rounded"
              >
                REGISTER NOW
              </button>
            </RouterLink>
          </div>

          <div class="text-green-600 flex justify-end">
            <a
              v-if="state.event?.social_url != ''"
              :href="state.event?.social_url"
              class="tooltip p-2"
            >
              <font-awesome-icon icon="fa-brands fa-facebook" class="text-3xl" />
              <span class="tooltiptext">Follow On</span>
            </a>
            <a
              v-if="state.event?.faq_url != ''"
              :href="state.event?.faq_url"
              class="tooltip p-2"
            >
              <font-awesome-icon icon="fa-regular fa-circle-question" class="text-3xl" />
              <span class="tooltiptext">Terms & Conditions</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.398);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
