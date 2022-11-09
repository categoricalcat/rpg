import type { SheetsQuery } from '@generated';
import { EyeDropperIcon } from '@heroicons/react/20/solid';

type ItemProps = SheetsQuery['sheets'][0]['items'][0];

export const Item = ({
  description,
  exertion,
  name,
  type,
  modifier,
}: ItemProps) => (
  <li className="mb-3 w-full cursor-pointer rounded-sm bg-neutral-700 p-4 shadow-lg hover:bg-neutral-600">
    <div className="flex items-center justify-between">
      <p className="truncate text-sm font-bold text-red-600">
        {name}
      </p>

      <p className="inline-flex rounded-full bg-yellow-500 px-2 text-xs font-bold">
        {type}
      </p>
    </div>

    <p className="mt-2 flex w-11/12 items-center text-sm text-neutral-400">
      {description.length > 100 ? (
        <span className="truncate">{description}</span>
      ) : (
        description
      )}
    </p>

    <div className="flex items-center justify-between">
      <p className="mt-2 flex items-center text-sm text-neutral-400">
        <EyeDropperIcon className="mr-2 w-4" />
        {exertion}
      </p>

      {modifier && (
        <p className="mt-2 flex items-center text-sm text-neutral-400">
          {Object.entries(modifier).reduce(
            (str, [key, value]) => {
              if (value === 0) return str;
              const nv = value > 0 ? `+${key}` : `-${key}`;

              return `${str}|${nv}`;
            },
            '',
          )}
        </p>
      )}
    </div>
  </li>
);
