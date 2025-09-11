




import React from 'react';

const Features = () => (
  <section id="features" className="py-16 bg-white dark:bg-darkBg">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl sm:text-5xl font-bold text-center text-primary dark:text-white ">
        Why Choose Blaze Academy?
      </h2>
      <p className="text-gray-600 text-center text-xl sm:text-2xl mt-2 mb-12">
        Discover what sets us ablaze in education.
      </p>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[
          {
            title: "Expert Instructors",
            desc: "Learn from industry leaders with years of experience.",
            icon: "school",
          },
          {
            title: "Flexible Learning",
            desc: "Study at your own pace, anytime, anywhere.",
            icon: "time",
          },
          {
            title: "Affordable Plans",
            desc: "Quality courses that fit your budget",
            icon: "wallet",
          },
          {
            title: "Certificates of Completion",
            desc: "Earn recognized credentials to enhance your resume.",
            icon: "ribbon",
          },
        ].map((feature, index) => (
          <div
            key={index}
            data-animate
            className="p-6 bg-neutral dark:bg-darkNeutral rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer "
          >
            <ion-icon
              name={feature.icon}
              class="text-orange-500 w-8 h-8 mb-2"
            ></ion-icon>
            <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;




// import React from 'react'

// const Features = () => {
//   return (
//     <>
//       <section id="features" class="py-16 bg-gray-50">
//   <div class="container mx-auto text-center mb-8">
//     <h2 class="text-3xl font-bold">Why Blaze Academy?</h2>
//     <p class="text-gray-600 mt-2">Discover what sets us ablaze in education.</p>
//   </div>
//   <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//     <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
//       <ion-icon
//         name="school-outline"
//         class="text-orange-500 w-12 h-12 mb-4"
//       ></ion-icon>
//       <h4 class="font-semibold text-lg">Expert Instructors</h4>
//       <p class="text-gray-500 mt-2">
//         Learn from professionals with real-world experience.
//       </p>
//     </div>
//     <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
//       <ion-icon
//         name="time-outline"
//         class="text-indigo-600 w-12 h-12 mb-4"
//       ></ion-icon>
//       <h4 class="font-semibold text-lg">Flexible Learning</h4>
//       <p class="text-gray-500 mt-2">
//         Study at your own pace, anytime, anywhere.
//       </p>
//     </div>
//     <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
//       <ion-icon
//         name="cash-outline"
//         class="text-green-500 w-12 h-12 mb-4"
//       ></ion-icon>
//       <h4 class="font-semibold text-lg">Affordable Plans</h4>
//       <p class="text-gray-500 mt-2">Quality courses that fit your budget.</p>
//     </div>
//     <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
//       <ion-icon
//         name="ribbon-outline"
//         class="text-yellow-500 w-12 h-12 mb-4"
//       ></ion-icon>
//       <h4 class="font-semibold text-lg">Certificates</h4>
//       <p class="text-gray-500 mt-2">
//         Earn certificates to showcase your skills.
//       </p>
//     </div>
//   </div>
// </section>
//     </>
//   )
// }

// export default Features

