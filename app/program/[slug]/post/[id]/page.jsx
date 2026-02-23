import ProgramHero from "@/components/program-detail/ProgramHero";
import PostDetailSection from "@/components/program-post-detail/PostDetailSection";
import OtherReviewsSection from "@/components/program-post-detail/OtherReviewsSection";

export default async function ProgramPostDetailPage({ params }) {
  const { slug, id } = await params;

  const dummyThumb = "/gambar%20card%20detail.png";

  const post = {
    id,
    heading: "HYSTERIA BERKELANA: Edisi MAKANAN MANIS",
    title: "Hysteria Berkelana - Edisi Makanan Manis😊",
    thumbnailUrl: dummyThumb,
    shortText: "Makan-makan biar kenyang",
    paragraphs: [
      "Hola halo, Sobat Hysteria! Kali ini, Hysteria Berkelana jalan-jalan ke tengah kota sambil makan yang manis-manis. Ada pisang goreng viral nih, di Jl. Melati Selatan, Brumbungan, kec. Semarang Tengah.",
      "⭐ 9/10 — gas cobain! Yumm yumm😁",
      "Hysteria Berkelana adalah salah satu segmen di @grobakhysteria yang menghadirkan review singkat seputar tempat dan kuliner di Kota Semarang. Mulai dari warung kaki lima, UMKM lokal, sampai spot unik yang punya ciri khasnya sendiri.",
    ],
    tags: [
      "#kulinersemarang",
      "#pisanggoreng",
      "#gorenganbesek",
      "#viral",
      "#makanansemarang",
    ],
    instagramUrl: "https://www.instagram.com/",
  };

  const otherReviews = Array.from({ length: 5 }, (_, i) => ({
    id: `other-${i + 1}`,
    thumbnailUrl: dummyThumb,
    alt: `Review ${i + 1}`,
  }));

  return (
    <>
      <ProgramHero
        title="Hysteria Berkelana"
        subtitle="Perayaan seni, budaya, dan kehidupan kampung melalui kerja kolektif warga dan seniman."
      />

      <PostDetailSection post={post} />

      <OtherReviewsSection
        title="Review Lainnya"
        items={otherReviews}
        programSlug={slug}
        moreHref={`/program/${slug}`}
      />
    </>
  );
}
