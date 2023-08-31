type RadioButtonProps = {
  children: React.ReactNode;
  id: string;
  isChecked?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export const RadioButton = ({
  children,
  id,
  isChecked = false,
  onChange,
  value,
}: RadioButtonProps) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        name={id}
        type="radio"
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id} className="ml-3 block">
        {children}
      </label>
    </div>
  );
};
