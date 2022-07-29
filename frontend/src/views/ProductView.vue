<template>
  <div class="diekrech">
    <section class="text-gray-700 body-font overflow-hidden bg-white">
  <div v-if="!loading" class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"  src="@/assets/images/Otto-dk-scheld.png">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-green text-sm title-font tracking-widest">Foodsteps</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{product.name}}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Bewertungen</span>
          </span>
          
        </div>
        <div>
          <ul class="text-xl list-disc space-y-2">
            <li v-for="item in product.details[0].content" :key="item">
              {{item}}
            </li>
          </ul>
        </div>
        <div class=" mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 space-y-4">
          <div class="justify-end flex ml-6 items-center">
            <span class="mr-3">Wéi vill Erwuessener?</span>
            <div class=" relative">
              <select v-model="selectedAdults" class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
          <div class="justify-end flex ml-6 items-center">
            <span class="mr-3">Wéi vill Kanner?</span>
            <div class="relative">
              <select v-model="selectedChildren" class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
          <div class="justify-end flex ml-6 items-center">
            <span class="mr-3">Sprooch vum Dokument?</span>
            <div class="relative">
              <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                <option>Lëtzebuergesch</option>
                <option>Franséisch</option>
                <option>Däitsch</option>
                <option>Englesch</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="my-4 title-font font-medium text-2xl text-gray-900">{{calculatePrice}}</span>
          <button
              class="ml-auto shadow bg-[#a9bc93] hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 my-4 px-4 rounded"
              type="button">
              Bezuelen
            </button>
          
        </div>
      </div>
      <CProductTab :product="product" class="mt-16"></CProductTab>
    </div>
    
  </div>
</section>
  </div>
</template>

<script>
import CProductTab from '../components/CProductTab.vue'

const axios = require('axios');

export default {
    name: "ProductDiekrechView",
    components: {
        CProductTab
    },
    data() {
      return {
        loading: true,
        product: null,
        selectedChildren: 0,
        selectedAdults: 0,
      }
    },
    mounted: function() {
        axios
          .get('http://192.168.178.129:3000/api/product/' + this.$route.params.id)
          .then(response => {
            this.product = response.data;
          })
          .finally(() => {
            this.loading = false;
          });
      },
      computed: {
        calculatePrice: function() {
          return (this.product.skus['child'].price*this.selectedChildren + this.product.skus['adult'].price*this.selectedAdults).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'}); 
        }
      }
}
</script>
