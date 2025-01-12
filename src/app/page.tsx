import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 fkex max-w-fit items_center justify-center space-x-2 overflow-hidden rounded-full border borrder-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hoverr:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          first test eyyy
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Setup is <span className="text-blue-600">readyyy</span> for dev.
      </h1>
    </MaxWidthWrapper>

  )
}