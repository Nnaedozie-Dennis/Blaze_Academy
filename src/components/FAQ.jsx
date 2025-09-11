// import React from "react";

// const FAQ = () => (
//   <section id="faq" className="py-16 bg-gray-100 dark:bg-darkNeutral">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-12">
//         Frequently Asked Questions
//       </h2>
//       <div className="space-y-6 max-w-2xl mx-auto">
//         {[
//           {
//             q: "What is Blaze Academy?",
//             a: "An online learning platform offering diverse courses.",
//           },
//           {
//             q: "How do I enroll?",
//             a: "Choose a plan and sign up on our website.",
//           },
//         ].map((faq, index) => (
//           <div
//             key={index}
//             className="p-4 bg-white dark:bg-darkBg rounded-lg shadow-md"
//           >
//             <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">
//               {faq.q}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default FAQ;




// import React from "react";

// const FAQ = () => (
//   <section id="faq" className="py-16 bg-gray-100 dark:bg-darkNeutral">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-12">
//         Frequently Asked Questions
//       </h2>
//       <div className="space-y-6 max-w-2xl mx-auto">
//         {[
//           {
//             q: "What is Blaze Academy?",
//             a: "An online learning platform offering diverse courses.",
//           },
//           {
//             q: "How do I enroll?",
//             a: "Choose a plan and sign up on our website.",
//           },
//         ].map((faq, index) => (
//           <div
//             key={index}
//             data-animate // Add data-animate for Intersection Observer
//             className="p-4 bg-white dark:bg-darkBg rounded-lg shadow-md"
//           >
//             <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">
//               {faq.q}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default FAQ;




import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Blaze Academy different from other online schools?",
      answer:
        "We focus on practical, project-based learning. Every course is designed to give you hands-on experience, not just theory.",
    },
    {
      question: "Are the classes live or recorded?",
      answer:
        "Both! We offer live sessions with instructors for real-time guidance and recorded materials you can revisit anytime.",
    },
    {
      question: "How long do the programs last?",
      answer:
        "It depends on the course. Short bootcamps run for 6–8 weeks, while advanced programs can last 3–6 months.",
    },
    {
      question: "Do I get a certificate after completing a program?",
      answer:
        "Yes! All students receive a verified certificate you can showcase on LinkedIn or add to your CV.",
    },
    {
      question: "What skills can I learn at Blaze Academy?",
      answer:
        "From coding and web development to data analytics, digital marketing, and design — we cover a wide range of in-demand skills.",
    },
    {
      question: "Can I study while working a full-time job?",
      answer:
        "Absolutely. Our flexible structure allows you to learn at your own pace, anytime and anywhere.",
    },
    {
      question: "How much does it cost to enroll?",
      answer:
        "We have different plans to suit all budgets, starting with the Free Plan for beginners. Premium and Pro plans come with more advanced features and certifications.",
    },
    {
      question: "Do you offer mentorship or career support?",
      answer:
        "Yes. Students on our Premium and Pro plans get access to mentorship, career guidance, and job placement support.",
    },
    {
      question: "Is Blaze Academy suitable for beginners?",
      answer:
        "Yes! Whether you’re starting from scratch or looking to upskill, our structured learning paths guide you step by step.",
    },
    {
      question: "How do I join Blaze Academy?",
      answer:
        "Simply sign up on our website, choose a plan, and start learning right away!",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gray-100 dark:bg-darkNeutral  m-auto">
      <div className="container mx-auto px-4 max-w-[650px]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary dark:text-white mb-4">
          Got Questions? We’ve Got Answers.
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-6">
          At Blaze Academy, we believe clarity builds confidence. Here are
          answers to some of the most common questions students ask before
          joining our programs.
        </p>
        {/* <h3 className="text-2xl font-semibold text-center text-primary dark:text-white mb-8">
          Frequently Asked Questions
        </h3> */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <p className=" text-center text-gray-600 dark:text-gray-300 mt-6">
          Didn’t find your question?{" "} 
          <a
            href="#contact"
            className="text-secondary hover:text-orange-600 transition"
          >
            Please contact our support team
          </a>
        </p>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-animate
      className="p-4 bg-white dark:bg-darkBg rounded-lg shadow-md cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold text-primary dark:text-white">
          {question}
        </h4>
        <ion-icon
          name={isOpen ? "close" : "add"}
          className="text-secondary flex-shrink-0 w-6 h-6"
        ></ion-icon>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-600 dark:text-gray-300">{answer}</p>
      )}
    </div>
  );
};

export default FAQ;