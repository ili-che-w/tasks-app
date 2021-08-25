<template>
  <div>
    <h1>List of Tasks</h1>

    <table v-if="tasks.length">
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

          <td>{{ new Date(task.date).toLocaleDateString() }}</td>

          <td class="task-description">
            <div class="text">{{ task.description }}</div>
          </td>

          <td>{{ task.status }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else>No tasks</p>
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

<style lang="scss" scoped>
.task-description {
  max-width: 400px;

  .text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
