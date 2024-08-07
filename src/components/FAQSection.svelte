<script>
    let faqs = [
        {
            question: 'What services do you offer?',
            answer: 'We offer custom web development, CMS integration, e-commerce development, website optimization, responsive design, UI/UX design, content management, and SEO services.',
        },
        {
            question: 'How long does it take to build a website?',
            answer: 'The timeline depends on the complexity and requirements of the project. On average, a simple website may take 2-4 weeks, while more complex projects may take 8-12 weeks or longer.',
        },
        {
            question: 'What technologies do you use?',
            answer: 'We use HTML, CSS, JavaScript, PHP, MySQL, React, Vue, Next.js, Nuxt.js, Tailwind CSS, and various CMS platforms like WordPress and custom CMS solutions.',
        },
        {
            question: 'Do you provide website maintenance?',
            answer: 'Yes, we offer ongoing website maintenance and support to ensure your website remains up-to-date, secure, and performs optimally.',
        },
    ];
</script>

<section class="bg-white py-16" id="faq">
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 class="text-3xl font-bold text-blue-600 mb-8">Frequently Asked Questions</h2>
        <div class="space-y-4">
            {#each faqs as faq}
                <details class="p-4 bg-gray-100 rounded">
                    <summary class="font-semibold text-lg cursor-pointer">{faq.question}</summary>
                    <p class="mt-2 text-gray-700">{faq.answer}</p>
                </details>
            {/each}
        </div>
    </div>
</section>

<style>
    summary {
        list-style: none;
    }
</style>
