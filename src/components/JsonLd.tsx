import { JsonLdString } from "@/lib/schema";

export default function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JsonLdString(data) }} />;
}
