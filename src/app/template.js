export default function Template({ children }) {
  return (
    <div className="animate-page-enter w-full">
      {children}
    </div>
  );
}
