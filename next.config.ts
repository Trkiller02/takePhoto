import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	experimental: {
		// ppr: "incremental",
		optimizePackageImports: ["@nextui-org/*"],
		// useLightningcss: true,
		optimizeCss: true,
	},
};

export default nextConfig;
