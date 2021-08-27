<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>{{ task.title }}</h1>

      <form>
        <div class="input-field">
          <textarea
            id="description"
            class="materialize-textarea"
            v-model="description"
            :maxlength="descriptionMaxLength"
          ></textarea>
          <label for="description">Description</label>
          <span class="character-counter">
            {{ description.length }}/{{ descriptionMaxLength }}
          </span>
        </div>

        <input type="text" ref="datepicker" />

        <button class="btn" type="button" @click="updateTask">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min'

export default {
  computed: {
    task() {
      const taskId = +this.$route.params.id
      return this.$store.getters.taskById(taskId)
    }
  },
  data() {
    return {
      description: '',
      date: null,
      descriptionMaxLength: 2048
    }
  },
  mounted() {
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true,
      firstDay: 1
    })

    this.description = this.task.description

    setTimeout(() => {
      M.updateTextFields()
    }, 0)
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy()
    }

    if (this.tags && this.tags.destroy) {
      this.tags.destroy()
    }
  },
  methods: {
    updateTask() {
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        description: this.description,
        date: this.date.date
      })
    }
  }
}
</script>
