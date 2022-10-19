import React from "react";

const RequestQuote2 = () => {
  return (
    <div class="my-12 mx-[3%] lg-mx-[15%] md:mx-[10%] sm:mx-[5%] py-6 px-8 border bg-white shadow-md">
      <div class="mb-4 text-xl font-bold md:text-3xl lg:text-4xl flex flex-wrap items-center gap-3">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-[#4F46E5] from-sky-400">
          Request a Quote
        </span>
        <img
          class="w-8 h-8 mt-2 object-contain"
          src="https://ik.imagekit.io/qtf62wap9/es/static/u/intoglo.com/images/favicon/original/intoglo_favicon.png"
          alt="quoteicon"
        />
      </div>
      <p class="mb-10 px-[1px] font-medium text-black">
        And get the best rates from the leading logistics providers.
      </p>
      <form>
        <div class="mb-6 lg:w-8/12 sm:w-full">
          <h5 class="text-xl font-medium mb-5">Cargo Details</h5>
          <div class="mb-6">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Product <span class="text-[red]">*</span>
            </label>
            <input
              type="text"
              class="text-md bg-gray-50 border rounded-md border-gray-300 text-gray-900 focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
              placeholder="Enter commodity type or HS code"
              required
            />
          </div>
          {/* Delivery Type */}
          <h5 class="text-xl font-medium mb-5">Delivery Type</h5>
          <div class="flex space-x-2 justify-start mb-20">
            <div>
              <button
                type="button"
                class="px-4 pt-1.5 pb-1 bg-white text-black font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-[#4F46E5] hover:text-white hover:shadow-lg focus:bg-[#4F46E5] focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
              >
                SEA
              </button>
            </div>
            <div>
              <button
                type="button"
                class="px-4 pt-1.5 pb-1 bg-white text-black font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-[#4F46E5] hover:text-white hover:shadow-lg focus:bg-[#4F46E5] focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
              >
                AIR
              </button>
            </div>
          </div>
          {/* Next Part */}
          {/* Space for Sea and Air components */}

          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Location From <span class="text-[red]">*</span>
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                placeholder="City, Port"
                required
              />
            </div>
            <div>
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Location To <span class="text-[red]">*</span>
              </label>
              <input
                type="text"
                id="company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                placeholder="City, Port"
                required
              />
            </div>
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Ready to Load <span class="text-[red]">*</span>
            </label>
            <input
              type="date"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
              placeholder="Select"
              //   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="website"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Additional Information
            </label>
            <textarea
              type="text"
              id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
              placeholder="Write a message..."
              required
            />
          </div>
          <h5 class="text-xl font-medium mb-5">Contact Details</h5>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="visitors"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First Name <span class="text-[red]">*</span>
              </label>
              <input
                type="text"
                id="visitors"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label
                for="text"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last Name <span class="text-[red]">*</span>
              </label>
              <input
                type="text"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone <span class="text-[red]">*</span>
              </label>
              <input
                type="number"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                placeholder="123-456-7890"
                required
              />
            </div>
            <div>
              <label
                for="Email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email <span class="text-[red]">*</span>
              </label>
              <input
                type="email"
                id="confirm_password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-2.5 mb-2"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              I agree with the{" "}
              <a
                href="rrr"
                class="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            class="text-white bg-[#4F46E5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestQuote2;
