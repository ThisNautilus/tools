<template>
  <div id="app">
    <theader></theader>
    <router-view></router-view>
    <tfooter></tfooter>
  </div>
</template>

<script>
import theader from './components/Header'
import tfooter from './components/Footer'
export default {
  name: 'App',
  components:{
    theader,
    tfooter
  }
}
</script>

<style>


</style>
