<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {QUERY_LAUNCHES} from './graphql/queries'
import {useQuery,useLazyQuery} from '@vue/apollo-composable'

const{
  load: loadQueryLaunches,
  refetch: refetchQueryLaunches,
  result: queryLaunchesResult,
  loading: queryLaunchesLoading,
  error: queryLaunchesError
}= useLazyQuery(QUERY_LAUNCHES,
{
  
},
{
  fetchPolicy: 'no-cache'
}
);
</script>

<template>

  <main>
  </main>
</template>

<style scoped>
</style>
