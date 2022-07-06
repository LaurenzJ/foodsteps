<template>
  <div class="home">
    <div class="grid place-items-center space-y-16 px-6">
      <h1>Home</h1>
      <div class="w-1/2">
        <h2 class="font-sans text-center ">“Eng kulinaresch Entdeckungsrees </h2>
        <h2 class="font-sans text-center ">duerch eise klenge Grand-Duché”</h2>
      </div>

      <div class="w-2/5 border-b border-solid border-1 border-black"></div>
      <div class="lg:w-2/5 w-full px-4">
        <p class="text-center text-xl">Foodsteps offréiert de Familljen mat Kanner tëschent 5 an 10 Joer flott
          kulinaresch Entdeckungsreesen duerch eise Grand-Duché. Wärend enger spannender Schnitzeljuegd musst dir mat e
          puer Rätselen rausfannen wou déi verschidde Statiounen sinn bei deenen dir ënnerwee eppes Guddes z’iessen
          kritt. Zum Schluss vun all Wanderung kréien d’Kanner och nach e puer flott Iwwerraschungen !</p>
      </div>
      <div class="w-2/5 border-b border-solid border-1 border-black"></div>

      <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
        <div class="grid lg:w-1/2 lg:place-items-center ">
          <img class="lg:object-fill 2xl:w-2/3 w-full" src="@/assets/images/Otto-dk-scheld.png" alt="">
        </div>

        <div class="grid lg:place-items-start lg:w-1/2">
          <h2 class="text-center 2xl:w-2/3 w-full pb-6">Dikrech</h2>
          <p class="text-center 2xl:w-2/3 w-full text-xl">Dëse Wee weist iech op zirka 7 km lauter Schéinheeten déi
            Dikrech ze bidden huet. Mat nëmmen 30 Héichtemeteren ass den Tour och fir kleng Been gutt machbar.Ënnerwee
            kënnt dir iech op insgesamt 19 Rätsel-, an 3 Iessens-Statiounen freeën.</p>
          <div class="text-center 2xl:w-2/3 w-full">
            <button
              class="shadow bg-[#a9bc93] hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 my-4 px-4 rounded"
              type="button">
              Kafen
            </button>
          </div>
        </div>

        




      </div>

      <div class="w-2/5 border-b border-solid border-1 border-black"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',

}
</script>
