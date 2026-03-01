"use client";

import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { memo } from "react";

interface IconProps extends LucideProps {
  name: string;
}

function IconComponent({ name, ...props }: IconProps) {
  const iconImport =
    dynamicIconImports[name as keyof typeof dynamicIconImports];

  if (!iconImport) {
    // Fail silently — do NOT crash the page
    return null;
  }

  const LucideIcon = dynamic(iconImport, {
    ssr: false,
  });

  return <LucideIcon {...props} />;
}

export default memo(IconComponent);
