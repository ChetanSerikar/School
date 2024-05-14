import React from "react";
import LayoutOne from "./LayoutOne";
import CardSeven from "./CardSeven";

const AdmissionProcess = () => {
  const head = {
    tag: "Process",
    title: "Admission Process",
    desc: "Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school",
  };

  const steps = [
    {
      id: "01",
      title: "Inquiry",
      desc: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
    },
    {
      id: "02",
      title: "School Tour",
      desc: "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
    },
    {
      id: "03",
      title: "Application Form",
      desc: "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
    },
    {
      id: "04",
      title: "Parent Interview",
      desc: "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
    },
    {
      id: "05",
      title: "Student Assessment",
      desc: "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
    },
    {
      id: "06",
      title: "Acceptance",
      desc: "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
    },
  ];

  return (
    <div className=" margin-bottom-150">
      <LayoutOne Head={head} />
      <div className="process">
        {steps.map((step) => (
          <CardSeven step={step} key={step.id} />
        ))}
      </div>
    </div>
  );
};

export default AdmissionProcess;
