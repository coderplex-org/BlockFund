<template>
  <div id="app" class="container-fluid">
    <nav-bar></nav-bar>
    <div class="container p-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
</style>
