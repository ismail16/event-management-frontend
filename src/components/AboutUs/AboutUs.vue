<template>
  <Header></Header>
  <div>
    <div
      class="w-[100%] md:h-[300px] 2xl:px-32 xl:px-16 lg:px-16 h-[150px] m-auto bg-black z-10 text-white flex flex-col justify-center lg:items-start items-center"
    >
      <h2 class="text-white text-3xl mb-3">Octaglory</h2>
      <div
        class="flex items-center lg:justify-start justify-evenly lg:mt-4 w-[25%] md:w-[5%] lg:w-0"
      >
        <RouterLink to="/" class="cursor-pointer">
          <a href="" class="text-lime-600 font-bold">Home</a>
        </RouterLink>
        <font-awesome-icon
          icon="fa-solid fa-angle-right"
          class="font-bold text-white hover:text-xl mr-1"
        />

        <p>Octaglory</p>
      </div>
    </div>
    <!-- <div class="flex lg:flex-row flex-col 2xl:px-[5%] xl:px-[2%] lg:px-[0%] md:px-[8%]"> -->
    <div
      class="flex lg:flex-row flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-48"
    >
      <div
        class="basis-[60%] 2xl:px-14 md:py-20 lg:order-first order-last text-center md:text-left px-12"
      >
        <h3
          class="md:text-4xl text-2xl md:font-bold font-semibold text-black mb-6 font-sarif"
        >
          About Octaglory
        </h3>
        <p class="text-gray-700 md:px-0 px-10 text-justify">
          OCTAGLORY is a premium and omni-channel shopping destination in Bangladesh.
          Established in 2022, Octaglory offers products from different categories.
          Starting from camera, computer & computer accessories to latest smartphones,
          home appliances and consumer electronics products- Everything is available in
          octaglory with a competitive price.<span
            class="mt-2 inline-block text-gray-700 text-justify"
          >
            Octaglory believes in delivering authentic and quality products ensuring
            customer’s happiness. Superior customer service experience, efficient and well
            maintained delivery service and easy payment options are the main pillars of
            octaglory. We are offering wide range of products from different brands and
            suppliers.</span
          ><span class="mt-2 inline-block text-gray-700 text-justify">
            Our easy return, refund and replacement policy are ensuring customer
            convenience and satisfaction and easy payment process along with EMI facility
            through credit cards and without credit card we are empowering our customers
            to purchase their desired products.
          </span>
        </p>
      </div>

      <div
        class="basis-[40%] sm:flex lg:items-center items-start justify-evenly md:pb-20 pt-20"
      >
        <div class="flex lg:flex-row flex-col justify-evenly items-center">
          <div class="xl:mr-10 px-7 py-6">
            <div>
              <img :src="img" alt="price" class="m-auto" />
            </div>
            <div>
              <p class="font-bold text-2xl">
                Retailers <br /><span class="flex justify-center">50+</span>
              </p>
            </div>
          </div>
          <div class="px-7 py-6">
            <div>
              <img :src="img" alt="price" class="m-auto" />
            </div>
            <div>
              <p class="font-bold text-2xl">
                Ecommerce <br />
                <span class="flex justify-center"> 5+</span>
              </p>
            </div>
          </div>
        </div>
        <div class="px-7 py-6 sm:flex-none flex flex-col items-center">
          <div class="">
            <img :src="img" alt="price" class="m-auto" />
          </div>
          <div>
            <p class="font-bold text-2xl">
              Enterprise <br />
              <span class="flex justify-center"> 2+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import imgg from "../../assets/images/AboutUs.png";
import Header from "../Header/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    let img = imgg;
    return {
      img,
    };
  },
});
</script>

<style></style>
