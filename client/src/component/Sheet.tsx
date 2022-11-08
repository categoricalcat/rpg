import { EyeDropperIcon } from '@heroicons/react/20/solid';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Button } from './Button';
import Input from './Input';
import TextArea from './TextArea';

const Stat = (props: { stat: string; value: number }) => (
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

const position = {
  id: 1,
  title: 'Fire Ball',
  type: 'SPELL',
  photo: 'Remote',
  description:
    'A ball filled with explosive or combustible material, used as a projectile to injure the enemy by explosion or to set fire to their works.',
  modifier: 'STR + 1',
  exertion: '2.6 + INT + PWR',
};

const Item = () => (
  <article
    key={position.id}
    className="mb-3 w-full cursor-pointer rounded-sm bg-neutral-700 p-4 shadow-lg hover:bg-neutral-600"
  >
    <div className="flex items-center justify-between">
      <p className="truncate text-sm font-bold text-red-600">
        {position.title}
      </p>

      <p className="inline-flex rounded-full bg-yellow-500 px-2 text-xs font-bold">
        {position.type}
      </p>
    </div>

    <p className="mt-2 flex w-11/12 items-center text-sm text-neutral-400">
      {position.description.length > 100 ? (
        <span className="truncate">{position.description}</span>
      ) : (
        position.description
      )}
    </p>

    <div className="flex items-center justify-between">
      <p className="mt-2 flex items-center text-sm text-neutral-400">
        <EyeDropperIcon className="mr-2 w-4" />
        {position.exertion}
      </p>

      <p className="mt-2 flex items-center text-sm text-neutral-400">
        <PlusCircleIcon className="mr-2 w-5" />
        {position.modifier}
      </p>
    </div>
  </article>
);

const Items = () => {
  return (
    <div className="mb-8 max-h-52 overflow-y-scroll px-6 shadow-lg">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default function Example() {
  const [image, setImage] = useState(
    'https://i.pinimg.com/474x/b3/30/e8/b330e844ef0a94faf523df4101428c28.jpg',
  );

  return (
    <form
      action="#"
      method="POST"
      className="mx-6 max-w-6xl rounded bg-neutral-800 lg:mx-auto"
      onSubmit={(e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        console.log(Object.fromEntries(data));
      }}
    >
      <div className="flex flex-wrap">
        <h3 className="mt-4 mb-4 w-full text-center text-xl font-bold uppercase tracking-wide">
          Character Sheet
        </h3>

        <div className="flex w-1/2 flex-col gap-10 p-6">
          <Input
            label="Name"
            name="char-name"
            placeholder="João Limão"
          />

          <div className="-mt-2 flex items-center">
            <span className="flex min-w-max items-center justify-center overflow-hidden rounded-full">
              <img className="h-24 w-24" src={image} />
            </span>

            <Input
              onInput={(e) => setImage(e.currentTarget.value)}
              label="Photo"
              name="profile-photo"
              placeholder="Photo URL"
              className="ml-4 w-full"
            />
          </div>

          <TextArea
            label="description"
            name="char-description"
            placeholder="A description of your character"
          />

          <dl className="-mt-6 flex flex-wrap justify-center">
            <Stat stat="STR" value={10} />
            <Stat stat="DEX" value={4} />
            <Stat stat="CON" value={3} />
            <Stat stat="INT" value={6} />
            <Stat stat="WIS" value={5} />
            <Stat stat="CHA" value={1} />
            <Stat stat="PWR" value={8} />
          </dl>
        </div>

        <div className="flex w-full flex-col justify-around sm:w-full md:w-1/2">
          <Items />
          <Items />
        </div>
      </div>
      <div className="bg-neutral-700 px-4 py-3 text-right sm:px-6">
        <Button>Save</Button>
      </div>
    </form>
  );
}
