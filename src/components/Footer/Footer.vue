<script>
import { defineComponent, ref } from "vue";
const information = ref(false);
const Qinformation = ref(false);
const Einformation = ref(false);
import Tin from "../Footer/Tin.vue";
import AboutUs from "../AboutUs/AboutUs.vue";
import ReturnRefundPolicy from "../ReturnRefundPolicy/ReturnRefundPolicy.vue";
import TermsCondition from "../TermsCondition/TermsCondition.vue";
export default defineComponent({
  setup() {
    return {
      information,
      Qinformation,
      Einformation,
      Tin,
    };
  },
});
</script>

<template>
  <div class="">
    <div class="md:h-auto">
      <img
        alt="Vue logo"
        class="w-[100%] h-auto mt-12 md:block"
        src="../../assets/images/payment/SSLCommerz-Pay-With-logo-All-Size-01.png"
        width="125"
        height="125"
      />
      <img
        alt="Vue logo"
        class="w-[100%] md:w-[70%] lg:w-[60%] 2xl:w-[50%] h-18 mx-auto"
        src="../../assets/images/Footer_img.png"
      />
    </div>
    <div class="bg-gray-100 md:h-[200px] sm:h-[460px] h-[500px]">
      <div
        class="flex md:flex-row flex-col lg:text-base md:text-[12px] items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-48 sm:pt-2 pt-4"
      >
        <div
          class="basis-1/5 md:basis-[33%] h-[200px] md:order-none flex flex-col items-center md:items-start"
        >
          <a href="https://www.octaglory.shop/" target="blank" class=""
            ><img
              src="../../assets/logo.png"
              alt=""
              class="sm:w-[180px] 2xl:w-[180px] lg:w-[160px] md:w-[180px] md:m-0 m-auto w-[200px]"
          /></a>

          <ul
            class="text-center xl:text-lg text-[14px] lg:text-sm md:text-left sm:text-center w-[60%] md:w-[80%] ml-3"
          >
            <li>
              <a class="font-semibold text-green-800" href="">
                <!-- <span class="text-xl lg:text-xl md:text-xs text-[#5aa453]"
                  >
                  <font-awesome-icon
                    icon="fa-solid fa-location-dot"
                    class="mr-2"
                  /> 
                  </span
                > -->
                OCTAGLORY, D/4, House- 78 Block- M Road- 11, Banani Model Town, Dhaka-
                1213
              </a>
            </li>
            <li>
              <a class="font-semibold text-green-800" href="">
                <!-- <span class="text-xl lg:text-xl md:text-xs text-[#5aa453]"
                  ><font-awesome-icon icon="fa-solid fa-phone" class="mr-2" /></span
                > -->

                09678221194, 01943400600</a
              >
            </li>
            <li>
              <a class="font-semibold text-green-800" href="">
                <!-- <span class="text-xl lg:text-xl md:text-xs text-[#5aa453]"
                  ><font-awesome-icon icon="fa-solid fa-envelope" class="mr-2" /></span
                > -->
                info.octaglory@gmail.com</a
              >
            </li>
          </ul>
        </div>
        <div class="md:basis-[67%] flex h-[200px] items-center md:flex-row flex-col">
          <div class="md:basis-[50%]">
            <div class="block sm:hidden">
              <div class="w-[270px]">
                <div
                  class="text-xl flex justify-between mt-4 sm:mt-0"
                  @click="information = !information"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-circle-chevron-down"
                    class="delay-150 animate-bounce text-green-500"
                  /><span class="font-bold text-[17px]">Information</span>
                  <font-awesome-icon
                    icon="fa-solid fa-circle-chevron-down"
                    class="delay-150 animate-bounce text-green-500"
                  />
                </div>
              </div>
            </div>
            <div class="basis-1/5 lg:basis-[50%] md:basis-[50%]">
              <Transition>
                <ul v-if="information" class="text-center text-[14px] md:text-left">
                  <li>
                    <RouterLink to="/about">
                      <a
                        class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                        href=""
                        ><font-awesome-icon
                          icon="fa-solid fa-angle-right"
                          class="font-bold hover:text-xl mr-1"
                        />
                        <span class="">About us</span>
                      </a>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/tin">
                      <a
                        class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                        href="../../assets/images/company_tin.jpeg"
                        ><font-awesome-icon
                          icon="fa-solid fa-angle-right"
                          class="font-bold hover:text-xl mr-1"
                        /><span class="">Company Doc</span>
                      </a>
                    </RouterLink>
                  </li>
                  <li>
                    <a
                      class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                      href="https://www.octaglory.shop/"
                      target="blank"
                      ><font-awesome-icon
                        icon="fa-solid fa-angle-right"
                        class="font-bold hover:text-xl mr-1"
                      /><span class="">Octaglory Shop</span>
                    </a>
                  </li>
                  <li>
                    <a
                      class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                      href="https://app.octaglory.com/login"
                      target="blank"
                      ><font-awesome-icon
                        icon="fa-solid fa-angle-right"
                        class="font-bold hover:text-xl mr-1"
                      /><span class="">Octaglory Erp</span>
                    </a>
                  </li>
                </ul>
              </Transition>
              <div class="md:flex md:flex-col items-center mt-5">
                <ul
                  class="text-center xl:text-lg lg:text-[1rem] md:text-sm md:text-left sm:block hidden"
                >
                  <li class="mb-1">
                    <RouterLink to="/about">
                      <a
                        class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                        href=""
                        ><font-awesome-icon
                          icon="fa-solid fa-angle-right"
                          class="font-bold hover:text-xl mr-1"
                        />
                        <span class="">About us</span>
                      </a>
                    </RouterLink>
                  </li>
                  <li class="mb-1">
                    <RouterLink to="/tin">
                      <a
                        href=""
                        class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                        ><font-awesome-icon
                          icon="fa-solid fa-angle-right"
                          class="font-bold hover:text-xl mr-1"
                        /><span class="">Company Doc</span>
                      </a>
                    </RouterLink>
                  </li>
                  <li class="mb-1">
                    <a
                      class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                      href="https://www.octaglory.shop/"
                      target="blank"
                      ><font-awesome-icon
                        icon="fa-solid fa-angle-right"
                        class="font-bold hover:text-xl mr-1"
                      /><span class="">Octaglory Shop</span>
                    </a>
                  </li>
                  <li class="">
                    <a
                      class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                      href="https://app.octaglory.com/login"
                      target="blank"
                      ><font-awesome-icon
                        icon="fa-solid fa-angle-right"
                        class="font-bold hover:text-xl mr-1"
                      /><span class="">Octaglory Erp</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="md:basis-[50%]">
            <div class="block sm:hidden">
              <div class="w-[270px] mt-1">
                <div
                  class="text-xl flex justify-between"
                  @click="Qinformation = !Qinformation"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-circle-chevron-down"
                    class="delay-150 animate-bounce text-green-500"
                  /><span class="font-bold text-[17px]">Quick Information</span>
                  <font-awesome-icon
                    icon="fa-solid fa-circle-chevron-down"
                    class="delay-150 animate-bounce text-green-500"
                  />
                </div>
              </div>
            </div>
            <div class="basis-1/5 lg:basis-[50%] md:basis-[50%]">
              <Transition>
                <ul v-if="Qinformation" class="text-center text-[14px] md:text-left">
                  <li>
                    <RouterLink to="/return-refund-policy">
                      <a
                        class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                        href=""
                        ><font-awesome-icon
                          icon="fa-solid fa-angle-right"
                          class="font-bold hover:text-xl mr-1"
                        /><span class="">Return, Cancellation & Refund</span>
                      </a>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/policy">
                      <a
                        class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                        href="https://www.octaglory.com/policy"
                        ><font-awesome-icon
                          icon="fa-solid fa-angle-right"
                          class="font-bold hover:text-xl mr-1"
                        /><span class="">Privacy Policy</span>
                      </a>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/terms-condition">
                      <a
                        class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                        href=""
                        ><font-awesome-icon
                          icon="fa-solid fa-angle-right"
                          class="font-bold hover:text-xl mr-1"
                        /><span class="">Terms & Conditions</span>
                      </a>
                    </RouterLink>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/octaglory.retail">
                      <font-awesome-icon
                        icon="fa-brands fa-facebook-f"
                        class="px-2 py-1 rounded-full text-white bg-green-800 xl:text-lg lg:text-[1rem] mr-2 font-semibold hover:bg-white hover:text-indigo-700 hover:scale-150 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/octaglory/mycompany/">
                      <font-awesome-icon
                        icon="fa-brands fa-linkedin-in"
                        class="px-1 py-1 rounded-full text-white bg-green-800 xl:text-lg lg:text-[1rem] mr-2 font-semibold hover:bg-white hover:text-indigo-700 hover:scale-150 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                      />
                    </a>
                    <a href="https://www.youtube.com/channel/UC-K2kHlZw3lNdALCbSZO5sw">
                      <font-awesome-icon
                        icon="fa-brands fa-youtube"
                        class="px-1 py-1 rounded-full text-white bg-green-800 hover:bg-white xl:text-lg lg:text-[1rem] mr-2 font-semibold hover:text-indigo-700 hover:scale-150 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                      />
                    </a>
                  </li>
                </ul>
              </Transition>
              <div class="md:flex md:flex-col items-center mt-5">
                <ul
                  class="text-center xl:text-lg lg:text-[1rem] md:text-sm md:text-left sm:block hidden"
                >
                  <li class="mb-1">
                    <RouterLink to="/return-refund-policy">
                      <a
                        class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                        href="https://www.octaglory.com/return-refund-policy"
                        ><font-awesome-icon
                          icon="fa-solid fa-angle-right"
                          class="font-bold hover:text-xl mr-1"
                        /><span class="">Return, Cancellation & Refund</span>
                      </a>
                    </RouterLink>
                  </li>
                  <li class="mb-1">
                    <RouterLink to="/policy">
                      <a
                        class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                        href=""
                        ><font-awesome-icon
                          icon="fa-solid fa-angle-right"
                          class="font-bold hover:text-xl mr-1"
                        /><span class="">Privacy Policy</span>
                      </a>
                    </RouterLink>
                  </li>
                  <li class="mb-1">
                    <RouterLink to="/terms-condition">
                      <a
                        class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                        href="https://www.octaglory.com/terms-condition"
                        ><font-awesome-icon
                          icon="fa-solid fa-angle-right"
                          class="font-bold hover:text-xl mr-1"
                        /><span class="">Terms & Conditions</span>
                      </a>
                    </RouterLink>
                  </li>
                  <li class="ml-4">
                    <a href="https://www.facebook.com/octaglory.retail">
                      <font-awesome-icon
                        icon="fa-brands fa-facebook-f"
                        class="px-2 py-1 rounded-full text-white bg-green-800 xl:text-lg lg:text-[1rem] mr-2 font-semibold hover:bg-white hover:text-indigo-700 hover:scale-150 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/octaglory/mycompany/">
                      <font-awesome-icon
                        icon="fa-brands fa-linkedin-in"
                        class="px-1 py-1 rounded-full text-white bg-green-800 xl:text-lg lg:text-[1rem] mr-2 font-semibold hover:bg-white hover:text-indigo-700 hover:scale-150 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                      />
                    </a>
                    <a href="https://www.youtube.com/channel/UC-K2kHlZw3lNdALCbSZO5sw">
                      <font-awesome-icon
                        icon="fa-brands fa-youtube"
                        class="px-1 py-1 rounded-full text-white bg-green-800 hover:bg-white xl:text-lg lg:text-[1rem] mr-2 font-semibold hover:text-indigo-700 hover:scale-150 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="sm:hidden block">
          <div class="w-[270px] mt-1">
            <div
              class="text-xl flex justify-between"
              @click="Einformation = !Einformation"
            >
              <font-awesome-icon
                icon="fa-solid fa-circle-chevron-down"
                class="delay-150 animate-bounce text-green-500"
              /><span class="font-bold">Event Information</span>
              <font-awesome-icon
                icon="fa-solid fa-circle-chevron-down"
                class="delay-150 animate-bounce text-green-500"
              />
            </div>
          </div>
        </div>
        <div class="basis-1/5 lg:basis-[25%] md:basis-[25%]">
          <Transition>
            <ul v-if="Einformation" class="text-center md:text-left">
              <li><Strong class="text-xl sm:block hidden">Event Information</Strong></li>
              <li>
                <a
                  class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                  href=""
                  ><font-awesome-icon
                    icon="fa-solid fa-angle-right"
                    class="font-bold hover:text-xl mr-1"
                  /><span class="">Event Organizer</span>
                </a>
              </li>
              <li>
                <a
                  class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                  href=""
                  ><font-awesome-icon
                    icon="fa-solid fa-angle-right"
                    class="font-bold hover:text-xl mr-1"
                  /><span class="">Event Link (Facebook Profile)</span>
                </a>
              </li>
              <li>
                <a
                  class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                  href=""
                  ><font-awesome-icon
                    icon="fa-solid fa-angle-right"
                    class="font-bold hover:text-xl mr-1"
                  /><span class="">Event Contact</span>
                </a>
              </li>
              <li></li>
            </ul>
          </Transition>
          <div class="md:flex md:flex-col items-center">
            <ul class="text-center md:text-left sm:block hidden">
              <li>
                <Strong class="text-xl md:text-sm lg:text-xl">Event Information</Strong>
              </li>
              <li>
                <a
                  class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                  href=""
                  ><font-awesome-icon
                    icon="fa-solid fa-angle-right"
                    class="font-bold hover:text-xl mr-1"
                  /><span class="">Event Organizer</span>
                </a>
              </li>
              <li>
                <a
                  class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                  href=""
                  ><font-awesome-icon
                    icon="fa-solid fa-angle-right"
                    class="font-bold hover:text-xl mr-1"
                  /><span class="">Event Link (Facebook Profile)</span>
                </a>
              </li>
              <li>
                <a
                  class="font-semibold text-green-800 hover:text-indigo-700 hover:scale-125 hover:ease-in-out hover:ml-1 duration-500 hover:delay-75 hover:transition hover:duration-700"
                  href=""
                  ><font-awesome-icon
                    icon="fa-solid fa-angle-right"
                    class="font-bold hover:text-xl mr-1"
                  /><span class="">Event Contact</span>
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div> -->
    </div>
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
