import React, { useState } from 'react';
import { FileText, Upload, Search, Download, Trash2 } from 'lucide-react';

const Documents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const documents = [
    { id: 1, name: 'Financial Statements Q2 2023.pdf', type: 'PDF', size: '2.5 MB', uploadedBy: 'John Doe', uploadDate: '2023-07-15' },
    { id: 2, name: 'Due Diligence Report - Tech Innovators.docx', type: 'DOCX', size: '1.8 MB', uploadedBy: 'Jane Smith', uploadDate: '2023-07-14' },
    { id: 3, name: 'Merger Agreement Draft v2.pdf', type: 'PDF', size: '3.2 MB', uploadedBy: 'Mike Johnson', uploadDate: '2023-07-13' },
    { id: 4, name: 'Valuation Model - Global Solutions.xlsx', type: 'XLSX', size: '5.1 MB', uploadedBy: 'Sarah Brown', uploadDate: '2023-07-12' },
    { id: 5, name: 'Legal Opinion - Startup X Funding.pdf', type: 'PDF', size: '1.5 MB', uploadedBy: 'David Lee', uploadDate: '2023-07-11' },
  ];

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Documents</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors duration-200">
          <Upload className="w-5 h-5" />
          <span>Upload Document</span>
        </button>
      </div>
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search documents..."
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded By</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredDocuments.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <FileText className="w-5 h-5 text-gray-400 mr-2" />
                  {doc.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.size}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.uploadedBy}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doc.uploadDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      <Download className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Documents;