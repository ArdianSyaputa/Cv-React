import React from 'react'

function About() {
  return (
    <section class="bg-gray-900 text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div
          class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
        >
          <img
            alt="Party"
            src="https://img.esportsku.com/wp-content/uploads//2021/04/WhatsApp-Image-2021-04-21-at-19.20.08-1200x900.jpeg"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
  
        <div class="lg:py-24">
          <h2 class="text-3xl font-bold sm:text-4xl">Bio Data</h2>
  
          <p class="mt-4 text-white">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse at consequatur quae, expedita repellat quas delectus maxime harum tempora hic quam, qui perferendis laborum ut aperiam! Eum, enim inventore.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, expedita perspiciatis. Perspiciatis corporis modi, soluta animi at, vel velit unde sit recusandae natus harum asperiores iure et nemo deleniti quasi!
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatem eveniet cupiditate ut debitis temporibus suscipit qui laudantium accusamus deserunt in saepe, dolor alias quaerat quo pariatur molestias? Dolore, aliquid.
          </p>

          <a
            class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/cv"
          >
            Lanjut
          </a>
        </div>
      </div>
    </div>
    </div>
  </section>
  )
}

export default About