



//GROK
// import React from "react";
// const Testimonials = () => (
//   <section id="testimonials" className="py-16 bg-white dark:bg-darkBg">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-6">
//         Testimonials
//       </h2>
//       <div className="text-center text-gray-600 dark:text-gray-300 mb-12">
//         Our students’ success is our biggest achievement. <br />Here’s what
//         they say about us
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {[
//           { name: "Jane Doe", quote: "Blaze Academy transformed my career!" },
//           {
//             name: "John Smith",
//             quote: "The courses are engaging and practical.",
//           },
//         ].map((testimonial, index) => (
//           <div
//             key={index}
//             data-animate // Add data-animate for Intersection Observer
//             className="p-6 bg-neutral dark:bg-darkNeutral rounded-lg shadow-md"
//           >
//             <p className="text-gray-600 dark:text-gray-300 mb-4">
//               "{testimonial.quote}"
//             </p>
//             <p className="text-primary dark:text-white font-semibold">
//               {testimonial.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );
// export default Testimonials;




//CHAT GPT
// import React from 'react'
// const Testimonials = () => {
//   return (
//     <>
//       <section class="bg-gray-50 py-16">
//   <div class="max-w-6xl mx-auto px-6">

//     <div class="text-center mb-12">
//       <h2 class="text-3xl font-bold text-gray-900">Success Stories</h2>
//       <p class="mt-2 text-lg text-gray-600">
//         See how Blaze Academy has helped learners achieve their career goals.
//       </p>
//     </div>

 
//     <div class="grid md:grid-cols-3 gap-8">

//       <div class="bg-white p-6 rounded-2xl shadow-md">
//         <div class="flex items-center mb-4">
//           <ion-icon name="person-circle-outline" class="text-blue-500 text-4xl"></ion-icon>
//           <div class="ml-3">
//             <h3 class="font-semibold text-gray-800">Jane Doe</h3>
//             <p class="text-sm text-gray-500">Software Engineer</p>
//           </div>
//         </div>
//         <p class="text-gray-600">
//           “Blaze Academy gave me the confidence and skills to land my dream job in tech. The interactive lessons made learning easy and fun.”
//         </p>
//       </div>


//       <div class="bg-white p-6 rounded-2xl shadow-md">
//         <div class="flex items-center mb-4">
//           <ion-icon name="person-circle-outline" class="text-red-500 text-4xl"></ion-icon>
//           <div class="ml-3">
//             <h3 class="font-semibold text-gray-800">Michael Smith</h3>
//             <p class="text-sm text-gray-500">Digital Marketer</p>
//           </div>
//         </div>
//         <p class="text-gray-600">
//           “The courses at Blaze Academy are practical and industry-relevant. I was able to switch careers successfully.”
//         </p>
//       </div>


//       <div class="bg-white p-6 rounded-2xl shadow-md">
//         <div class="flex items-center mb-4">
//           <ion-icon name="person-circle-outline" class="text-green-500 text-4xl"></ion-icon>
//           <div class="ml-3">
//             <h3 class="font-semibold text-gray-800">Sophia Lee</h3>
//             <p class="text-sm text-gray-500">UX Designer</p>
//           </div>
//         </div>
//         <p class="text-gray-600">
//           “I love how flexible the platform is. I could learn at my own pace, and the projects helped me build a solid portfolio.”
//         </p>
//       </div>
//     </div>
//   </div>
// </section>
//     </>
//   )
// }
// export default Testimonials



import React from "react";

const Testimonials = () => (
  <section id="testimonials" className="py-16 bg-neutral dark:bg-darkNeutral">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary dark:text-white">
          Success Stories
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          See how Blaze Academy has helped learners achieve their career goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Jane Doe",
            role: "Software Engineer",
            quote:
              "Blaze Academy gave me the confidence and skills to land my dream job in tech. The interactive lessons made learning easy and fun.",
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
          },
          {
            name: "Michael Smith",
            role: "Digital Marketer",
            quote:
              "The courses at Blaze Academy are practical and industry-relevant. I was able to switch careers successfully.",
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
          },
          {
            name: "Sophia Lee",
            role: "UX Designer",
            quote:
              "I love how flexible the platform is. I could learn at my own pace, and the projects helped me build a solid portfolio.",
            image:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150",
          },
          {
            name: "Alex Johnson",
            role: "Data Analyst",
            quote:
              "The hands-on projects helped me master data analysis and land a high-paying job.",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150",
          },
          {
            name: "Emily Chen",
            role: "Web Developer",
            quote:
              "Blaze Academy’s clear instruction and real-world projects made learning to code a breeze.",
            image:
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
          },
          {
            name: "David Brown",
            role: "Cloud Architect",
            quote:
              "The cloud computing course was top-notch, giving me skills to excel in my career.",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            data-animate
            className="p-6 bg-white dark:bg-darkBg rounded-xl shadow-md"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <h3 className="font-semibold text-primary dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;