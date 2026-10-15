import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'dori. — Kaam se kamaai tak.',description:'A little more certainty. A lot more possibility. Work, earnings and identity, connected.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
