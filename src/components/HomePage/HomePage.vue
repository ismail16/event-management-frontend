<template>
  <Header></Header>
  <div class="h-full 2xl:pb-20 md:pb-0 pb-20">
    <div class="h-auto w-full relative">
      <img
        src="../../assets/images/COMINGSOONDESKTOP.png"
        class="md:w-[1920px] w-[768px] h-[540px] md:h-[850px] px-0 rounded-4xl mx-auto"
        alt=""
      />

      <div class="absolute inset-0 bg-black opacity-[65%]"></div>
      <div class="absolute inset-0 w-full flex flex-col items-center justify-center">
        <HeroContent></HeroContent>
        <div class="2xl:w-[60%] xl:w-[70%] md:w-[90%] w-[100%] mx-auto mt-12">
          <form
            @submit.prevent="submit"
            class="items-center flex md:flex-row flex-col justify-around w-[100%]"
          >
            <div
              class="p-2 text-sm md:basis-[40%] w-[90%] md:w[40%] flex bg-white sm:justify-start justify-center items-center placeholder-black md:mb-0 mb-3 focus:placeholder-slate-400 font-medium bg-transparent rounded-lg sm:rounded-tl-lg sm:rounded-bl-lg md:rounded-tr-none md:rounded-br-none border-l border-white focus:outline-none focus:ring-white"
            >
              <span class="material-symbols-outlined bg-white rotate-90 text-[#00a651]">
                search
              </span>
              <input
                v-model="eventName"
                type="text"
                id="simple-search"
                class="border-none focus:outline-none focus:ring-0"
                placeholder="Enter name..."
              />
            </div>
            <div
              class="p-2 text-sm md:basis-[40%] w-[90%] md:w[40%] flex bg-white sm:justify-start justify-center items-center placeholder-black md:mb-0 mb-3 focus:placeholder-slate-400 font-medium rounded-lg md:rounded-none border-l-2 focus:ring-4 focus:outline-none focus:ring-white"
            >
              <span class="material-symbols-outlined text-[#00a651]"> location_on </span>
              <input
                v-model="eventVenu"
                type="text"
                id="simple-search"
                class="border-none focus:outline-none focus:ring-0"
                placeholder="Address"
              />
            </div>
            <div
              class="px-2 sm:py-[.85rem] w-[90%] rounded-lg md:rounded-tr-lg md:rounded-br-lg md:rounded-none font-medium text-white basis-[20%] bg-[#00a651] py-3 flex text-xl justify-center hover:bg-amber-300 hover:text-[#00a651] focus:ring-4 focus:outline-none focus:ring-amber-200"
            >
              <button @click="search" type="submit" class="">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Category></Category>
    <div class="">
      <div class="pt-20 pb-[87px] bg-[#f4f4fc]">
        <div class="max-w-[1372px] mx-auto">
          <div class="mb-11 ml-4">
            <h1 class="font-bold text-4xl italic md:text-4xl mb-2 text-black md:mb-2">
              Upcoming
              <span class="text-black">E</span><span class="text-black">vents</span>
            </h1>
            <span class="inline-block w-[50px] h-[2px] bg-[#00a651] mt-3"></span>
          </div>
          <Carousel
            v-if="show == ''"
            class="w-[100%]"
            :settings="settings"
            :breakpoints="breakpoints"
            v-model="currentSlide"
            :transition="500"
            :wrap-around="false"
          >
            <Slide class="" v-for="(slid, i) in ongoingEvent" :key="i">
              <div
                v-if="
                  slid.is_published === true &&
                  slid.is_registration_allowed === true &&
                  slid.reg_end_date >= ToDay
                "
                class="h-[500px] w-[360px] border border-[#eae9f3] rounded-bl-md rounded-br-md border-t-0 bg-white mx-4"
              >
                <img
                  v-bind:src="slid?.images[0]?.url"
                  class="w-[360px] h-[250px] rounded-tl-md rounded-tr-md mx-auto"
                  alt="img"
                />
                <div class="text-left pt-5 px-8 pb-8 bg-white">
                  <h2 class="font-semibold mb-6 text-xl sm:text-xl">{{ slid.name }}</h2>
                  <div class="mb-6">
                    <div class="">
                      <div class="mb-1">
                        <span
                          class="material-symbols-outlined text-lg text-[#ccc] font-semibold mr-2"
                        >
                          schedule
                        </span>
                        <div
                          class="text-left sm:text-xl text-[15px] text-[#666] inline-block"
                        >
                          <span>{{ slid?.event_start_date?.slice(0, 10) }}</span>
                          <span class="ml-1"
                            >,{{ slid?.event_start_date?.slice(11, 22) }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-start">
                      <span
                        class="material-symbols-outlined text-xl text-[#ccc] font-semibold mr-2"
                      >
                        location_on
                      </span>
                      <a
                        :href="slid?.map_url"
                        target="_blank"
                        class="text-left sm:text-xl text-[15px] text-[#666] inline-block"
                      >
                        <span class="">
                          {{ slid?.venue }}
                        </span></a
                      >
                    </div>
                  </div>
                  <div class="flex justify-start items-center mt-6 mb-3">
                    <RouterLink :to="{ name: 'event', params: { id: slid?.id } }">
                      <button
                        class="hover:bg-[#00a651] hover:text-white hover:border-2 hover:border-[#00a651] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold rounded-sm border-2 border-[#ccc] text-base text-black pb-[2px] pt-[3px] pl-[17px] pr-[18px]"
                      >
                        Buy Now
                      </button></RouterLink
                    >
                  </div>
                </div>
              </div>
            </Slide>
            <!-- </div> -->
            <template #addons>
              <Pagination class="px-3" />
            </template>
          </Carousel>

          <Carousel
            v-if="show != ''"
            class="w-[100%]"
            :settings="settings"
            :breakpoints="breakpoints"
            v-model="currentSlide"
            :transition="500"
            :wrap-around="false"
          >
            <Slide class="" v-for="(slid, i) in ongoing_value" :key="i">
              <div
                v-if="
                  slid.is_published === true &&
                  slid.is_registration_allowed === true &&
                  slid.reg_end_date >= ToDay
                "
                class="h-[500px] w-[360px] border border-[#eae9f3] rounded-bl-md rounded-br-md border-t-0 bg-white mx-4"
              >
                <div v-for="(img, i) in slid?.images" :key="i">
                  <img
                    v-if="i === 0"
                    v-bind:src="img.url"
                    class="w-[360px] h-[250px] rounded-tl-md rounded-tr-md mx-auto"
                    alt="img"
                  />
                </div>
                <div class="text-left pt-5 px-8 pb-8 bg-white">
                  <h2 class="font-semibold mb-6 text-xl sm:text-xl">{{ slid.name }}</h2>
                  <div class="mb-6">
                    <div class="">
                      <div class="mb-1">
                        <span
                          class="material-symbols-outlined text-lg text-[#ccc] font-semibold mr-2"
                        >
                          schedule
                        </span>
                        <div
                          class="text-left sm:text-xl text-[15px] text-[#666] inline-block"
                        >
                          <span>{{ slid?.event_start_date?.slice(0, 10) }}</span>
                          <span class="ml-1"
                            >,{{ slid?.event_start_date?.slice(11, 22) }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-start">
                      <span
                        class="material-symbols-outlined text-xl text-[#ccc] font-semibold mr-2"
                      >
                        location_on
                      </span>
                      <a
                        :href="slid?.map_url"
                        target="_blank"
                        class="text-left sm:text-xl text-[15px] text-[#666] inline-block"
                      >
                        <span class="">
                          {{ slid?.venue }}
                        </span></a
                      >
                    </div>
                  </div>
                  <div class="flex justify-start items-center mt-6 mb-3">
                    <RouterLink :to="{ name: 'event', params: { id: slid?.id } }">
                      <button
                        class="hover:bg-[#00a651] hover:text-white hover:border-2 hover:border-[#00a651] font-semibold ease-in-out delay-150 rounded-sm border-2 border-[#ccc] text-base text-black pb-[2px] pt-[3px] pl-[17px] pr-[18px]"
                      >
                        Buy Now
                      </button></RouterLink
                    >
                  </div>
                </div>
              </div>
            </Slide>
            <!-- </div> -->
            <template #addons>
              <Pagination class="px-3" />
            </template>
          </Carousel>
        </div>
      </div>
      <Work></Work>
      <Gallery></Gallery>

      <div class="pt-20 pb-[87px] bg-white">
        <div class="max-w-[1372px] mx-auto">
          <div class="mb-11 ml-4">
            <h1 class="font-bold text-4xl italic md:text-4xl mb-2 text-black md:mb-2">
              Latest
              <span class="text-black">E</span><span class="text-black">vents</span>
            </h1>
            <span class="inline-block w-[50px] h-[2px] bg-[#00a651] mt-3"></span>
          </div>
          <Carousel
            v-if="show == ''"
            class="w-[100%]"
            :settings="settings"
            :breakpoints="breakpoints"
            v-model="currentSlide"
            :transition="500"
            :wrap-around="false"
            :autoplay="3000"
          >
            <!-- <div v-for="t in time" :key="t"> -->
            <Slide class="" v-for="(slid, i) in endedEvent" :key="i">
              <div
                v-if="slid.event_end_date < ToDay"
                class="h-[500px] w-[360px] border border-[#eae9f3] rounded-bl-md rounded-br-md border-t-0 bg-white mx-4"
              >
                <img
                  v-bind:src="slid?.images[0]?.url"
                  class="w-[360px] h-[250px] rounded-tl-md rounded-tr-md mx-auto"
                  alt="img"
                />
                <div class="text-left pt-5 px-8 pb-8 bg-white">
                  <h2 class="font-semibold mb-6 text-xl sm:text-xl">{{ slid.name }}</h2>
                  <div class="mb-6">
                    <div class="">
                      <div class="mb-1">
                        <span
                          class="material-symbols-outlined text-lg text-[#ccc] font-semibold mr-2"
                        >
                          schedule
                        </span>
                        <div
                          class="text-left sm:text-xl text-[15px] text-[#666] inline-block"
                        >
                          <span>{{ slid?.event_start_date?.slice(0, 10) }}</span>
                          <span class="ml-1"
                            >, {{ slid?.event_start_date?.slice(11, 22) }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-start">
                      <span
                        class="material-symbols-outlined text-xl text-[#ccc] font-semibold mr-2"
                      >
                        location_on
                      </span>
                      <a
                        :href="slid?.map_url"
                        target="_blank"
                        class="text-left sm:text-xl text-[15px] text-[#666] inline-block"
                      >
                        <span class="">
                          {{ slid?.venue }}
                        </span></a
                      >
                    </div>
                  </div>
                  <div class="flex justify-start items-center mt-6 mb-3">
                    <RouterLink :to="{ name: 'event', params: { id: slid?.id } }">
                      <button
                        class="hover:bg-[#00a651] hover:text-white hover:border-2 hover:border-[#00a651] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold rounded-sm border-2 border-[#ccc] text-base text-black pb-[2px] pt-[3px] pl-[17px] pr-[18px]"
                      >
                        See More
                      </button></RouterLink
                    >
                  </div>
                </div>
              </div>
            </Slide>
            <!-- </div> -->
            <template #addons>
              <Pagination class="px-3" />
            </template>
          </Carousel>
          <Carousel
            v-if="show != ''"
            class="w-[100%]"
            :settings="settings"
            :breakpoints="breakpoints"
            v-model="currentSlide"
            :transition="500"
            :wrap-around="false"
          >
            <Slide class="" v-for="(slid, i) in ended_value" :key="i">
              <div
                v-if="slid.event_end_date < ToDay"
                class="h-[500px] w-[360px] border border-[#eae9f3] rounded-bl-md rounded-br-md border-t-0 bg-white mx-4"
              >
                <div v-for="(img, i) in slid?.images" :key="i">
                  <img
                    v-if="i === 0"
                    v-bind:src="img.url"
                    class="w-[360px] h-[250px] rounded-tl-md rounded-tr-md mx-auto"
                    alt="img"
                  />
                </div>
                <div class="text-left pt-5 px-8 pb-8 bg-white">
                  <h2 class="font-semibold mb-6 text-xl sm:text-xl">{{ slid.name }}</h2>
                  <div class="mb-6">
                    <div class="">
                      <div class="mb-1">
                        <span
                          class="material-symbols-outlined text-lg text-[#ccc] font-semibold mr-2"
                        >
                          schedule
                        </span>
                        <div
                          class="text-left sm:text-xl text-[15px] text-[#666] inline-block"
                        >
                          <span>{{ slid?.event_start_date?.slice(0, 10) }}</span>
                          <span class="ml-1"
                            >, {{ slid?.event_start_date?.slice(11, 22) }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-start">
                      <span
                        class="material-symbols-outlined text-xl text-[#ccc] font-semibold mr-2"
                      >
                        location_on
                      </span>
                      <a
                        :href="slid?.map_url"
                        target="_blank"
                        class="text-left sm:text-xl text-[15px] text-[#666] inline-block"
                      >
                        <span class="">
                          {{ slid?.venue }}
                        </span></a
                      >
                    </div>
                  </div>
                  <div class="flex justify-start items-center mt-6 mb-3">
                    <RouterLink :to="{ name: 'event', params: { id: slid?.id } }">
                      <button
                        class="hover:bg-[#00a651] hover:text-white hover:border-2 hover:border-[#00a651] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold rounded-sm border-2 border-[#ccc] text-base text-black pb-[2px] pt-[3px] pl-[17px] pr-[18px]"
                      >
                        See More
                      </button></RouterLink
                    >
                  </div>
                </div>
              </div>
            </Slide>
            <!-- </div> -->
            <template #addons>
              <Pagination class="px-3" />
            </template>
          </Carousel>
        </div>
      </div>
      <!-- <Banner></Banner> -->
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted, computed } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import imgg from "../../assets/images/COMINGSOONDESKTOP.png";
import axios from "axios";
import useEventsStore from "../../store/events";
import { useRouter } from "vue-router";
import Header from "../Header/Header.vue";
import Work from "../Work/Work.vue";
import Category from "../Category/Category.vue";
import Gallery from "../Gallery/Gallery.vue";
import Faq from "../Faq/Faq.vue";
import Banner from "../Banner/banner.vue";

import "vue3-carousel/dist/carousel.css";
import HeroContent from "../HeroContent/HeroContent.vue";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Header,
    HeroContent,
    Category,
    Work,
    Gallery,
    Faq,
    Banner,
  },
  setup() {
    const user_base_url = import.meta.env.VITE_PROJECT_API_SERVER;
    const eventStore = useEventsStore();
    const router = useRouter();
    const router_id = ref("");
    let show = ref("");
    let eventName = ref("");
    let eventVenu = ref("");
    let query = ref("");
    let ongoing_value = ref("");
    let upcoming_value = ref("");
    let ended_value = ref("");
    let date_formate = ref("");
    let ToDay = ref("");
    let time = [];

    const ongoingEvent = computed((_) => eventStore.events.events_ongoing);
    const upcomingEvent = computed((_) => eventStore.events.events_upcoming);
    const endedEvent = computed((_) => eventStore.events.events_ended);
    ToDay.value = new Date().toJSON();

    const slids = ref([
      {
        name: "FAUJIAN FAMILY DAY OUT",
        date: "01-01-2028",
        time: "09.00 am",
        address: "Faujdarhat Cadet College",
        img: imgg,
      },
    ]);

    const submit = (e) => {
      e.preventDefault();
      show.value = "show";
      axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      query.value = eventName.value || eventVenu.value;

      axios
        .get(`${user_base_url}/api/events?filter=upcoming&q=${query.value}`)
        .then((response) => {
          show.value = "show";
          upcoming_value.value = response.data.data;
          const purchase = JSON.parse(JSON.stringify(response.data.data));
          for (let data in Object.keys(purchase)) {
            let value = purchase[data];
            router_id.value = value.id;
          }
          eventName.value = "";
          eventVenu.value = "";
        })
        .catch((error) => {});
      axios
        .get(`${user_base_url}/api/events?filter=ended&q=${query.value}`)
        .then((response) => {
          show.value = "show";
          ended_value.value = response.data.data;
          const purchase = JSON.parse(JSON.stringify(response.data.data));
          for (let data in Object.keys(purchase)) {
            value = purchase[data];
            router_id.value = value.id;
          }
          eventName.value = "";
          eventVenu.value = "";
        })
        .catch((error) => {});
      axios
        .get(`${user_base_url}/api/events?filter=ongoing&q=${query.value}`)
        .then((response) => {
          show.value = "show";
          ongoing_value.value = response.data.data;
          const purchase = JSON.parse(JSON.stringify(response.data.data));
          for (let data in Object.keys(purchase)) {
            let value = purchase[data];
            router_id.value = value.id;
          }
          eventName.value = "";
          eventVenu.value = "";
        })
        .catch((error) => {});
    };
    const btn = (e) => {
      router.push({ name: "event", params: { id: router_id.value } });
    };
    return {
      btn,
      router_id,
      show,
      upcoming_value,
      ended_value,
      ongoing_value,
      submit,
      eventName,
      eventVenu,
      query,
      time,
      date_formate,
      ToDay,
      slids,
      upcomingEvent,
      ongoingEvent,
      endedEvent,
    };
  },

  name: "WrapAround",
  name: "Autoplay",
  name: "breakpoints",
  data: () => ({
    currentSlide: 0,
    methods: {
      slideTo(val) {
        this.currentSlide = val;
      },
    },
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "start",
    },
    // breakpoints are mobile first
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: "start",
      },
      // 1024 and up
      1024: {
        itemsToShow: 2,
        snapAlign: "start",
      },
      1280: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    },
  }),
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
