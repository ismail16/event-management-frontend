<script></script>

<template>
  <div class="basis-[90%] z-10 flex justify-between absolute w-[100%] mt-1 px-4">
    <img src="../../assets/logo-white.png" class="z-11 w-44 pt-2" alt="img" />

    <nav class="hidden lg:block">
      <ul class="flex justify-end mx-auto py-2">
        <!-- Navbar menu content here -->
        <li
          class="md:px-5 px-2 py-2 font-semibold text-white rounded-md hover:text-[#00a651] active:text-[#00a651] mx-1"
        >
          <a class="text-sm"><RouterLink to="/">Home</RouterLink></a>
        </li>
        <li
          class="md:px-5 px-2 py-2 font-semibold text-white rounded-md hover:text-[#00a651] active:text-[#00a651] mx-1"
        >
          <a class="text-sm"><RouterLink to="/blog">Blog</RouterLink></a>
        </li>
        <li
          class="md:px-5 px-2 py-2 font-semibold text-white rounded-md hover:text-[#00a651] active:text-[#00a651] mx-1"
        >
          <a class="text-sm" href="https://www.octaglory.com/" target="_blank">Shop</a>
        </li>
        <li
          class="md:px-5 px-2 py-2 font-semibold text-white flex items-center rounded-md hover:text-[#00a651] active:text-[#00a651] mx-1"
        >
          <span class="material-symbols-outlined mr-2"> person </span>
          <a class="text-sm" href="/admin">Sing In | Register</a>
        </li>
        <li
          class="md:px-5 px-2 py-1 my-auto bg-[#00a651] hover:bg-white hover:border hover:border-[#00a651] flex items-center font-semibold text-white rounded-md hover:text-[#00a651] active:text-[#00a651] mx-1"
        >
          <span class="material-symbols-outlined"> add </span>
          <a class="text-sm" href="/admin">Create Event</a>
        </li>
      </ul>
    </nav>
    <!-- drawer init and show -->
    <div class="text-center text-white flex lg:hidden">
      <button
        class="font-medium rounded-lg text-sm"
        type="button"
        data-drawer-target="drawer-navigation"
        data-drawer-show="drawer-navigation"
        aria-controls="drawer-navigation"
      >
        <span class="material-symbols-outlined text-xl"> menu </span>
      </button>
      <li
        class="md:px-2 px-1 py-2 font-semibold text-white flex items-center rounded-md hover:text-[#00a651] active:text-[#00a651]"
      >
        <span class="material-symbols-outlined mr-2"> person </span>
        <a class="text-sm flex" href="/admin"
          >Sing In <span class="text-sm md:block hidden ml-2"> | Register</span></a
        >
      </li>
    </div>
  </div>

  <!-- drawer component -->
  <div
    id="drawer-navigation"
    class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800"
    tabindex="-1"
    aria-labelledby="drawer-navigation-label"
  >
    <h5
      id="drawer-navigation-label"
      class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
      Menu
    </h5>

    <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path
                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
              />
              <path
                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">
              <RouterLink to="/">Home</RouterLink>
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path
                d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap"
              ><RouterLink to="/blog">Blog</RouterLink></span
            >
          </a>
        </li>
        <li>
          <a
            href="https://www.octaglory.com/"
            target="_blank"
            type="button"
            class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path
                d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
              />
            </svg>
            <span class="flex-1 ml-3 text-left whitespace-nowrap">Shop</span>
          </a>
        </li>

        <li
          class="md:px-5 px-2 py-1 my-auto bg-[#00a651] hover:bg-white hover:border hover:border-[#00a651] text-center flex items-center font-semibold text-white rounded-md hover:text-[#00a651] active:text-[#00a651] mx-1"
        >
          <span class="material-symbols-outlined"> add </span>
          <a class="text-sm" href="/admin">Create Event</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
