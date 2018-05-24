<template>
  <div id="appPage">
    <app-header></app-header>
    <app-container>
      <app-menu slot="sidebar"></app-menu>
      <router-view slot="content"></router-view>
    </app-container>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appHeader from '@/components/app/app-header'
  import appFooter from '@/components/app/app-footer'
  import appContainer from '@/components/app/app-container'
  import appMenu from '@/components/app/app-menu'

  export default {
    name: 'App',
    components: {appHeader, appFooter, appContainer, appMenu}
  }
</script>

<style>
  #appPage {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #eef1f6;
  }
</style>
