// import React from 'react';
import { BiAward, BiDumbbell, BiTrendingUp } from 'react-icons/bi';
import { FiActivity } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { Activity, TrendingUp, Dumbbell, Award } from 'lucide-react';

const FitnessDashboard = () => {
  const weeklyData = [
    { day: 'Mon', calories: 1200, protein: 120, carbs: 150, fat: 40 },
    { day: 'Tue', calories: 1150, protein: 115, carbs: 140, fat: 38 },
    { day: 'Wed', calories: 1029, protein: 51, carbs: 180, fat: 11 },
    { day: 'Thu', calories: 1300, protein: 125, carbs: 160, fat: 45 },
    { day: 'Fri', calories: 1100, protein: 110, carbs: 130, fat: 35 },
    { day: 'Sat', calories: 950, protein: 95, carbs: 120, fat: 30 },
    { day: 'Sun', calories: 1250, protein: 130, carbs: 155, fat: 42 }
  ];

  const weeklyAverages = {
    calories: Math.round(weeklyData.reduce((acc, day) => acc + day.calories, 0) / 7),
    protein: Math.round(weeklyData.reduce((acc, day) => acc + day.protein, 0) / 7),
    carbs: Math.round(weeklyData.reduce((acc, day) => acc + day.carbs, 0) / 7),
    fat: Math.round(weeklyData.reduce((acc, day) => acc + day.fat, 0) / 7)
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-black">
      <h1 className="text-3xl font-bold text-red-500 mb-8">Weekly Fitness Summary</h1>

      <div className="mb-8 bg-gray-900 p-6 rounded-lg border border-red-800">
        <h2 className="text-xl font-semibold mb-4 text-red-500">Weekly Progress</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>
              <XAxis dataKey="day" stroke="#f87171" />
              <YAxis stroke="#f87171" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#111827',
                  border: '1px solid #991b1b',
                  color: '#f87171'
                }}
              />
              <Line type="monotone" dataKey="calories" stroke="#dc2626" strokeWidth={2} />
              <Line type="monotone" dataKey="protein" stroke="#9f1239" strokeWidth={2} />
              <Line type="monotone" dataKey="carbs" stroke="#e11d48" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-900 p-6 rounded-lg border border-red-800">
          <div className="flex items-center">
            <FiActivity className="w-8 h-8 text-red-500 mr-3" />
            <div>
              <p className="text-sm text-gray-400">Avg. Calories</p>
              <p className="text-2xl font-bold text-red-500">{weeklyAverages.calories}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg border border-red-800">
          <div className="flex items-center">
            <BiDumbbell className="w-8 h-8 text-red-500 mr-3" />
            <div>
              <p className="text-sm text-gray-400">Avg. Protein</p>
              <p className="text-2xl font-bold text-red-500">{weeklyAverages.protein}g</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-red-800">
          <div className="flex items-center">
            <BiTrendingUp className="w-8 h-8 text-red-500 mr-3" />
            <div>
              <p className="text-sm text-gray-400">Avg. Carbs</p>
              <p className="text-2xl font-bold text-red-500">{weeklyAverages.carbs}g</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-red-800">
          <div className="flex items-center">
            <BiAward className="w-8 h-8 text-red-500 mr-3" />
            <div>
              <p className="text-sm text-gray-400">Weekly Streak</p>
              <p className="text-2xl font-bold text-red-500">3 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessDashboard;