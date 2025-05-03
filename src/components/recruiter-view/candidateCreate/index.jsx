import React, { useState } from "react";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form4 from "./form4";
import Form5 from "./form5";

const Index = () => {
  const [formState, setFormState] = useState(1);
  const totalSteps = 5;
  return (
    <div className="w-full">
      <div className="lg:hidden p-6 flex flex-col gap-6">
        <div className="justify-start text-gray-900 text-xl font-bold leading-tight">
          Candidate Profile Creation
        </div>
        <div className="self-stretch h-14 flex flex-col justify-start items-start gap-8">
          <div className="justify-start text-gray-900 text-base font-bold leading-none">
            Let's get started – You're 20% there!
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-2 rounded-xl ${
                  index < formState ? "bg-lime-600" : "bg-zinc-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {formState === 1 && <Form1 setFormState={setFormState} />}
      {formState === 2 && <Form2 setFormState={setFormState} />}
      {formState === 3 && <Form3 setFormState={setFormState} />}
      {formState === 4 && <Form4 setFormState={setFormState} />}
      {formState === 5 && <Form5 setFormState={setFormState} />}
    </div>
  );
};

export default Index;
