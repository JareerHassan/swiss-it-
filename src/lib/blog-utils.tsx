import React from "react";
import Image from "next/image";

// ==============================
// BASE URL
// ==============================
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://backend.highlandgroup.ch/api";

export const UPLOADS_BASE = API_URL.replace(/\/api\/?$/, "");

// ==============================
// IMAGE URL RESOLVER
// ==============================
export function resolveImageUrl(raw?: string | null): string | null {
  if (!raw || typeof raw !== "string") return null;

  const value = raw.trim();
  if (!value) return null;

  // Case 1: already absolute URL
  if (/^https?:\/\//i.test(value)) {
    return value.replace(/\/api\/uploads\//i, "/uploads/");
  }

  // Case 2: starts with /api/uploads/...
  if (value.startsWith("/api/uploads/")) {
    return `${UPLOADS_BASE}${value.replace(/^\/api/, "")}`;
  }

  // Case 3: starts with /uploads/...
  if (value.startsWith("/uploads/")) {
    return `${UPLOADS_BASE}${value}`;
  }

  // Case 4: starts with uploads/...
  if (value.startsWith("uploads/")) {
    return `${UPLOADS_BASE}/${value}`;
  }

  // Case 5: filename only
  return `${UPLOADS_BASE}/uploads/${value}`;
}

// ==============================
// SAFE HTML RENDERER
// ==============================
function createMarkup(html?: string) {
  return { __html: html || "" };
}

// ==============================
// EDITOR JS RENDERER
// ==============================
export function renderEditorJSBlocks(blocks: any[] = []) {
  if (!Array.isArray(blocks)) return null;

  return blocks.map((block, index) => {
    const key = block?.id || `block-${index}`;

    switch (block?.type) {
      case "header": {
        const level = Math.min(Math.max(block?.data?.level || 2, 1), 6);
        const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements;

        return (
          <HeaderTag key={key} className="text-2xl font-bold my-4">
            <span dangerouslySetInnerHTML={createMarkup(block?.data?.text)} />
          </HeaderTag>
        );
      }

      case "paragraph":
        return (
          <p key={key} className="my-4 leading-relaxed">
            <span dangerouslySetInnerHTML={createMarkup(block?.data?.text)} />
          </p>
        );

      case "list": {
        const ListTag = block?.data?.style === "ordered" ? "ol" : "ul";

        return (
          <ListTag
            key={key}
            className={`my-4 ${
              block?.data?.style === "ordered" ? "list-decimal" : "list-disc"
            } pl-6 space-y-2`}
          >
            {Array.isArray(block?.data?.items) &&
              block.data.items.map((item: any, idx: number) => {
                const content =
                  typeof item === "string" ? item : item?.content || "";

                return (
                  <li
                    key={idx}
                    dangerouslySetInnerHTML={createMarkup(content)}
                  />
                );
              })}
          </ListTag>
        );
      }

      case "image": {
        const rawImage =
          block?.data?.file?.url ||
          block?.data?.url ||
          block?.data?.file?.path ||
          "";

        const imageUrl = resolveImageUrl(rawImage);

        return (
          <div key={key} className="my-6">
            {imageUrl ? (
              <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <Image
                  src={imageUrl}
                  alt={block?.data?.caption || "Blog image"}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  unoptimized
                />
              </div>
            ) : (
              <div className="w-full h-64 md:h-96 rounded-xl bg-gray-100 flex items-center justify-center text-red-500">
                Image not found
              </div>
            )}

            {block?.data?.caption && (
              <p
                className="text-sm mt-2 text-center italic"
                dangerouslySetInnerHTML={createMarkup(block.data.caption)}
              />
            )}
          </div>
        );
      }

      case "quote":
        return (
          <blockquote
            key={key}
            className="border-l-4 border-[#ADFF2F] pl-4 italic my-6 text-gray-700"
          >
            <p
              className="text-lg"
              dangerouslySetInnerHTML={createMarkup(block?.data?.text)}
            />
            {block?.data?.caption && (
              <footer
                className="text-sm mt-2"
                dangerouslySetInnerHTML={createMarkup(`— ${block.data.caption}`)}
              />
            )}
          </blockquote>
        );

      case "linkTool":
        return (
          <div key={key} className="my-4 p-4 border border-gray-200 rounded-lg">
            {block?.data?.link && (
              <a
                href={block.data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                {block?.data?.meta?.title || block.data.link}
              </a>
            )}
            {block?.data?.meta?.description && (
              <p className="text-sm mt-2">{block.data.meta.description}</p>
            )}
          </div>
        );

      default:
        return null;
    }
  });
}

// ==============================
// READING TIME
// ==============================
export function calculateReadingTime(blocks: any[] = []): number {
  if (!Array.isArray(blocks)) return 0;

  let wordCount = 0;

  blocks.forEach((block) => {
    if (block?.data?.text) {
      wordCount += String(block.data.text).split(/\s+/).length;
    }

    if (Array.isArray(block?.data?.items)) {
      block.data.items.forEach((item: any) => {
        const text = typeof item === "string" ? item : item?.content || "";
        wordCount += String(text).split(/\s+/).length;
      });
    }
  });

  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
}