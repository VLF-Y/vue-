<template> 
  <!-- 使用组件 -->
  <div id="app">   
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
  </div>
</template>
<script>
    import Header from './components/Header'
    import Home from './pages/Home'
    import Footer from './components/Footer'
    export default {   // 注册组件
      name: 'app',
      components:{
        Header,Home,Footer
      }
    }
</script>
<style>

</style>
