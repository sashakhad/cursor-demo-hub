'use client';

/**
 * MultiSelectCombobox Component
 * Autocomplete input with multi-select tags
 * Copyright Anysphere Inc.
 */

import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';

interface MultiSelectComboboxProps {
  options: string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  label?: string;
}

export default function MultiSelectCombobox({
  options,
  selectedValues,
  onChange,
  placeholder = 'Type to search...',
  label,
}: MultiSelectComboboxProps) {
  const [query, setQuery] = useState('');

  // Filter options based on query (case-insensitive substring matching)
  const filteredOptions =
    query === ''
      ? options.slice(0, 50) // Show first 50 when no query
      : options
          .filter((option) =>
            option.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 50); // Limit to 50 results

  // Filter out already selected items from suggestions
  const availableOptions = filteredOptions.filter(
    (option) => !selectedValues.includes(option)
  );

  const handleSelect = (value: string | null) => {
    if (value && !selectedValues.includes(value)) {
      onChange([...selectedValues, value]);
      setQuery(''); // Clear input after selection
    }
  };

  const handleRemove = (valueToRemove: string) => {
    onChange(selectedValues.filter((v) => v !== valueToRemove));
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-slate-900">
          {label}
        </label>
      )}

      {/* Selected Tags */}
      {selectedValues.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedValues.map((value) => (
            <span
              key={value}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-100 text-blue-700 rounded-md text-sm"
            >
              <span>{value}</span>
              <button
                type="button"
                onClick={() => handleRemove(value)}
                className="hover:bg-blue-200 rounded p-0.5 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Combobox Input */}
      <Combobox value="" onChange={handleSelect}>
        <div className="relative">
          <Combobox.Input
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder={placeholder}
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            displayValue={() => query}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute z-40 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-auto">
              {availableOptions.length === 0 && query !== '' ? (
                <div className="px-3 py-2 text-sm text-slate-500">
                  No results found
                </div>
              ) : (
                availableOptions.map((option) => (
                  <Combobox.Option
                    key={option}
                    value={option}
                    className={({ active }) =>
                      `px-3 py-2 cursor-pointer text-sm ${
                        active
                          ? 'bg-blue-50 text-blue-900'
                          : 'text-slate-700'
                      }`
                    }
                  >
                    {option}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

