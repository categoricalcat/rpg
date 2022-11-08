import { Button } from './Button';
import Input from './Input';
import TextArea from './TextArea';

const Stat = (props: { stat: string; value: number }) => (
  <div className="flex  w-1/3 flex-col py-2 text-center">
    <dt className="order-2  font-bold text-yellow-50/90">
      {props.stat}
    </dt>
    <dd className="order-1 text-xl font-bold tracking-tight text-red-600">
      <span className="mr-2 font-normal text-red-700">-</span>
      {props.value}
      <span className="ml-2 font-normal text-red-700">+</span>
    </dd>
  </div>
);

export default function Example() {
  return (
    <>
      <form
        action="#"
        method="POST"
        className="rounded bg-neutral-800"
      >
        <div className="flex flex-col gap-10 p-6">
          <h3 className="-mb-7 text-center text-xl font-bold uppercase tracking-wide">
            Character Sheet
          </h3>

          <div className="mt-1 flex items-center">
            <span className="flex min-w-max items-center justify-center overflow-hidden rounded-full">
              <img
                className="h-24 w-24"
                src="https://i.pinimg.com/474x/b3/30/e8/b330e844ef0a94faf523df4101428c28.jpg"
              />
            </span>

            <Input
              label="Photo"
              name="profile-photo"
              className="ml-4 w-full"
            />
          </div>

          <Input
            label="Name"
            name="char-name"
            placeholder="João Limão"
          />

          <TextArea
            label="description"
            name="char-description"
          />

          <dl className="flex flex-wrap justify-center">
            <Stat stat="STR" value={10} />
            <Stat stat="DEX" value={4} />
            <Stat stat="CON" value={3} />
            <Stat stat="INT" value={6} />
            <Stat stat="WIS" value={5} />
            <Stat stat="CHA" value={1} />
            <Stat stat="PWR" value={8} />
          </dl>
        </div>

        <div className="bg-neutral-700 px-4 py-3 text-right sm:px-6">
          <Button>Save</Button>
        </div>
      </form>
    </>
  );
}
