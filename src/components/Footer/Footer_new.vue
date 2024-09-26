<template>
  <Payment></Payment>
  <div class="pt-[90px] pb-[70px] px-2 bg-[#343353]">
    <div
      class="max-w-[1190px] mx-auto flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap"
    >
      <div class="lg:basis-1/4 md:basis-1/2 py-3 pl-3 pr-[60px]">
        <div class="text-left mb-6">
          <a href="https://www.octaglory.shop/" target="blank" class="">
            <img src="../../assets/logo-white.png" alt="" class="w-[200px] md:w-[170px]"
          /></a>
        </div>
        <div>
          <p class="mb-8">
            <span class="md:texe-base text-lg hover:text-white text-[#cccccc]">
              Seamless event ticketing solutions converge with unmatched convenience and
              innovation
            </span>
          </p>
        </div>
        <div class="pt-3 text-left">
          <ul class="">
            <li class="md:ml-4">
              <a href="https://www.facebook.com/octaglory.retail">
                <font-awesome-icon
                  icon="fa-brands fa-facebook-f"
                  class="text-white text-base h-[25px] w-[25px] mx-2"
                />
              </a>
              <a href="https://www.linkedin.com/company/octaglory/mycompany/">
                <font-awesome-icon
                  icon="fa-brands fa-linkedin-in"
                  class="text-white text-base h-[25px] w-[25px] mx-2"
                />
              </a>
              <a href="https://www.youtube.com/channel/UC-K2kHlZw3lNdALCbSZO5sw">
                <font-awesome-icon
                  icon="fa-brands fa-youtube"
                  class="text-white text-base h-[25px] w-[25px] mx-2"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:basis-[21%] md:basis-1/2">
        <div class="py-3 pl-3 pr-[60px]">
          <div>
            <div class="mb-8">
              <h2 class="text-white text-[22px] font-semibold">About Us</h2>
            </div>
          </div>
          <div>
            <ul class="">
              <li class="mb-1 pb-4">
                <RouterLink to="/about">
                  <a class="text-[#ccc] font-base hover:text-white" href="">
                    <span class="">About us</span>
                  </a>
                  <span class="block border-b border-[#ccc] opacity-25 mt-4"></span>
                </RouterLink>
              </li>
              <li class="mb-1 pb-4">
                <RouterLink to="/tin">
                  <a href="" class="text-[#ccc] font-base hover:text-white"
                    ><span class="">Company Doc</span>
                  </a>
                  <span class="block border-b border-[#ccc] opacity-25 mt-4"></span>
                </RouterLink>
              </li>
              <li class="mb-1 pb-4">
                <a
                  class="text-[#ccc] font-base hover:text-white"
                  href="https://www.octaglory.shop/"
                  target="blank"
                  ><span class="">Octaglory Shop</span>
                </a>
                <span class="block border-b border-[#ccc] opacity-25 mt-4"></span>
              </li>
              <li class="">
                <a
                  class="text-[#ccc] font-base hover:text-white"
                  href="https://app.octaglory.com/login"
                  target="blank"
                  ><span class="">Octaglory Erp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="lg:basis-1/3 md:basis-1/2">
        <div class="py-3 pl-3 pr-[60px]">
          <div>
            <div class="mb-8">
              <h2 class="text-white text-[22px] font-semibold">Contact Us</h2>
            </div>
          </div>
          <div>
            <div class="">
              <div
                class="mb-[15px] pb-[15px] border-b border-[#ccc] border-opacity-25 flex"
              >
                <div class="">
                  <span class="material-symbols-outlined text-[#ccc] mr-3">
                    location_on
                  </span>
                </div>
                <div>
                  <span class="text-[#ccc]"
                    >OCTAGLORY, D/4, House- 78 Block- M Road- 11, Banani Model Town,
                    Dhaka- 1213</span
                  >
                </div>
              </div>

              <div
                class="mb-[15px] pb-[15px] border-b border-[#ccc] border-opacity-25 flex"
              >
                <div>
                  <span class="material-symbols-outlined text-[#ccc] mr-3"> mail </span>
                </div>
                <div>
                  <span class="text-[#ccc]">info.octaglory@gmail.com</span>
                </div>
              </div>

              <div
                class="mb-[15px] pb-[15px] border-b border-[#ccc] border-opacity-25 flex"
              >
                <div>
                  <span class="material-symbols-outlined text-[#ccc] mr-3">
                    phone_iphone
                  </span>
                </div>
                <div>
                  <span class="text-[#ccc]">09678221194, 01943400600</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:basis-1/4 md:basis-1/2 md:mt-4">
        <div class="py-3 pl-3 pr-[60px]">
          <div>
            <div class="mb-8">
              <h2 class="text-white text-[22px] font-semibold">Quick Information</h2>
            </div>
          </div>
          <div>
            <div
              class="text-[#ccc] mb-[15px] pb-[15px] border-b border-[#ccc] border-opacity-25"
            >
              <RouterLink to="/return-refund-policy">
                <a class="" href=""> <span>Return, Cancellation & Refund</span> </a>
              </RouterLink>
            </div>
            <div
              class="text-[#ccc] mb-[15px] pb-[15px] border-b border-[#ccc] border-opacity-25"
            >
              <RouterLink to="/policy">
                <a class="" href=""><span class="">Privacy Policy</span> </a>
              </RouterLink>
            </div>
            <div
              class="text-[#ccc] mb-[15px] pb-[15px] border-b border-[#ccc] border-opacity-25"
            >
              <RouterLink to="/terms-condition">
                <a class="" href=""><span class="">Terms & Conditions</span> </a>
              </RouterLink>
            </div>
            <div class="text-[#ccc] mb-[15px]">
              <RouterLink to="/faq">
                <a class="" href=""><span class="">FAQ</span> </a>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterBottom></FooterBottom>
</template>
<style scoped></style>
<script>
import { defineComponent } from "vue";
import FooterBottom from "./Footer_bottom.vue";
import Payment from "../Payment/Payment.vue";

export default defineComponent({
  components: {
    FooterBottom,
    Payment,
  },
  setup() {},
});
</script>
