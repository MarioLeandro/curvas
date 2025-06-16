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
    <div className="flex w-full px-20 py-24 gap-20 items-center">
      <div className="flex flex-col w-1/2 gap-8">
        <div className="flex gap-4 items-center">
          <Image src="/logo.svg" alt="logo" width={54} height={54} />
          <p className="text-xl font-semibold">
            Você precisa conectar-se para ingressar na plataforma{' '}
            <span className="font-bold text-violet-600">Curvas</span>
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
                  className="cursor-pointer h-10 w-16 font-bold text-gray-500 data-[selected=true]:!bg-violet-500 data-[selected=true]:text-white data-[state=active]:bg-inherit data-[state=active]:shadow-none"
                  asChild
                >
                  <Link href={tab.key}>{tab.description}</Link>
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
      <div className="flex w-1/2 items-center justify-center">
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
