// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunMedium, MoonStar } from "lucide-react";

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Button
			isIconOnly
			variant="light"
			onPress={() =>
				setTheme((state) => (state === "light" ? "dark" : "light"))
			}
		>
			{theme === "light" ? <SunMedium /> : <MoonStar />}
		</Button>
	);
};
