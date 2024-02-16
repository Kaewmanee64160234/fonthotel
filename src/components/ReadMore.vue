<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  type: String,
  description: String,
  img: String,
  topic: String,
  bed: String,
  tv: Boolean,
  electric: Boolean,
  wifi: Boolean,
  water: Boolean,
  bath: Boolean,
  path: String,
  desk: Boolean,
});

// Destructuring props for easier access
// const { type, description, img, topic, bed, tv, electric, wifi, water, bath, path, desk } = props;
</script>

<template>
  <div class="body">
    <!-- The container for the overlay and cards -->
    <div class="flex grid grid-rows-1 flex-col items-right justify-end ml-10">
      <a
        class="btn-booking mt-7 mr-10 inline-block text-center text-center"
        :href="props.path"
        >Book now</a
      >
    </div>

    <div class="flex justify-center items-center bigcard">
      <!-- Added classes for centering -->
      <div class="grid relative card-style mt-10">
        <div
          class="flex grid grid-rows-1 grid-cols-2 flex-col items-right ml-10"
        >
          <!-- Center alignment -->
          <div
            class="flex flex-wrap justify-between items-center pt-5 font-judson"
          >
            <div>
              <p class="text-xl mb-4 text-left">{{ props.type }}</p>
            </div>
          </div>

          <div
            class="flex grid-cols-2 justify-between items-center mt-10 pt-5 font-judson"
          >
            <p class="text-sm text-gray-900 dark:text-white mb-4 text-left">
              {{ props.topic }}
            </p>
          </div>
          <div class="justify-start items-center font-judson">
            <img
              class="rounded-lg h-auto max-w-md max-w-lg"
              :src="props.img"
              alt=""
            />
          </div>
          <div
            class="flex grid-cols-2 justify-between items-center font-judson"
          >
            <p class="text-sm text-gray-900 dark:text-white mb-4">
              {{ props.description }}
            </p>
          </div>
        </div>
        <div class="flex grid gap-8 grid-rows-1 items-center ml-10">
          <div class="flex grid grid-rows-1 flex-col items-right ml-10">
            <!-- Center alignment -->
            <div class="text-center font-judson">
              <div
                class="flex flex-wrap justify-between items-center pt-5 font-judson"
              >
                <p class="text-sm mb-4 text-right">FACILITIES</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex grid-rows-3 grid-cols-3 items-center ml-10">
          <div class="text-center font-judson">
            <div
              class="flex grid gap-10 grid-rows-3 grid-cols-2 items-center ml-10"
            >
              <img
                class="rounded-lg size-9 max-w-lg ms-auto"
                src="../images/bed.png"
                alt=""
              />
              <p class="text-sm text-left font-judson">{{ props.bed }}</p>
              <div v-if="props.bath">
                <img
                  class="rounded-lg size-9 max-w-lg ms-auto"
                  src="../images/bathtube.png"
                  alt=""
                />
                <p class="text-sm text-left font-judson">
                  Separate Bath & Shower
                </p>
              </div>
              <div v-if="props.desk">
                <img
                  class="rounded-lg size-9 max-w-lg ms-auto"
                  src="../images/work-space.png"
                  alt=""
                />
                <p class="text-sm text-left font-judson">Working desk</p>
              </div>
            </div>
          </div>

          <div class="text-center font-judson">
            <div
              class="flex grid gap-10 grid-rows-3 grid-cols-2 items-center ml-10"
            >
              <div v-if="props.tv">
                <img
                  class="rounded-lg size-9 max-w-lg ms-auto"
                  src="../images/television.png"
                  alt=""
                />
                <p class="text-sm text-left font-judson">
                  Chrome cast & Apple mirror apps
                </p>
              </div>
              <div v-if="props.wifi">
                <img
                  class="rounded-lg size-9 max-w-lg ms-auto"
                  src="../images/wifi-sign.png"
                  alt=""
                />
                <p class="text-sm text-left font-judson">
                  Complimentary High Speed WiFi
                </p>
              </div>
            </div>
          </div>

          <div class="text-center font-judson">
            <div
              class="flex grid gap-10 grid-rows-3 grid-cols-2 items-center ml-10"
            >
              <div v-if="props.electric">
                <img
                  class="rounded-lg size-9 max-w-lg ms-auto"
                  src="../images/smart-curtain.png"
                  alt=""
                />
                <p class="text-sm text-left font-judson">
                  Electric curtain and sheer
                </p>
              </div>
              <div v-if="props.water">
                <img
                  class="rounded-lg size-9 max-w-lg ms-auto"
                  src="../images/water.png"
                  alt=""
                />
                <p class="text-sm text-left font-judson">Complimentary Water</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
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
  top: 0;
  left: 0;
}

.card-style {
  width: 92vw;
  height: 80vh;
  border-radius: 30px;
  background-color: rgba(229, 229, 229, 0.758);
  /* add filter blue */
  fill-opacity: unset;
  display: block;
}

.bigcard {
  display: flex;
  height: 80vh;
}

.font-judson {
  font-family: "Judson";
}

.btn-booking {
  background-color: #906843;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px #805d3f;
  font-weight: medium;
  text-decoration: none;
  display: inline-block;
  width: 150px;
}
</style>
