import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "next-themes";

export const NextProviders = ({
	children,
}: Readonly<{ children: React.ReactNode }>) => (
	<NextUIProvider>
		<ThemeProvider attribute="class">{children}</ThemeProvider>
	</NextUIProvider>
);
