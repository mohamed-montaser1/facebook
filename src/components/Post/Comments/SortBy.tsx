export default function SortBy() {
  return (
    <div className="w-full flex justify-end">
      <button className="flex items-center justify-center gap-1">
        Most relevant{" "}
        <i
          style={{
            backgroundImage: "url('/like-share-comment.png')",
            backgroundPosition: "-68px -164px",
            WebkitFilter:
              "invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)",
          }}
          className="w-4 h-4 inline-block"
        ></i>
      </button>
    </div>
  );
}
