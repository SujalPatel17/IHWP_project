import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const PrakritiAssessment = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({ vata: 0, pitta: 0, kapha: 0 });

  const doshaInfo = {
    vata: {
      name: "Vata",
      color: "purple-600",
      bgColor: "purple-100",
      characteristics: [
        "Quick thinking and creative",
        "Light, enthusiastic, and energetic when balanced",
        "Prone to anxiety and worry when imbalanced",
        "Benefits from routine and grounding practices",
        "Should eat warm, moist, grounding foods",
        "Needs 7-8 hours of sleep and stress management",
      ],
      tips: "To balance Vata: Maintain regular routines, stay warm, practice calming activities like yoga and meditation, eat warm cooked foods, and get adequate rest.",
    },
    pitta: {
      name: "Pitta",
      color: "red-600",
      bgColor: "red-100",
      characteristics: [
        "Sharp intellect and good concentration",
        "Natural leadership qualities",
        "Prone to anger and criticism when imbalanced",
        "Benefits from cooling and calming activities",
        "Should eat cool, refreshing foods and avoid excessive heat",
        "Needs to manage competitiveness and perfectionism",
      ],
      tips: "To balance Pitta: Stay cool, practice patience and acceptance, avoid excessive heat and sun, eat cooling foods, and engage in moderate exercise.",
    },
    kapha: {
      name: "Kapha",
      color: "green-600",
      bgColor: "green-100",
      characteristics: [
        "Calm, loving, and stable nature",
        "Strong stamina and endurance",
        "Prone to lethargy and resistance to change when imbalanced",
        "Benefits from stimulation and variety",
        "Should eat light, dry, warm foods",
        "Needs regular vigorous exercise",
      ],
      tips: "To balance Kapha: Stay active, seek variety and new experiences, avoid oversleeping, eat light and spicy foods, and engage in regular vigorous exercise.",
    },
  };

  const questions = [
    {
      section: "Physical Traits Observation",
      icon: "🧘",
      questions: [
        {
          id: "skin",
          label: "Skin Type:",
          options: [
            { value: "vata", text: "Dry, rough, cool to touch" },
            { value: "pitta", text: "Oily, warm, prone to rashes or acne" },
            {
              value: "kapha",
              text: "Balanced, smooth, slightly oily, well-moisturized",
            },
          ],
        },
        {
          id: "body",
          label: "Body Build:",
          options: [
            {
              value: "vata",
              text: "Thin, light frame, difficulty gaining weight",
            },
            { value: "pitta", text: "Medium, muscular, well-proportioned" },
            {
              value: "kapha",
              text: "Heavy, solid build, tendency to gain weight easily",
            },
          ],
        },
        {
          id: "hair",
          label: "Hair Type:",
          options: [
            { value: "vata", text: "Dry, thin, brittle, prone to split ends" },
            {
              value: "pitta",
              text: "Fine, oily, thin, prone to early graying or hair loss",
            },
            { value: "kapha", text: "Thick, oily, lustrous, strong" },
          ],
        },
        {
          id: "eyes",
          label: "Eyes:",
          options: [
            { value: "vata", text: "Small, dry, active, dark or grayish" },
            {
              value: "pitta",
              text: "Medium, sharp, penetrating, light-sensitive",
            },
            {
              value: "kapha",
              text: "Large, attractive, calm, white and lustrous",
            },
          ],
        },
      ],
    },
    {
      section: "Mental and Emotional Traits",
      icon: "🧠",
      questions: [
        {
          id: "mindset",
          label: "General Mindset:",
          options: [
            {
              value: "vata",
              text: "Restless, creative, always thinking, quick to change",
            },
            {
              value: "pitta",
              text: "Focused, intense, goal-oriented, competitive",
            },
            { value: "kapha", text: "Calm, steady, relaxed, thoughtful" },
          ],
        },
        {
          id: "memory",
          label: "Memory:",
          options: [
            { value: "vata", text: "Quick to learn, quick to forget" },
            { value: "pitta", text: "Sharp memory, good retention" },
            { value: "kapha", text: "Slow to learn but never forgets" },
          ],
        },
        {
          id: "emotions",
          label: "Emotional Tendencies:",
          options: [
            {
              value: "vata",
              text: "Anxious, fearful, worried, enthusiastic in spurts",
            },
            { value: "pitta", text: "Angry, irritable, passionate, intense" },
            {
              value: "kapha",
              text: "Content, loving, attached, sometimes possessive",
            },
          ],
        },
      ],
    },
    {
      section: "Daily Habits and Preferences",
      icon: "⏰",
      questions: [
        {
          id: "diet",
          label: "Dietary Preferences:",
          options: [
            {
              value: "vata",
              text: "Prefer warm, moist, grounding foods; irregular appetite",
            },
            {
              value: "pitta",
              text: "Prefer cool, refreshing foods; strong appetite, can't skip meals",
            },
            {
              value: "kapha",
              text: "Prefer light, dry, spicy foods; low appetite, can skip meals",
            },
          ],
        },
        {
          id: "sleep",
          label: "Sleep Patterns:",
          options: [
            {
              value: "vata",
              text: "Light sleep, restless, difficulty falling asleep, 5-6 hours",
            },
            { value: "pitta", text: "Moderate sleep, sound, 6-7 hours" },
            {
              value: "kapha",
              text: "Deep sleep, heavy, love sleeping, 8+ hours",
            },
          ],
        },
        {
          id: "energy",
          label: "Energy Levels:",
          options: [
            {
              value: "vata",
              text: "Variable energy, bursts of activity followed by fatigue",
            },
            {
              value: "pitta",
              text: "Good energy, sustained throughout the day",
            },
            {
              value: "kapha",
              text: "Steady energy but slow to start, tends toward lethargy",
            },
          ],
        },
      ],
    },
    {
      section: "Environmental Reactions",
      icon: "🌤️",
      questions: [
        {
          id: "weather",
          label: "Weather Preferences:",
          options: [
            {
              value: "vata",
              text: "Prefer warm, humid weather; dislike cold, dry, windy",
            },
            {
              value: "pitta",
              text: "Prefer cool weather; dislike heat and sun",
            },
            {
              value: "kapha",
              text: "Prefer warm, dry weather; dislike cold, damp conditions",
            },
          ],
        },
        {
          id: "stress",
          label: "Stress Response:",
          options: [
            { value: "vata", text: "Become anxious, overwhelmed, scattered" },
            { value: "pitta", text: "Become irritable, angry, critical" },
            {
              value: "kapha",
              text: "Withdraw, become stubborn, resistant to change",
            },
          ],
        },
      ],
    },
  ];

  const handleOptionSelect = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const calculateResults = () => {
    const requiredQuestions = questions.flatMap((section) =>
      section.questions.map((q) => q.id)
    );

    const answeredQuestions = Object.keys(answers);
    const missingCount = requiredQuestions.filter(
      (q) => !answeredQuestions.includes(q)
    ).length;

    if (missingCount > 0) {
      alert(
        `Please answer all questions before calculating! Missing: ${missingCount} question(s)`
      );
      return;
    }

    const scores = { vata: 0, pitta: 0, kapha: 0 };

    Object.values(answers).forEach((value) => {
      scores[value]++;
    });

    const total = scores.vata + scores.pitta + scores.kapha;
    const percentages = {
      vata: Math.round((scores.vata / total) * 100),
      pitta: Math.round((scores.pitta / total) * 100),
      kapha: Math.round((scores.kapha / total) * 100),
    };

    setResults(percentages);
    setShowResults(true);

    setTimeout(() => {
      document
        .getElementById("results")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const getDominantDosha = () => {
    return Object.keys(results).reduce((a, b) =>
      results[a] > results[b] ? a : b
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            🕉️ Ayurvedic Prakriti Self-Assessment
          </h1>
          <p className="text-lg md:text-xl opacity-95">
            Discover Your Body Constitution (Vata, Pitta, Kapha)
          </p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {questions.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="mb-10 p-8 bg-gray-50 rounded-2xl border-l-4 border-purple-500"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {section.icon} {section.section}
              </h2>

              {section.questions.map((question) => (
                <div key={question.id} className="mb-8">
                  <label className="block text-lg font-semibold text-gray-700 mb-4">
                    {question.label}
                  </label>
                  <div className="space-y-3">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        onClick={() =>
                          handleOptionSelect(question.id, option.value)
                        }
                        className={`flex items-center p-4 bg-white border-2 rounded-xl cursor-pointer transition-all duration-300 hover:border-purple-500 hover:translate-x-1 ${
                          answers[question.id] === option.value
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200"
                        }`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option.value}
                          checked={answers[question.id] === option.value}
                          onChange={() => {}}
                          className="mr-3 w-4 h-4 text-purple-600"
                        />
                        <span className="text-gray-700">{option.text}</span>
                        {answers[question.id] === option.value && (
                          <CheckCircle
                            className="ml-auto text-purple-600"
                            size={20}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Calculate Button */}
          <div className="text-center mt-10">
            <button
              onClick={calculateResults}
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Calculate My Prakriti
            </button>
          </div>

          {/* Results Section */}
          {showResults && (
            <div
              id="results"
              className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl animate-fade-in"
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Your Prakriti Results
              </h2>

              {/* Progress Bars */}
              <div className="space-y-6 mb-8">
                {/* Vata */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-purple-600 mb-3">
                    Vata
                  </div>
                  <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold transition-all duration-1000"
                      style={{ width: `${results.vata}%` }}
                    >
                      {results.vata}%
                    </div>
                  </div>
                </div>

                {/* Pitta */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-red-600 mb-3">
                    Pitta
                  </div>
                  <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-white font-bold transition-all duration-1000"
                      style={{ width: `${results.pitta}%` }}
                    >
                      {results.pitta}%
                    </div>
                  </div>
                </div>

                {/* Kapha */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-green-600 mb-3">
                    Kapha
                  </div>
                  <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-white font-bold transition-all duration-1000"
                      style={{ width: `${results.kapha}%` }}
                    >
                      {results.kapha}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Dominant Dosha Info */}
              {(() => {
                const dominant = getDominantDosha();
                const info = doshaInfo[dominant];
                return (
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-4">
                      Your Primary Dosha:{" "}
                      <span className={`text-${info.color}`}>{info.name}</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {info.tips}
                    </p>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">
                      Key Characteristics:
                    </h4>
                    <ul className="space-y-2">
                      {info.characteristics.map((char, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span className="text-gray-700">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrakritiAssessment;
