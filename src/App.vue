<template>
  <div id="app">
    <Header class="header"/>
    <main class="main">
      <router-view/>
    </main>
    <Footer class="footer"/>
  </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {Footer, Header}
}
</script>
<style lang="scss" >

#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-auto-rows: auto 1fr auto;
  grid-template-areas: "header header header"
                       ".main ."
                       "footer footer footer";
  > .header{
    grid-area: header;
    padding-left: 12%;
    padding-right: 12%;
  }
  > .main{
    grid-area: main;
  }
  > .footer{
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }
}
@media (max-width: 768px) {
  #app{
    grid-template-columns: 10px auto 10px;
    > .header{
      padding-left: 12px;
      padding-right: 12px;
    }
    >.footer{
      padding-left: 12px;
      padding-right: 12px;
    }
  }
}
</style>

