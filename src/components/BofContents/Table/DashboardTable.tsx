import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import DataTable from "./components/DataTable";
import { DASHBOARDS } from "@/constants/bof.constant";
import { EllipsisVertical } from "lucide-react";

type Dashboard = (typeof DASHBOARDS)[number];

interface DataTableProps {
  data: Dashboard[];
}

const DashboardTable = ({ data }: DataTableProps) => {
  const columns: ColumnDef<Dashboard>[] = [
    {
      accessorKey: "name",
      header: () => <p className="text-base font-medium">Name</p>,

      cell: ({ row }) => {
        return <p className="text-sm font-medium">{row.original.name}</p>;
      },
    },
    {
      accessorKey: "owner",
      header: () => <p className="text-base font-medium">Owner</p>,

      cell: ({ row }) => {
        return <p className="text-sm">{row.original.owner || "-"}</p>;
      },
    },
    {
      accessorKey: "viewers",
      header: () => <p className="text-base font-medium">Viewers</p>,
      cell: ({ row }) => {
        return <p className="text-sm">{row.original.viewers || "-"}</p>;
      },
    },
    {
      accessorKey: "editors",
      header: () => <p className="text-base font-medium">Editors</p>,
      cell: ({ row }) => {
        return <p className="text-sm">{row.original.editors || "-"}</p>;
      },
    },
    {
      accessorKey: "action",
      header: () => (
        <p className="text-base font-medium text-center w-full"> Action</p>
      ),

      cell: () => {
        return (
          <div className="flex justify-center">
            <EllipsisVertical
              className="w-4 h-4 cursor-pointer"
              strokeWidth={2.5}
            />
          </div>
        );
      },
    },
  ];

  return <DataTable columns={columns} data={data} />;
};

export default DashboardTable;
