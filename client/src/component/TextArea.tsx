import slugify from 'slugify';

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  id?: string;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

const Input = ({
  label,
  name,
  id,
  placeholder,
  ...props
}: Props) => {
  const name_ = slugify(name);

  return (
    <div className={`relative ${props.className}`}>
      <label
        htmlFor={id || name_}
        className="absolute -top-2 left-2 -mt-px inline-block bg-neutral-800 px-1 text-xs capitalize text-red-600"
      >
        {label}
      </label>

      <textarea
        rows={4}
        name={name_}
        id={id || name_}
        className="w-full rounded-sm border border-gray-400 bg-transparent px-3 py-2 placeholder-neutral-500 outline-none focus:border-red-600"
        placeholder={placeholder}
        {...props}
      ></textarea>
    </div>
  );
};

export default Input;
