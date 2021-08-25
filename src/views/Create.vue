<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create task</h1>

      <form @submit.prevent="createTask">
        <div class="input-field">
          <input
            v-model="title"
            id="title"
            type="text"
            class="validate"
            required
          />
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
        </div>

        <div class="chips" ref="tags"></div>

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

        <button class="btn" type="submit">Create task</button>
      </form>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min'

export default {
  data() {
    return {
      title: '',
      tags: null,
      description: '',
      date: null,
      descriptionMaxLength: 2048
    }
  },
  mounted() {
    this.tags = M.Chips.init(this.$refs.tags, {
      placeholder: 'Task tags'
    })

    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true,
      firstDay: 1
    })
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
    createTask() {
      const task = {
        id: Date.now(),
        title: this.title,
        tags: this.tags.chipsData,
        description: this.description,
        date: this.date.date,
        status: 'active'
      }

      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
    }
  }
}
</script>

<style lang="scss" scoped>
.character-counter {
  float: right;
  font-size: 12px;
}
</style>
