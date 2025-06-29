import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/global/components/tabs';
import Image from 'next/image';
import Link from 'next/link';
import { tabs } from './tabs';

interface IAuthLayoutUiProps {
  children: React.ReactNode;
  selectedTab: string;
}

export function AuthLayoutUi({ children, selectedTab }: IAuthLayoutUiProps) {
  return (
    <div className="flex-1 flex w-full px-5 py-6 gap-20 items-center md:px-20 md:py-24">
      <div className="flex flex-col w-full md:w-1/2 gap-8">
        <div className="flex gap-4 items-center flex-col  md:flex-row">
          <Image src="/logo.svg" alt="logo" width={54} height={54} />
          <p className="text-lg font-semibold text-center md:text-left md:text-xl">
            Você precisa conectar-se para ingressar na plataforma{' '}
            <span className="font-bold text-primary">Curvas</span>
          </p>
        </div>
        <Tabs defaultValue={selectedTab} className="gap-10">
          <TabsList className="w-full h-fit p-0 mt-4">
            <div className="flex w-full justify-center">
              {tabs.map(tab => (
                <TabsTrigger
                  value={tab.key}
                  key={tab.key}
                  data-selected={tab.key === selectedTab}
                  className="cursor-pointer h-10 w-16 font-bold text-gray-500 data-[selected=true]:!bg-primary data-[selected=true]:text-white data-[state=active]:bg-inherit data-[state=active]:shadow-none"
                  asChild
                >
                  <Link className="text-xs md:text-sm" href={tab.key}>
                    {tab.description}
                  </Link>
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          {tabs.map(tab => (
            <TabsContent key={tab.key} value={tab.key}>
              {children}
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <div className="w-1/2 items-center justify-center hidden md:flex">
        <Image
          src="/auth-ilustration.svg"
          alt="auth-ilustration"
          width={550}
          height={492}
        />
      </div>
    </div>
  );
}
