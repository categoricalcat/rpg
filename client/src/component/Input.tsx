import slugify from 'slugify';

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  id?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  name,
  id,
  placeholder,
  ...props
}: Props) => {
  const name_ = slugify(name);

  return (
    <div className="relative">
      <label
        htmlFor={id || name_}
        className="absolute -top-2 left-2 -mt-px inline-block px-1 text-xs bg-neutral-800 text-red-600"
      >
        {label}
      </label>

      <input
        {...props}
        type="text"
        name={name_}
        id={id || name_}
        className="focus:border-red-600 outline-none w-full bg-transparent placeholder-neutral-500 px-3 py-2 border border-gray-400 rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
