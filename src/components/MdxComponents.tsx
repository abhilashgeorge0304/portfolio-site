import React from 'react';

// Custom component for the <pre> tag
const Pre = ({ children }: { children?: React.ReactNode }) => {
  return (
    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
      {children}
    </pre>
  );
};

export const mdxComponents = {
  pre: Pre,
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => <h1 className="text-4xl font-bold my-6" {...props} />,
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => <h2 className="text-3xl font-bold my-5" {...props} />,
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => <h3 className="text-2xl font-bold my-4" {...props} />,
  p: (props: React.HTMLProps<HTMLParagraphElement>) => <p className="my-4" {...props} />,
  table: (props: React.HTMLProps<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse border border-gray-300 text-sm" {...props} />
    </div>
  ),
  thead: (props: React.HTMLProps<HTMLTableSectionElement>) => (
    <thead className="bg-gray-100" {...props} />
  ),
  tbody: (props: React.HTMLProps<HTMLTableSectionElement>) => (
    <tbody {...props} />
  ),
  tr: (props: React.HTMLProps<HTMLTableRowElement>) => (
    <tr className="border-b border-gray-200" {...props} />
  ),
  th: (props: React.HTMLProps<HTMLTableCellElement>) => (
    <th className="px-4 py-2 text-left font-semibold text-gray-900 border border-gray-300" {...props} />
  ),
  td: (props: React.HTMLProps<HTMLTableCellElement>) => (
    <td className="px-4 py-2 text-gray-700 border border-gray-300" {...props} />
  ),
};