<template>
<div class="font-h1 pb-16">
      <nav
        class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
            >
            <h2>Foodsteps</h2>
            <h3 class="text-gray-400 font-medium">Är kulinaresch Entdeckungsrees</h3>
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <router-link to="/" class="nav-link">
            <li>
            Home
          </li>
          </router-link>
          <router-link to="/diekrech" class="nav-link">
          <li>
            De Wee
          </li>
          </router-link>
           <router-link to="/team" class="nav-link">
          <li>
            Ekipp
          </li>
          </router-link>
          <router-link to="/contact" class="nav-link">
          <li>
            Kontakt
          </li>
          </router-link>
          <router-link to="/" class="nav-link">
          <li>
             Nëtzlech Links
          </li>
          </router-link>
        </ul>
      </nav>
    </div>
     <router-view/>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style>

a.router-link-exact-active {
    color: green;
}

</style>