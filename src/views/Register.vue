<template>
  <div class="h-full">
    <div class="flex flex-col md:flex-row justify-between h-auto">
      <div class="basis-[90%] md:order-none order-2">
        <div
          class="bg-green-50 px-3 sm:mt-3 mt-11 py-1 h-auto flex items-center rounded-lg"
        >
          <h1 class="text-green-700 font-bold text-4xl mx-auto">
            OFA ANNUAL PICNIC <span class="text-amber-600">2022</span>
          </h1>
        </div>
        <div class="h-auto py-6 md:w-[90%] w-3/4 mb-6 mt-8 md:mt-24 m-auto">
          <!-- <div>
            <p>Fill up your Informatioon</p>
          </div> -->
          <form @submit.prevent="submit">
            <div class="grid md:grid-cols-2 md:gap-6 md:mb-8">
              <!-- <div class="text-center md:text-left">
                <label
                  for="countries"
                  class="block mb-5 text-lg font-semibold text-gray-900 dark:text-gray-400"
                  >Registation Type</label
                >
                <input
                  type="radio"
                  id="student"
                  name="member"
                  v-model="member"
                  value="Student"
                  class="mr-2"
                />
                <label for="student" class="pr-8">Student</label>

                <input
                  type="radio"
                  id="earner"
                  name="member"
                  v-model="member"
                  value="Earner"
                  class="mr-2"
                />
                <label for="earner">Earner</label>
              </div> -->
            </div>
            <div class="mt-5 text-center md:text-left">
              <p class="font-semibold mb-4">Fill up your Informatioon</p>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                v-model="name"
                type="text"
                name="floating_name"
                id="floating_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                for="floating_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Cadet Name</label
              >
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                v-model="email"
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Email address</label
              >
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                v-model="address"
                type="text"
                name="floating_address"
                id="floating_address"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                for="floating_address"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Address</label
              >
            </div>

            <div class="grid md:grid-cols-2 mt-4 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  v-model="batch"
                  type="number"
                  name="floating_batch"
                  id="floating_batch"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_batch"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Batch</label
                >
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  v-model="cadetNumber"
                  type="text"
                  name="floating_cadetNumber"
                  id="floating_cadetNumber"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_cadetNumber"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Cadet Number</label
                >
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  v-model="Phone"
                  type="phone"
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Phone number</label
                >
              </div>
              <div class="md:grid-cols-2 text-center sm:text-left mb-5 sm:space-x-5">
                <div>
                  <label class="rounded-lg">
                    <select
                      v-model="data.house"
                      class="text-white text-[13px] sm:text-base font-bold focus:none focus:outline-none focus:ring-blue-300 bg-sky-500 text-t rounded-lg border-none"
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
                <!-- <div>
                  <label>
                    <select
                      v-model="data.shirt"
                      class="text-white font-bold focus:none focus:outline-none focus:ring-blue-300 bg-sky-500 rounded-lg border-none"
                    >
                      <option
                        class="w-44 bg-indigo-50 text-bold rounded-lg text-black divide-y divide-gray-100 shadow dark:bg-gray-700"
                        v-for="(shirt, i) in shirts"
                        :value="shirt['name']"
                        :key="i"
                      >
                        {{ shirt["name"] }}
                      </option>
                    </select>
                  </label>
                </div> -->
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="text-center sm:text-left">
                <label
                  for="Mstatus"
                  class="block mb-2 text-sm text-gray-900 dark:text-gray-400 font-semibold"
                  >Marital Status</label
                >
                <input
                  type="radio"
                  id="single"
                  name="Mstatus"
                  v-model="status"
                  value="single"
                  class="mr-2"
                />
                <label for="single" class="pr-8">Single</label>

                <input
                  type="radio"
                  id="married"
                  name="Mstatus"
                  v-model="status"
                  value="married"
                  class="mr-2"
                />
                <label for="married">Married</label>
              </div>
              <div v-if="status === 'married'" class="relative z-0 mt-6 w-full group">
                <input
                  v-model="spouse.name"
                  type="text"
                  name="floating_spouseName"
                  id="floating_spouseName"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_spouseName"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Spouse Name</label
                >
              </div>
            </div>
            <div v-if="status === 'married'" class="mt-4">
              <div v-for="(item, index) in kids" :key="item">
                <div class="flex flex-wrap w-full">
                  <div class="2xl:w-2/5 w-[30%]">
                    <div class="relative z-0 mt-6 w-full group pr-4">
                      <input
                        v-model="item.name"
                        type="text"
                        name="kidName"
                        id="kidName"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="kidName"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Kid name</label
                      >
                    </div>
                  </div>
                  <div class="2xl:w-2/5 w-[30%]">
                    <div class="relative z-0 mt-6 w-full group pr-4">
                      <input
                        v-model="item.age"
                        type="number"
                        name="kidAge"
                        id="kidAge"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="kidAge"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Kid age</label
                      >
                    </div>
                  </div>
                  <div class="2xl:w-1/5 w-2/5 space-x-1 xl:space-x-5 flex items-end">
                    <button
                      type="button"
                      class="bg-red-400 py-2 px-4 text-white"
                      @click="removeRow(index)"
                    >
                      delete
                    </button>
                    <button
                      @click="addRow"
                      class="bg-blue-400 py-2 px-1 sm:px-4 ml-0[important] text-white"
                    >
                      Add more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Driver -->

            <div class="mt-4">
              <div v-for="(item, index) in drivers" :key="item">
                <div class="flex flex-wrap w-full">
                  <div class="w-1/2 2xl:w-2/5">
                    <div class="relative z-0 mt-6 w-full group pr-4">
                      <input
                        v-model="item.name"
                        type="text"
                        name="DriverName"
                        id="DriverName"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="DriverName"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Driver Name</label
                      >
                    </div>
                  </div>
                  <div class="2xl:w-1/5 w-1/2 lg:space-x-5 space-x-1 flex items-end">
                    <button
                      type="button"
                      class="bg-red-400 py-2 px-4 text-white"
                      @click="DriremoveRow(index)"
                    >
                      delete</button
                    >&nbsp;
                    <button
                      @click="DriaddRow"
                      class="bg-blue-400 py-2 px-2 sm:px-4 text-white"
                    >
                      Add more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Maid -->

            <div class="mt-4">
              <div v-for="(item, index) in maids" :key="item">
                <div class="flex flex-wrap w-full">
                  <div class="2xl:w-2/5 w-1/2">
                    <div class="relative z-0 mt-6 w-full group pr-4">
                      <input
                        v-model="item.name"
                        type="text"
                        name="MaidName"
                        id="MaidName"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="MaidName"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Maid Name</label
                      >
                    </div>
                  </div>
                  <div class="2xl:w-1/5 w-1/2 lg:space-x-5 space-x-1 flex items-end">
                    <button
                      type="button"
                      class="bg-red-400 py-2 px-4 text-white"
                      @click="MaidremoveRow(index)"
                    >
                      delete</button
                    >&nbsp;
                    <button
                      @click="MaidaddRow"
                      class="bg-blue-400 py-2 px-2 sm:px-4 text-white"
                    >
                      Add more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Souvenir -->
            <!-- <div class="mt-4">
              <div v-for="(item, index) in souvenir" :key="item">
                <div class="flex flex-wrap w-full">
                  <div class="w-1/2 2xl:w-2/5">
                    <div class="relative z-0 mt-6 w-full group pr-4">
                      <input
                        v-model="item.name"
                        type="text"
                        name="SouvenirName"
                        id="SouvenirName"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="SouvenirName"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Souvenir Name</label
                      >
                    </div>
                  </div>
                  <div class="2xl:w-1/5 w-1/2 lg:space-x-5 space-x-1 flex items-end">
                    <button
                      type="button"
                      class="bg-red-400 py-2 px-4 text-white"
                      @click="SouvenirremoveRow(index)"
                    >
                      delate</button
                    >&nbsp;
                    <button
                      @click="SouveniraddRow"
                      class="bg-blue-400 py-2 px-2 sm:px-4 text-white"
                    >
                      Add more
                    </button>
                  </div>
                </div>
              </div>
            </div> -->

            <!-- Guest -->

            <div class="mt-4">
              <div v-for="(item, index) in guest" :key="item">
                <div class="flex flex-wrap w-full">
                  <div class="w-1/2 2xl:w-2/5">
                    <div class="relative z-0 mt-6 w-full group pr-4">
                      <input
                        v-model="item.name"
                        type="text"
                        name="GuestName"
                        id="GuestName"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="GuestName"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Guest Name</label
                      >
                    </div>
                  </div>
                  <div class="2xl:w-1/5 w-1/2 lg:space-x-5 space-x-1 flex items-end">
                    <button
                      type="button"
                      class="bg-red-400 py-2 px-4 text-white"
                      @click="GuestremoveRow(index)"
                    >
                      delete</button
                    >&nbsp;
                    <button
                      @click="GuestaddRow"
                      class="bg-blue-400 py-2 px-2 sm:px-4 text-white"
                    >
                      Add more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="sm:text-left text-center">
              <button
                @click="submit"
                class="mt-6 text-white bg-indigo-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w- w-50% sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <!----chart---->
      <!-- <div class="order-1">
        <div
          class="overflow-x-auto top-[10px] md:left-[-10px] sm:ml-[30px] left-[-10px] relative flex justify-center"
        >
          <table
            class="md:w-28 w-[75%] text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Student
                </th>
                <td class="py-1 px-4">3000</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Earner
                </th>
                <td class="py-1 px-4">5000</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Spouse
                </th>
                <td class="py-1 px-4">2500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Kids (below 5)
                </th>
                <td class="py-1 px-4">0</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Kids (Above 5)
                </th>
                <td class="py-1 px-4">1000</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Kids (Above 18)
                </th>
                <td class="py-1 px-4">2500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Driver
                </th>
                <td class="py-1 px-4">1500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Maid
                </th>
                <td class="py-1 px-4">1500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Souvenir
                </th>
                <td class="py-1 px-4">2500</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-1 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Guest
                </th>
                <td class="py-1 px-4">5000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->
      <!----chart---->
    </div>
    <!-- data show the table -->
    <div class="h-auto py-2 md:py-6 md:w-[90%] sm:w-4/5 mb-6 mt-11 sm:mt-24 m-auto">
      <div>
        <p class="ml-5 mb-5 text-center md:text-left font-semibold">Check Your Invoice</p>
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
              <th scope="col" class="py-3 px-6">Registration Fee</th>
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
              <td class="py-4 px-6">{{ memberfee }}</td>
              <td class="py-4 px-6">{{ memberfee }}</td>
            </tr>
            <!-- <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Spouse
              </th>
              <td class="py-4 px-6">{{ spousequan }}</td>
              <td class="py-4 px-6">2500</td>
              <td class="py-4 px-6">{{ spousefee }}</td>
            </tr> -->
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kids (Below 5)
              </th>
              <td class="py-4 px-6">{{ kidb6quan }}</td>
              <td class="py-4 px-6">0</td>
              <td class="py-4 px-6">0</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kids (Above 5)
              </th>
              <td class="py-4 px-6">{{ kida6quan }}</td>
              <td class="py-4 px-6">1000</td>
              <td class="py-4 px-6">{{ kida6fee }}</td>
            </tr>
            <!-- <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kid (Above 18)
              </th>
              <td class="py-4 px-6">{{ kida18quan }}</td>
              <td class="py-4 px-6">2500</td>
              <td class="py-4 px-6">{{ kida18fee }}</td>
            </tr> -->
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Driver/ Maid
              </th>
              <td class="py-4 px-6">{{ dri_maid_quan }}</td>
              <td class="py-4 px-6">500</td>
              <td class="py-4 px-6">{{ dri_maid_fee }}</td>
            </tr>
            <!-- <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Maid
              </th>
              <td class="py-4 px-6">{{ maidquan }}</td>
              <td class="py-4 px-6">1500</td>
              <td class="py-4 px-6">{{ maidfee }}</td>
            </tr> -->
            <!-- <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Souvenir
              </th>
              <td class="py-4 px-6">{{ souvenirquan }}</td>
              <td class="py-4 px-6">2500</td>
              <td class="py-4 px-6">{{ souvenirfee }}</td>
            </tr> -->
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Guest
              </th>
              <td class="py-4 px-6">{{ guestsquan }}</td>
              <td class="py-4 px-6">2500</td>
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
              <td class="py-4 px-6"></td>
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
          class="text-white bg-green-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[16%] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pay Now
        </button>

        <!-- <teleport to=".modals-container">
          <div class="modal" v-if="modalOpen">
            <Detail
              @close="modalOpen = false"
              title="Congrstulstion, Your Registation is complete!"
              msg="Thank You"
            ></Detail>
          </div>
        </teleport> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>

<!---<script setup>
// import { ref } from "vue";
// import Detail from "./Details.vue";

// const modalOpen = ref(false);
//
</script>--->

<script>
import { defineComponent, reactive, ref, watch } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

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
  setup() {
    const route = useRoute();
    const id = route.params.id;
    console.log(id);
    let name = ref("");
    let email = ref("");
    let address = ref("");
    let Phone = ref("");
    let batch = ref("");
    let fee = ref("");
    let cadetNumber = ref("");
    let status = ref("");
    // const modalOpen = ref(false);
    let spouse = reactive([{ name: "" }]);
    //let souvenir = reactive([{ name: "" }]);
    let guest = reactive([{ name: "" }]);
    let drivers = reactive([{ name: "" }]);
    let maids = reactive([{ name: "" }]);
    const kids = reactive([{ name: "", age: "" }]);
    let drivarsquan = ref(0);
    let driversfee = ref(0);
    let maidsquan = ref(0);
    let maidsfee = ref(0);
    let guestsquan = ref(0);
    let guestsfee = ref(0);
    // let souvenirquan = ref(0);
    // let souvenirfee = ref(0);
    let kidb6quan = ref(0);
    let kida6quan = ref(0);
    let kida6fee = ref(0);
    // let kida18quan = ref(0);
    // let kida18fee = ref(0);
    let kidsage = ref(kids.age);
    // let spousefee = ref(0);
    // let spousequan = ref(0);
    let memberquan = ref(0);
    let memberfee = ref(0);
    let dri_maid_quan = ref(0);
    let dri_maid_fee = ref(0);
    let totalquan = ref(0);
    let totalfee = ref(0);
    let kid_name = "";
    const kids_names = [];
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
    // let guest_name = "";
    // const guests_names = [];
    // let guestsnames = ref("");

    let guests = [];

    const addRow = () => {
      kids.push({ name: "", age: "" });
    };

    const removeRow = (index) => {
      if (kids.length > 1) {
        kids.splice(index, 1);
      }
    };

    // driver
    const DriaddRow = () => {
      drivers.push({ name: "" });
    };

    const DriremoveRow = (index) => {
      if (drivers.length > 0) {
        drivers.splice(index, 1);
      }
    };

    // maid

    const MaidaddRow = () => {
      maids.push({ name: "" });
    };

    const MaidremoveRow = (index) => {
      if (maids.length > 0) {
        maids.splice(index, 1);
      }
    };

    // Guest
    const GuestaddRow = () => {
      guest.push({ name: "" });
    };

    const GuestremoveRow = (index) => {
      if (guest.length > 0) {
        guest.splice(index, 1);
      }
    };

    let data = reactive({
      house: INFORMATION.houses[0].name,
    });

    watch(() => data.house);

    const submit = (e) => {
      // for (let i = 0; i <= kids.length; i++) {
      //   console.log(kids[i].name);
      //   console.log(kids[i].age);
      // }
      e.preventDefault();
      // name.value = "";
      // email.value = "";
      // address.value = "";
      // batch.value = "";
      // cadetNumber.value = "";
      // Phone.value = "";
      // //status.value = "";
      // spouse.values = "";

      console.log(drivers);
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
          name: spouse.name,
          fee: memberfee.value,
          type: "spouse",
        });
        spouse.name = "";
        for (let i = 0; i < kids.length; i++) {
          if (kids[0].name === "") {
            kida6quan.value = 0;
            kidb6quan.value = 0;
          } else if (kids[i].age <= 6) {
            kidb6quan.value++;

            kids[i].age;
          } else {
            kida6quan.value++;
          }
          // if (kids[0].name !== "") {
          //   kid_name = kids[i].name;
          //   kid_age = kids[i].age;
          //   kidsAge = kids_age.push(kid_age);
          //   Kidsnames = kids_names.push(kid_name);
          // }
          let fee = kids[i].age <= 6 ? 0 : 1000;
          guests.push({
            name: kids[i].name,
            age: kids[i].age,
            fee: fee,
            type: "kid",
          });
          kids[i].name = "";
          kids[i].age = "";

          //guests =
        }
      }
      // console.log(kids_names);
      //  console.log(kids_age);

      // kida6fee.value = 1000 * kida6quan.value;

      //driver
      for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].name === "") {
          drivarsquan.value = 0;
          guests = "";
        } else {
          drivarsquan.value = Object.keys(drivers).length;
        }

        //driver_name = drivers[i].name;
        // driversnames = drivers_names.push(driver_name);

        guests.push({
          name: drivers[i].name,
          fee: 500,
          type: "driver",
        });
        drivers[i].name = "";
      }

      //  driversfee.value = 500 * drivarsquan.value;
      // console.log(drivers_names);
      //maid
      for (let i = 0; i < maids.length; i++) {
        if (maids[i].name === "") {
          maidsquan.value = 0;
        } else {
          maidsquan.value = Object.keys(maids).length;
        }
        //   maid_name = maids[i].name;
        //  maidsnames = maids_names.push(maid_name);

        guests.push({
          name: maids[i].name,
          fee: 500,
          type: "maid",
        });
        maids[i].name = "";
      }
      // console.log(maids[0].name);
      // maidsfee.value = 500 * maidsquan.value;

      // console.log(maids_names);

      dri_maid_quan.value = drivarsquan.value + maidsquan.value;
      dri_maid_fee.value = drivarsquan.value * 500 + maidsquan.value * 500;

      //guest
      for (let i = 0; i < guest.length; i++) {
        if (guest[i].name === "") {
          guestsquan.value = 0;
        } else {
          guestsquan.value = Object.keys(guest).length;
        }
        // guest_name = guests[0].name;
        // guestsnames = guests_names.push(guest_name);

        guests.push({
          name: guest[i].name,
          fee: 2500,
          type: "other",
        });
        guest[i].name = "";
      }
      // console.log(guests_names);
      guestsfee.value = 2500 * guestsquan.value;

      //souvenir
      // for (let i = 0; i < souvenir.length; i++) {
      //   if (souvenir[i].name === "") {
      //     souvenirquan.value = 0;
      //   } else {
      //     souvenirquan.value = Object.keys(guest).length;
      //   }
      // }
      // souvenirfee.value = 2500 * souvenirquan.value;

      //total
      totalquan.value =
        memberquan.value +
        kidb6quan.value +
        kida6quan.value +
        dri_maid_quan.value +
        guestsquan.value;

      totalfee.value =
        memberfee.value + kida6fee.value + dri_maid_fee.value + guestsfee.value;

      console.log(guests);

      let form = {
        event_id: id,
        cadet_name: name.value,
        email: email.value,
        phone: Phone.value,
        batch: batch.value,
        cadet_number: cadetNumber.value,
        address: address.value,
        house: data.house,
        //total: totalfee.value,
        guests,
      };

      // console.log("=====", route?.params);

      axios
        .post(`http://event.proticchobi.xyz/api/${id}/registration`, form)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          error.response.status;
        });
      // guests = "";
    };

    return {
      id,
      route,
      name,
      email,
      Phone,
      cadetNumber,
      address,
      batch,
      status,
      data,
      fee,
      kids,
      kid_name,
      kids_names,
      Kidsnames,
      kid_age,
      kidsAge,
      kids_age,
      maids,
      maid_name,
      maids_names,
      maidsnames,
      //  souvenir,
      drivers,
      driver_name,
      drivers_names,
      driversnames,
      guest,
      guests,
      memberquan,
      memberfee,
      spouse,
      // spousefee,
      // spousequan,
      drivarsquan,
      maidsquan,
      maidsfee,
      driversfee,
      guestsquan,
      guestsfee,
      dri_maid_quan,
      dri_maid_fee,
      // souvenirquan,
      //  souvenirfee,
      kidb6quan,
      kida6quan,
      kida6fee,
      // kida18quan,
      // kida18fee,
      kidsage,
      totalquan,
      totalfee,
      addRow,
      removeRow,
      DriaddRow,
      DriremoveRow,
      MaidaddRow,
      MaidremoveRow,
      // SouveniraddRow,
      // SouvenirremoveRow,
      GuestaddRow,
      GuestremoveRow,
      ...INFORMATION,
      submit,
    };
  },
});
</script>
