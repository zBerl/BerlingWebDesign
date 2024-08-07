<script lang="ts">
    function navigateToForm() {
        window.location.href = '/basic-info.html';
    }
</script>

<section id="contact" class="bg-white py-20">
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col justify-center">
                <h2 class="text-4xl font-bold text-blue-600 mb-4">Let's Get Started in Building Your Website</h2>
                <p class="text-lg text-gray-600 mb-6">Click the button below to begin your journey towards an outstanding online presence.</p>
                <button on:click={navigateToForm} class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">Get Started</button>
            </div>
            <div class="flex justify-center items-center">
                <!-- Meaningful description for the alt attribute -->
                <img src="https://via.placeholder.com/400x300" alt="Illustrative placeholder image" class="rounded shadow-lg">
            </div>
        </div>
    </div>
</section>
