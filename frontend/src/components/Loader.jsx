export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />
      <span className="ml-3 text-gray-600">{text}</span>
    </div>
  );
}
