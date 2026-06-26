import { FaCheck } from "react-icons/fa";

const data = [
  { title: "Real estate advertising", full: true, partial: true },
  { title: "Search for tenants", full: true, partial: true },
  { title: "Conclusion of a lease agreement", full: true, partial: true },
  { title: "Getting paid", full: true, partial: true },
  { title: "Key handover", full: true, partial: true },
  { title: "Payment processing", full: true, partial: true },
  { title: "Dealing with repair requests", full: true, partial: true },
  { title: "DEWA connection (electricity/water)", full: true, partial: true },
  { title: "Registration of the rental agreement Ejari", full: true, partial: true },
  { title: "Separate administrator", full: true, partial: true },
  { title: "Detailed inspection of the object", full: false, partial: true },
  { title: "Property preparation before arrival", full: false, partial: true },
  { title: "Reporting", full: false, partial: true },
  { title: "Repair Request Management", full: false, partial: true },
  { title: "Repair management", full: false, partial: true },
];

export default function TableOfApartment() {
  return (
    <div className="w-[95%] sm:w-[80%] overflow-x-auto m-auto! mt-20!">
      <table className="w-[80%] border-collapse text-white">
        <thead>
          <tr className="bg-yellow-400 text-black">
            <th className="text-left px-6 py-4 font-medium">Included in the package</th>
            <th className="text-center px-6 py-4 font-medium">Complete management</th>
            <th className="text-center px-6 py-4 font-medium">Partial control</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}className={index % 2 !== 0 ? "bg-black" : "bg-[#FFFFFF1A]"}>
              <td className="px-6 py-4 font-semibold">{item.title}</td>
              <td className="text-center">
                {item.full && (<FaCheck className="inline text-yellow-400 text-sm" />)}
              </td>
              <td className="text-center">
                {item.partial && (<FaCheck className="inline text-yellow-400 text-sm" />)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}