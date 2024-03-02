<script setup lang="ts">
import { onMounted, ref, watch, computed } from "vue";
import { useBookingsStore } from "@/store/booking.store";
import { Booking } from "@/model/booking.model";
import router from "@/router";
import { useUserStore } from "@/store/user.store";
import { usePromotionsStore } from "@/store/promotion";
import { Promotion } from "@/model/promotion.model";

const bookingsStore = useBookingsStore();
const promotionStore = usePromotionsStore();
const userStore = useUserStore();
const firstName = ref("");
const lastName = ref("");
const mobilePhone = ref("");
const emailAddress = ref("");
const country = ref("");
const description = ref("");
const promotionId = ref("");
const paymentMethod = ref("");
const showModal = ref(false);
const validationMessage = ref("");
const booking = ref<Booking>();
onMounted(() => {
  promotionStore.getPromotions();
});
const clickBack = () => {
  router.push("/activity");
};

const clickContinue = async () => {
  await bookingsStore.getBookingByCustomerIdLastcreated();
  booking.value = bookingsStore.currentBooking;
  router.push("/bookingdetail");
};

const checkPromotion = async (code: string, event: Event) => {
  event.preventDefault();
  showModal.value = false;
  validationMessage.value = "";
  const promotion = await promotionStore.findPromotion(code);
  if (promotion) {
    if (promotion.createdDate > new Date()) {
      showModal.value = true;
      validationMessage.value = "Promotion code is expired";
      //   return;
    }
    if (promotion.endDate < new Date()) {
      showModal.value = true;
      validationMessage.value = "Promotion code is expired";

      //   return;
    }
    if (promotion.discount > 0) {
      bookingsStore.currentBooking.total = 0;

      for (
        let i = 0;
        i < bookingsStore.currentBooking.bookingDetail.length;
        i++
      ) {
        bookingsStore.currentBooking.total +=
          bookingsStore.currentBooking.bookingDetail[i].room.roomType.price;
      }
      for (
        let i = 0;
        i < bookingsStore.currentBooking.activityPerBooking.length;
        i++
      ) {
        bookingsStore.currentBooking.total +=
          bookingsStore.currentBooking.activityPerBooking[i].activity.price;
      }

      bookingsStore.currentBooking.totalDiscount = promotion.discount;
      bookingsStore.currentBooking.promotion = promotion;
      bookingsStore.currentBooking.total =
        bookingsStore.currentBooking.total - promotion.discount;
      console.log(bookingsStore.currentBooking.total);
    } else if (promotion.discountPercent > 0) {
      bookingsStore.currentBooking.total = 0;

      for (
        let i = 0;
        i < bookingsStore.currentBooking.bookingDetail.length;
        i++
      ) {
        bookingsStore.currentBooking.total +=
          bookingsStore.currentBooking.bookingDetail[i].room.roomType.price;
      }
      for (
        let i = 0;
        i < bookingsStore.currentBooking.activityPerBooking.length;
        i++
      ) {
        bookingsStore.currentBooking.total +=
          bookingsStore.currentBooking.activityPerBooking[i].activity.id;
      }

      bookingsStore.currentBooking.totalDiscount =
        (bookingsStore.currentBooking.total * promotion.discountPercent) / 100;
      bookingsStore.currentBooking.promotion = promotion;
      bookingsStore.currentBooking.total =
        bookingsStore.currentBooking.total -
        bookingsStore.currentBooking.totalDiscount;
      console.log(bookingsStore.currentBooking.total);
    } else {
      showModal.value = true;
      validationMessage.value = "Promotion code is invalid";
    }
  } else {
    showModal.value = true;
    validationMessage.value = "Promotion code is invalid";
  }
};

//validate form
const validateForm = () => {
  showModal.value = false;
  validationMessage.value = "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z]+$/;
  const mobilePhoneRegex = /^\d{10}$/; // regex to match exactly 10 digits
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    emailAddress.value === "" ||
    country.value === "" ||
    paymentMethod.value === ""
  ) {
    showModal.value = true;
    validationMessage.value = "Please fill in the required fields";
    return false;
  }
  if (firstName.value.length < 3 || lastName.value.length < 3) {
    showModal.value = true;
    validationMessage.value =
      "First name and last name must be at least 3 characters long";
    return false;
  }
  if (!nameRegex.test(firstName.value) || !nameRegex.test(lastName.value)) {
    showModal.value = true;
    validationMessage.value =
      "First name and last name must contain only alphabetic characters";
    return false;
  }
  // Check if first name and last name contain any numbers
  if (/\d/.test(firstName.value) || /\d/.test(lastName.value)) {
    showModal.value = true;
    validationMessage.value = "First name and last name cannot contain numbers";
    return false;
  }
  if (!emailRegex.test(emailAddress.value)) {
    // If the email address is not valid, alert the user
    showModal.value = true;
    validationMessage.value = "Please enter a valid email address";
    // Return false to indicate that the form is invalid
    return false;
  }
  // Check if telephone number consists of exactly 10 numeric digits
  if (!mobilePhoneRegex.test(mobilePhone.value)) {
    showModal.value = true;
    validationMessage.value = "Telephone number must be a 10-digit number";
    return false;
  }

  return true;
};

//create function to save booking
const saveBooking = () => {
  if (validateForm()) {
    bookingsStore.currentBooking.cusCountry = country.value;
    bookingsStore.currentBooking.cusEmail = emailAddress.value;
    bookingsStore.currentBooking.cusLastName = lastName.value;
    bookingsStore.currentBooking.cusName = firstName.value;
    bookingsStore.currentBooking.cusTel = mobilePhone.value;
    bookingsStore.currentBooking.createdDate = new Date();
    bookingsStore.currentBooking.paymentBooking = paymentMethod.value;
    bookingsStore.currentBooking.cusAddress = description.value;
    bookingsStore.currentBooking.customer = userStore.currentUser.customer;
    console.log(JSON.stringify(bookingsStore.currentBooking));
    bookingsStore.saveBooking();
    clickContinue();
  }
};

function formatTwoDates(date1: Date): string {
  const formatDate = (date: Date): string => {
    const day = date.toDateString().split(" ")[0]; // Extracts the day of the week
    const month = date.toLocaleString("default", { month: "short" }); // Extracts the abbreviated month
    const dayOfMonth = date.getDate(); // Extracts the day of the month
    const year = date.getFullYear(); // Extracts the year

    return `${day}, ${month} ${dayOfMonth}, ${year}`;
  };

  return formatDate(date1);
}
</script>

<template>
  <div class="body">
    <div class="pt-5 pl-5">
      <button @click="clickBack">
        <i style="font-size: 30px" class="far">&#xf359;</i>
      </button>
    </div>

    <div class="min-h-screen flex card-container">
      <!-- Left Side: -->
      <div class="flex-1 flex flex-col pt-3 p-10">
        <div class="card-left flex justify-center items-center">
          <form class="w-full justify-center items-center pl-20">
            <p class="text-black font-semibold text-xl mb-2 ml-3">
              Contact info
            </p>
            <div class="grid gap-3 md:grid-cols-2">
              <!-- Contact Info -->

              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900"
                  >First name*</label
                >
                <input
                  v-model="firstName"
                  type="text"
                  placeholder="First name"
                  class="dc-input"
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900"
                  >Last name*</label
                >
                <input
                  v-model="lastName"
                  type="text"
                  placeholder="Last name"
                  class="dc-input"
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900"
                  >Mobile Phone</label
                >
                <input
                  v-model="mobilePhone"
                  type="tel"
                  placeholder="Mobile Phone"
                  class="dc-input"
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900"
                  >Email Address*</label
                >
                <input
                  v-model="emailAddress"
                  type="email"
                  placeholder="Email Address"
                  class="dc-input"
                  required
                />
              </div>
            </div>

            <!-- Address Section -->
            <div class="mb-2 mt-2">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >Country</label
              >
              <select
                v-model="country"
                class="form-select dc-input"
                style="width: 34%"
              >
                <option value="Thailand" style="font-size: 13px">
                  Thailand
                </option>
                <option value="USA" style="font-size: 13px">USA</option>
                <option value="Japan" style="font-size: 13px">Japan</option>
              </select>
            </div>

            <!-- Description Section -->
            <div class="mb-2">
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >Description</label
              >
              <textarea
                v-model="description"
                class="dc-input"
                style="height: 7vh; width: 85%"
              ></textarea>
            </div>

            <!-- Promotion Section -->
            <div class="grid gap-2 md:grid-cols-2">
              <div class="col-1">
                <label class="block mb-2 text-sm font-medium text-gray-900"
                  >Promotion</label
                >
                <input
                  v-model="promotionId"
                  type="text"
                  placeholder="Code Promotion"
                  class="dc-input mb-2"
                  required
                  style="width: 68%"
                />
              </div>

              <div class="col-2">
                <button
                  @click="checkPromotion(promotionId, $event)"
                  class="mt-6 btn-applypromo"
                  id="btnApplypromo"
                >
                  Apply
                </button>
              </div>
            </div>
            <!-- Payment Information -->
            <div class="grid gap-2 md:grid-cols-2">
              <!-- cretae dropdown payment method -->
              <div class="col-1">
                <label class="block mb-2 text-sm font-medium text-gray-900"
                  >Payment Method</label
                >
                <select
                  v-model="paymentMethod"
                  class="form-select dc-input"
                  style="width: 70%"
                >
                  <option value="cash" style="font-size: 13px">cash</option>
                  <option value="credit card" style="font-size: 13px">
                    credit card
                  </option>
                  <option value="debit card" style="font-size: 13px">
                    debit card
                  </option>
                  <option value="QR code" style="font-size: 13px">
                    QR code
                  </option>
                </select>
              </div>

              <!-- <div class="col-1">
                                <label class="block mb-2 text-sm font-medium text-gray-900">Card Number</label>
                                <input type="text" placeholder="Card Number" class="dc-input" required style="width: 68%;">
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">Expiration Date (MM/YY)*</label>
                                <input type="text" placeholder="MM/YY" class="dc-input" required style="width: 68%;">
                            </div>
                            <div class="md:col-2">
                                <label class="block mb-2 text-sm font-medium text-gray-900">Name on Card*</label>
                                <input type="text" placeholder="Name on Card" class="dc-input" required style="width: 68%;">
                            </div> -->
            </div>
          </form>
        </div>
      </div>

      <!-- Right Side: -->
      <div class="w-full flex-1 flex justify-center mt-3">
        <div class="w-full justify-center">
          <div class="flex-1 flex flex-row justify-center">
            <div class="card-stay overflow-y-auto dc-scroll">
              <p
                class="text-2xl p-2 pl-5 font-semibold"
                style="font-size: 23px"
              >
                Your Stay
              </p>
              <div class="card-container">
                <div class="flex-1 flex flex-row p-2 pl-5">
                  <div
                    class="flex-1 flex flex-col"
                    style="width: 50%; font-size: 16px"
                  >
                    <p class="font-medium">Check-in</p>
                    <p>After 1:00 PM</p>
                  </div>

                  <div
                    class="flex-2 flex flex-col"
                    style="width: 50%; font-size: 16px"
                  >
                    <p class="font-medium">Check-out</p>
                    <p>Before 7:00 AM</p>
                  </div>
                </div>
                <hr class="color-line" />

                <div
                  class="flex-2 flex flex-row p-2 pl-5"
                  style="width: 100%; font-size: 16px"
                >
                  <div class="flex-1 flex flex-col">
                    <p>
                      {{
                        formatTwoDates(
                          new Date(bookingsStore.currentBooking.checkIn)
                        ) +
                        "-" +
                        formatTwoDates(
                          new Date(bookingsStore.currentBooking.checkOut)
                        )
                      }}
                    </p>
                    <p>{{ bookingsStore.currentBooking.adult }} Adult</p>
                  </div>
                </div>

                <div
                  class="flex-3 flex flex-row px-5"
                  style="width: 100%; font-size: 16px"
                  v-for="item of bookingsStore.currentBooking.bookingDetail"
                  :key="item.id"
                >
                  <div class="flex-1 flex flex-col">
                    <p class="font-medium">{{ item.room.roomType.roomType }}</p>
                  </div>
                  <div class="flex-2 flex flex-col">
                    <p class="font-medium">
                      THB {{ item.room.roomType.price }}
                    </p>
                  </div>
                </div>

                <div
                  class="flex-6 flex flex-row pt-2 px-5"
                  style="font-size: 13px"
                  v-for="book in bookingsStore.currentBooking
                    .activityPerBooking"
                  :key="book.id"
                >
                  <div class="flex-1 flex flex-col">
                    <p class="font-medium">{{ book.activity.name }}</p>
                    <p>Guest {{ book.qty }}</p>
                  </div>
                  <div class="flex-2 flex flex-col mt-6">
                    <p>THB {{ book.total }}</p>
                  </div>
                </div>

                <div
                  class="flex flex-row pt-2 px-5 items-center"
                  style="font-size: 13px"
                >
                
                
                  <div class="flex-1 flex flex-row justify-space-around">
                    <div class="flex-1 flex flex-col">
                      <div>
                        <p class="font-medium">Promotion</p>
                      </div>
                      <div  >
                        <p>
                          {{
                            bookingsStore.currentBooking.promotion.name ?? "-"
                          }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                  class="flex-1 flex flex-col justify-end"
                  >
                  <div style="text-align: right;" v-if="bookingsStore.currentBooking.totalDiscount > 0">
                      <i  
                        class="fas fa-trash-alt"
                        style="color: red; cursor: pointer;"
                      ></i>
                    </div>
                    <div style="text-align: right;">
                      <p>
                        {{
                          bookingsStore.currentBooking.promotion.discount ??
                          bookingsStore.currentBooking.promotion
                            .discountPercent + "%"
                        }}
                      </p>
                    </div>
                    
                  </div>

                 
                </div>

                <div
                  class="flex-8 flex flex-row pt-2 px-5"
                  style="font-size: 13px"
                >
                  <div class="flex-1 flex flex-col">
                    <p class="font-medium">Edit | Remove</p>
                  </div>
                </div>

                <div
                  class="flex-8 flex flex-row pt-2 px-5"
                  style="font-size: 13px"
                >
                  <div class="flex-1 flex flex-col">
                    <p class="font-medium">Add room</p>
                  </div>
                </div>

                <div
                  class="flex-9 flex flex-row pt-3 px-5"
                  style="font-size: 20px"
                >
                  <div class="flex-1 flex flex-col">
                    <p class="font-medium">Total:</p>
                  </div>
                  <div class="flex-2 flex flex-col">
                    <p class="font-medium">
                      THB {{ bookingsStore.currentBooking.total }}
                    </p>
                  </div>
                </div>

                <div class="pt-3">
                  <hr class="color-line" />
                </div>

                <div
                  class="flex-9 flex flex-row pt-2 px-5"
                  style="font-size: 20px"
                >
                  <div class="flex-1 flex flex-col">
                    <p class="font-medium">Cash pledge</p>
                  </div>
                  <div class="flex-2 flex flex-col">
                    <p class="font-medium">THB 1,500.00</p>
                  </div>
                </div>

                <div
                  class="flex-8 flex flex-row pt-2 px-5"
                  style="font-size: 12px"
                >
                  <div class="flex-1 flex flex-col">
                    <p class="text-red-500">
                      (This cash pledge is confirmation of your stay at our
                      hotel. You will receive a refund when you check out. As
                      for the room rate, you will have to pay it when you check
                      out.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-2 flex flex-row justify-center pt-3">
            <button class="btn-complete" @click.prevent="saveBooking()">
              <a>Complete Booking</a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
      >
        <div
          class="relative mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
          style="max-width: 90%; margin-top: -20vh"
        >
          <div class="mt-3 text-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              <strong class="font-bold">Oops! 😯</strong>
            </h3>
            <!-- Display errors if any -->
            <div
              v-if="validationMessage"
              class="text-red-700 px-4 py-3 rounded relative mt-3"
            >
              <ul class="mt-1 list-disc list-inside text-start">
                <li>{{ validationMessage }}</li>
              </ul>
            </div>
            <!-- General error message or other content -->

            <div class="items-center px-4 py-3">
              <button
                @click="showModal = false"
                id="ok-btn"
                class="px-4 py-2 bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                OK 😥
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
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
}

.card-container {
  max-width: auto;
  height: 234px;
}

.card-left {
  background-color: #f4f4f4;
  max-width: 40vw;
  /* Set a maximum width for the card */
  height: 78vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* w-full p-2.5 border border-gray-300 rounded-lg shadow-sm */
.dc-input {
  height: 6vh;
  border-radius: 10px;
  border: 1;
  border-color: #b3b3b3;
  width: 70%;
  font-size: 13px;
}

.btn-applypromo {
  background-color: #906843;
  color: white;
  padding: 5px 5px;
  font-weight: medium;
  text-decoration: none;
  display: inline-block;
  width: 128px;
  border-radius: 9999px;
  text-align: center;
  font-size: 13px;
  height: 6vh;
}

.btn-complete {
  background-color: #906843;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px #805d3f;
  font-weight: medium;
  text-decoration: none;
  display: inline-block;
  width: 60%;
}

.card-stay {
  width: 80%;
  height: 70vh;
  border-radius: 10px;
  background-color: rgba(255, 255, 255);
  box-shadow: 0px 4px 6px rgb(0 0 0/0.25);
}

.color-line {
  background-color: #cfcfcf;
  height: 1px;
  width: 90%;
  justify-content: center;
  display: flex;
  margin: auto;
  /* Center the line horizontally */
}

.dc-scroll {
  max-height: 100vh;
  overflow: scroll;
}

.dc-scroll::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.dc-scroll::-webkit-scrollbar-thumb {
  background-color: #ebbd99;
  border-radius: 10px;
}
</style>
