<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create task</h1>

      <div class="input-field">
        <input id="title" type="text" class="validate" required />
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

      <input type="text" ref="datepicker">

      <button class="btn" type="submit">Create task</button>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min'

export default {
  data() {
    return {
      description: '',
      descriptionMaxLength: 2048
    }
  },
  mounted() {
    M.Chips.init(this.$refs.tags, {
      placeholder: 'Task tags'
    })
    M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true,
      firstDay: 1
    })
  }
}
</script>

<style lang="scss" scoped>
.character-counter {
  float: right;
  font-size: 12px;
}
</style>
