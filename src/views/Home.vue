<script>
import { defineComponent, ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import Modal from "./Modal.vue";
// import { format } from "date-fns";
// import VueCookies from "vue-cookies";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      id: "",
    };
  },
  setup() {
    const user_base_url = import.meta.env.VITE_PROJECT_API_SERVER;
    const modal = ref();
    let Phone = ref("");
    console.log(Phone.value);
    const showModal = ref(false);
    let code = ref("");
    const val = ref("");
    const route = useRoute();
    const router_id = ref("");
    router_id.value = route.params.id;

    const state = reactive({
      event: [],
    });
    let id = route.params.id;
    id = id;
    console.log(id);
    ///api get
    const load_data = () => {
      axios.get(`${user_base_url}/api/event/` + id).then((res) => {
        state.event = res.data.data;

        console.log(state.event);
      });
    };
    const event_name = reactive({
      name: state.event.name,
    });
    const modal_view = () => {
      showModal.value = true;
      $cookies.set("eventId", id, 60 * 60 * 24);
      code.value = localStorage.getItem("code");
      console.log(code.value);
      if (code.value == 404) {
        val.value = true;
        console.log(val.value);
      }
    };
    load_data();
    return {
      modal,
      router_id,
      code,
      modal_view,
      Phone,
      showModal,
      id,
      event_name,
      load_data,
      state,
      val,
    };
  },
  name: "Basic",
  components: {
    Modal,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<template>
  <div class="h-full 2xl:pb-20 md:pb-0 pb-20">
    <div class="h-auto md:w-[100%] md:h-auto pb-3">
      <img
        v-if="state.event.images?.length"
        :src="state.event.images[0]?.url"
        class="md:w-[1920px] w-[768px] h-[540px] md:h-[490px] bg-fixed rounded-4xl mx-auto"
        alt=""
      />
    </div>
    <div class="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-48">
      <div class="flex md:flex-row flex-col-reverse">
        <div class="md:w-1/2 md:flex flex-col justify-start px-6">
          <Carousel>
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
          </Carousel>
        </div>
        <div
          class="bg-lime-100 md:w-1/2 w-[95%] md:mr-[15px] md:mt-0 m-auto rounded-lg mb-5 mr-4 shadow-lg font-semibold text-white shadow-lime-200"
        >
          <div class="flex flex-col md:items-start items-center">
            <ul class="px-6 lg:py-12 lg:pt-2 pt-12 lg:pb-2 pb-6 text-lime-700">
              <li class="mt-2">
                <font-awesome-icon icon="fa-solid fa-hand-point-right" />
                <span class="text-black ml-2">{{ state.event.name }} </span>
              </li>
              <li class="mt-2">
                <font-awesome-icon
                  icon="fa-solid fa-calendar-days"
                  class="font-bold hover:text-xl mr-1"
                />
                <span class="text-black ml-2">{{
                  state.event?.event_start_date?.slice(0, 10)
                }}</span>
              </li>
              <li class="mt-2">
                <font-awesome-icon icon="fa-solid fa-clock" />
                <span class="text-black ml-2">{{
                  state.event?.event_start_date?.slice(14, 19)
                }}</span>
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
              <li class="mt-2">
                <a :href="state.event?.social_url" class="tooltip p-2">
                  <font-awesome-icon icon="fa-brands fa-facebook" class="text-3xl" />
                  <span class="tooltiptext">Follow On</span>
                </a>
                <a :href="state.event?.faq_url" class="tooltip">
                  <font-awesome-icon
                    icon="fa-regular fa-circle-question"
                    class="text-3xl"
                  />
                  <span class="tooltiptext">Terms & Conditions</span>
                </a>
              </li>
            </ul>
            <div class="text-black">{{ today }}</div>
            <div class="text-black">{{ event_end_date }}</div>
            <div
              v-if="
                state.event?.is_registration_allowed === true &&
                state.event.is_published === true
              "
              class="flex sm:justify-start justify-center md:items-start items-center md:ml-6 xl:mt-6 mb-3"
            >
              <RouterLink
                v-if="val === true"
                @close="showModal = false"
                :to="{ name: 'register', params: { id: id } }"
              >
              </RouterLink>
              <button
                id="show-modal"
                ref="router_id"
                @click="modal_view"
                class="bg-violet-700 hover:bg-violet-500 text-white font-bold py-2 md:py-4 px-6 rounded"
              >
                REGISTER NOW
              </button>
              <Teleport to="body">
                <modal :show="showModal" @close="showModal = false" :id="id" ref="modal">
                  <template #header>
                    <h3>custom header</h3>
                  </template>
                </modal>
              </Teleport>
            </div>
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
