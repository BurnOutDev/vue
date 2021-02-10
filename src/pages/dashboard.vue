<template>
  <div id="page-1">
    <table>
      <thead>
        <th>name</th>
        <th>lastname</th>
        <th>privatenumber</th>
        <th>dateofbirth</th>
        <th>gender</th>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>lastname</td>
          <td>privatenumber</td>
          <td>dateofbirth</td>
          <td>gender</td>
        </tr>
        <tr v-for="(user, k) in users" v-bind:key="k">
          <td>{{ user.name }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.privatenumber }}</td>
          <td>{{ user.dateofbirth }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Page1",
  methods: {
    ...mapMutations(["incrementCounter"]),
  },
  computed: {
    ...mapState(["storeCounter"]),
  },
  mounted() {
    this.$store.dispatch("fetchUsers").then(() => {
      this.users = this.$store.state.users;
    });
  },
  data() {
    return {
      users: [],
    };
  },
};
</script>

<style lang="scss"></style>
