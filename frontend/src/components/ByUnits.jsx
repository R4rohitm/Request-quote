import React from "react";

const ByUnits = () => {
  return (
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label
          for="last_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Dimensions
        </label>
        <div class="border flex space-between items-center focus:outline-[#4F46E5] hover:border-[#4F46E5] bg-white">
          <input
            type="text"
            id="last_name"
            class="  text-gray-900 text-md outline-none block w-[25%] p-[9px] placeholder:text-center indent-2"
            placeholder="width"
            required
          />{" "}
          ×
          <input
            type="text"
            id="last_name"
            class=" text-gray-900 text-md outline-none block w-[25%] p-[9px] placeholder:text-center indent-2"
            placeholder="height"
            required
          />{" "}
          ×
          <input
            type="text"
            id="last_name"
            class=" text-gray-900 text-md outline-none block w-[25%] p-[9px]  placeholder:text-center indent-2"
            placeholder="length"
            required
          />
          <div class="w-[15%] flex justify-center items-center text-lg border-l-2">
            m
          </div>
        </div>
      </div>
      <div class="grid gap-6 mb-6 grid-cols-2 sm:grid-cols-2">
        <div>
          <label
            for="company"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Quantity
          </label>
          <input
            type="text"
            id="company"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
            placeholder="Quantity"
            required
          />
        </div>
        <div>
          <label
            for="company"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Gross Weight
          </label>
          <input
            type="text"
            id="company"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
            placeholder="Gross Weight"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ByUnits;
