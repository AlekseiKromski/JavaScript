<template>
  <headerComponent></headerComponent>
</template>

<script>
import header from '@/components/index/header';
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  layout: 'Default',
  components: {
    headerComponent: header,

  }
}
</script>

<style>

</style>
