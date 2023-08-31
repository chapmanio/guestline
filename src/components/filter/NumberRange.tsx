type NumberRangeProps = {
  id: string;
  label: string;
  min?: number;
  value: number;
  onChange: (value: number) => void;
};

export const NumberRange = ({
  id,
  label,
  min = 0,
  value,
  onChange,
}: NumberRangeProps) => {
  return (
    <div className="flex justify-between items-center space-x-3">
      <label htmlFor={id} className="text-sm text-gray-600">
        {label}
      </label>
      <div className="flex space-x-2 items-center">
        <button
          type="button"
          className="rounded-full p-1 text-[#009fe3] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          disabled={value === min}
          onClick={() => onChange(value - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </button>
        <input
          type="number"
          name={id}
          id={id}
          className="block w-10 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          min={min}
          placeholder="0"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <button
          type="button"
          className="rounded-full p-1 text-[#009fe3] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => onChange(value + 1)}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
