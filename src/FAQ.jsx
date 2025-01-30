import React, { useState } from 'react';
import './FAQ.css';

const FAQsSection = () => {
  const faqs = [
    {
      id: 1,
      question: "What is a Deepfake?",
      answer:
        "A deepfake is a type of synthetic media in which a person in an existing image, video, or audio is replaced with someone else's likeness, voice, or features. It leverages artificial intelligence (AI), specifically deep learning techniques like generative adversarial networks (GANs), to create highly realistic but manipulated content..",
    },
    {
      id: 2,
      question: "How does a deepfake detection system work?",
      answer:
        "There are various methods to detect deepfakes. A deepfake detection system identifies manipulated media by analyzing inconsistencies and artifacts that are difficult for AI to perfectly replicate, such as anomalies in facial expressions, blinking patterns, lighting, textures, or audio mismatches. Using machine learning models, often convolutional neural networks (CNNs), the system is trained on datasets of real and fake media to distinguish between them. Advanced techniques may also include analyzing temporal inconsistencies across video frames or detecting biological signals like subtle skin tone changes. These systems adapt continuously to counter the rapid advancements in deepfake generation technology.",
    },
    {
      id: 3,
      question: "What architectures does this system use?",
      answer:
        "Our system aims to leverage Frequency-Aware CNN and Vision Transformer for deepfake detection.",
    },
    {
      id: 4,
      question: "Can I contribute to the project?",
      answer:
        "Yes! Our Project will be open for collaboration, but only once the formal submission of the project as our Academic requirement is completed.",
    },
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <section className="faqs" id="faqs">
      <h2 className="faqs-title">Frequently Asked Questions</h2>
      <div className="faqs-container">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <div
              className={`faq-question ${activeFAQ === faq.id ? "active" : ""}`}
              onClick={() => toggleFAQ(faq.id)}
            >
              {faq.question}
            </div>
            {activeFAQ === faq.id && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQsSection;
