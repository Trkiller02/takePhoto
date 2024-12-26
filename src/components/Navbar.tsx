import {
	Navbar as Nav,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import { User } from "@nextui-org/user";
import { Link } from "@nextui-org/link";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/dropdown";

import { Search } from "lucide-react";

export const AcmeLogo = () => {
	return (
		<svg
			role="img"
			fill="none"
			height="36"
			viewBox="0 0 32 32"
			width="36"
			aria-labelledby="acme-logo"
		>
			<title id="acme-logo">ACME Logo</title>
			<path
				clipRule="evenodd"
				d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const Navbar = () => {
	return (
		<Nav isBordered height="10vh">
			<NavbarContent justify="start">
				<NavbarBrand className="mr-4">
					<AcmeLogo />
					<p className="hidden sm:block font-bold text-inherit">ACME</p>
				</NavbarBrand>
				<NavbarContent
					className="hidden sm:flex gap-3 w-full"
					as="div"
					justify="center"
				>
					<Input
						classNames={{
							base: "max-w-full",
							mainWrapper: "h-full",
							input: "text-small sm:text-lg",
							inputWrapper:
								"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
						}}
						placeholder="Type to search..."
						size="lg"
						endContent={<Search size={18} />}
					/>
				</NavbarContent>
			</NavbarContent>

			<NavbarContent as="div" className="items-center gap-4" justify="end">
				<NavbarItem>
					<Link color="foreground" href="#" as={NextLink}>
						Features
					</Link>
				</NavbarItem>
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<User
							as="button"
							className="transition-transform"
							name="Jason Hughes"
							description={"@jasonhughes"}
							avatarProps={{
								src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
								size: "sm",
							}}
						/>
					</DropdownTrigger>
					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownItem key="profile" className="h-14 gap-2">
							<p className="font-semibold">Signed in as</p>
							<p className="font-semibold">zoey@example.com</p>
						</DropdownItem>
						<DropdownItem key="settings">My Settings</DropdownItem>
						<DropdownItem key="team_settings">Team Settings</DropdownItem>
						<DropdownItem key="analytics">Analytics</DropdownItem>
						<DropdownItem key="system">System</DropdownItem>
						<DropdownItem key="configurations">Configurations</DropdownItem>
						<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
						<DropdownItem key="logout" color="danger">
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Nav>
	);
};
