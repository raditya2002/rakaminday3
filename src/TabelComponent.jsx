const TabelComponent = () => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">
            Date & Time
          </th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">
            Type
          </th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">
            From / To
          </th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">
            Description
          </th>
          <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="even:bg-gray-50">
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            20:10 - 30 June 2022
          </td>
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            DEBIT
          </td>
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            310001001
          </td>
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            Fore Coffee
          </td>
          <td className="px-6 py-3 text-left text-sm  text-red-500 font-medium">
            -75,000.00
          </td>
        </tr>
        <tr className="even:bg-gray-50">
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            20:10 - 30 June 2022
          </td>
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            CREDIT
          </td>
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            1001
          </td>
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            Topup from Bank Transfer
          </td>
          <td className="px-6 py-3 text-left text-sm  text-green-500 font-medium">
            +1,000,000.00
          </td>
        </tr>
        <tr className="even:bg-gray-50">
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            20:10 - 30 June 2022
          </td>
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            DEBIT
          </td>
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            310001001
          </td>
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            Fore Coffee
          </td>
          <td className="px-6 py-3 text-left text-sm  text-red-500 font-medium">
            -75,000.00
          </td>
        </tr>
        <tr className="even:bg-gray-50">
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            20:10 - 30 June 2022
          </td>
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            CREDIT
          </td>
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            1001
          </td>
          <td className="px-6 py-3 text-left text-sm  text-gray-500 font-medium">
            Topup from Bank Transfer
          </td>
          <td className="px-6 py-3 text-left text-sm  text-green-500 font-medium">
            +1,000,000.00
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TabelComponent;
