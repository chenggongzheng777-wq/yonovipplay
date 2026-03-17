import Link from "next/link";

export default function EnPage() {
return (
<main style={{maxWidth: 860, margin: "40px auto", padding: "0 16px", lineHeight: 1.6}}>
<h1>Yono VIP Play - Slots India (English)</h1>
<p>Welcome to Yono VIP Play. We share practical slots guides, promo tips, and safe-play resources for India users.</p>
<ul>
<li>Beginner slots guide</li>
<li>Bonus & coupon usage tips</li>
<li>Responsible play basics</li>
</ul>
<p><Link href="/hi">हिंदी संस्करण देखें</Link></p>
</main>
);
}
