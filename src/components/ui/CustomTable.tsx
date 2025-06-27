import React from "react";

type Column<T> = {
  header: string;
  accessor: keyof T | string;
  className?: string;
  render?: (row: T) => React.ReactNode;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  className?: string;
};

export function CustomTable<T>({ columns, data, className = "" }: TableProps<T>) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className={`text-left p-3 font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 ${col.className || ""}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ridx) => (
            <tr
              key={ridx}
              className="hover:bg-gray-50 dark:hover:bg-gray-900 cursor-default"
            >
              {columns.map((col, cidx) => (
                <td
                  key={cidx}
                  className={`p-3 border border-gray-200 dark:border-gray-700 align-top ${col.className || ""}`}
                >
                   {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {col.render ? col.render(row) : (row as any)[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="p-3 text-center text-gray-500 dark:text-gray-400"
              >
                No data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
