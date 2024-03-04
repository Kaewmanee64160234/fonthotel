<script setup lang="ts">
const clickback = () => {
  window.location.href = "/historyBookings";
};
</script>

<template>

  <body>
    <div class="pt-5 pl-5">
      <button @click="clickback">
        <i style="font-size: 30px; color:#F5EEE6" class="far ">&#xf359;</i>
      </button>
    </div>
    <div class="flex justify-center items-center bigcard">
      <div class="relative card-style">
        <div class="flex justify-between items-center p-4">
          <h1 class="text-xl font-bold">History Booking</h1>
          <div class="grid gap-4 grid-cols-2 text-sm">
            <button type="button" class="button-style">
              Edit review
            </button>
            <button type="button" class="button-style">
              Add review
            </button>
          </div>
        </div>

        <div class="flex-1 flex flex-row justify-center">
          <div class="card-stay">
            <div class="card-container">
              <div class="flex-1 flex flex-row p-2 pl-5 mt-5">
                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 5px">
                    Date :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px">
                    Tue,Dec 26 ,2023 - Wed,Dec 27,2023</span>
                </div>

                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 5px">
                    Check-in :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px">
                    2:30 PM</span>
                </div>
              </div>
              <div class="flex-1 flex flex-row p-2 pl-5">
                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 5px">
                    Name :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px">Linlada Pasukjai
                  </span>
                </div>

                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 5px">
                    Check-out :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px">6:30 AM</span>
                </div>
              </div>
              <div class="flex-1 flex flex-row p-2 pl-5">
                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 5px">
                    Room number :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px">701</span>
                </div>
              </div>

              <div class="flex-1 flex flex-row p-2 pl-5">
                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 5px">
                    Type Room :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px">Deluxe
                  </span>
                </div>

                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 5px">
                    Payment Information
                  </p>
                </div>
              </div>

              <div class="flex-1 flex flex-row p-2 pl-5">
                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="text-base font-sans" style="display: inline; margin-left: 100px">
                    Sleep 1 | 37 square metre
                  </p>
                </div>

                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 5px">
                    Payment :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px">Cardit Card
                  </span>
                </div>
              </div>

              <div class="flex-1 flex flex-row p-2 pl-5">
                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="text-base font-sans" style="display: inline; margin-left: 100px">
                    Sea View , Smart TV , Work Desk
                  </p>
                </div>

                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 5px">
                    Name :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px">Linlada Pasukjai
                  </span>
                </div>
              </div>
              <div class="flex-1 flex flex-row p-2 pl-5">
                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 5px">
                    Activity :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px">1 Buffet Breakfast</span>
                </div>

                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 5px">
                    Status :
                  </p>
                  <span class="text-base font-sans text-green-600" style="font-size: 15px">
                    Success</span>
                </div>
              </div>
              <div class="flex-1 flex flex-row p-2 pl-5">
                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 5px">
                    Guest :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px; margin-right: 5px">2</span>
                  <span class="text-base font-sans" style="font-size: 15px">Per Adult</span>
                </div>
              </div>
              <div class="flex-1 flex flex-row p-2 pl-5">
                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <span class="text-base font-sans" style="
                      font-size: 15px;
                      margin-right: 5px;
                      margin-left: 58px;
                    ">0</span>
                  <span class="text-base font-sans" style="font-size: 15px; margin-right: 20px">Per Child</span>
                </div>
              </div>
              <div class="flex-1 flex flex-row p-2 pl-5">
                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px">
                  <p class="font-medium" style="display: inline; margin-right: 18px">
                    Fine :
                  </p>
                  <span class="text-base font-sans" style="font-size: 15px; margin-right: 5px">No Service</span>
                </div>
              </div>
              <div class="flex-1 flex flex-row p-2 pl-5">
                <div class="flex-2 flex flex-col" style="width: 50%; font-size: 16px;">
                  <p class="font-bold" style="display: inline; margin-right: 5px; font-size: 20px">
                    Total :
                  </p>

                  <span class="font-medium" style="
                      font-size: 15px;
                      display: inline;
                      margin-left: 40px;
                      font-size: 23px;
                    ">
                    7,009.00
                  </span>

                  <span class="font-bold" style="
                      font-size: 15px;
                      display: inline;
                      margin-left: 40px;
                      font-size: 20px;
                    ">
                    Baht</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background-image: url("../images/image.png");
  background-size: cover;
  /* Cover the entire screen */
  background-position: center;
  /* Center the background image */
  background-repeat: no-repeat;
  /* Do not repeat the image */
  width: 100vw;
  height: 100vh;
  /* Make sure the div covers the full height of the viewport */
  position: fixed;
  /* Optional: Fixes the background to the viewport */
}

.card-style {
  top: 20px;
  width: 95vw;
  height: 90vh;
  border-radius: 30px;
  background-color: rgba(229, 229, 229, 0.758);
  /* add filter blue */
  fill-opacity: unset;
  display: block;
  /* overflow-y: auto; */
}

.card-stay {
  width: 70vw;
  height: 75vh;
  background-color: rgba(255, 255, 255);
  box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
  border-radius: 15px;
}

.flex-2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  font-size: 16px;
}

.card-container {
  max-width: 100vw;
  height: 234px;
}

.button-style {
  color: white;
  background-color: #906843;
  border-radius: 8px;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px #805d3f;
}

.button-style:hover {
  background-color: #9e754f;
}
</style>
