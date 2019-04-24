<template>
  <div id="test">
     <img src="../assests/logo.png">
    <p>{{test}}</p>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      test:'Hello Vue.js',
    }
  }
}
</script>

<style>
 #test {
   color: brown;
   text-align: center
 }
</style>
