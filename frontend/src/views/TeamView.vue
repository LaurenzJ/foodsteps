<template>
  <div class="team">
    <div class="grid place-items-center space-y-16 px-6">
      <h1>Ekipp</h1>

      <h2>Wee sinn mir?</h2>

      <div class="lg:w-2/5 w-full px-4">
        <p class="text-center text-xl">Mir sinn eng Mini-Entreprise aus dem Lycée classique de Diekirch déi aus 5
          ambitionéierten 2e Schüler besteet. Mir hunn dëse Projet am Kader vun de schouleschen Aktivitéiten vun der
          asbl Jonk Entrepreneuren Lëtzebuerg gegrënnt. Mir hunn eis als Zil gesat, mat eiser Mini-Entreprise den Kanner
          wéi och den Erwuessenen mat eisen Touren vill Freed ze maachen, d’Rausgoen an d’Natur rëm méi no ze bréngen an
          hinnen schéin Dierfer oder Stied hei am Land op eng spilleresch an kulinaresch Aart a Weis entdecken loossen.
        </p>
      </div>

      <div class="w-2/5 border-b border-solid border-1 border-black"></div>
      <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
        <div class="grid lg:w-1/2 lg:place-items-center ">
          <img class="lg:object-fill 2xl:w-2/3 w-full" src="@/assets/images/team/1.png" alt="">
        </div>

        <div class="grid lg:place-items-start lg:w-1/2 space-y-16">
          <h2 class="text-center 2xl:w-2/3 w-full">Eis Geschicht</h2>
          <p class="text-center 2xl:w-2/3 w-full text-xl">Eis Geschicht fänkt Ufank September 2021 un, wou mir eis an
            den Cours d’Optioun vun der Mini-Entreprise ageschriwwen hunn. Mir waren 5 motivéiert Schüler, déi Intressi
            um detailléierten Fonctionnement vun enger Entreprise gewisen hunn. Mir hunn eis laang den Kapp zerbrach fir
            eng Iddi ze fannen déi Potenzial huet. Schlussendlech hu mir d’Entscheedung getraff eis vun eiser
            Leidenschaft, dem Entdecken vun der Natur, leden ze loossen fir och aneren Leit dës Freed méi no ze bréngen.
            Mir hunn an e puer Méint eis Iddi verwierklecht an sou eise Service an d’Liewen geruff. Mat eiser
            kulinarescher Schnitzeljuegd wëllen mer Familljen mat Kanner eng flott Fräizäit-Aktivitéit bidden. Eisen
            éischten Wee geet duerch Dikrech wëll mir hei an d’Schoul ginn an et hei vill schéi Platzen ze entdecken
            ginn.</p>
        </div>
      </div>

      <div class="w-2/5 border-b border-solid border-1 border-black"></div>

      <h2>Déi eenzel Persounen:</h2>

      <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
        <div class="grid lg:w-1/2 lg:place-items-center ">
          <img class="lg:object-fill 2xl:w-2/3 w-full" src="@/assets/images/team/mate.png" alt="">
        </div>

        <div class="grid lg:place-items-start lg:w-1/2">
          <h3 class="text-center text-xl 2xl:w-2/3 w-full pb-2">Máté Magyar</h3>
          <h3 class="text-center text-base font-sans 2xl:w-2/3 w-full pb-6">Chef vun der Entreprise</h3>
          <p class="text-center 2xl:w-2/3 w-full text-xl">Ech sinn den Máté Magyar an si bei Foodsteps als Chef an als
            Website-Designer täteg. Ech probéieren dat meescht aus dëser Entreprise raus ze huelen fir mir sou vill wéi
            méiglech Erfarung fir meng Zukunft unzëeegnen. An menger Fräizäit beschäftegen ech mech vill mat Musek an
            ginn och mol gären een Tour spadséieren.</p>
        </div>
      </div>

      <div v-if="isMobile()">
        <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
          <div class="grid lg:w-1/2 lg:place-items-center ">
            <img class="lg:object-fill 2xl:w-2/3 w-full" src="@/assets/images/team/fabian.png" alt="">
          </div>

          <div class="grid lg:place-items-start lg:w-1/2">
            <h3 class="text-center text-xl 2xl:w-2/3 w-full pb-2">Fabian Hilkhuijsen</h3>
            <h3 class="text-center text-base font-sans 2xl:w-2/3 w-full pb-6">Administrateur an Organisateur vun der
              Entreprise</h3>
            <p class="text-center 2xl:w-2/3 w-full text-xl">Ech sinn den Fabian an si bei Foodsteps fir
              d’Administratioun an d’Organisatioun zoustänneg. Ech verfollegen d’Zil eng Kéier selwer eng Entreprise ze
              grënnen an ze leeden, dowéinst sinn ech frou Deel vun dësem Projet ze sinn. An menger Fräizäit sinn ech
              fräiwëllege Pompjee an spillen am Orchester Saxophon an Klarinett.</p>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
          <div class="grid lg:place-items-center lg:w-1/2">
            <h3 class="text-center text-xl 2xl:w-2/3 w-full pb-2">Fabian Hilkhuijsen</h3>
            <h3 class="text-center text-base font-sans 2xl:w-2/3 w-full pb-6">Administrateur an Organisateur vun der
              Entreprise</h3>
            <p class="text-center 2xl:w-2/3 w-full text-xl">Ech sinn den Fabian an si bei Foodsteps fir
              d’Administratioun an d’Organisatioun zoustänneg. Ech verfollegen d’Zil eng Kéier selwer eng Entreprise ze
              grënnen an ze leeden, dowéinst sinn ech frou Deel vun dësem Projet ze sinn. An menger Fräizäit sinn ech
              fräiwëllege Pompjee an spillen am Orchester Saxophon an Klarinett.</p>
          </div>

          <div class="grid lg:w-1/2 lg:place-items-start ">
            <img class="lg:object-fill 2xl:w-2/3 w-full" src="@/assets/images/team/fabian.png" alt="">
          </div>
        </div>
      </div>



      <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
        <div class="grid lg:w-1/2 lg:place-items-center ">
          <img class="lg:object-fill 2xl:w-2/3 w-full" src="@/assets/images/team/lisa.png" alt="">
        </div>

        <div class="grid lg:place-items-start lg:w-1/2">
          <h3 class="text-center text-xl 2xl:w-2/3 w-full pb-2">Lisa George</h3>
          <h3 class="text-center text-base font-sans 2xl:w-2/3 w-full pb-6">Comptable vun der Entreprise</h3>
          <p class="text-center 2xl:w-2/3 w-full text-xl">Ech sinn de Chef Financier vun eiser Ekipp. Ech këmmere mech
            also em d’Comptabilitéit an d’Finanz-Situatioun vun eiser Entreprise. Een Hobby ass zum Beispill all Woch
            meng ganz Suen fir eng nei Hoerfaarf auszeginn, alles aneres wier jo langweileg. Soss sinn ech och déi
            oppenst Persoun di mer kennen, et kann een mat mir ëmmer iwwer alles schwätzen.</p>
        </div>
      </div>


      <div v-if="isMobile()">
        <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
          <div class="grid lg:w-1/2 lg:place-items-center ">
            <img class="lg:object-fill 2xl:w-2/3 w-full" src="@/assets/images/team/matteo.png" alt="">
          </div>

          <div class="grid lg:place-items-start lg:w-1/2">
            <h3 class="text-center text-xl 2xl:w-2/3 w-full pb-2">Mattéo Mercier</h3>
            <h3 class="text-center text-base font-sans 2xl:w-2/3 w-full pb-6">Comptable vun der Entreprise</h3>
            <p class="text-center 2xl:w-2/3 w-full text-xl">Ech sinn den Mercier Mattéo an ech sinn mam Lisa deen deen
              sech ëm d’Finanzen vun eiser Entreprise këmmert. Ech sinn begeeschtert hei an der Entreprise mat ze
              maachen, well ech an der Iddi vill Potential gesinn. Ech freeën mech un dësem Projet ze schaffen fir
              Erfarung fir d’Zukunft ze sammelen. Ech spillen an menger Fräizäit Badminton an ginn gären spadséieren vir
              mech vu mengem Alldag ze entspanen.</p>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
          <div class="grid lg:place-items-center lg:w-1/2">
            <h3 class="text-center text-xl 2xl:w-2/3 w-full pb-2">Mattéo Mercier</h3>
            <h3 class="text-center text-base font-sans 2xl:w-2/3 w-full pb-6">Comptable vun der Entreprise</h3>
            <p class="text-center 2xl:w-2/3 w-full text-xl">Ech sinn den Mercier Mattéo an ech sinn mam Lisa deen deen
              sech ëm d’Finanzen vun eiser Entreprise këmmert. Ech sinn begeeschtert hei an der Entreprise mat ze
              maachen, well ech an der Iddi vill Potential gesinn. Ech freeën mech un dësem Projet ze schaffen fir
              Erfarung fir d’Zukunft ze sammelen. Ech spillen an menger Fräizäit Badminton an ginn gären spadséieren vir
              mech vu mengem Alldag ze entspanen.</p>
          </div>

          <div class="grid lg:w-1/2 lg:place-items-start ">
            <img class="lg:object-fill 2xl:w-2/3 w-full" src="@/assets/images/team/matteo.png" alt="">
          </div>
        </div>
      </div>

      <div class="lg:flex lg:space-x-6 space-y-16 grid place-items-center">
        <div class="grid lg:w-1/2 lg:place-items-center ">
          <img class="lg:object-fill 2xl:w-2/3 w-full" src="@/assets/images/team/emma.png" alt="">
        </div>

        <div class="grid lg:place-items-start lg:w-1/2">
          <h3 class="text-center text-xl 2xl:w-2/3 w-full pb-2">Emma Lutgen</h3>
          <h3 class="text-center text-base font-sans 2xl:w-2/3 w-full pb-6">Grafik-Designer vun der Entreprise</h3>
          <p class="text-center 2xl:w-2/3 w-full text-xl">Ech sinn d’Emma an sinn haaptsächlech fir déi visuell Säit vu
            Foodsteps zoustänneg. Sou hunn ech zesummen mat enger Kolleegin den Otto, eist Maskottchen zum Liewen
            bruecht. Déi kreativ Säit vu mir ass perfekt vir d’grafesch Aufgaben an der Entreprise ze iwwerhuelen. Ech
            sinn interesséiert un Grafik Design an sammelen sou Erfarung vir mäi spéidert d’Liewen.</p>
        </div>
      </div>
      <div class="w-2/5 border-b border-solid border-1 border-black"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TeamView',
  methods: {
    isMobile() {
      if (screen.width <= 780 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
