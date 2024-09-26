<script>
import { ref, defineComponent, inject } from "vue";
import axios from "axios";
import VueCookies from "vue-cookies";
import { useRouter } from "vue-router";
export default defineComponent({
  props: {
    show: Boolean,
    id: String,
  },
  data() {
    return {
      id: this.id,
    };
  },
  setup(props) {
    const user_base_url = import.meta.env.VITE_PROJECT_API_SERVER;
    const success_text = ref("");
    const otp_text = ref(false);
    const continue_text = ref(false);
    const Phone = ref("");
    const error_message = ref("");
    const error_show = ref(false);
    const OTP = ref("");
    const check_otp = ref("");
    const otp_success = ref(false);

    const error = ref("");
    const router = useRouter();
    const ok_btn = ref(true);
    const continue_btn = ref(false);
    const reSend_btn = ref(false);
    let check_btn = ref(false);
    let data = {};
    const value = () => {
      error.value = "";
    };
    let otp_show = ref(false);
    const phoneNumber = ref("");

    const otpCheck = () => {
      check_otp.value = OTP.value;
      console.log(check_otp.value);

      let payload = {
        otp: OTP.value,
        phone: phoneNumber.value,
      };
      axios
        .post(`${user_base_url}/api/registration/otp`, payload)
        .then((res) => {
          if (res.status === 200) {
            success_text.value = res.data.message;
            continue_btn.value = true;
            ok_btn.value = false;
            check_btn.value = false;
            otp_text.value = false;
            document.getElementById("phone").readOnly = true;
            $cookies.set("phone", res.data.phone, 60 * 60 * 24);
            $cookies.set("token", res.data.token, 60 * 60 * 24);
          }
        })
        .catch(function (error) {
          if (
            error?.response?.data === "Your opt is not valid" ||
            error?.response?.data === "Your opt is expired plz re send otp"
          ) {
            error_show.value = true;
            error_message.value = error?.response?.data;
            OTP.value = "";
            reSend_btn.value = true;
            otp_text.value = false;
            check_btn.value = false;
            $cookies.set("phone", phoneNumber.value, 60 * 60 * 24);
            $cookies.set("token", "", 60 * 60 * 24);
          } else if (error.request) {
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    };
    const click = () => {
      if (Phone.value === "") {
        check_btn.value = false;
        console.log(check_btn.value);
        error_show.value = true;
        error_message.value = "Plz enter your phone nummber";
      }
      phoneNumber.value = Phone.value;
      if ((check_btn.value = true)) {
        reSend_btn.value = false;
      } else if ((reSend_btn.value = true)) {
        check_btn.value = false;
        OTP.value = "";
        otp_text.value = false;
      }
      let payload = {
        phone: phoneNumber.value,
        event_id: $cookies.get("eventId"),
      };
      console.log(payload);
      axios
        .post(`${user_base_url}/api/registration/exist`, payload)
        .then((res) => {
          if (res.status === 200) {
            console.log(typeof phoneNumber.value);
            otp_text.value = true;
            check_btn.value = true;
            error_show.value = false;
            ok_btn.value = false;
            continue_btn.value = false;
            $cookies.set("phone", phoneNumber.value, 60 * 60 * 24);
            document.getElementById("phone").readOnly = true;
          }
        })
        .catch(function (error) {
          if (error?.response?.status === 404 && Phone.value != "") {
            continue_text.value = true;
            check_btn.value = false;
            continue_btn.value = true;
            ok_btn.value = false;
            document.getElementById("phone").readOnly = true;
            console.log(phoneNumber.value);
            $cookies.set("phone", phoneNumber.value, 60 * 60 * 24);
            $cookies.set("token", "", 60 * 60 * 24);
          } else if (error.request) {
            console.log(error.request);
          }
        });
    };
    return {
      error_show,
      error_message,
      success_text,
      continue_text,
      otp_text,
      otp_success,
      otpCheck,
      check_otp,
      data,
      $cookies,
      reSend_btn,
      check_btn,
      ok_btn,
      continue_btn,
      OTP,
      value,
      otp_show,
      props,
      Phone,
      phoneNumber,
      click,
    };
  },
});
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Enter Your Phone Number</label
            >
            <input
              v-model="Phone"
              type="tel"
              id="phone"
              required=""
              class="block read-only:bg-slate-200 w-full md:p-2.5 p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
            />
            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
              <span v-if="error_show === true" class="font-medium">{{
                error_message
              }}</span>
            </p>
          </div>
          <div>
            <label
              v-if="otp_text === true"
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >OTP is Send to your Mobile Number</label
            >
            <input
              v-if="otp_text === true"
              v-model="OTP"
              type="number"
              id="OTP"
              class="block read-only:bg-slate-200 w-full md:p-2.5 p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
            />
            <label
              v-if="continue_text === true"
              for="phone"
              class="block mb-2 text-sm font-medium text-amber-500 dark:text-white"
              >Plz Continue Youe Registration</label
            >
            <label
              v-if="success_text != ''"
              for="phone"
              class="block mb-2 text-sm font-medium text-lime-600 dark:text-white"
              >{{ success_text
              }}<span class="mb-2 text-sm font-medium text-sky-700 dark:text-white"
                >Click Continue Button!</span
              >
            </label>
            <RouterLink
              v-if="continue_btn === true"
              :to="{ name: 'register', params: { id: id } }"
            >
              <button
                v-if="continue_btn === true"
                class="modal-default-button mt-2 rounded-lg shadow-sm shadow-indigo-300 px-4 py-2 text-white bg-indigo-500"
              >
                Continue
              </button>
            </RouterLink>

            <!-- <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span class="font-medium">{{ errors }}</span> Username already taken!
                </p> -->
          </div>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
              v-if="ok_btn === true"
              class="modal-default-button rounded-lg shadow-sm shadow-amber-300 px-4 py-2 text-white bg-amber-500"
              @click="click"
            >
              OK
            </button>
            <button
              v-if="check_btn === true"
              class="modal-default-button rounded-lg shadow-sm shadow-sky-300 mt-2 px-4 py-2 text-white bg-sky-500"
              @click="otpCheck"
            >
              Check
            </button>
            <button
              v-if="reSend_btn === true"
              class="modal-default-button rounded-lg shadow-sm shadow-lime-300 mt-2 px-4 py-2 text-white bg-lime-600"
              @click="click"
            >
              Re Send
            </button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
