<script setup lang="ts">
  import { ref } from 'vue';

  const homeArticle = ref({name: String, createdAt: Date, subDescription: String, description: String});
  const ppDocument = ref();
  const ppDocumentName = ref();

  const getHomeArticle = async () => {
    const res = await fetch("http://localhost:3000/articles/1");
    const finalRes = await res.json();
    homeArticle.value = finalRes;
  }

  const getHomeDocuments = async () => {
      const res = await fetch("http://localhost:3000/articles/1/documents");
      const finalRes = await res.json();
      finalRes.forEach(async (document: any) => {
        if (document.documentType.type === "PP") {
          ppDocumentName.value = document.name;
          const docRes = await fetch(`http://localhost:3000/articledocuments/${document.id}`);
          const finalDocRes = await docRes
          const blob = await finalDocRes.blob();

          console.log(blob);

          ppDocument.value = URL.createObjectURL(blob);
        }
      });
    }

  getHomeArticle();
  getHomeDocuments();
</script>

<template>
  <h1>
    {{ homeArticle.name }}
  </h1>
  <h3>
    {{ homeArticle.subDescription }}
  </h3>
  <h4>
    {{ homeArticle.createdAt.toLocaleString() }}
  </h4>
  <div class="content">
    <div class="ppdoc">
      <img :src="ppDocument">
      <a :href="ppDocument">{{ ppDocumentName }}</a>
    </div>
    <p>
      {{ homeArticle.description }}
    </p>
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

}

h4 {
  width: 100%;
  text-align: right;
  font-size: .7rem;
}

img {
  /* width: 40%; */
}

.content {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.ppdoc {
  display: flex;
  flex-direction: column;
  width: 40%;
}

a {
  color: var(--color-text);
  width: fit-content;
  border-radius: 0 0 4px 4px;
}

a:hover {
  background-color: var(--color-hover);
}

p {
  margin: 16px;
  width: 60%;
  text-align: justify;
  font-size: larger;
  white-space: pre-line;
}

@media (max-width: 768px) {
  p {
    width: 60%;
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