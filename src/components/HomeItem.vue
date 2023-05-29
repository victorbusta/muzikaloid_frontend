<script setup lang="ts">
  import MagnifyIcon from './icons/IconMagnify.vue';
  import LoadingIcon from './icons/IconLoader.vue';
  import DocumentCarrousel from './carrousels/CarrouselDocuments.vue'
  import { HTTP, getDocObjUrl } from '@/utils/utils.http';
  import { ref } from 'vue';

  const homeArticle = ref({name: '', subDescription: '', createdAt: '', description: ''});
  const homeLoading = ref(true);
  const ppDocument = ref();
  const ppDocumentName = ref();
  const ppDocLoading = ref(true);
  const errors = ref<string[]>([]);

  const getHomeArticle = () => {
    HTTP.get("articles/1")
    .then(res => {
      homeLoading.value = false;
      homeArticle.value = res.data;
    })
    .catch(e => {
      errors.value.push(e);
    });   
  }

  const getHomeDocuments = () => {
    HTTP.get("articles/1/documents")
    .then(res => {
      res.data.forEach((doc: any) => {
        if (doc.documentType.type === "PP") {
          ppDocumentName.value = doc.name;
          getDocObjUrl(doc.id)
          .then(url => {
            ppDocLoading.value = false;
            ppDocument.value = url;
          });
        }
      })
    })
    .catch(e => {
      errors.value.push(e);
    });
  }


  getHomeArticle();
  getHomeDocuments();
</script>

<template>
  <div v-if="homeLoading" >
    <LoadingIcon />
  </div>
  <div v-else>

    <h1>
      {{ homeArticle.name }}
    </h1>
    <h3>
      {{ homeArticle.subDescription }}
    </h3>
    <h4>
      {{ new Date(homeArticle.createdAt).toLocaleDateString() }}
    </h4>
    <div class="content">

      <div class="ppdoc">
        <div v-if="ppDocLoading">
        <LoadingIcon />
        </div>
        <div v-else>
          <img :src="ppDocument">
          <a :href="ppDocument"><MagnifyIcon /></a>
        </div>
      </div>

      <p>
        {{ homeArticle.description }}
      </p>

      <div class="doc">
        <DocumentCarrousel docsEndPoint="articles/1/documents" />
        <!-- <DocumentCarrousel /> -->
      </div>

    </div>

  </div>
</template>

<style scoped>
h1 {
  width: 100%;
  font-size: 2rem;
}

h3 {
  width: 100%;
  font-size: 1rem;
  border-bottom: 1px solid;
}

hr {
  width: 100%;
}

h4 {
  width: 100%;
  text-align: right;
  font-size: .7rem;
}


.content {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.ppdoc {
  display: flex;
  flex-direction: column;
  width: 20%;
}

.ppdoc > div > img {
  width: 100%;
}

.doc {
  width: 30%;
}

a {
  color: var(--color-text);
  width: fit-content;
  border-radius: 0 0 4px 4px;
}

p {
  margin: 0 16px;
  width: 50%;
  text-align: justify;
  font-size: 1rem;
  white-space: pre-line;
}

@media (max-width: 816px) {
  p {
    font-size: .9rem;
  }
}

@media (max-width: 612px) {
  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 456px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>