<template>
  <div class="edit">
    <HelloWorld msg="Welcome to hosts Edit page" />
    <h2>Telvent</h2>
    <div v-for="telvent in telvent" :key="telvent.hosts">
      <pre>
        {{ telvent }}
      </pre>
    </div>
    <h2>iClave</h2>
    <div v-for="iclave in iclave" :key="iclave.hosts">
      <pre>
        {{ iclave }}
      </pre>
    </div>
    <Bottom />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import Bottom from "@/components/Bottom.vue"
import telvent from '@/assets/json/telvent.json'
import iclave from '@/assets/json/iclave.json'

export default {
  name: "Home",
  components: {
    HelloWorld,
    Bottom
  },
  el() {
    `.edit`
  },
  data() {
    return {
      telvent: telvent,
      iclave: iclave
    }
  }
}
</script>
<style lang="css">
pre {
  text-align: left;
}
</style>