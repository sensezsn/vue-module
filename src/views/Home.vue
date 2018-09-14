<template>
  <div class="container">
    <h1 :class="$style.foo">Hi, what's your name?</h1>
    <div class="desc">{{desc}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: 'this is an example.'
    };
  },
  created() {
    console.log(this.$store)
  }
};
</script>

<style module>
.foo {
  background-color: #f30;
}

:global {
  .desc {
    background-color: #0f0;
  }
}
</style>
