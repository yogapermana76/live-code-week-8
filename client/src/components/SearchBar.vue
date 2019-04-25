<template>
  <form @submit.prevent="" class="input-group mb-3">
    <input
      type="text"
      name="search"
      id="search"
      class="form-control"
      autocomplete="off"
      placeholder="Search..."/>
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="submit">
        Search
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>