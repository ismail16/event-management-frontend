<template>
  <Header></Header>
  <div class="font-serif">
    <div
      class="w-[100%] md:h-[300px] 2xl:px-44 xl:px-16 lg:px-16 h-[150px] m-auto bg-black z-10 text-white flex flex-col justify-center xl:items-start items-center"
    >
      <h2 class="text-white text-3xl mb-3">Blog</h2>
      <div
        class="flex items-center xl:justify-start justify-evenly lg:mt-4 w-[50%] md:w-[33%] xl:w-full"
      >
        <RouterLink to="/" class="cursor-pointer">
          <a href="" class="text-lime-600 font-bold">Home</a>
        </RouterLink>
        <font-awesome-icon
          icon="fa-solid fa-angle-right"
          class="font-bold text-white hover:text-xl mr-1"
        />

        <p>Blog</p>
      </div>
    </div>
    <!-- <div class="flex lg:flex-row flex-col 2xl:px-[5%] xl:px-[2%] lg:px-[0%] md:px-[8%]"> -->
    <div class="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-48">
      <div
        class="basis-[100%] md:pb-10 md:pt-12 lg:order-first order-last text-left pt-10 md:px-0 px-16"
      >
        <h1>
          <span
            class="text-md font-semibold tracking-wide font-serif text-justify inline-block"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati
            quaerat nostrum est cumque autem. Deserunt harum deleniti exercitationem illo.
            Laboriosam ipsum eveniet unde hic! Assumenda quae ea quasi inventore adipisci
            magni temporibus minima voluptate. Cum, vitae. Sint facere est iste incidunt
            vel quod odit at fugiat! Quo earum maxime, deleniti unde consectetur
            voluptatibus autem minima ad, mollitia officia laboriosam ipsum! Repellat
            temporibus in maiores, autem delectus laboriosam odit deleniti libero
            asperiores et accusamus, debitis tempora sequi quae harum? Velit, quaerat. Ut
            quo perferendis in itaque praesentium deserunt architecto odit molestias
            ducimus, ea ad, illo magni obcaecati corrupti maiores voluptas!
          </span>
        </h1>
        <p class="text-gray-600 py-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rerum esse
          atque praesentium dolores doloribus voluptatum maxime, possimus explicabo natus
          a ratione tenetur facilis recusandae reprehenderit voluptates quod ipsa.
          Maiores.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "../Header/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
  setup() {},
});
</script>

<style></style>
