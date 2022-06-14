<script setup lang="ts">
import type { Person } from '~/types';
import type { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';

const route = useRoute()
const { findOne } = useStrapi4()

const response = await findOne<Strapi4Response<Person>>(`people`, route.params.id, { populate: '*' })

</script>

<template>
  <div>
    <p>{{ response }}</p>
  </div>
</template>