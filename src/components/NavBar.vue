<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link to="/" class="nav-link">
    <a class="navbar-brand" href="#">BlockFund</a>
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/investor-dashboard" class="nav-link">
          <a class="nav-link" href="#">Investor Dashboard<span class="sr-only"></span></a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/creator-dashboard" class="nav-link">
          <a class="nav-link" href="#">Creator Dashboard<span class="sr-only"></span></a>
        </router-link>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          UserName
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Profile</a>
          <a class="dropdown-item" href="#">Log Out</a>
          <!-- <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a> -->
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>

</style>
