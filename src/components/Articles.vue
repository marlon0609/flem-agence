<template>
  <section class="section articles">
    <div class="container">

      <!-- Header -->
      <div class="articles-header">
        <h3>Latest articles</h3>
      </div>

      <!-- Cards -->
      <div class="articles-grid">
        <article
          v-for="(post, i) in posts"
          :key="i"
          class="article-card"
        >
          <div class="thumb">
            <img :src="post.image" :alt="post.title" />
          </div>

          <div class="content">
            <h4>{{ post.title }}</h4>
            <p>{{ post.excerpt }}</p>
          </div>
        </article>
      </div>

      <!-- CTA -->
      <div class="articles-cta">
        <a href="#blog" class="btn btn-outline">See all articles</a>
      </div>

    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    title: "Best Energy Website Win for ENGIE UK",
    excerpt:
      "We’re proud to share that Flem Agence has won Best Energy Website for ENGIE UK, thanks to a bold, digital-first experience.",
    image: "/images/article1.jpg"
  },
  {
    title: "AI at the Heart of Flem Agence",
    excerpt:
      "This week we explore how artificial intelligence is transforming the way we build brands and deliver performance.",
    image: "/images/article2.jpg"
  },
  {
    title: "Press Release: Two-Up Joins Flem Agence",
    excerpt:
      "Flem Agence expands its creative and digital capabilities with the acquisition of Two-Up, strengthening its global reach.",
    image: "/images/article3.jpg"
  }
];
</script>

<style scoped lang="scss">
.articles {
  padding-top: 60px;
}

.articles-header h3 {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 36px;
  letter-spacing: -0.02em;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.article-card {
  background: #0f0f12;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.08);
  transition: transform .3s ease, box-shadow .3s ease;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px rgba(0,0,0,.45);
}

.thumb {
  height: 210px;
  overflow: hidden;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .6s ease;
}

.article-card:hover img {
  transform: scale(1.05);
}

.content {
  padding: 18px 18px 22px;
}

.content h4 {
  margin: 0 0 10px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.35;
}

.content p {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--muted);
}

.articles-cta {
  margin-top: 40px;
}

@media (max-width: 900px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }

  .thumb {
    height: 200px;
  }
}
</style>
