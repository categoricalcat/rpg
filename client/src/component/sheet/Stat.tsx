export const Stat = (props: { stat: string; value: number }) => (
  <div className="flex w-1/3 flex-col py-2 text-center">
    <input
      type="hidden"
      name={`char-${props.stat}`}
      value={props.value}
    />

    <dt className="order-2  font-bold text-yellow-50/90">
      {props.stat}
    </dt>
    <dd className="order-1 text-xl font-bold tracking-tight text-red-600">
      <span className="cursor-pointer p-3 font-normal text-red-700">
        -
      </span>
      {props.value}
      <span className="cursor-pointer p-3 font-normal text-red-700">
        +
      </span>
    </dd>
  </div>
);
