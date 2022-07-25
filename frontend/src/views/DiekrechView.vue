<template>
  <div class="diekrech">
    <div class="grid place-items-center space-y-16 px-6">
        <h1>De Wee</h1>

        <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
        <div class="grid lg:w-1/2 lg:place-items-center ">
          <img class="lg:object-fill 2xl:w-2/3 w-full" src="@/assets/images/OTTO-2.png" alt="">
        </div>

        <div class="grid lg:place-items-start lg:w-1/2">
          <h3 class="text-center text-xl 2xl:w-2/3 w-full pb-2">Otto Foodsteps</h3>
          <h3 class="text-center text-base font-sans 2xl:w-2/3 w-full pb-6">Maskottchen</h3>
          <p class="text-center 2xl:w-2/3 w-full text-xl">Dat hei ass den Otto, an hien erzielt iech lo wat dir alles bei eiser Schnitzeljuegd erliewe kënnt.</p>
        </div>
        
      </div>
      <div class="lg:w-2/5 w-full px-4">
        <p class="text-center text-xl">Beim Klick op “Kafen” kënnt dir äer Tickets reservéiren fir dës flott Schnitzeljuedg duerch Dikrech op d’eegen Fauscht ze maachen. Nom Bezuelen kritt dir innerhalb vun 48 Stonnen (Bezuelung per Kreditkaart/Paypal) déi ganz detailléiert Documentatioun per Email geschéckt. Duerno kënnt dir eis kulinaresch Wanderung zu all Moment maachen wou dir Loscht hudd.</p>      
      </div>
      <div class="w-2/5 border-b border-solid border-1 border-black"></div>
      <h2>Informatiounen zum Wee</h2>
      <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
        

        <div class="text-center grid lg:place-items-center lg:w-1/2">
          <h2 class="text-center 2xl:w-2/3 w-full pb-4">Dikrech</h2>
          <ul class="text-xl">
            <li>7 Kilometer</li>
            <li>30 Héichtemeter</li>
            <li>± 2 – 2,5 Stonnen Trëppelzäit</li>
            <li>Fir Familljen mat Kanner vun ± 5 bis 10 Joer</li>
            <li>Präis: 23 Euro fir ee Kand vun 0 – 16 Joer</li>
            <li>Präis: 29 Euro fir een Erwuessenen</li>
            <li>Inclus am Präis: 3 Iess-Statiounen (Mëtsch + waarmt Gedrénks; Mëttegiessen + Gedrénks; Dessert; Cadeau; Souvenir; Diplom)</li>
            <li>Recommandéiert Startzäit 10h00 – 10h30 (all Wochendag) oder 15h30 – 16h00 (Méindes op Samsdes)</li>
            <li>De Wee ass Kannerkutsch-tauglech</li>
            <li>Méi Informatiounen bei den AGB</li>
            <li>All aner Informatiounen (de genauen Wee, Landkaart, Rätselen, Voucheren fir d’Iessen an d’Cadoen, …) kritt dir nom bezuelen per Email geschéckt.</li>
          </ul>
        </div>
        <div class="grid lg:w-1/2 lg:place-items-start ">
          <a href="http://g-o.lu/3/npSv" target="_blank" rel="noopener"><img loading="lazy" width="660" height="598" src="@/assets/images/Dikrech-de-Wee.png" alt="" class="wp-image-901 size-full" srcset="https://i0.wp.com/foodsteps.lu/wp-content/uploads/2022/03/Dikrech-de-Wee.png?w=839&amp;ssl=1 839w, https://i0.wp.com/foodsteps.lu/wp-content/uploads/2022/03/Dikrech-de-Wee.png?resize=300%2C272&amp;ssl=1 300w, https://i0.wp.com/foodsteps.lu/wp-content/uploads/2022/03/Dikrech-de-Wee.png?resize=768%2C696&amp;ssl=1 768w, https://i0.wp.com/foodsteps.lu/wp-content/uploads/2022/03/Dikrech-de-Wee.png?resize=600%2C544&amp;ssl=1 600w" sizes="(max-width: 580px) 100vw, 580px"></a>
        </div>
        
      </div>
      <div>
        <div class="text-center w-full">
          <button
            onclick="location.href='/product/diekrech'"
            class="shadow bg-[#a9bc93] hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 my-4 px-4 rounded"
            type="button">
            Kafen
          </button>
        </div>
        <div class="text-center w-full">
          <button
            onclick="location.href='/agb'"
            class="shadow bg-[#a9bc93] hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 my-4 px-4 rounded"
            type="button">
            ALLGEMEINE-GESCHÄFTSBEDINGUNGEN (AGB)
          </button>
        </div>
        
      </div>
      <div class="w-2/5 border-b border-solid border-1 border-black"></div>
      <div class="w-full">
      <ContactView></ContactView>
      </div>

    </div>
    
  </div>
</template>

<script>
import ContactView from './ContactView.vue';

export default {
    name: "DiekrechView",
    components: { ContactView }
}
</script>
