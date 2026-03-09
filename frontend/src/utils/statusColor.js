export const statusColor = (status) => {

  const colors = {

    "New Lead": "bg-blue-500",
    "Contacted": "bg-orange-500",
    "Requirement Collected": "bg-yellow-500",
    "Property Suggested": "bg-purple-500",
    "Visit Scheduled": "bg-indigo-500",
    "Visit Completed": "bg-cyan-500",
    "Booked": "bg-green-600",
    "Lost": "bg-red-500"

  };

  return colors[status] || "bg-gray-400";

};