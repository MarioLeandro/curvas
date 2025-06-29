export type ElementsType = 'TextField';

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;

  buttonElement: {
    icon: React.ElementType;
    label: string;
  };

  component: React.FC<{
    elementInstance: FormElementInstance;
  }>;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, unknown>;
};

export type FormElementsType = {
  [key in ElementsType]: FormElement;
};
