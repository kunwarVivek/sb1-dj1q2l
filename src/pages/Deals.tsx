import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { PlusCircle, Search } from 'lucide-react';

interface Deal {
  id: number;
  name: string;
  type: string;
  status: string;
  value: string;
}

const columnHelper = createColumnHelper<Deal>();

const columns = [
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor('type', {
    cell: info => info.getValue(),
    header: () => <span>Type</span>,
  }),
  columnHelper.accessor('status', {
    cell: info => (
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(info.getValue())}`}>
        {info.getValue()}
      </span>
    ),
    header: () => <span>Status</span>,
  }),
  columnHelper.accessor('value', {
    cell: info => info.getValue(),
    header: () => <span>Value</span>,
  }),
];

const fetchDeals = async (): Promise<Deal[]> => {
  // Simulated API call
  return [
    { id: 1, name: 'Tech Innovators Acquisition', type: 'Acquisition', status: 'Due Diligence', value: '$500M' },
    { id: 2, name: 'Global Solutions Merger', type: 'Merger', status: 'Negotiation', value: '$1.2B' },
    { id: 3, name: 'Startup X Funding', type: 'Investment', status: 'Closed', value: '$50M' },
    { id: 4, name: 'Industry Leader Takeover', type: 'Takeover', status: 'Integration', value: '$750M' },
    { id: 5, name: 'Strategic Partnership Deal', type: 'Partnership', status: 'Announced', value: '$300M' },
  ];
};

const Deals: React.FC = () => {
  const { data: deals = [] } = useQuery({
    queryKey: ['deals'],
    queryFn: fetchDeals,
  });

  const table = useReactTable({
    data: deals,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Deals</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors duration-200">
          <PlusCircle className="w-5 h-5" />
          <span>New Deal</span>
        </button>
      </div>
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search deals..."
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'due diligence':
      return 'bg-blue-100 text-blue-800';
    case 'negotiation':
      return 'bg-yellow-100 text-yellow-800';
    case 'closed':
      return 'bg-green-100 text-green-800';
    case 'integration':
      return 'bg-purple-100 text-purple-800';
    case 'announced':
      return 'bg-indigo-100 text-indigo-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default Deals;