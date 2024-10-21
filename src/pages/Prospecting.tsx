import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const Prospecting: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const prospects = [
    { id: 1, name: 'TechCorp Solutions', industry: 'Software', revenue: '$50M', employees: 250, growthRate: '15%' },
    { id: 2, name: 'GreenEnergy Inc.', industry: 'Renewable Energy', revenue: '$75M', employees: 400, growthRate: '20%' },
    { id: 3, name: 'HealthTech Innovations', industry: 'Healthcare', revenue: '$30M', employees: 150, growthRate: '25%' },
    { id: 4, name: 'DataAnalytics Co.', industry: 'Data Science', revenue: '$40M', employees: 200, growthRate: '18%' },
    { id: 5, name: 'EcoFriendly Products', industry: 'Consumer Goods', revenue: '$60M', employees: 300, growthRate: '12%' },
  ];

  const filteredProspects = prospects.filter(prospect =>
    prospect.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prospect.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Prospecting</h1>
      <div className="mb-6 flex space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search prospects..."
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors duration-200">
          <Filter className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employees</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth Rate</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProspects.map((prospect) => (
              <tr key={prospect.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{prospect.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{prospect.industry}</td>
                <td className="px-6 py-4 whitespace-nowrap">{prospect.revenue}</td>
                <td className="px-6 py-4 whitespace-nowrap">{prospect.employees}</td>
                <td className="px-6 py-4 whitespace-nowrap">{prospect.growthRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prospecting;