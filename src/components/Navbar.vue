<template>
  <nav>
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Tasks</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="/" exact active-class="active">Create</router-link>
        </li>

        <li>
          <router-link to="/list" exact active-class="active">List</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '~materialize-css/sass/materialize';

nav {
  @extend .blue, .darken-3;
  padding: 0 2rem;
}
</style>
