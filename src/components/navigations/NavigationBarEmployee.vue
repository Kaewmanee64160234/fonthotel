<template>
    <div>
      <nav class="flex items-center justify-between p-4 bg-beige">
        <!-- Left Side: Logo and Navigation -->
        <div class="flex items-center gap-4">
          <img src="../../images/logo.png" alt="Hotel California Logo" class="h-12" />
         
       
            <!-- Dropdown Menu for ABOUT CUSTOMER -->
           
            <!-- Other navigation items... -->
   
        </div>
  
        <!-- Right Side: User Info and Notifications -->
        <div class="flex items-center gap-4 justify-center">
            <a href="#" class="hover:text-gray-700 text-sm font-judson">BROWSE ROOM</a>
            <a href="#" class="hover:text-gray-700 text-sm font-judson">DASHBOARD</a>
            <div class="group inline-block relative" >
              <a href="#" class="hover:text-gray-700 text-sm font-judson inline-flex items-center" >
                ABOUT CUSTOMER
                <svg class="fill-current h-2 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.9 7.5L10 11.6l4.1-4.1 1.4 1.4-5.5 5.5-5.5-5.5z" />
                </svg>
              </a>
              <ul class="absolute hidden text-gray-700 pt-1 group-hover:block dropdown">
                <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 1</a></li>
                <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 2</a></li>
                <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3</a></li>
              </ul>
            </div>
          <button type="button">
            <span class="hover:text-gray-700 text-sm font-judson">PROMOTION MANAGEMENT</span>
          </button>
          <div class="flex hover:text-gray-700 text-sm font-judson justify-center">
            <button>
                <i class='far fa-bell' style='font-size:24px; '></i>
            </button>
            
          </div>
        <div class="flex flex-col">
            <div class="flex flex-1 flex-col">
            <p class="flex" >Name: Mongkon Chatthaijarong</p>

            </div>
            <div class="flex flex-1 flex-col">
            <p class="flex">Position: Manager</p>

            </div>
        </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup lang="ts">
  // If you need to add some script logic, you can do it here
  </script>
  
  <style scoped>
  .bg-beige {
    background-color: #DFCDB6; /* Replace with the actual color code for your beige background */
  }
  .dropdown{
    z-index: 999999999999999999999999;
  }
  </style>
  