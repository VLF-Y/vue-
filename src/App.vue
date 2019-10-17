<template> 
  <!-- 使用组件 -->
  <div id="app"> 
      <!-- <Compose></Compose>
      <Home></Home> 
      <Self></Self> -->
      <!-- <Set></Set> -->
      <!-- <Login></Login> -->
      <!-- <Reg></Reg> -->
      <Footer></Footer> 
      <Error></Error>
  </div>
</template>
<script>
    // import Compose from './pages/Compose'
    // import Home from './pages/Home'
    // import Self from './pages/Self'
    // import Set from './pages/Set'
    // import Login from './pages/Login'
    // import Reg from './pages/Reg'
    import Footer from './components/Footer'
    import Error from './pages/Error'
    export default {   // 注册组件
      name: 'app',
      components:{
      Error,Footer
      }
    }
</script>

