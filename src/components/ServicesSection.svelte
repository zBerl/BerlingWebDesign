<script lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faCode, faCogs, faShoppingCart, faTachometerAlt, faMobileAlt, faDesktop, faFileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
</script>

<section id="services" class="bg-white py-20 font-poppins">
    <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-center mb-6 text-blue-600">Professional Web Development Services</h2>
        <p class="text-lg text-gray-600 mb-12">Comprehensive solutions to elevate your online presence</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="flex flex-col items-center">
                <FontAwesomeIcon icon={faCode} class="text-blue-600 mb-2 text-4xl" />
                <h3 class="text-xl font-semibold mb-2">Custom Web Development</h3>
                <p class="text-gray-600">Tailored web development services to meet your unique business needs.</p>
            </div>
            <div class="flex flex-col items-center">
                <FontAwesomeIcon icon={faCogs} class="text-blue-600 mb-2 text-4xl" />
                <h3 class="text-xl font-semibold mb-2">CMS Integration</h3>
                <p class="text-gray-600">Efficient integration of content management systems like WordPress and Drupal.</p>
            </div>
            <div class="flex flex-col items-center">
                <FontAwesomeIcon icon={faShoppingCart} class="text-blue-600 mb-2 text-4xl" />
                <h3 class="text-xl font-semibold mb-2">E-commerce Development</h3>
                <p class="text-gray-600">Implementing secure and scalable e-commerce solutions to boost your online sales.</p>
            </div>
            <div class="flex flex-col items-center">
                <FontAwesomeIcon icon={faTachometerAlt} class="text-blue-600 mb-2 text-4xl" />
                <h3 class="text-xl font-semibold mb-2">Website Optimization</h3>
                <p class="text-gray-600">Optimization of your website for faster loading times and improved user experience.</p>
            </div>
            <div class="flex flex-col items-center">
                <FontAwesomeIcon icon={faMobileAlt} class="text-blue-600 mb-2 text-4xl" />
                <h3 class="text-xl font-semibold mb-2">Responsive Design</h3>
                <p class="text-gray-600">Creating mobile-friendly websites that look great on all devices.</p>
            </div>
            <div class="flex flex-col items-center">
                <FontAwesomeIcon icon={faDesktop} class="text-blue-600 mb-2 text-4xl" />
                <h3 class="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p class="text-gray-600">Designing intuitive and engaging user interfaces for better user experience.</p>
            </div>
            <div class="flex flex-col items-center">
                <FontAwesomeIcon icon={faFileAlt} class="text-blue-600 mb-2 text-4xl" />
                <h3 class="text-xl font-semibold mb-2">Content Management</h3>
                <p class="text-gray-600">Professional and timely content upload services to keep your website fresh and up-to-date.</p>
            </div>
            <div class="flex flex-col items-center">
                <FontAwesomeIcon icon={faPaperPlane} class="text-blue-600 mb-2 text-4xl" />
                <h3 class="text-xl font-semibold mb-2">SEO Services</h3>
                <p class="text-gray-600">Optimizing your website to rank higher in search engine results and attract more visitors.</p>
            </div>
        </div>
    </div>
</section>
