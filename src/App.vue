<template> 
  <!-- 使用组件 -->
  <div id="app"> 
      <!-- <Home></Home> 
      <Compose></Compose>
      <Self></Self>
      <Set></Set>
      <Login></Login>
      <Reg></Reg> -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <Footer></Footer> 
      <!-- <Error></Error> -->
  </div>
</template>
<script>
    // import Home from './pages/Home'
    // import Compose from './pages/Compose'
    // import Self from './pages/Self'
    // import Set from './pages/Set'
    // import Login from './pages/Login'
    // import Reg from './pages/Reg'
    import Footer from './components/Footer'
    // import Error from './pages/Error'
    export default {   // 注册组件
      name: 'app',
      components:{
        Footer
      }
    }
</script>

