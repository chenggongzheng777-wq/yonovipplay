import Link from "next/link";

export default function HiPage() {
return (
<main style={{maxWidth: 860, margin: "40px auto", padding: "0 16px", lineHeight: 1.8}}>
<h1>Yono VIP Play - स्लॉट्स इंडिया (हिंदी)</h1>
<p>Yono VIP Play में आपका स्वागत है। यहां हम स्लॉट्स गाइड, बोनस टिप्स और सुरक्षित खेलने की जानकारी साझा करते हैं।</p>
<ul>
<li>शुरुआती खिलाड़ियों के लिए गाइड</li>
<li>बोनस और कूपन उपयोग सुझाव</li>
<li>जिम्मेदार गेमिंग के मूल नियम</li>
</ul>
<p><Link href="/en">View English Version</Link></p>
</main>
);
}
