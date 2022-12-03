import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
        <header aria-label="Site Header" class="bg-black">
        <div
          class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
        >
          
          <div class="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
            {/* Font */}
              <li class="flex-1">
    <a class="relative block p-4" href="/">
      <span
        class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"
      ></span>

      <div class="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 flex-shrink-0 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>

        <span class="ml-3 text-sm font-medium text-white"> Home </span>
      </div>
    </a>
  </li>

  <li class="flex-1">
    <a class="relative block p-4" href="/about">
      <div class="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 flex-shrink-0 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>

        <span class="ml-3 text-sm font-medium text-white"> About </span>
      </div>
    </a>
  </li>

  <li class="flex-1">
    <a class="relative block p-4" href="/cv">
      <div class="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 flex-shrink-0 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>

        <span class="ml-3 text-sm font-medium text-white"> CV </span>
      </div>
    </a>
  </li>

  <li class="flex-1">
    <a class="relative block p-4" href="/service">
      <div class="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 flex-shrink-0 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>

        <span class="ml-3 text-sm font-medium text-white">
          Service
        </span>
      </div>
    </a>
  </li>
              </ul>
            </nav>
      
            <div class="flex items-center gap-4">
             
      
              <button
                class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              >
                <span class="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
        
          </div>
        </div>
      </header>      
    )
    
  }
}

export default Navbar