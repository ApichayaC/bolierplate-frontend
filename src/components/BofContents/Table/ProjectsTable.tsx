"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";

import DataTable from "./components/DataTable";
import { IProject } from "@/interface/bof.interface";
import { types } from "@/constants/bof.constant";

interface ProjectsTableProps {
  data: IProject[];
}

const ProjectsTable = ({ data }: ProjectsTableProps) => {
  const columns: ColumnDef<IProject>[] = [
    {
      accessorKey: "name",
      header: () => <p>Name</p>,

      cell: ({ row }) => {
        return (
          <p className="text-sm font-semibold text-primary">
            {row.original.name}
          </p>
        );
      },
    },
    {
      accessorKey: "key",
      header: () => <p>Key</p>,
      cell: ({ row }) => {
        return <p className="text-sm uppercase">{row.original.key}</p>;
      },
    },

    {
      accessorKey: "type",
      header: () => <p>Type</p>,
      cell: ({ row }) => {
        const type = types.find((t) => t.value === row.original.type);
        return <p className="text-sm">{type?.lable}</p>;
      },
    },
    {
      accessorKey: "lead",
      header: () => <p>Lead</p>,
      cell: ({ row }) => {
        return <p className="text-sm">{row.original.lead}</p>;
      },
    },
    {
      accessorKey: "actions",
      header: () => <p>Actions</p>,

      // cell: ({ row }) => {
      //   return <p className="text-sm">{row.original.key}</p>;
      // },
    },
  ];

  return <DataTable columns={columns} data={data} />;
};

export default ProjectsTable;
