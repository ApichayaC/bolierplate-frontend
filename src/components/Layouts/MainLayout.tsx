import React from "react";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="bg-gray-100 w-full min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
};

export default MainLayout;
