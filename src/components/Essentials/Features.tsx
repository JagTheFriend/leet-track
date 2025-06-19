"use client";

import { BarChart, BookOpen, Brain, Code, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-6 w-6 text-[#6366f1]" />,
    title: "Smart Code Challenges",
    description:
      "Curated problems with adaptive difficulty and AI-powered hints.",
  },
  {
    icon: <Code className="h-6 w-6 text-[#6366f1]" />,
    title: "Real-Time Code Editor",
    description: "Instant feedback, multi-language support, and dark mode.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-[#6366f1]" />,
    title: "Detailed Analytics",
    description: "Track your progress, skills, and daily streaks.",
  },
  {
    icon: <Trophy className="h-6 w-6 text-indigo-600" />,
    title: "Global Leaderboard",
    description: "Compete with coders worldwide and earn badges.",
  },
  {
    icon: <Users className="h-6 w-6 text-indigo-600" />,
    title: "Collaborative Coding",
    description: "Pair programming and real-time code sharing.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
    title: "Structured Learning Paths",
    description: "Guided tracks from beginner to advanced.",
  },
];

export default function Features() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Why Choose Leet<span className="text-[#6366f1]">Track</span>?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#e0e7ff] rounded-full mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
