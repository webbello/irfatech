<template>
  <div class="pt-16">
    <div class="section-padding">
      <div class="container-max">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with Saloo & Neena Chowdhury for speaking engagements, Car Restoration projects, media 
            interviews, or to learn more about their incredible journey.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold mb-6">Send a Message</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your first name"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your last name"
                  >
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                >
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="interview">Media Interview</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                :disabled="submitting"
                class="w-full btn-primary"
              >
                <iconify-icon 
                  v-if="submitting" 
                  icon="lucide:loader-2" 
                  class="mr-2 animate-spin"
                ></iconify-icon>
                {{ submitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
            
            <!-- Success Message -->
            <div 
              v-if="submitted" 
              class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
            >
              <div class="flex items-center">
                <iconify-icon icon="lucide:check-circle" class="text-green-600 mr-2"></iconify-icon>
                <span class="text-green-800">Thank you! Your message has been sent successfully.</span>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Contact Details -->
            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div class="space-y-4">
                <div class="flex items-center">
                  <iconify-icon icon="lucide:map-pin" class="text-blue-600 mr-3 text-xl"></iconify-icon>
                  <div>
                    <div class="font-medium">Location</div>
                    <div class="text-gray-600">67 Theater Road, Shakespeare Sarani, <br/>Kolkata 700017, West Bengal, India</div>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <iconify-icon icon="lucide:mail" class="text-blue-600 mr-3 text-xl"></iconify-icon>
                  <div>
                    <div class="font-medium">Email</div>
                    <div class="text-gray-600">saloochoudhury@hotmail.com</div>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <iconify-icon icon="lucide:phone" class="text-blue-600 mr-3 text-xl"></iconify-icon>
                  <div>
                    <div class="font-medium">Phone</div>
                    <div class="text-gray-600">+91 XXX XXX XXXX</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-blue-50 rounded-lg p-6">
              <h3 class="text-xl font-semibold mb-4">Follow Our Journey</h3>
              
              <div class="flex space-x-4">
                <a 
                  href="#" 
                  class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <iconify-icon icon="lucide:facebook" class="text-xl"></iconify-icon>
                </a>
                <a 
                  href="#" 
                  class="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                >
                  <iconify-icon icon="lucide:twitter" class="text-xl"></iconify-icon>
                </a>
                <a 
                  href="#" 
                  class="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                >
                  <iconify-icon icon="lucide:instagram" class="text-xl"></iconify-icon>
                </a>
                <a 
                  href="#" 
                  class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                >
                  <iconify-icon icon="lucide:youtube" class="text-xl"></iconify-icon>
                </a>
              </div>
            </div>

            <!-- Speaking Engagements -->
            <div class="bg-yellow-50 rounded-lg p-6">
              <h3 class="text-xl font-semibold mb-4">Speaking Engagements</h3>
              <p class="text-gray-700 mb-4">
                Saloo & Neena are available for motivational speaking, corporate events, 
                and educational institutions. Share their inspiring story of determination 
                and achievement with your audience.
              </p>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-center">
                  <iconify-icon icon="lucide:check" class="text-green-500 mr-2"></iconify-icon>
                  Corporate Events & Conferences
                </li>
                <li class="flex items-center">
                  <iconify-icon icon="lucide:check" class="text-green-500 mr-2"></iconify-icon>
                  Educational Institutions
                </li>
                <li class="flex items-center">
                  <iconify-icon icon="lucide:check" class="text-green-500 mr-2"></iconify-icon>
                  Adventure & Travel Events
                </li>
                <li class="flex items-center">
                  <iconify-icon icon="lucide:check" class="text-green-500 mr-2"></iconify-icon>
                  Media Interviews
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Contact - Saloo & Neena Chowdhury',
  description: 'Get in touch with world record holders Saloo & Neena Chowdhury for speaking engagements, interviews, and collaborations.',
  ogTitle: 'Contact - Saloo & Neena Chowdhury'
})

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const submitted = ref(false)

const submitForm = async () => {
  submitting.value = true
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
    submitted.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      submitted.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    submitting.value = false
  }
}
</script>
