<template>
    <div>
        我是Home的详情页
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
      mounted(){
          console.log(this.$route.query)
      }
    }
</script>

<style lang="scss" scoped>

</style>
