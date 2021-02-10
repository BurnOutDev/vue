<template>
  <div id="page-2">
    <input v-model="name" placeholder="name" />
    <input v-model="lastname" placeholder="lastname" />
    <input
      v-model="privatenumber"
      type="number"
      maxlength="11"
      placeholder="privatenumber"
    />
    <input v-model="dateofbirth" type="date" placeholder="dateofbirth" />
    <select v-model="gender">
      <option key="0" value="male">male</option>
      <option key="1" value="female">female</option>
    </select>

    <button @click="requestRegistration">Increment</button>

    <VueImage :src="godcode" alt="Code Meme" />
    <vue-title />
  </div>
</template>

<script>
export default {
  name: "dashboard",
  components: {},
  data() {
    return {
      name: "",
      lastname: "",
      privatenumber: "",
      dateofbirth: "",
      gender: "",
    };
  },
  methods: {
    requestRegistration: function () {
      this.$store
        .dispatch("registerApiCall", {
          name: this.name,
          lastname: this.lastname,
          privatenumber: this.privatenumber,
          dateofbirth: this.dateofbirth,
          gender: this.gender,
        })
        .then(() => {
          this.$router.push({
            name: "dashboard",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#page-2 {
  .counter {
    margin-bottom: 20px;
  }
}
</style>
