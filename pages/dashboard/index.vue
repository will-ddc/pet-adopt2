<template>
  <section id="dashboard-container" class="my-5 text-center">
    <b-container>
      <b-row>
        <b-col md="4">
          <b-card>
            <b-card-text>
              {{ adoptCount }} Pets Adopted
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card>
            <b-card-text>
              {{ petCount }} Pets For Adoption
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card>
            <b-card-text>
              {{ contactCount }} Inquiries Needing Responses
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col>
          <h3 class="mb-3">
            Select An Action
          </h3>
          <b-button variant="primary" class="mr-2" @click="respondContact">
            Respond To Inquiries
          </b-button>
          <b-button variant="primary" class="ml-2" @click="viewPets">
            View Unadopted Pets
          </b-button>
          <b-button variant="primary" class="ml-2" @click="addPet">
            Add New Pet
          </b-button>
        </b-col>
      </b-row>
      <b-form-row v-if="addingPet" class="my-4">
        <b-col cols="8" offset="2">
          <AddPetForm />
        </b-col>
      </b-form-row>
      <b-row v-if="viewingPets" class="my-4">
        <b-col cols="10" offset="1">
          <AllPetsTable />
        </b-col>
      </b-row>
      <b-row v-if="respondingContacts" class="my-4">
        <b-col>
          <AllContactsTable />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AddPetForm from '~/components/forms/AddPetForm'
import AllContactsTable from '~/components/AllContactsTable'
import AllPetsTable from '~/components/AllPetsTable'

export default {
  components: {
    AddPetForm,
    AllContactsTable,
    AllPetsTable
  },
  data () {
    return {
      addingPet: false,
      viewingPets: true,
      respondingContacts: false
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    }),
    ...mapGetters({
      petCount: 'pets/getPetCount',
      adoptCount: 'pets/getAdoptedPetsCount',
      contactCount: 'contacts/getContactCount'
    })
  },
  methods: {
    addPet () {
      if (this.respondingContacts || this.viewingPets) {
        this.respondingContacts = false
        this.viewingPets = false
      }
      this.addingPet = !this.addingPet
    },
    respondContact () {
      if (this.addingPet || this.viewingPets) {
        this.addingPet = false
        this.viewingPets = false
      }
      this.respondingContacts = !this.respondingContacts
    },
    viewPets () {
      if (this.addingPet || this.respondingContacts) {
        this.addingPet = false
        this.respondingContacts = false
      }
      this.viewingPets = !this.viewingPets
    }
  },
  head () {
    return {
      title: 'Adopt-A-Pet Employee Dashboard',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Main area to manage pets, contacts and things related to Pet Adopt site'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
