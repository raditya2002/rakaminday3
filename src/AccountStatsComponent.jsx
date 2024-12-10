import { Eye, Plus, Send } from "lucide-react";

const AccountStatsComponent = () => {
  return (
    <div className="mb-8 flex justify-between items-center">
      <div className="flex gap-8 items-center">
        <div className="bg-teal-600 text-white p-6 rounded-lg">
          <p className="text-sm mb-2">Account No.</p>
          <p className="text-2xl font-bold">100899</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Balance</p>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">Rp 10.000.000,00</p>
            <Eye className="text-gray-400" size={20} />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="p-3 bg-teal-600 text-white rounded-lg">
          <Plus size={24} />
        </button>
        <button className="p-3 bg-teal-600 text-white rounded-lg">
          <Send size={24} />
        </button>
      </div>
    </div>
  );
};

export default AccountStatsComponent;
