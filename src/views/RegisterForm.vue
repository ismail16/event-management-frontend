<template>
  <div class="h-full 2xl:w-[65%] lg:w-[70%] md:w-[80%] md:m-auto">
    <!-- <div class="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-48"> -->
    <div
      class="px-3 sm:mt-3 mt-11 py-1 h-auto flex items-center rounded-lg bg-sky-100 justify-center md:w-[100%] w-[85%] m-auto"
    >
      <div v-for="(eventt, i) in event.events.events_ongoing" :key="i">
        <h1
          v-if="id == eventt.id"
          :class="[show ? 'hide' : 'show']"
          class="text-green-700 font-bold text-4xl mx-auto"
        >
          {{ eventt.name }}
          <span class="text-amber-600"> 2023</span>
        </h1>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row justify-between h-auto">
      <div class="basis-[80%] lg:order-none order-2">
        <div
          class="h-auto py-6 lg:w-[100%] md:w-[90%] w-3/4 mt-8 m-auto shadow-lg shadow-indigo-500/40 p-7"
        >
          <form @submit.prevent="submit">
            <transition name="toast">
              <Toast v-if="showToast" :errors="errors" />
            </transition>
            <!-- <div>{{ errors }}</div> -->
            <div class="grid md:grid-cols-2 md:gap-6"></div>
            <div class="text-center md:text-center">
              <p class="font-semibold mb-4 text-violet-800 text-xl">
                Fill up your Informatioon
              </p>
            </div>
            <div class="grid md:grid-cols-2 mt-4 md:gap-6">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Enter Your Name</label
                >
                <input
                  v-model="name"
                  type="text"
                  id="name"
                  class="block w-full md:p-2.5 p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Enter Your Email</label
                >
                <input
                  v-model="email"
                  type="text"
                  id="email"
                  class="block read-only:bg-slate-200 w-full md:p-2.5 p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                />
              </div>
            </div>
            <div class="grid md:grid-cols-2 mt-4 md:gap-6">
              <div>
                <label
                  for="address"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Enter Your Address</label
                >
                <input
                  v-model="address"
                  type="text"
                  id="address"
                  class="block w-full md:p-2.5 p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                />
              </div>
              <div>
                <label
                  for="batch"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Enter Your Batch</label
                >
                <input
                  v-model="batch"
                  type="number"
                  id="batch"
                  class="block w-full md:p-2.5 p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 mt-4 md:gap-6">
              <div>
                <label
                  for="cadetNumber"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Enter Your Cadet Number</label
                >
                <input
                  v-model="cadetNumber"
                  type="text"
                  id="cadetNumber"
                  class="block w-full md:p-2.5 p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Enter Your Phone Number</label
                >
                <input
                  v-model="Phone"
                  type="text"
                  id="phone"
                  class="block read-only:bg-slate-200 w-full md:p-2.5 p-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md shadow-indigo-500/20"
                />
                <!-- <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span class="font-medium">{{ errors }}</span> Username already taken!
                </p> -->
              </div>
            </div>
            <div class="grid grid-cols-2 md:gap-6">
              <div class="sm:grid-cols-1 text-center sm:text-left mt-6 sm:space-x-5">
                <div>
                  <label class="rounded-lg">
                    <select
                      v-model="data.house"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-auto block md:w-[100%] sm:w-[98%] w-[90%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 md:mb-0 shadow-md shadow-indigo-500/20"
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
              <div class="sm:grid-cols-1 text-center sm:text-left mt-6 sm:space-x-5">
                <label class="rounded-lg">
                  <select
                    v-model="status"
                    for="Mstatus"
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-auto block md:w-[100%] w-[90%] sm:w-[98%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 md:mb-0 shadow-md shadow-indigo-500/20"
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
                    <option value="0">Select (Single/Couple)</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </label>
              </div>
            </div>
            <div v-if="status === 'married'" class="grid sm:grid-cols-2 md:gap-6">
              <div class="sm:grid-cols-1 text-center sm:text-left mt-6 sm:space-x-5">
                <select
                  v-model="kids_Upto"
                  for="Mstatus"
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-auto block md:w-[100%] sm:w-[95%] w-90% p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 md:mb-0 shadow-md shadow-indigo-500/20"
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
                  <option value="0">Select Kids (Upto 6)</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div class="sm:grid-cols-1 text-center sm:text-left mt-6 sm:space-x-5">
                <select
                  v-model="kids_plus"
                  for="Mstatus"
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-auto block md:w-[100%] sm:w-[95%] w-90% p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 md:mb-0 shadow-md shadow-indigo-500/20"
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
                  <option value="0">Select Kids (6 Years +)</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-3 md:gap-6 mt-3">
              <!-- Driver -->
              <div>
                <select
                  v-model="guest"
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-auto block md:w-[100%] sm:w-[95%] w-[95%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 md:mb-0 shadow-md shadow-indigo-500/20"
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
                  <option value="0">Guest</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div>
                <select
                  v-model="driver"
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-auto block md:w-[100%] sm:w-[95%] w-[95%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 md:mb-0 shadow-md shadow-indigo-500/20"
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
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div>
                <select
                  v-model="maid"
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-auto block md:w-[100%] sm:w-[95%] w-[95%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 md:mb-0 shadow-md shadow-indigo-500/20"
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
                  <option value="0">Maid</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div class="flex justify-center sm:justify-start">
              <!-- <p>{{ submit_btn }}</p> -->
              <button
                v-if="submit_btn === 'Submit'"
                :class="[btn ? 'hide' : 'btn']"
                id="submit"
                @click="submit"
                class="mt-6 text-white bg-indigo-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w- w-50% sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ submit_btn }}
              </button>
            </div>
            <div class="flex justify-center sm:justify-start">
              <button
                v-if="submit_btn === 'Update'"
                :class="[btn ? 'hide' : 'btn']"
                id="update"
                @click="update"
                class="mt-6 text-white bg-indigo-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w- w-50% sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ submit_btn }}
              </button>
            </div>
          </form>
        </div>
      </div>
      <!----chart---->
      <div
        class="order-1 basis-[20%] lg:flex lg:justify-start lg:flex-col md:w-[90%] w-[75%] m-auto"
      >
        <div
          class="overflow-x-auto top-[10px] mb-10 relative flex justify-center shadow-lg shadow-green-400/20 px-5"
        >
          <table
            class="lg:w-[100%] w-[75%] text-left text-gray-500 dark:text-gray-400 md:text-lg text-sm"
          >
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Registration Fee
                </th>
                <td class="py-1 px-4"></td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  Batch 01-57
                </th>
                <td class="py-1 px-4">1500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-500 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  Couple
                </th>
                <td class="py-1 px-4">2200</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-500 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  Batch 58-above
                </th>
                <td class="py-1 px-4">1000</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-500 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  Couple
                </th>
                <td class="py-1 px-4">2000</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Children Fee
                </th>
                <td class="py-1 px-4"></td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-500 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  Upto 6 Years
                </th>
                <td class="py-1 px-4">0</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-500 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  6 Years +
                </th>
                <td class="py-1 px-4">1000</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Guest Fee
                </th>
                <td class="py-1 px-4"></td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-500 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  Guest
                </th>
                <td class="py-1 px-4">2500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Driver Fee
                </th>
                <td class="py-1 px-4"></td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-500 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                >
                  Driver
                </th>
                <td class="py-1 px-4">500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Maid Fee
                </th>
                <td class="py-1 px-4"></td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Maid
                </th>
                <td class="py-1 px-4">500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!----chart---->
    </div>
    <!-- data show the table -->
    <div
      class="h-auto py-2 md:py-6 xl:w-[100%] lg:w-[100%] md:w-[90%] md:m-auto md:mb-7 sm:w-[75%] my-3 w-[75%] shadow-lg p-7 shadow-indigo-500/40 mx-auto sm:mb-8 mb-8"
    >
      <div>
        <p class="ml-5 mb-5 text-center font-semibold text-green-700 text-xl">
          Check Your Invoice
        </p>
      </div>
      <div class="overflow-x-auto bg-slate-400 relative">
        <table
          class="w-full text-sm text-left bg-slate-500 text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="py-3 px-6">Participant</th>
              <th scope="col" class="py-3 px-6">Qty</th>
              <th scope="col" class="py-3 px-6 hidden md:block">Registration Fee</th>
              <th scope="col" class="py-3 px-6">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Member/Couple:<strong></strong>
              </th>
              <td class="py-4 px-6">{{ memberquan }}</td>
              <td class="py-4 px-6 hidden md:block">{{ memberfee }}</td>
              <td class="py-4 px-6">{{ memberfee }}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kids (Below 6)
              </th>
              <td class="py-4 px-6">{{ kidb6quan }}</td>
              <td class="py-4 px-6 hidden md:block">0</td>
              <td class="py-4 px-6">0</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kids (Above 6)
              </th>
              <td class="py-4 px-6">{{ kida6quan }}</td>
              <td class="py-4 px-6 hidden md:block">1000</td>
              <td class="py-4 px-6">{{ kida6fee }}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Driver/ Maid
              </th>
              <td class="py-4 px-6">{{ dri_maid_quan }}</td>
              <td class="py-4 px-6 hidden md:block">500</td>
              <td class="py-4 px-6">{{ dri_maid_fee }}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Guest
              </th>
              <td class="py-4 px-6">{{ guestsquanShow }}</td>
              <td class="py-4 px-6 hidden md:block">2500</td>
              <td class="py-4 px-6">{{ guestsfee }}</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Total
              </th>
              <td class="py-4 px-6">{{ totalquan }}</td>
              <td class="py-4 px-6 hidden md:block"></td>
              <td class="py-4 px-6">{{ totalfee }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="mt-6 block space-y-4 text-center sm:text-left md:flex md:space-y-0 md:space-x-4 root"
      >
        <button
          type="submit"
          @click="pay"
          class="text-white bg-green-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[20%] sm:w-auto sm:px-5 px-1 md:mr-0 mr-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pay Now
        </button>
        <button
          type="reCheck"
          @click="reCheck"
          class="text-white bg-green-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[20%] sm:w-auto sm:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Re Check
        </button>
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
/* leave transitions */
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
/* input:read-only {
  background-color: yellow;
} */
</style>

<script>
import { defineComponent, reactive, ref, toRaw, computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import Toast from "../components/Toast/Toast.vue";
import EventName from "../views/Home.vue";
import useEventsStore from "../store/events";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
import { inject, onMounted } from "vue";
const INFORMATION = {
  houses: [
    {
      name: "SELECT YOUR HOUSE NAME . . . !",
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
    const id = route.params.id;
    let submit_btn = ref("Submit");
    let name = ref("");
    let email = ref("");
    let address = ref("");
    let Phone = ref("");
    let batch = ref("");
    let fee = ref("");
    let quantity = ref("");
    let cadetNumber = ref("");
    let status = ref("0");
    let driver = ref(0);
    let maid = ref(0);
    let guest = ref(0);
    let kids_Upto = ref(0);
    let kids_plus = ref(0);
    let drivarsquan = ref("");
    let driversfee = ref(0);
    let maidsquan = ref("");
    let maidsfee = ref(0);
    let guestsquan = ref("");
    let guestsquanShow = ref(0);
    let guestsfee = ref(0);
    let kidb6quan = ref(0);
    let kida6quan = ref(0);
    let kida6fee = ref(0);
    let memberquan = ref(0);
    let memberfee = ref(0);
    let dri_maid_quan = ref(0);
    let dri_maid_fee = ref(0);
    let totalquan = ref(0);
    let totalfee = ref(0);
    let kid_B6_Quan = ref(0);
    let kid_A6_Quan = ref(0);
    let Kidsnames = ref("");
    let kid_age = 0;
    const kids_age = [];
    let kidsAge = ref("");
    let driver_name = "";
    const drivers_names = [];
    let driversnames = ref("");
    let maid_name = "";
    const maids_names = [];
    let maidsnames = ref("");
    let errors = [];
    let guests = [];
    let guests_update = [];
    let name_error = "";
    let email_error = [];
    let phoneNumber = ref("");
    let registrationId = ref("");
    let value = ref("");
    let kid = ref("");
    let spouse_id = ref("");
    let kid_Upto_id = ref("");
    let maid_id = ref("");
    let driver_id = ref("");
    let other_id = ref("");
    let kid_Plus_id = ref("");
    $cookies.get("phone");
    console.log($cookies.get("phone"), $cookies.get("token"));

    if ($cookies.get("phone") != "" && $cookies.get("token") != null) {
      if (drivarsquan.value != "" || maidsquan.value != "" || guestsquan.value != "") {
        driver.value = true;
        maid.value = true;
        guest.value = true;
      }

      submit_btn.value = "Update";
      const params = new URLSearchParams([
        ["phone", $cookies.get("phone")],
        ["token", $cookies.get("token")],
      ]);
      const state = reactive({
        registration: [],
      });
      axios.get(`${user_base_url}/api/registration/exist`, { params }).then((res) => {
        console.log(res);
        state.registration = res.data.registration;
        console.log("****", state.registration);
        name.value = state.registration.name;
        email.value = state.registration.email;
        address.value = state.registration.address;
        batch.value = state.registration.batch;
        cadetNumber.value = state.registration.cadet_number;
        Phone.value = state.registration.phone;
        status.value = state.registration.marital_status;
        data.house = state.registration.house;
        const purchase = JSON.parse(JSON.stringify(state.registration.guests));
        for (let data in Object.keys(purchase)) {
          value = purchase[data];
          if (value.type == "couple" || value.type == "single") {
            spouse_id.value = value.id;
          }
          if (value.type == "kidBelow") {
            if (value.quantity != "") {
              kid_Upto_id.value = value.id;
              kids_Upto.value = value.quantity;
            }
          }
          if (value.type == "kidAbove") {
            if (value.quantity != "") {
              kid_Plus_id.value = value.id;
              kids_plus.value = value.quantity;
            }
          }

          if (value.type == "maid") {
            if (value.quantity != "") {
              maid.value = true;
              maid_id.value = value.id;
              maid.value = value.quantity;
            }
          }
          if (value.type == "other") {
            if (value.quantity != "") {
              guest.value = true;
              other_id.value = value.id;
              console.log("iddd", other_id.value);
              guest.value = value.quantity;
              console.log(guest.value);
            }
          }
          if (value.type == "driver") {
            if (value.quantity != "") {
              driver.value = true;
              driver_id.value = value.id;
              driver.value = value.quantity;
            }
          }
        }
        registrationId.value = state.registration.id;
      });
    } else {
      submit_btn.value = "Submit";
    }
    Phone.value = $cookies.get("phone");
    let paymentIdentifier = null;
    let data = reactive({
      house: INFORMATION.houses[0].name,
    });

    //toast
    const showToast = ref(false);

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => (showToast.value = false), 4000);
    };

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
      console.log(status.value);
      console.log(submit_btn.value);
      phoneNumber = Phone.value;
      if (batch.value === "") {
        memberquan.value = 0;
        memberfee.value = 0;
      } else if (batch.value <= "57") {
        if (status.value === "married") {
          memberquan.value = 2;
          memberfee.value = 2200;
        } else {
          memberquan.value = 1;
          memberfee.value = 1500;
        }
      } else {
        if (status.value === "married") {
          memberquan.value = 2;
          memberfee.value = 2000;
        } else {
          memberquan.value = 1;
          memberfee.value = 1000;
        }
      }

      if (status.value === "married") {
        guests.push({
          quantity: 2,
          fee: memberfee.value,
          type: "couple",
        });
        if (kids_Upto.value === 0 || kids_plus.value === 0) {
          kidb6quan.value = 0;
        }
        if (kids_Upto !== "") {
          kidb6quan.value = parseInt(kids_Upto.value);
          guests.push({
            quantity: kidb6quan.value,
            fee: 0,
            type: "kidBelow",
          });
        }
        if (kids_plus !== "") {
          kida6quan.value = parseInt(kids_plus.value);
          guests.push({
            quantity: kida6quan.value,
            fee: 1000,
            type: "kidAbove",
          });
        }
      } else {
        guests.push({
          quantity: 1,
          fee: memberfee.value,
          type: "single",
        });
      }

      kida6fee.value = 1000 * kida6quan.value;

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

      //maid

      if (maid.value === 0) {
        maidsquan.value = 0;
      } else {
        maidsquan.value = parseInt(maid.value);
      }

      guests.push({
        quantity: maidsquan.value,
        fee: 500,
        type: "maid",
      });

      dri_maid_quan.value = parseInt(drivarsquan.value) + parseInt(maidsquan.value);
      dri_maid_fee.value =
        parseInt(drivarsquan.value) * 500 + parseInt(maidsquan.value) * 500;
      //guest

      if (guest.value === 0) {
        guestsquan.value = 0;
      } else {
        guestsquan.value = parseInt(guest.value);
      }

      guests.push({
        quantity: guestsquan.value,
        fee: 2500,
        type: "other",
      });
      guestsquanShow.value = guestsquan.value;
      guestsfee.value = 2500 * guestsquan.value;
      //total
      totalquan.value =
        memberquan.value +
        parseInt(kidb6quan.value) +
        parseInt(kida6quan.value) +
        dri_maid_quan.value +
        parseInt(guestsquan.value);

      totalfee.value =
        memberfee.value + kida6fee.value + dri_maid_fee.value + guestsfee.value;

      let form = {
        event_id: id,
        name: name.value,
        email: email.value,
        phone: Phone.value,
        batch: batch.value,
        cadet_number: cadetNumber.value,
        address: address.value,
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
          paymentIdentifier = Phone.value;
          $cookies.set("phone", Phone.value, 60 * 60 * 24);
          name.value = "";
          email.value = "";
          address.value = "";
          batch.value = "";
          cadetNumber.value = "";
          Phone.value = "";
          status.value = "0";
          kids_Upto.value = "0";
          kids_plus.value = "0";
          driver.value = "0";
          maid.value = "0";
          guest.value = "0";
          guests = "";
          data.house = INFORMATION.houses[0].name;

          submit_btn.value = "reCheck";
          alert("submited");
        })
        .catch(function (error) {
          if (error.response) {
            if (
              error?.response?.data?.errors.phone[0] ===
              "The phone has already been taken."
            ) {
              e.preventDefault();
              const params = new URLSearchParams([["phone", phoneNumber]]);
              axios
                .post(`${user_base_url}/api/registration/exist`, { params })
                .then((res) => {
                  console.log(res);
                });
            } else {
              triggerToast();
              for (let err in error?.response?.data?.errors) {
                errors.push(error.response.data.errors[err][0]);

                email_error = errors;
              }
              submit_btn.value = "Submit";
              errors = [];
            }
          }
        });
    };

    const state = reactive({
      registration: [],
    });

    const reCheck = async (e) => {
      submit_btn.value = "Update";
      axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      e.preventDefault();
      console.log(phoneNumber);
      ///api get

      const params = new URLSearchParams([["phone", $cookies.get("phone")]]);

      await axios
        .get(`${user_base_url}/api/registration/update`, { params })
        .then((res) => {
          state.registration = res.data.data;
          console.log(...state.registration.guests);
          name.value = state.registration.name;
          email.value = state.registration.email;
          address.value = state.registration.address;
          batch.value = state.registration.batch;
          cadetNumber.value = state.registration.cadet_number;
          Phone.value = state.registration.phone;
          status.value = state.registration.marital_status;
          data.house = state.registration.house;
          const purchase = JSON.parse(JSON.stringify(state.registration.guests));

          for (let data in Object.keys(purchase)) {
            value = purchase[data];
            if (value.type == "couple" || value.type == "single") {
              spouse_id.value = value.id;
            }
            if (value.type == "kidBelow") {
              kid_Upto_id.value = value.id;
              kids_Upto.value = value.quantity;
            }
            if (value.type == "kidAbove") {
              kid_Plus_id.value = value.id;
              kids_plus.value = value.quantity;
            }
            if (value.type == "maid") {
              maid_id.value = value.id;
              maid.value = value.quantity;
            }
            if (value.type == "other") {
              other_id.value = value.id;
              guest.value = value.quantity;
              console.log(guestsquan.value);
            }
            if (value.type == "driver") {
              driver_id.value = value.id;
              driver.value = value.quantity;
            }
          }

          registrationId.value = state.registration.id;
        });
      document.getElementById("phone").readOnly = true;
      document.getElementById("email").readOnly = true;
    };

    const update = (e) => {
      e.preventDefault();
      if (batch.value === "") {
        memberquan.value = 0;
        memberfee.value = 0;
      } else if (batch.value <= "57") {
        if (status.value === "married") {
          memberquan.value = 2;
          memberfee.value = 2200;
        } else {
          memberquan.value = 1;
          memberfee.value = 1500;
        }
      } else {
        if (status.value === "married") {
          memberquan.value = 2;
          memberfee.value = 2000;
        } else {
          memberquan.value = 1;
          memberfee.value = 1000;
        }
      }

      if (status.value === "married") {
        guests_update.push({
          id: spouse_id.value,
          quantity: 2,
          fee: memberfee.value,
          type: "couple",
        });
        if (kids_Upto.value === 0 || kids_plus.value === 0) {
          kidb6quan.value = 0;
        }
        if (kids_Upto !== "") {
          kidb6quan.value = parseInt(kids_Upto.value);
          guests_update?.push({
            id: kid_Upto_id.value,
            quantity: kidb6quan.value,
            fee: 0,
            type: "kidBelow",
          });
        }
        if (kids_plus !== "") {
          kida6quan.value = parseInt(kids_plus.value);
          guests_update?.push({
            id: kid_Plus_id.value,
            quantity: kida6quan.value,
            fee: 1000,
            type: "kidAbove",
          });
        }

        kida6fee.value = 1000 * kida6quan.value;
      } else {
        guests_update?.push({
          id: spouse_id.value,
          quantity: 1,
          fee: memberfee.value,
          type: "single",
        });
      }
      console.log(guests_update);

      kida6fee.value = 1000 * kida6quan.value;

      // //driver

      if (driver.value == 0) {
        driver.value = 0;
      } else {
        parseInt(driver.value);
        guests_update.push({
          id: driver_id.value,
          quantity: parseInt(driver.value),
          fee: 500,
          type: "driver",
        });
      }
      console.log(drivarsquan.value);

      // //maid

      if (maid.value == 0) {
        maid.value = 0;
      } else {
        parseInt(maid.value);
      }

      guests_update?.push({
        id: maid_id.value,
        quantity: parseInt(maid.value),
        fee: 500,
        type: "maid",
      });

      dri_maid_quan.value = parseInt(driver.value) + parseInt(maid.value);
      dri_maid_fee.value = parseInt(driver.value) * 500 + parseInt(maid.value) * 500;

      // //guest

      if (guest.value === "") {
        guest.value = 0;
      } else {
        parseInt(guest.value);
      }

      guests_update?.push({
        id: other_id.value,
        quantity: parseInt(guest.value),
        fee: 2500,
        type: "other",
      });
      guestsquanShow.value = parseInt(guest.value);
      guestsfee.value = 2500 * parseInt(guest.value);
      console.log(status.value);
      //total
      totalquan.value =
        memberquan.value +
        parseInt(kidb6quan.value) +
        parseInt(kida6quan.value) +
        dri_maid_quan.value +
        guestsquanShow.value;
      console.log(
        "ssss",
        memberquan.value,
        parseInt(kidb6quan.value),
        parseInt(kida6quan.value),
        dri_maid_quan.value,
        guestsquanShow.value
      );
      totalfee.value =
        memberfee.value + kida6fee.value + dri_maid_fee.value + guestsfee.value;

      let repost = {
        id: registrationId.value,
        name: name.value,
        email: email.value,
        // phone: Phone.value,
        batch: batch.value,
        cadet_number: cadetNumber.value,
        address: address.value,
        house: data.house,
        marital_status: status.value,
        total: totalfee.value,
        quantity: totalquan.value,
        guests_update,
      };
      console.log(repost);
      axios
        .patch(`${user_base_url}/api/${registrationId.value}/update`, repost)
        .then((res) => {
          paymentIdentifier = Phone.value;
          name.value = "";
          email.value = "";
          address.value = "";
          batch.value = "";
          cadetNumber.value = "";
          Phone.value = "";
          status.value = "0";
          driver.value = "0";
          maid.value = "0";
          guest.value = "0";
          guests_update = "";
          data.house = INFORMATION.houses[0].name;
          submit_btn.value = "Submit";
          alert("updated");
        })
        .catch(function (error) {
          if (error.response) {
            triggerToast();

            for (let err in error?.response?.data?.errors) {
              errors.push(error.response.data.errors[err][0]);
              email_error = errors;
            }
            submit_btn.value = "Update";
            errors = [];
          }
        });
      console.log(paymentIdentifier);
    };
    return {
      event,
      kid,
      submit_btn,
      kid_Plus_id,
      guests_update,
      kid_Upto_id,
      maid_id,
      driver_id,
      other_id,
      value,
      update,
      phoneNumber,
      registrationId,
      state,
      id,
      reCheck,
      EventName,
      quantity,
      name_error,
      email_error,
      errors,
      showToast,
      triggerToast,
      paymentIdentifier,
      id,
      route,
      name,
      email,
      Phone,
      cadetNumber,
      address,
      batch,
      status,
      driver,
      maid,
      guest,
      data,
      fee,
      kids_Upto,
      kids_plus,
      kid_B6_Quan,
      kid_A6_Quan,
      Kidsnames,
      kid_age,
      kidsAge,
      kids_age,
      maid_name,
      maids_names,
      maidsnames,
      driver_name,
      drivers_names,
      driversnames,
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
      kidb6quan,
      kida6quan,
      kida6fee,
      totalquan,
      totalfee,
      ...INFORMATION,
      submit,
      pay,
    };
  },
});
</script>
