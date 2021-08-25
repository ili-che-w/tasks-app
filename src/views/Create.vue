<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create task</h1>

      <div class="input-field">
        <input id="title" type="text" class="validate" required />
        <label for="title">Title</label>
      </div>

      <div class="chips" ref="tags"></div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min'

export default {
  mounted() {
    M.Chips.init(this.$refs.tags, {
      placeholder: 'Task tags'
    })
  }
}
</script>
