import { Button } from '@/global/components/button';
import { Separator } from '@/global/components/separator';
import { Heading1 } from 'lucide-react';
import { FormElements } from './components/formElements';
import ElementButton from './components/element-button';
import InteractiveBuilder from './components/interactive-builder';
import { FormElementInstance } from '@/domains/teacher/types/form-elements';

interface IFormBuilderUiProps {
  elements: FormElementInstance[];
  addElement: ({
    index,
    element,
  }: {
    index: number;
    element: FormElementInstance;
  }) => void;
  removeElement: (id: string) => void;
}

export function FormBuilderUi({
  addElement,
  elements,
  removeElement,
}: IFormBuilderUiProps) {
  return (
    <div className="flex-1 w-full py-12 px-10 grid md:grid-cols-4 gap-10">
      <div className="col-span-1 flex flex-col bg-white rounded-lg shadow-2xl p-4  overflow-y-auto">
        <p className="font-semibold text-lg">Elementos</p>
        <Separator className="my-4" />
        <p className="font-semibold text-sm mb-4">Elementos Visuais</p>

        <Button
          variant={'outline'}
          className="flex flex-col h-[100px] w-[110px] cursor-grab"
        >
          <Heading1 className="h-8 w-8 text-primary cursor-grab" />
          <p className="text-xs">Título</p>
        </Button>
        <Separator className="my-4" />
        <p className="font-semibold text-sm mb-4">Elementos da Atividade</p>
        <ElementButton formElement={FormElements.TextField} />
      </div>
      <InteractiveBuilder
        addElement={addElement}
        elements={elements}
        removeElement={removeElement}
      />
      <div className="col-span-1 flex flex-col bg-white rounded-lg shadow-2xl p-4 font-semibold overflow-y-auto">
        <p className="font-semibold text-lg">Propriedades</p>
      </div>
    </div>
  );
}
