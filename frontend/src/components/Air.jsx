import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const transportation = [
  {
    id: 1,
    transportation_by: "Standard Cargo",
    icon: "https://cdn-icons-png.flaticon.com/512/1061/1061198.png",
  },
  {
    id: 2,
    transportation_by: "ULD Container",
    icon: "https://cdn-icons-png.flaticon.com/512/1358/1358770.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Air() {
  const [selected, setSelected] = useState(transportation[0]);

  return (
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div class="flex flex-col">
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Transportation By<span class="text-[red]">*</span>
            </label>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-md border hover:border-[#4F46E5] border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span className="flex items-center">
                  <img
                    src={selected.icon}
                    alt=""
                    className="h-6 w-6 flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate">
                    {selected.transportation_by}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {transportation.map((way) => (
                    <Listbox.Option
                      key={way.id}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={way}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <img
                              src={way.icon}
                              alt=""
                              className="h-6 w-6 flex-shrink-0 rounded-full"
                            />
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {way.transportation_by}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        )}
      </Listbox>
    </div>
  );
}
