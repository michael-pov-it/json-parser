<template lang="html">

  <section class="bottom">
    <pre class='copy'>Copyright by {{ initials }}</pre>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'Bottom',
    props: [],
    mounted () {

    },
    data () {
      return {
        initials: "M.G."
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="less">
.copy {
  width: 99%;
  text-align: center;
}
</style>
