import React from 'react'

function Home() {
  return (
    <section  class="relative bg-[url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg)] bg-cover bg-center bg-no-repeat">
    <div
      class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div class="mx-auto max-w-3xl text-center">
        <h1
          class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          Selamat Datang
  
          <span class="sm:block"> Web Sederhana </span>
        </h1>
  
        <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
          tenetur fuga ducimus numquam ea!
        </p>
  
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a
            class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="/about"
          >
            Klik Untuk melihat Lebih Detail
          </a>
        </div>
      </div>
    </div>
  </section>
  
  
  )
}

export default Home