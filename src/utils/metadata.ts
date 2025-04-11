import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `cody – AI-Powered Development Workflow Platform`,
    description = `cody helps engineering teams automate coding workflows, streamline development, and boost productivity with powerful AI tools.`,
    icons = [
        {
            rel: "icon",
            url: "/icons/icon-dark.png",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            url: "/icons/icon.png",
            media: "(prefers-color-scheme: dark)",
        },
    ],
    noIndex = false,
    keywords = [
        "AI development tools",
        "code automation",
        "developer productivity",
        "AI code suggestions",
        "test suite generator",
        "real-time analytics",
        "workflow automation",
        "engineering collaboration",
        "intelligent development",
        "cody platform"
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME || "cody Team",
    type = "website",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://cody.ai");

    return {
        metadataBase,
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME || "cody"}`,
            default: title
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: process.env.NEXT_PUBLIC_APP_NAME || "cody",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
        alternates: {
            canonical: metadataBase.href,
        },
    };
};
