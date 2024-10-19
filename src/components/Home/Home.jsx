import React, { useEffect, useState } from 'react';
import { account, databases } from '../../lib/appwrite'; // Adjust the import based on your project structure
import { Query } from 'appwrite';
import { Progress } from 'antd';

const Home = () => {
  const [growth, setGrowth] = useState({
    level: 'Unknown',
    experience: 0,
    next: 0
  });
  const [userStats, setUserStats] = useState({
    health: 'Unknown',
    strength: 'Unknown',
    agility: 'Unknown',
    intelligence: 'Unknown',
    charisma: 'Unknown',
    stamina: 'Unknown',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await account.get();
        const userId = user.$id;
        const response = await databases.listDocuments(
          import.meta.env.VITE_DATABASE,
          '67138b0e001051689e0e',
          [
            Query.equal('userId', userId)
          ]
        );

        const stats = response.documents[0];
        setGrowth({
          level: stats.level || 'Unknown',
          experience: stats.experience || 0,
          next: stats.nextExperience || 0
        });

        console.log('fsfjs k: ', growth)
        setUserStats({
          health: stats.health || 'Unknown',
          strength: stats.strength || 'Unknown',
          agility: stats.agility || 'Unknown',
          intelligence: stats.intelligence || 'Unknown',
          charisma: stats.charisma || 'Unknown',
          stamina: stats.stamina || 'Unknown',
        });
      } catch (err) {
        console.error('Error fetching user data: ', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg rounded-lg p-8 w-full">
        <h1 className="text-4xl font-bold text-center mb-6">User Status</h1>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <h2 className="text-2xl font-semibold mt-2">Player Name</h2>
          <p className="text-gray-400">Role: Adventurer</p>
          <Progress
            percent={((growth.experience / growth.next) * 100).toFixed(2)}
            status="active"
            strokeColor={
              ((growth.experience / growth.next) * 100) < 30
                ? '#ff4d4f'
                : ((growth.experience / growth.next) * 100) < 70
                  ? '#ffa940'
                  : '#4caf50'
            }
            className="w-full mt-4"
          />
        </div>

        {/* User Stats Section */}
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(userStats).map(([key, value]) => (
            <div
              key={key}
              className="bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2 capitalize">{key}</h2>
              <p className="text-lg">{value ?? 'Unknown'}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
            Upgrade Stats
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;