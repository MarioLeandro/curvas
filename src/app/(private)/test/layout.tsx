import { ElementsProvider } from '@/domains/teacher/providers/ElementsProvider';

export default function FormBuilderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ElementsProvider>
      <div className="flex flex-1 bg-[url(/graph-paper.svg)]">{children}</div>
    </ElementsProvider>
  );
}
