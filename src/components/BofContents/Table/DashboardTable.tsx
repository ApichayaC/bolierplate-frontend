import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface DataTableProps {
  data: [];
}

const DashboardTable = ({ data }: DataTableProps) => {
  const columns: ColumnDef<typeof data>[] = [
    {
      accessorKey: "name",
      header: () => <p>Name</p>,

      // cell: ({ row }) => {
      //   return <div></div>;
      // },
    },
    {
      accessorKey: "owner",
      header: () => <p>Owner</p>,

      // cell: ({ row }) => {
      //   return <div></div>;
      // },
    },
    {
      accessorKey: "viewers",
      header: () => <p>Viewers</p>,
      // cell: ({ row }) => {
      //   return <div></div>;
      // },
    },
    {
      accessorKey: "editors",
      header: () => <p>Editors</p>,
      // cell: ({ row }) => {
      //   return <div></div>;
      // },
    },
    {
      accessorKey: "action",
      header: () => <p> Action</p>,

      // cell: ({ row }) => {
      //   return <div></div>;
      // },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardTable;
