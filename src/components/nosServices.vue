<script setup>
const products = [
  {
    id: 1,
    name: 'Stratégies et communications',
    href: '#',
    imageSrc:'/assets/strategie.jpeg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '',
    color: '',
  },
  {
    id: 2,
    name: 'Community management ',
    href: '#',
    imageSrc: '/assets/community.jpeg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '',
    color: '',
  },
  {
    id: 3,
    name: 'Création de contenu',
    href: '#',
    imageSrc: '/assets/content.jpeg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '',
    color: '',
  },  {
    id: 4,
    name: 'Publicités',
    href: '#',
    imageSrc: '/assets/ads.jpeg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '',
    color: 'Google Ads || Facebook Ads || Instagram Ads',
  },
  // More products...
]
</script>

<template>
<div class="container">

  <div class="service w-screen bg-white">
    <div class="bg-white w-full">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Nos services</h2>
        <p class="text-black">Chez Adrian&Company, nous créons des HITs, qui sont d’aider initier et cibler en anglais. Tout cela servira à intégrer ce que nous donnons comme prestations.</p>



        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in products" :key="product.id" class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>