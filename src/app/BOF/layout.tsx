import BofLayout from "@/components/Layouts/BofLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BofLayout>{children}</BofLayout>;
}
