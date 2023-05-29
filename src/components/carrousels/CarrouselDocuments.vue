<script setup lang="ts">
  import LoadingIcon from '../icons/IconLoader.vue';
  import { HTTP, getDocObjUrl } from '@/utils/utils.http';
  import { ref } from 'vue';

  const prop = defineProps<{
    docsEndPoint: string;
  }>();

  const docTypes = ref<any[]>([]);
  const errors = ref<string[]>([]);
  const docLoading = ref(true);

  const getDocuments = async () => {
    const docs: { doc: any; url: string; }[] = [];
    const types = await getDocumentTypes();

    const docsData = await (await HTTP.get(prop.docsEndPoint)).data;

    () => {
        docsData.forEach(async (doc: any) => {
        docLoading.value = false;

        const url = await getDocObjUrl(doc.id);
        docs.push({doc: doc, url: url});
      });
    };

    types.forEach((type: any) => {
      const docsByType: any[] = [];

      docs.forEach(doc => {
        console.log('we');

        if (type.id === doc.doc.documentType.id) {
          docsByType.push(doc);
        }
      })
      docTypes.value.push({type: type.type, docs: docsByType});
    });

    // console.log(docTypes.value);
  }

  const getDocumentTypes = () => {
    return HTTP.get('documenttypes')
    .then(res => {
      const types: any[] = [];
      res.data.forEach((type: any) => {
        if (type.id !== 1) {
          types.push(type);
        }
      })
      return types;
    })
  }

  getDocumentTypes();
  getDocuments();
</script>

<template>
  <div class="carrousel">
    <div v-if="docLoading" >
      <LoadingIcon />
    </div>
    <div class="list" v-else  v-for="docType in docTypes" v-bind:key="docType">
      <div class="dropdown">
        <h2>{{ docType.type }}</h2>
      </div>
        <div v-for="doc in docType.docs" v-bind:key="doc">
          {{ doc.doc.doc.name }}
        </div>
    </div>
  </div>
</template>

<style scoped>

.list {
  margin-bottom: 8px;
  border-radius: 8px;
  height: fit-content;
  overflow: hidden;
}

.dropdown {
  width: 100%;
  background-color: var(--color-text);
  color: var(--color-background);
}

h2 {
  /* text-align: center; */
}
@media (max-width: 816px) {

}

@media (max-width: 612px) {

}

@media (max-width: 456px) {

}
</style>