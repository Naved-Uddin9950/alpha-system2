import React, { useState } from 'react';
import { Heart, Star, BarChart, UserPlus, Brain, Activity, Thermometer, Eye, EyeOff, Target } from 'lucide-react'; // Import Eye and EyeOff here
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Status = () => {
    const [characterStats] = useState({
        name: 'Shinigami',
        level: 10,
        experience: 2500,
        maxExperience: 5000,
        health: 80,
        maxHealth: 100,
        strength: 20,
        maxStrength: 50,
        charisma: 15,
        maxCharisma: 20,
        intelligence: 25,
        maxIntelligence: 30,
        stamina: 30,
        maxStamina: 40,
        agility: 18,
        maxAgility: 30,
        defence: 8,
        maxDefence: 15,
        wisdom: 12,
        maxWisdom: 18,
        perception: 10,
        maxPerception: 15,
        leadership: 5,
        maxLeadership: 10,
        empathy: 8,
        maxEmpathy: 12,
        crafting: 15,
        maxCrafting: 20,
        luck: 10,
        maxLuck: 15,
        stealth: 12,
        maxStealth: 18,
        willpower: 8,
        maxWillpower: 12,
        focus: 10,
        maxFocus: 15,
    });

    if (!characterStats) {
        return <div>Loading...</div>; // Or any other loading state
    }

    const stats = [
        { name: 'Health', value: 80, maxValue: 100, icon: <Heart className="w-6 h-6 text-red-500" /> },
        { name: 'Strength', value: 20, maxValue: 50, icon: <Star className="w-6 h-6 text-yellow-500" /> },
        { name: 'Charisma', value: 15, maxValue: 20, icon: <UserPlus className="w-6 h-6 text-green-500" /> },
        { name: 'Intelligence', value: 25, maxValue: 30, icon: <Brain className="w-6 h-6 text-blue-500" /> },
        { name: 'Stamina', value: 30, maxValue: 40, icon: <Activity className="w-6 h-6 text-teal-500" /> },
        { name: 'Agility', value: 18, maxValue: 30, icon: <Thermometer className="w-6 h-6 text-orange-500" /> },
        { name: 'Defence', value: 8, maxValue: 15, icon: <BarChart className="w-6 h-6 text-purple-500" /> },
        { name: 'Wisdom', value: 12, maxValue: 18, icon: <Brain className="w-6 h-6 text-indigo-500" /> },
        { name: 'Perception', value: 10, maxValue: 15, icon: <Eye className="w-6 h-6 text-pink-500" /> },
        { name: 'Leadership', value: 5, maxValue: 10, icon: <UserPlus className="w-6 h-6 text-yellow-500" /> },
        { name: 'Empathy', value: 8, maxValue: 12, icon: <Heart className="w-6 h-6 text-red-500" /> },
        { name: 'Crafting', value: 15, maxValue: 20, icon: <Star className="w-6 h-6 text-gray-500" /> },
        { name: 'Luck', value: 10, maxValue: 15, icon: <Star className="w-6 h-6 text-yellow-500" /> },
        { name: 'Stealth', value: 12, maxValue: 18, icon: <EyeOff className="w-6 h-6 text-blue-500" /> },
        { name: 'Willpower', value: 8, maxValue: 12, icon: <Brain className="w-6 h-6 text-purple-500" /> },
        { name: 'Focus', value: 10, maxValue: 15, icon: <Target className="w-6 h-6 text-green-500" /> },
    ];

    return (
        <div className="dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg shadow-lg dark:shadow-dark w-full mx-auto">
            {/* Character Info */}
            <div className="flex items-center justify-center flex-wrap gap-2 mb-4">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-xl font-semibold">{characterStats?.name}</span>
                <h3>( Adventurer )</h3>
            </div>

            {/* Stats Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                    <div key={index} className="mb-6">
                        <div className="flex justify-between mb-2">
                            {stat.icon}
                            <span className="text-sm">{stat.name}</span>
                            <span className="text-sm">{stat.value} / {stat.maxValue}</span>
                        </div>
                        <div className="w-full bg-gray-700 h-2 rounded-full">
                            <div
                                className="bg-blue-500 h-full rounded-full"
                                style={{ width: `${(stat.value / stat.maxValue) * 100}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Status;