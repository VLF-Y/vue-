<template> 
  <!-- 使用组件 -->
  <div id="app"> 
      <!-- <Compose></Compose> -->
      <!-- <Home></Home>  -->
      <!-- <Self></Self> -->
      <Set></Set>
      <Footer></Footer> 
  </div>
</template>
<script>
    // import Compose from './pages/Compose'
    // import Home from './pages/Home'
    // import Self from './pages/Self'
    import Set from './pages/Set'
    import Footer from './components/Footer'
    export default {   // 注册组件
      name: 'app',
      components:{
       Footer,Set
      }
    }
</script>

