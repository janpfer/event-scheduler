<script setup lang="ts">
import type { Person } from '~/types';
import type { Strapi4Response } from '@nuxtjs/strapi/dist/runtime/types';

const { find } = useStrapi4();

const response = await find<Strapi4Response<Person>>('people', {
  populate: '*',
});

</script>

<template>
  <div>
    <p>{{ response }}</p>
  </div>
</template>