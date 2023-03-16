export const Stat = (props: {
  stat: string;
  value: JSX.Element;
  valuen: number;
}) => (
  <div className="relative flex w-1/3 flex-col py-2 text-center">
    <input
      type="hidden"
      name={`char-${props.stat}`}
      value={props.valuen}
    />

    <dt className="order-1 font-bold text-yellow-50/90">
      <span className="inline-block cursor-pointer p-3 text-lg text-yellow-600 hover:text-red-600">
        -
      </span>
      {props.stat}
      <span className="inline-block cursor-pointer  p-3 text-lg text-yellow-600 hover:text-red-600">
        +
      </span>
    </dt>
    <dd className="order-2 text-xl font-bold tracking-tight">
      {props.value}
    </dd>
  </div>
);
