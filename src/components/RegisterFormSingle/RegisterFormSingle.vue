<template>
  <div class="font">
    <div class="h-auto w-full">
      <img
        src="../../assets/images/from_banner.png"
        class="md:w-[1920px] w-[768px] h-[540px] md:h-[400px] px-0 pb-2 rounded-4xl mx-auto md:block hidden"
        alt=""
      />
      <img
        src="../../assets/images/ifter.png"
        class="md:w-[1920px] w-[768px] h-[540px] md:h-[400px] px-0 pb-2 rounded-4xl mx-auto md:hidden block"
        alt=""
      />
    </div>

    <div class="h-full 2xl:w-[65%] lg:w-[70%] md:w-[80%] md:m-auto">
      <!-- <div class="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-48"> -->

      <div class="flex flex-col lg:flex-row justify-between h-auto">
        <div class="basis-[70%] lg:order-none order-2">
          <!-- for mobile -->
          <div
            v-if="submit_btn === 'Submit'"
            class="h-auto py-6 lg:w-[100%] md:w-[90%] w-3/4 mt-8 m-auto shadow-lg shadow-indigo-500/40 p-7 block md:hidden"
          >
            <form @submit.prevent="submit">
              <div
                class="px-3 md:mt-0 sm:mt-11 py-1 h-auto flex items-center rounded-lg bg-sky-100 justify-center md:w-[100%] w-[100%] m-auto"
              >
                <div v-for="(eventt, i) in event.events.events_ongoing" :key="i">
                  <h1
                    v-if="id == eventt.id"
                    :class="[show ? 'hide' : 'show']"
                    class="text-black font-bold text-[16px] font-verdana xl:text-4xl md:text-2xl mx-auto"
                  >
                    {{ eventt.name }}
                    <span
                      class="text-amber-600 block sm:inline-block text-center sm:text-start"
                    >
                      2023
                    </span>
                  </h1>
                </div>
              </div>
              <transition name="toast">
                <Toast v-if="showToast" :errors="errors" />
              </transition>
              <div class="text-center md:text-center mt-3">
                <p
                  class="font-semibold mb-4 font-verdana text-violet-800 md:text-xl text-[1rem]"
                >
                  Complete Your Registration
                </p>
              </div>

              <div class="grid md:grid-cols-2 font-verdana-bold mt-4 md:gap-6">
                <div class="relative">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Cadet Name</label
                  >
                  <font-awesome-icon
                    class="text-red-600 absolute top-6 right-0 text-[10px]"
                    icon="fa-solid fa-star"
                  />
                  <input
                    v-model="name"
                    type="text"
                    id="name"
                    class="block w-full md:p-2.5 p-1.5 font-verdana text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                  />
                </div>
                <div class="relative">
                  <label
                    for="batch"
                    class="block mb-2 text-sm mt-2 md:mt-0 font-medium text-gray-900 dark:text-white"
                    >Batch</label
                  >
                  <font-awesome-icon
                    class="text-red-600 absolute md:top-6 top-8 right-0 text-[10px]"
                    icon="fa-solid fa-star"
                  />
                  <input
                    v-model="batch"
                    type="number"
                    id="batch"
                    class="block w-full md:p-2.5 p-1.5 font-verdana text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                  />
                </div>
              </div>
              <div class="grid md:grid-cols-2 font-verdana-bold mt-4 md:gap-6">
                <div>
                  <label
                    for="cadetNumber"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Cadet Number</label
                  >

                  <input
                    v-model="cadetNumber"
                    type="number"
                    id="cadetNumber"
                    class="block w-full md:p-2.5 p-1.5 font-verdana text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                  />
                </div>
                <div class="sm:grid-cols-1 text-center sm:text-left sm:space-x-5">
                  <div>
                    <label
                      for="cadetNumber"
                      class="block md:mb-2 text-sm font-medium text-gray-900 md:mt-0 mt-2 text-left dark:text-white"
                      >House</label
                    >

                    <label class="rounded-lg">
                      <select
                        v-model="data.house"
                        class="bg-gray-50 border border-gray-300 font-verdana text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-auto block md:w-[100%] sm:w-[98%] w-[100%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 md:mb-0 shadow-md shadow-indigo-500/20"
                      >
                        <option
                          class="w-44 bg-indigo-50 text-bold rounded-lg text-black divide-y divide-gray-100 shadow dark:bg-gray-700"
                          v-for="(house, i) in houses"
                          :value="house['name']"
                          :key="i"
                        >
                          {{ house["name"] }}
                        </option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>

              <div class="grid md:grid-cols-2 font-verdana-bold mt-4 md:gap-6">
                <div class="relative">
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Phone Number</label
                  >
                  <font-awesome-icon
                    class="text-red-600 absolute top-6 right-0 text-[10px]"
                    icon="fa-solid fa-star"
                  />
                  <input
                    v-model="Phone"
                    type="text"
                    id="phone"
                    class="block read-only:bg-slate-200 font-verdana w-full md:p-2.5 p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                  />
                </div>
                <div class="relative">
                  <label
                    for="email"
                    class="block mb-2 text-sm mt-2 md:mt-0 font-medium text-gray-900 dark:text-white"
                    >Email</label
                  >
                  <font-awesome-icon
                    class="text-red-600 absolute md:top-6 top-8 right-0 text-[10px]"
                    icon="fa-solid fa-star"
                  />
                  <input
                    v-model="email"
                    type="text"
                    id="email"
                    class="block read-only:bg-slate-200 font-verdana w-full md:p-2.5 p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                  />
                </div>
              </div>
              <div class="grid md:grid-cols-2 font-verdana-bold mt-4 md:gap-6">
                <div class="sm:grid-cols-1 text-center sm:text-left sm:space-x-5">
                  <div>
                    <label
                      for="cadetNumber"
                      class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                      >Driver</label
                    >
                    <select
                      v-model="driver"
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      class="bg-gray-50 border font-verdana border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-auto block md:w-[100%] sm:w-[100%] w-[100%] p-2 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 md:mb-0 shadow-md shadow-indigo-500/20"
                      type="button"
                    >
                      <svg
                        class="w-4 h-4 ml-2"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                      <option value="0">Driver</option>
                      <option value="1">1</option>
                    </select>
                  </div>
                  <!-- <div>
                  <div class="flex items-center">
                    <input
                      v-model="driver_check"
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="checked-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Driver</label
                    >
                  </div>
                </div> -->
                </div>
              </div>

              <div class="grid grid-cols-3 md:gap-6 mt-3">
                <!-- Driver -->
              </div>
              <div class="flex justify-center">
                <button
                  v-if="submit_btn === 'Submit'"
                  :class="[btn ? 'hide' : 'btn']"
                  id="submit"
                  @click="submit"
                  class="mt-6 text-white font-verdana-bold bg-indigo-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w- w-50% sm:w-auto px-8 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {{ submit_btn }}
                </button>
              </div>
              <div class="flex justify-center lg:justify-start">
                <button
                  v-if="submit_btn === 'Update'"
                  :class="[btn ? 'hide' : 'btn']"
                  id="update"
                  @click="update"
                  class="mt-6 text-white bg-indigo-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w- w-50% sm:w-auto px-7 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {{ submit_btn }}
                </button>
              </div>
            </form>
          </div>
          <!-- for mobile -->
          <!-- for desktop -->
          <div
            class="h-auto py-6 lg:w-[100%] md:w-[90%] w-3/4 mt-8 m-auto shadow-lg shadow-indigo-500/40 p-7 hidden md:block"
          >
            <form @submit.prevent="submit">
              <div
                class="px-3 md:mt-0 sm:mt-11 py-1 h-auto flex items-center rounded-lg bg-sky-100 justify-center md:w-[100%] w-[100%] m-auto"
              >
                <div v-for="(eventt, i) in event.events.events_ongoing" :key="i">
                  <h1
                    v-if="id == eventt.id"
                    :class="[show ? 'hide' : 'show']"
                    class="text-black font-bold text-[16px] font-verdana xl:text-4xl md:text-2xl mx-auto"
                  >
                    {{ eventt.name }}
                    <span
                      class="text-amber-600 block sm:inline-block text-center sm:text-start"
                    >
                      2023
                    </span>
                  </h1>
                </div>
              </div>
              <transition name="toast">
                <Toast v-if="showToast" :errors="errors" />
              </transition>
              <div class="text-center md:text-center mt-3">
                <p
                  class="font-semibold mb-4 font-verdana text-violet-800 md:text-xl text-[1rem]"
                >
                  Complete Your Registration
                </p>
              </div>

              <div class="grid md:grid-cols-2 font-verdana-bold mt-4 md:gap-6">
                <div class="relative">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Cadet Name</label
                  >
                  <font-awesome-icon
                    class="text-red-600 absolute top-6 right-0 text-[10px]"
                    icon="fa-solid fa-star"
                  />
                  <input
                    v-model="name"
                    type="text"
                    id="name"
                    class="block w-full md:p-2.5 p-1.5 font-verdana text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                  />
                </div>
                <div class="relative">
                  <label
                    for="batch"
                    class="block mb-2 text-sm mt-2 md:mt-0 font-medium text-gray-900 dark:text-white"
                    >Batch</label
                  >
                  <font-awesome-icon
                    class="text-red-600 absolute md:top-6 top-8 right-0 text-[10px]"
                    icon="fa-solid fa-star"
                  />
                  <input
                    v-model="batch"
                    type="number"
                    id="batch"
                    class="block w-full md:p-2.5 p-1.5 font-verdana text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                  />
                </div>
              </div>
              <div class="grid md:grid-cols-2 font-verdana-bold mt-4 md:gap-6">
                <div>
                  <label
                    for="cadetNumber"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Cadet Number</label
                  >

                  <input
                    v-model="cadetNumber"
                    type="number"
                    id="cadetNumber"
                    class="block w-full md:p-2.5 p-1.5 font-verdana text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                  />
                </div>
                <div class="sm:grid-cols-1 text-center sm:text-left sm:space-x-5">
                  <div>
                    <label
                      for="cadetNumber"
                      class="block md:mb-2 text-sm font-medium text-gray-900 md:mt-0 mt-2 text-left dark:text-white"
                      >House</label
                    >

                    <label class="rounded-lg">
                      <select
                        v-model="data.house"
                        class="bg-gray-50 border border-gray-300 font-verdana text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-auto block md:w-[100%] sm:w-[98%] w-[100%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 md:mb-0 shadow-md shadow-indigo-500/20"
                      >
                        <option
                          class="w-44 bg-indigo-50 text-bold rounded-lg text-black divide-y divide-gray-100 shadow dark:bg-gray-700"
                          v-for="(house, i) in houses"
                          :value="house['name']"
                          :key="i"
                        >
                          {{ house["name"] }}
                        </option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>

              <div class="grid md:grid-cols-2 font-verdana-bold mt-4 md:gap-6">
                <div class="relative">
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Phone Number</label
                  >
                  <font-awesome-icon
                    class="text-red-600 absolute top-6 right-0 text-[10px]"
                    icon="fa-solid fa-star"
                  />
                  <input
                    v-model="Phone"
                    type="text"
                    id="phone"
                    class="block read-only:bg-slate-200 font-verdana w-full md:p-2.5 p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                  />
                </div>
                <div class="relative">
                  <label
                    for="email"
                    class="block mb-2 text-sm mt-2 md:mt-0 font-medium text-gray-900 dark:text-white"
                    >Email</label
                  >
                  <font-awesome-icon
                    class="text-red-600 absolute md:top-6 top-8 right-0 text-[10px]"
                    icon="fa-solid fa-star"
                  />
                  <input
                    v-model="email"
                    type="text"
                    id="email"
                    class="block read-only:bg-slate-200 font-verdana w-full md:p-2.5 p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                  />
                </div>
              </div>
              <div class="grid md:grid-cols-2 font-verdana-bold mt-4 md:gap-6">
                <div class="sm:grid-cols-1 text-center sm:text-left sm:space-x-5">
                  <div>
                    <label
                      for="cadetNumber"
                      class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
                      >Driver</label
                    >
                    <select
                      v-model="driver"
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      class="bg-gray-50 border font-verdana border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-auto block md:w-[100%] sm:w-[100%] w-[100%] p-2 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 md:mb-0 shadow-md shadow-indigo-500/20"
                      type="button"
                    >
                      <svg
                        class="w-4 h-4 ml-2"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                      <option value="0">Driver</option>
                      <option value="1">1</option>
                    </select>
                  </div>
                  <!-- <div>
                  <div class="flex items-center">
                    <input
                      v-model="driver_check"
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="checked-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Driver</label
                    >
                  </div>
                </div> -->
                </div>
              </div>

              <div class="grid grid-cols-3 md:gap-6 mt-3">
                <!-- Driver -->
              </div>
              <div class="flex justify-center">
                <button
                  v-if="submit_btn === 'Submit'"
                  :class="[btn ? 'hide' : 'btn']"
                  id="submit"
                  @click="submit"
                  class="mt-6 text-white font-verdana-bold bg-indigo-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w- w-50% sm:w-auto px-8 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {{ submit_btn }}
                </button>
              </div>
              <div class="flex justify-center lg:justify-start">
                <button
                  v-if="submit_btn === 'Update'"
                  :class="[btn ? 'hide' : 'btn']"
                  id="update"
                  @click="update"
                  class="mt-6 text-white bg-indigo-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w- w-50% sm:w-auto px-7 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {{ submit_btn }}
                </button>
              </div>
            </form>
          </div>
          <!-- for  desktop -->
        </div>
        <!----chart start---->
        <div
          class="hidden md:block order-1 basis-[30%] lg:ml-5 lg:flex lg:justify-start lg:flex-col md:w-[90%] w-[75%] mt-4 sm:my-auto mx-auto"
        >
          <!-- box1 start-->
          <div
            class="overflow-x-auto top-[10px] relative flex flex-col justify-center shadow-lg shadow-indigo-400/80 border border-indigo-400/70 mb-4"
          >
            <h3
              class="bg-white border-b font-verdana-bold dark:bg-gray-800 dark:border-gray-700 py-1 font-bold text-center text-gray-900 dark:text-white"
            >
              Faujian Iftar Together
            </h3>
            <table
              class="lg:w-[100%] w-[90%] mx-auto font-verdana text-left text-gray-500 dark:text-gray-400 md:text-lg text-sm"
            >
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 text-[16px] dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-1 px-4 font-medium text-gray-700 dark:text-white"
                  >
                    Date
                  </th>
                  <td class="py-1 px-4">1-Apr-23 | 5 PM Onwards</td>
                </tr>

                <tr
                  class="bg-white border-b text-[16px] dark:bg-gray-700 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-1 px-4 font-medium text-gray-700 whitespace-nowrap dark:text-white"
                  >
                    Venue
                  </th>
                  <td class="py-1 px-4 text-justify">Hall Lamda,Gulshan Club</td>
                </tr>
                <tr
                  class="bg-white border-b text-[16px] dark:bg-gray-700 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-1 px-4 font-medium text-gray-700 whitespace-nowrap dark:text-white"
                  >
                    Contact
                  </th>
                  <td class="py-1 px-4 text-justify">01611522671</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- box end-->

          <!-- box2 start -->
          <div
            class="overflow-x-auto top-[10px] relative flex flex-col justify-center shadow-lg shadow-indigo-400/80 border border-indigo-400/70"
          >
            <h3
              class="bg-white border-b dark:bg-gray-800 font-verdana-bold dark:border-gray-700 py-1 font-bold text-center text-gray-900 dark:text-white"
            >
              Participation Fee
            </h3>
            <table
              class="lg:w-[100%] w-[90%] mx-auto text-left font-verdana text-gray-500 dark:text-gray-400 md:text-lg text-sm"
            >
              <tbody>
                <tr
                  class="bg-white border-b text-[16px] dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-1 px-4 font-medium text-gray-500 dark:text-white"
                  >
                    Batch 01-10
                  </th>
                  <td class="py-1 px-4">BDT 0</td>
                </tr>
                <tr
                  class="bg-white border-b text-[16px] dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    scope="row"
                    class="py-1 px-4 w-[50%] font-medium text-gray-500 dark:text-white"
                  >
                    Batch 11-53
                  </td>
                  <td class="py-1 w-[50%] px-4">BDT 1000</td>
                </tr>
                <tr
                  class="bg-white border-b text-[16px] dark:bg-gray-500 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-1 px-4 font-medium text-gray-500 dark:text-white"
                  >
                    Batch 54-63
                  </th>
                  <td class="py-1 px-4">BDT 0</td>
                </tr>

                <tr
                  class="bg-white border-b text-[16px] dark:bg-gray-500 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-1 px-4 font-medium text-gray-500 dark:text-white"
                  >
                    Driver
                  </th>
                  <td class="py-1 px-4">BDT 500</td>
                </tr>
              </tbody>
            </table>
            <h3
              class="bg-white border-b font-verdana-bold dark:bg-gray-800 dark:border-gray-700 py-1 font-bold text-left ml-4 text-gray-900 dark:text-white"
            >
              Registration required for all
            </h3>
          </div>
          <!-- box2 end -->
        </div>
        <!----chart end---->
      </div>
      <!-- data show the table  -->
      <div
        v-if="btn_hide === 1"
        class="h-auto py-6 md:py-6 xl:w-[100%] lg:w-[100%] md:w-[90%] md:mx-auto md:mb-7 sm:w-[75%] my-3 w-[75%] shadow-lg p-7 shadow-indigo-500/40 mx-auto sm:mb-8 mb-8"
      >
        <div>
          <p class="ml-5 mb-5 text-center font-verdana-bold text-green-700 text-xl">
            Invoice
          </p>
        </div>
        <div class="overflow-x-auto bg-slate-400 relative">
          <table
            class="w-full text-sm text-left bg-slate-500 text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 font-verdana-bold uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="py-3 px-6">Participant</th>
                <th scope="col" class="py-3 px-6">Qty</th>
                <th scope="col" class="py-3 px-6 hidden md:block">Registration Fee</th>
                <th scope="col" class="py-3 px-6">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 font-verdana dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 font-verdana-bold whitespace-nowrap dark:text-white"
                >
                  Member:<strong></strong>
                </th>
                <td class="py-4 px-6">{{ memberquan }}</td>
                <td class="py-4 px-6 hidden md:block">{{ memberfee }}</td>
                <td class="py-4 px-6">{{ memberfee }}</td>
              </tr>
              <tr
                class="bg-white border-b font-verdana dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="py-4 px-6 font-medium font-verdana-bold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Driver
                </th>
                <td class="py-4 px-6">{{ dri_maid_quan }}</td>
                <td class="py-4 px-6 hidden md:block">500</td>
                <td class="py-4 px-6">{{ dri_maid_fee }}</td>
              </tr>
              <tr
                class="bg-white border-b font-verdana dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="py-4 px-6 font-medium font-verdana-bold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Total
                </th>
                <td class="py-4 px-6">{{ totalfee }}</td>
                <td class="py-4 px-6 hidden md:block"></td>
                <td class="py-4 px-6"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4">
          <div class="mt-4">
            <input
              type="checkbox"
              value=""
              v-model="checked"
              id="terms"
              class="mr-2 rounded"
            />
            <label for="terms"
              >I agree withh the
              <RouterLink to="/terms-condition"
                ><span class="text-green-600">Terms & Conditions </span></RouterLink
              >
              ,<RouterLink to="/policy"
                ><span class="text-green-600">Privacy Policy </span></RouterLink
              >
              , and
              <RouterLink to="/return-refund-policy"
                ><span class="text-green-600"
                  >Return, Cancellation & Refund</span
                ></RouterLink
              >
              Policy, of
              <a href="https://www.octaglory.com/" class="text-green-600"
                >octaglory.</a
              ></label
            >
          </div>
        </div>
        <div
          class="mt-6 block space-y-4 text-center justify-center md:flex md:space-y-0 md:space-x-4 root"
        >
          <button
            v-if="checked === true"
            type="submit"
            @click="pay"
            id="pay"
            class="mt-6 text-white bg-green-700 font-verdana-bold hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w- w-50% sm:w-auto px-8 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Pay Now
          </button>
          <!-- :class="[hide ? 'show' : 'hide']" -->
          <button
            disabled
            v-if="checked !== true"
            type="submit"
            @click="pay"
            id="pay"
            class="mt-6 text-white bg-gray-400 font-verdana-bold hover:bg-indigo-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w- w-50% sm:w-auto px-8 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hide {
  display: none;
  padding: 0;
  margin: 0;
}
.show {
  display: block;
  margin: auto;
}
.btn {
  display: block;
}
.modal {
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 90%;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app
  > div.h-full
  > div.flex.flex-col.md\:flex-row.justify-between.h-auto
  > div
  > div.h-auto.py-6.md\:w-\[90\%\].w-3\/4.mb-6.mt-8.md\:mt-24.m-auto
  > form
  > div:nth-child(7)
  > div.md\:grid-cols-2.flex.space-x-1.sm\:space-x-5
  > div
  > label
  > select {
  padding-right: 0 !important;
}
.toast-wrapper {
  position: fixed;
  width: 100%;
  top: 20px;
}
.toast {
  padding: 20px;
  color: white;
  background: #ff0062;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;
}
.toast-enter-active {
  animation: wobble 0.5s ease;
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-active {
  transition: all 0.3s ease;
}

@keyframes wobble {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  60% {
    transform: translateX(8px);
    opacity: 1;
  }
  70% {
    transform: translateX(-8px);
    opacity: 1;
  }
  80% {
    transform: translateX(4px);
    opacity: 1;
  }
  90% {
    transform: translateX(-4px);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>

<script>
import { defineComponent, reactive, ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import Toast from "../Toast/Toast.vue";
import EventName from "../HomePage/HomePage.vue";
import useEventsStore from "../../store/events";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const INFORMATION = {
  houses: [
    {
      name: "SELECT HOUSE ",
    },
    {
      name: "RABINDRA HOUSE/ BABAR HOUSE",
    },
    {
      name: "SHAHIDULLAH HOUSE/ AKBAR HOUSE",
    },
    {
      name: "FAZLUL HOQUE HOUSE/ AYUB HOUSE",
    },
    {
      name: "NAZRUL HOUSE/ SHAHJAHAN HOUSE",
    },
  ],
};

export default defineComponent({
  disable: {
    type: Boolean,
    default: () => false,
  },
  hide: {
    type: Boolean,
    default: () => false,
  },
  show: {
    type: Boolean,
    default: () => true,
  },
  btn: {
    type: Boolean,
    default: () => true,
  },
  components: { Toast },
  setup() {
    const user_base_url = import.meta.env.VITE_PROJECT_API_SERVER;
    const event = useEventsStore();
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    let submit_btn = ref("Submit");
    let name = ref("");
    let email = ref("");
    let Phone = ref("");
    let address = ref("");
    let batch = ref("");
    let fee = ref("");
    let quantity = ref("");
    let cadetNumber = ref("");
    let status = ref("0");
    let participant = ref(0);
    let driver = ref(0);
    let drivarsquan = ref("");
    let driversfee = ref(0);
    let maidsquan = ref("");
    let maidsfee = ref(0);
    let guestsquan = ref("");
    let guestsquanShow = ref(0);
    let guestsfee = ref(0);
    let memberquan = ref(0);
    let memberfee = ref(0);
    let dri_maid_quan = ref(0);
    let dri_maid_fee = ref(0);
    let totalquan = ref(0);
    let totalfee = ref(0);
    let errors = [];
    let guests = [];
    let name_error = "";
    let email_error = [];
    let phoneNumber = ref("");
    let registrationId = ref("");
    let value = ref("");
    let driver_id = ref("");
    let paymentIdentifier = null;
    let btn_hide = ref(0);
    let checked = ref("false");
    console.log(checked.value);
    //house name
    let data = reactive({
      house: INFORMATION.houses[0].name,
    });
    //toast
    const showToast = ref(false);

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => (showToast.value = false), 4000);
    };

    // const check = (e) => {
    //   // e.preventDefault();

    //   checked.value = 1;
    //   console.log(checked.value);
    // };

    const pay = (e) => {
      e.preventDefault();
      axios
        .post(`${user_base_url}/api/pay`, {
          payment_identifier: paymentIdentifier,
        })
        .then((res) => {
          const gatewayPageUrl = res?.data?.gateway_page_url ?? null;
          if (gatewayPageUrl) {
            window.location.href = gatewayPageUrl;
          }
        });
    };

    const submit = (e) => {
      e.preventDefault();
      phoneNumber = Phone.value;
      if (batch.value === "") {
        memberquan.value = 0;
        memberfee.value = 0;
      } else if (batch.value >= "11" && batch.value <= "53") {
        memberquan.value = 1;
        memberfee.value = 1000;
        guests.push({
          quantity: 1,
          fee: memberfee.value,
          type: "general",
        });
      } else {
        memberquan.value = 1;
        memberfee.value = 0;
        guests.push({
          quantity: 1,
          fee: memberfee.value,
          type: "student",
        });
      }

      //driver

      if (driver.value === 0) {
        drivarsquan.value = 0;
      } else {
        drivarsquan.value = parseInt(driver.value);
        guests.push({
          quantity: drivarsquan.value,
          fee: 500,
          type: "driver",
        });
      }

      dri_maid_quan.value = parseInt(drivarsquan.value);
      dri_maid_fee.value = parseInt(drivarsquan.value) * 500;

      //total
      totalquan.value = memberquan.value + dri_maid_quan.value;

      totalfee.value = memberfee.value + dri_maid_fee.value;
      let form = {
        event_id: id,
        name: name.value,
        email: email.value,
        phone: Phone.value,
        batch: batch.value,
        // address: "null",
        cadet_number: cadetNumber.value,
        house: data.house,
        marital_status: status.value,
        total: totalfee.value,
        quantity: totalquan.value,
        guests,
      };

      axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      axios
        .post(`${user_base_url}/api/${id}/registration`, form)
        .then((res) => {
          if (totalfee.value > 0) {
            btn_hide.value = 1;
          } else {
            router.push("/paymentsuccess");
          }
          paymentIdentifier = Phone.value;
          $cookies.set("phone", Phone.value, 60 * 60 * 24);
          name.value = "";
          email.value = "";
          batch.value = "";
          cadetNumber.value = "";
          Phone.value = "";
          driver.value = "0";
          guests = "";
          data.house = INFORMATION.houses[0].name;
          submit_btn.value = "reCheck";
        })
        .catch(function (error) {
          if (error.response) {
            btn_hide.value = 0;
            triggerToast();
            for (let err in error?.response?.data?.errors) {
              errors.push(error.response.data.errors[err][0]);
              email_error = errors;
            }
            submit_btn.value = "Submit";
            errors = [];
          }
        });
    };

    const state = reactive({
      registration: [],
    });

    return {
      checked,
      btn_hide,
      data,
      participant,
      event,
      submit_btn,
      driver_id,
      value,
      phoneNumber,
      registrationId,
      state,
      id,
      EventName,
      quantity,
      name_error,
      email_error,
      errors,
      showToast,
      address,
      triggerToast,
      paymentIdentifier,
      id,
      route,
      name,
      email,
      Phone,
      cadetNumber,
      batch,
      driver,
      fee,
      guests,
      guestsquanShow,
      memberquan,
      memberfee,
      drivarsquan,
      maidsquan,
      maidsfee,
      driversfee,
      guestsquan,
      guestsfee,
      dri_maid_quan,
      dri_maid_fee,
      totalquan,
      totalfee,
      ...INFORMATION,
      submit,
      pay,
    };
  },
});
</script>
