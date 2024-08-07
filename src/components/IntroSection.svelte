<script lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faCheckCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
</script>

<section id="intro" class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-20 font-poppins">
  <div class="container mx-auto px-4 md:px-8 lg:px-16 text-center" data-aos="fade-up">
    <div class="text-sm font-semibold text-yellow-300 mb-2">Looking for a Professional Web Developer?</div>
    <h1 class="text-4xl md:text-5xl font-bold mb-4 font-heading">I’m Here to Help.</h1>
    <p class="text-xl font-sans mb-4">I specialize in creating responsive, clean-coded, and attractive websites that turn your ideas into reality.</p>
    <a href="#contact" class="inline-block bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 font-semibold mb-6 transition duration-300">Get In Touch</a>
    <p class="text-gray-300 mb-6">Get Started In Less Than 60 Seconds • Cancel Anytime</p>
    <div class="flex justify-center space-x-4 mb-10">
      <div class="flex items-center">
        <FontAwesomeIcon icon={faCheckCircle} class="text-yellow-300 mr-2" />
        <p class="text-gray-300">Over 10 Years of Experience</p>
      </div>
      <div class="flex items-center">
        <FontAwesomeIcon icon={faCheckCircle} class="text-yellow-300 mr-2" />
        <p class="text-gray-300">Expert in Latest Technologies</p>
      </div>
      <div class="flex items-center">
        <FontAwesomeIcon icon={faCheckCircle} class="text-yellow-300 mr-2" />
        <p class="text-gray-300">Customer Satisfaction Guaranteed</p>
      </div>
    </div>
    <div class="w-full max-w-3xl mx-auto mb-10">
      <div class="relative w-full h-0" style="padding-bottom: 56.25%;" data-aos="zoom-in">
        <div class="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
          <FontAwesomeIcon icon={faPlayCircle} class="text-gray-400 text-6xl" />
          <p class="absolute text-gray-400">Video Placeholder</p>
        </div>
      </div>
    </div>
  </div>
</section>
