import{ useState } from 'react';
// import { Plus, X, TrendingUp, Activity, Timer, Dumbbell } from 'lucide-react';
import { FiActivity, FiPlus, FiTrendingUp, FiX } from "react-icons/fi";
import { CiDumbbell, CiTimer } from "react-icons/ci";



const ActivityLog = () => {
  const [weeklyData, setWeeklyData] = useState([
    {
      day: "Monday",
      exercises: [
        {
          name: "Jumping Rope",
          duration: "20",
          reps: null,
          distance: null,
          calories: "250",
          notes: "Felt great, very energetic!"
        },
        {
          name: "Push-Ups",
          duration: null,
          reps: "50",
          distance: null,
          calories: "150",
          notes: "Arms felt strong."
        }
      ],
      totalCalories: 400
    },
    {
      day: "Tuesday",
      exercises: [
        {
          name: "Running",
          duration: "30",
          reps: null,
          distance: "5",
          calories: "300",
          notes: "Paced myself better today."
        }
      ],
      totalCalories: 300
    }
  ]);

  const getWeeklyStats = () => ({
    totalCalories: weeklyData.reduce((sum, day) => sum + day.totalCalories, 0),
    totalWorkouts: weeklyData.reduce((sum, day) => sum + day.exercises.length, 0),
    avgDuration: Math.round(weeklyData.reduce((sum, day) => 
      sum + day.exercises.reduce((total, ex) => total + (parseInt(ex.duration) || 0), 0), 0) / 
      weeklyData.reduce((sum, day) => sum + day.exercises.length, 0)) || 0,
    totalDistance: weeklyData.reduce((sum, day) => 
      sum + day.exercises.reduce((total, ex) => total + (parseInt(ex.distance) || 0), 0), 0)
  });

  const stats = getWeeklyStats();

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-red-500 text-center mb-8">Weekly Activity Log</h1>
        
        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 rounded-lg p-6 border border-red-900">
            <div className="flex items-center gap-2 text-red-500 mb-2">
              <FiActivity size={24} />
              <h3 className="text-lg font-semibold">Total Workouts</h3>
            </div>
            <p className="text-2xl font-bold text-white">{stats.totalWorkouts}</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-red-900">
            <div className="flex items-center gap-2 text-red-500 mb-2">
              <FiTrendingUp size={24} />
              <h3 className="text-lg font-semibold">Total Calories</h3>
            </div>
            <p className="text-2xl font-bold text-white">{stats.totalCalories} kcal</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-red-900">
            <div className="flex items-center gap-2 text-red-500 mb-2">
              <CiTimer  size={24} />
              <h3 className="text-lg font-semibold">Avg Duration</h3>
            </div>
            <p className="text-2xl font-bold text-white">{stats.avgDuration} mins</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-red-900">
            <div className="flex items-center gap-2 text-red-500 mb-2">
              <CiDumbbell size={24} />
              <h3 className="text-lg font-semibold">Total Distance</h3>
            </div>
            <p className="text-2xl font-bold text-white">{stats.totalDistance} km</p>
          </div>
        </div>

        {/* Daily Logs */}
        {weeklyData.map((dayData, dayIndex) => (
          <div key={dayIndex} className="mb-8 bg-gray-900 rounded-lg overflow-hidden border border-red-900">
            <div className="bg-red-900 p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">{dayData.day}</h2>
                
              </div>
            </div>

            <div className="p-4">
              {dayData.exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex} className="mb-4 bg-gray-800 p-4 rounded-lg border border-red-800">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-white">{exercise.name}</h3>
                    <button className="text-red-500 hover:text-red-400">
                      <FiX size={20} />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-gray-300">
                    {exercise.duration && <p>Duration: {exercise.duration} mins</p>}
                    {exercise.reps && <p>Reps: {exercise.reps}</p>}
                    {exercise.distance && <p>Distance: {exercise.distance} km</p>}
                    <p>Calories: {exercise.calories} kcal</p>
                  </div>
                  {exercise.notes && (
                    <p className="mt-2 text-sm text-gray-400">{exercise.notes}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gray-800 p-4 border-t border-red-900">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-white">Total Calories:</h4>
                <p className="text-2xl font-bold text-red-500">{dayData.totalCalories} kcal</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;