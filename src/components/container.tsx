import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <main
      className={cn(
        "container mx-auto flex min-h-screen flex-col justify-center",
        className,
      )}
    >
      {children}
    </main>
  );
};

export default Container;
