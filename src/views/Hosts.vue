<template>
  <div class="hosts">
    <div class="data-center">
      <h2>Telvent</h2>
      <div id="telvent-hosts-list" class="accordion" v-for="hosts in telvent" :key="hosts.machines">
        <div class="categories">
          <div
            v-for="(index, category) in hosts.telvent"
            :key="category.vsphere"
            class="category">
            <h3>{{ category }}</h3>
            <div v-for="(value, key) in index" :key="key.value">
            {{ key }}: {{ value }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="data-center">
      <h2>iClave</h2>
      <div id="iclave-hosts-list" class="accordion" v-for="iclaveHosts in iclave" :key="iclaveHosts.id">
        <div class="categories">
          <div
            v-for="(index, category) in iclaveHosts.iClave"
            :key="category.category1"
            class="category">
            <h3>{{ category }}</h3>
            <div v-for="(value, key) in index" :key="key.value">
            {{ key }}: {{ value }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bottom />
  </div>
</template>

<script>

// let testStr = "http://telvent.web-dev-studio.com/json/data.json"
// fetch(testStr).then(r=>( console.log(r.json) ))

// @ is an alias to /src
import Bottom from "@/components/Bottom.vue"

import telvent from '@/assets/json/telvent.json'
import iclave from '@/assets/json/iclave.json'

export default {
  name: "Home",
  components: {
    Bottom
  },
  el() {
    `.hosts`
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
  .category {
    text-align: left;
    float: left;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 1em;
    padding: 10px;
  }
  .category h3 {
    text-align: center;
    margin: 5px 0;
  }
  .categories {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5% 10px;
  }
</style>