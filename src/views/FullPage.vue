<template>
  <section class="section hero is-fullheight is-error-section">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot has-text-centered">
      <div class="logo"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FullPage',
  created () {
    this.$store.commit('fullPage', true)
    this.$store.commit('asideRightToggle', false)
  },
  beforeDestroy () {
    this.$store.commit('fullPage', false)
  }
}
</script>
