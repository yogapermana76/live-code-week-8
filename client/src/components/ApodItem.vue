<template>
  <div class="card mt-2">
    <div class="card-body">
      <h5 class="card-title">apod.title</h5>

      <div>
        <!-- FOR VIDEO -->
        <iframe width="498" height="332" src="apod.url"></iframe>
        <!-- FOR IMAGE -->
        <img class="card-img-top" alt="Card image cap">
      </div>

      <div class="mt-3">
        <a href="#" class="btn btn-primary mr-2">See detail</a>
        <a href="#" class="btn btn-danger">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ApodItem'
  
}
</script>