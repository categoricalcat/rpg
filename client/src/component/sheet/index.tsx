import type { SheetsQuery } from '@generated';
import { useState } from 'react';
import { Button } from '../Button';
import Input from '../Input';
import TextArea from '../TextArea';
import { Item } from './Item';
import { Stat } from './Stat';

export default function Sheet(props: SheetsQuery) {
  const {
    sheets: [sheet],
  } = props;

  if (!sheet) return null;

  const { photo, attribute, description, items, name, race } =
    sheet;

  const [image, setImage] = useState(photo);

  const attributes = Object.entries(attribute);
  const items_ = items.filter((i) => i.type === 'ITEM');
  const spells = items.filter((i) => i.type === 'SPELL');

  console.log(sheet);

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
                value={value as number}
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
