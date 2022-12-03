import type { GetSheetQuery } from '@generated';
import { useState } from 'react';
import { Button } from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';
import { Item } from './Item';
import { Stat } from './Stat';

type NonNullable<T> = Exclude<T, null | undefined>;

type Props = NonNullable<GetSheetQuery['findFirstSheet']>;

export default function Sheet(props: Props) {
  const { photo, attribute, description, items, name, race } =
    props;

  const [image, setImage] = useState(photo);

  const attributes = Object.entries(attribute) as [
    keyof typeof attribute,
    number,
  ][];
  const items_ = items.filter((i) => i.type === 'ITEM');
  const spells = items.filter((i) => i.type === 'SPELL');

  const itemsSum = [...items, ...items]
    .map((i) => i.modifier)
    .filter((m) => !!m)
    .map((m) => Object.entries(m!))
    .reduce((acc, stats) => {
      stats.forEach(([k, v]) => {
        // @ts-ignore
        acc[k] = (acc[k] ?? 0) + v;
      });

      return acc;
    }, {} as typeof attribute);

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
          Character Sheet | Items
        </h3>

        <div className="flex w-1/2 flex-col gap-10 p-6 shadow-md">
          <Input
            label="Name"
            name="char-name"
            placeholder="João Limão"
            defaultValue={name}
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
              defaultValue={photo}
            />
          </div>

          <TextArea
            label="description"
            name="char-description"
            placeholder="A description of your character"
            defaultValue={description}
          />

          <dl className="-mt-6 flex flex-wrap justify-center">
            {attributes.map(([stat, value]) => (
              <Stat
                key={stat}
                stat={stat}
                valuen={value + +(itemsSum[stat] || 0)}
                value={
                  itemsSum[stat] ? (
                    <>
                      <span className="text-yellow-400">
                        {value}
                      </span>{' '}
                      +{' '}
                      <span className="text-red-600">
                        {itemsSum[stat]}
                      </span>
                      <span className="absolute ml-2 text-sm text-neutral-500">
                        {+value + +(itemsSum[stat] || 0)}
                      </span>
                    </>
                  ) : (
                    <span className="text-yellow-400">
                      {value}
                    </span>
                  )
                }
              />
            ))}
          </dl>
        </div>

        <div className="flex w-full flex-col justify-around sm:w-full md:w-1/2">
          <ul className="mb-8 max-h-52 overflow-y-scroll px-6 shadow-lg">
            {items_.map((item) => (
              <Item key={item.name} {...item} />
            ))}
          </ul>

          <ul className="mb-8 max-h-52 overflow-y-scroll px-6 shadow-lg">
            {spells.map((spell) => (
              <Item key={spell.name} {...spell} />
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-neutral-700 px-4 py-3 text-right sm:px-6">
        <Button>Save</Button>
      </div>
    </form>
  );
}
