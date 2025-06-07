"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";

import DataTable from "./components/DataTable";
import { PROJECTS } from "@/constants/bof.constant";

type projects = (typeof PROJECTS)[number];
interface ProjectsTableProps {
  data: projects[];
}

const ProjectsTable = ({ data }: ProjectsTableProps) => {
  const columns: ColumnDef<projects>[] = [
    {
      accessorKey: "name",
      header: () => <p>Name</p>,

      // cell: ({ row }) => {
      //   return <div></div>;
      // },
    },
    {
      accessorKey: "key",
      header: () => <p>Key</p>,

      // cell: ({ row }) => {
      //   return <div></div>;
      // },
    },
    {
      accessorKey: "type",
      header: () => <p>Type</p>,
      // cell: ({ row }) => {
      //   return <div></div>;
      // },
    },
    {
      accessorKey: "lead",
      header: () => <p>Lead</p>,
      // cell: ({ row }) => {
      //   return <div></div>;
      // },
    },
    {
      accessorKey: "project_url",
      header: () => <p> Project URL</p>,

      // cell: ({ row }) => {
      //   return <div></div>;
      // },
    },
  ];

  return <DataTable columns={columns} data={data} />;
};

export default ProjectsTable;
