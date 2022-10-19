import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

const transportation = [
  {
    id: 1,
    transportation_by: "Full Container Load (FCL)",
    icon: "https://cdn-icons-png.flaticon.com/512/5340/5340887.png",
  },
  {
    id: 2,
    transportation_by: "Less than Container Load (LCL)",
    icon: "https://cdn-icons-png.flaticon.com/512/3045/3045754.png",
  },
  {
    id: 3,
    transportation_by: "Bulk",
    icon: "https://cdn-icons-png.flaticon.com/512/2821/2821826.png",
  },
];

const container_type = [
  { id: 1, container_type: "20' Standard" },
  { id: 2, container_type: "40' Standard" },
  { id: 3, container_type: "40' High-Cube" },
  { id: 4, container_type: "20' Refrigerated" },
  { id: 5, container_type: "40' Refrigerated" },
  { id: 6, container_type: "20' Open Top" },
  { id: 7, container_type: "40' Open Top" },
  { id: 8, container_type: "20' Flatrack" },
  { id: 9, container_type: "40' Flatrack" },
  { id: 10, container_type: "20' Tank" },
  { id: 11, container_type: "40' Flatrack Collapsible" },
  { id: 12, container_type: "20' Flatrack Collapsible" },
  { id: 13, container_type: "20' Platform" },
  { id: 14, container_type: "40' Platform" },
  { id: 15, container_type: "20' Bulk" },
  { id: 16, container_type: "45' High Cube" },
  { id: 17, container_type: "10' Standard" },
  { id: 18, container_type: "N/A" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sea() {
  const [selected, setSelected] = useState(transportation[0]);
  const [selectedContainer, setSelectedContainer] = useState(container_type[0]);

  return (
    <>
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
                            active
                              ? "text-white bg-indigo-600"
                              : "text-gray-900",
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
      <div class="grid gap-6 mb-8 md:grid-cols-2">
        <Listbox value={selectedContainer} onChange={setSelectedContainer}>
          {({ open }) => (
            <div class="flex flex-col">
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Container Type<span class="text-[red]">*</span>
              </label>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-md border hover:border-[#4F46E5] border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">
                      {selectedContainer.container_type}
                    </span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronDownIcon
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
                    {container_type.map((type) => (
                      <Listbox.Option
                        key={type.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "text-white bg-indigo-600"
                              : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={type}
                      >
                        {({ selectedContainer, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {type.container_type}
                              </span>
                            </div>

                            {selectedContainer ? (
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
        <div>
          <label
            for="company"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Quantity of Containers <span class="text-[red]">*</span>
          </label>
          <input
            type="number"
            id="company"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
            placeholder="0"
            required
          />
        </div>
      </div>
    </>
  );
}

/* <Menu as="div" className="relative inline-block text-left mb-5">
  <div>
    <label
      for="last_name"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Container Type<span class="text-[red]">*</span>
    </label>
    <Menu.Button className="inline-flex w-full p-3 justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
      Container Type
      <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
    </Menu.Button>
  </div>

  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="absolute  z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1">
        <Menu.Item>
          {({ active }) => (
            <a
              href="o"
              className={classNames(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "block px-4 py-2 text-sm"
              )}
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="i"
              className={classNames(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "block px-4 py-2 text-sm"
              )}
            >
              Support
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="r"
              className={classNames(
                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                "block px-4 py-2 text-sm"
              )}
            >
              License
            </a>
          )}
        </Menu.Item>
        <form method="POST" action="#">
          <Menu.Item>
            {({ active }) => (
              <button
                type="submit"
                className={classNames(
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                  "block w-full px-4 py-2 text-left text-sm"
                )}
              >
                Sign out
              </button>
            )}
          </Menu.Item>
        </form>
      </div>
    </Menu.Items>
  </Transition>
</Menu>; */
