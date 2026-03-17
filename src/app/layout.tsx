import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "Yono VIP Play - Slots Guides for India",
description: "English & Hindi slots guides, tips, bonuses, and safe play resources for India users.",
metadataBase: new URL("https://yonovipplay.net"),
alternates: {
canonical: "/en",
languages: {
en: "/en",
hi: "/hi",
},
},
openGraph: {
title: "Yono VIP Play",
description: "Slots guides for India in English and Hindi.",
url: "https://yonovipplay.net",
siteName: "Yono VIP Play",
type: "website",
},
robots: {
index: true,
follow: true,
},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
