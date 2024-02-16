<script setup lang="ts">

</script>
<template >
    <div>
        <body>


<!-- Title and Date/Time -->
<div class="flex justify-between items-center p-4">
    <h1 class="text-xl font-bold">Check-out management</h1>
    <div>
        <p>Date: <span class="font-semibold">27 Dec 2023</span></p>
        <p>Time: <span class="font-semibold">6:27 AM</span></p>
    </div>
</div>

<!-- Search bar -->
<div class="flex justify-start p-4">
    <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered">
        <button class="btn btn-square pl-5">
            <i class="fa fa-search"></i>

        </button>
    </div>
</div>

<!-- Table -->
<div class="overflow-x-auto">
    <table class="table w-full">
        <!-- Headings -->
        <thead>
            <tr>
                <th>Name</th>
                <th>Date Check-out</th>
                <th>Room number</th>
                <th>Type room</th>
                <th>Guest</th>
                <th>Check-out</th>
            </tr>
        </thead>
        <tbody>
            <!-- Table rows -->
        </tbody>
    </table>
</div>

<!-- Footer or additional information -->
<footer class="p-4">
    <!-- Footer content goes here -->
</footer>

</body>
    </div>
</template>

<style >
    
</style>