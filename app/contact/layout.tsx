import React from "react";

export const metadata = {
    title: "Contact Us, Credits, and License | wasteof Post Explorer",
    description: "Contact us, view credits, and view license information for the wasteof Post Explorer.",
  };

  
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        {children}
        </>
    )
  }
