"use client"
import { Button } from "../ui/button"
import { insightBlog } from "@/data/insight"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function OtherInsight() {
    const [showAll, setShowAll] = useState(false);
    const blogsToShow = showAll ? insightBlog : insightBlog.slice(0, 3);

    return (
        <div className="max-w-full w-full lg:px-20 lg:py-20 px-7 py-7 bg-[#F5F5F5]">
            <div className="w-full flex flex-col lg:gap-18 gap-9">
                <div className="flex lg:flex-row flex-col lg:justify-between justify-left items-left gap-5">
                    <h3 className="font-sans font-medium text-black lg:text-4xl text-3xl">Other Insight</h3>
                    <div>
                        <Button className="flex flex-row items-center gap-3 ml-[-10px]">
                            <Link href="/insight" className="flex flex-row items-center gap-2">
                                <span className="text-black lg:text-lg text-base font-medium">
                                    Explore the Insight
                                </span>
                                <ArrowRight
                                    height={20}
                                    width={20}
                                    className="text-black lg:h-[22px] lg:w-[22px] h-[25px] w-[25px]"
                                />
                            </Link>
                        </Button>
                    </div>

                </div>

                {/* Mobile View */}
                <div className="block md:hidden space-y-8">
                    {blogsToShow.map((item, index) => (
                        <Link
                            key={index}
                            href={`/blog-detail`}
                            className="flex flex-col gap-3"
                        >
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={item.image.replace("public/", "/")}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded-md cursor-pointer"
                                />
                            </div>
                            <h3 className="font-medium text-xl text-black lg:cursor-pointer">{item.title}</h3>
                            <p className="text-base text-gray-500">{item.date}</p>

                        </Link>

                    ))}

                    {!showAll && (
                        <div className="pt-4 hidden md:block">
                            <Button
                                variant="outline"
                                className="text-xl font-medium font-sans text-black px-25"
                                onClick={() => setShowAll(true)}
                            >
                                See more →
                            </Button>
                        </div>
                    )}

                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogsToShow.map((item, index) => (
                        <Link
                            key={index}
                            href={`/blog-detail`}
                            className="flex flex-col gap-3"
                        >
                            <div className="relative w-full lg:h-[300px]">
                                <Image
                                    src={item.image.replace("public/", "/")}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded-md aspect-[1/1]"
                                />
                            </div>
                            <h3 className="font-medium text-lg text-black">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.date}</p>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}