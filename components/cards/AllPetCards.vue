<template>
  <b-col md="6" lg="4">
    <b-card
      :title="pet.name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 25rem;"
      class="mb-4 text-center"
    >
      <b-card-text>
        <p>Gender: {{ pet.gender }}</p>
        <p>Breed: {{ pet.breed }}</p>
        <p>Age: {{ pet.age }}</p>
        <p>{{ pet.description.substring(0, 75) + '...' }}</p>
      </b-card-text>
      <nuxt-link :to="`/pets/${pet.species}/${pet._id}`">
        View Details
      </nuxt-link>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'AllPetCards',
  props: {
    pet: Object
  }
}
</script>

<style scoped>
</style>
