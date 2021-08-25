<template>
  <div>
    <h1>List of Tasks</h1>

    <table>
      <tbody>
        <tr v-for="(task, idx) in tasks" :key="idx">
          <td>
            <router-link :to="'/task/' + task.id">
              {{ idx + 1 }}
            </router-link>
          </td>

          <td>
            <router-link :to="'/task/' + task.id">
              {{ task.title }}
            </router-link>
          </td>

          <td>{{ task.date }}</td>
          <td>{{ task.description }}</td>
          <td>{{ task.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks
    }
  }
}
</script>
