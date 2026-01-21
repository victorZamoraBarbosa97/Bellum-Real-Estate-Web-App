export const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-neutral-200 dark:border-neutral-800 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin border-transparent"></div>
      </div>
    </div>
  );
};
