This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## API Contract (Frontend ↔ Backend)

Frontend saat ini sudah siap konsumsi backend untuk 2 halaman:

- Halaman daftar post program: `/program/[slug]`
- Halaman detail post: `/program/[slug]/post/[id]`

Base URL API dibaca dari env:

- `PROGRAM_API_BASE_URL` (server-side)
- atau `NEXT_PUBLIC_PROGRAM_API_BASE_URL`

Contoh `.env.local`:

```bash
PROGRAM_API_BASE_URL=https://api-domain-anda.com
```

### 1) Program Detail List

Endpoint:

```http
GET /program-detail?slug={slug}&q={q}&page={page}
```

Keterangan query:

- `slug` (string, wajib)
- `q` (string, opsional)
- `page` (number, opsional, default `1`)

Response minimal:

```json
{
	"title": "Hysteria Berkelana",
	"subtitle": "Perayaan seni, budaya...",
	"totalPages": 5,
	"posts": [
		{
			"id": "1",
			"thumbnailUrl": "https://.../thumb.jpg",
			"alt": "Post 1"
		}
	]
}
```

Catatan kompatibilitas:

- `posts` juga bisa dikirim sebagai `items`
- thumbnail juga diterima sebagai `thumbnail` atau `image`
- `alt` juga diterima sebagai `caption`

### 2) Program Post Detail

Endpoint:

```http
GET /program-detail/post?slug={slug}&id={id}
```

Keterangan query:

- `slug` (string, wajib)
- `id` (string/number, wajib)

Response minimal:

```json
{
	"title": "Hysteria Berkelana",
	"subtitle": "Perayaan seni, budaya...",
	"post": {
		"id": "123",
		"heading": "HYSTERIA BERKELANA: Edisi MAKANAN MANIS",
		"title": "Hysteria Berkelana - Edisi Makanan Manis😊",
		"thumbnailUrl": "https://.../thumb.jpg",
		"shortText": "Makan-makan biar kenyang",
		"paragraphs": [
			"Paragraf 1",
			"Paragraf 2"
		],
		"tags": [
			"#kulinersemarang",
			"#pisanggoreng"
		],
		"instagramUrl": "https://www.instagram.com/p/..."
	},
	"otherReviews": [
		{
			"id": "124",
			"thumbnailUrl": "https://.../other.jpg",
			"alt": "Review lainnya"
		}
	]
}
```

Catatan kompatibilitas:

- `title/subtitle` juga bisa dikirim sebagai `programTitle/programSubtitle`
- object detail post juga diterima lewat `data`
- `shortText` juga diterima sebagai `excerpt`
- `instagramUrl` juga diterima sebagai `url` atau `link`
- `otherReviews` juga diterima sebagai `relatedPosts` atau `items`
- `tags` boleh array string atau array object (contoh: `{ "name": "#kuliner" }`)

### 3) Standard Error Response

Disarankan semua endpoint menggunakan format error yang konsisten seperti ini:

```json
{
	"success": false,
	"error": {
		"code": "RESOURCE_NOT_FOUND",
		"message": "Data tidak ditemukan",
		"details": null
	}
}
```

Keterangan field:

- `success`: boolean, `false` saat gagal
- `error.code`: kode error stabil untuk handling di frontend
- `error.message`: pesan yang bisa ditampilkan/log
- `error.details`: object/array tambahan (opsional)

Contoh `404 Not Found`:

```json
{
	"success": false,
	"error": {
		"code": "POST_NOT_FOUND",
		"message": "Post dengan id tersebut tidak ditemukan",
		"details": {
			"slug": "hysteria-berkelana",
			"id": "123"
		}
	}
}
```

Contoh `422 Unprocessable Entity` (validasi query):

```json
{
	"success": false,
	"error": {
		"code": "VALIDATION_ERROR",
		"message": "Parameter tidak valid",
		"details": [
			{
				"field": "page",
				"issue": "page harus angka >= 1"
			}
		]
	}
}
```

Contoh `500 Internal Server Error`:

```json
{
	"success": false,
	"error": {
		"code": "INTERNAL_SERVER_ERROR",
		"message": "Terjadi kesalahan pada server",
		"details": null
	}
}
```

Daftar status HTTP yang disarankan:

- `200` sukses
- `400` bad request
- `401` unauthorized (jika endpoint diproteksi)
- `403` forbidden
- `404` not found
- `422` validation error
- `500` internal server error

### Fallback di Frontend

Jika API belum tersedia / error response, frontend akan otomatis menampilkan fallback data dummy supaya halaman tetap render.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
