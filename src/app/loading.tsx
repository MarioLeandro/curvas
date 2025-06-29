import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className="w-full h-screen py-10 flex items-center justify-center">
      <Loader className="h-5 w-5 animate-spin duration-100 text-accent-foreground" />
    </div>
  );
}
