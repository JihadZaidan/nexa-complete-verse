"use client"

import Link from "next/link";
import { navigation } from "@/data/navigation";
import { ArrowRight, ArrowUpIcon } from "lucide-react";
import { footer } from "@/data/footer";
import { useState, useRef } from "react";
import { useSlideFromTop } from "@/library/animations";
import { z } from "zod";

// validation news letter by zod 
const emailSchema = z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: "Email wajib diisi." })
    .email({ message: "Format email tidak valid." })
    .max(254, { message: "Email terlalu panjang." });

export default function Footer() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const letterRef = useRef<HTMLInputElement | null>(null);
    const upleftRef = useRef<HTMLDivElement>(null);
    const uprightRef = useRef<HTMLDivElement>(null);
    const lowerRef = useRef<HTMLDivElement>(null);
    const copyRef = useRef<HTMLDivElement>(null);

    const validate = (value: string) => {
        const result = emailSchema.safeParse(value);
        if (!result.success) {
            setError(result.error.issues[0]?.message ?? "Your Email don't valid, please repeat sign in.");
            return false;
        }
        setError(null);
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate(email)) {
            setStatus("error");
            letterRef.current?.focus();
            return;
        }

        setStatus("submitting");
        try {
            console.log("Email submitted:", email);
            setStatus("success");
            setEmail("");
        } catch (_) {
            setStatus("error");
        }
    };

    const handleBlur = () => {
        if (email.length) validate(email);
    };

    useSlideFromTop(upleftRef, 0.4);
    useSlideFromTop(uprightRef, 0.4);
    useSlideFromTop(lowerRef , 0.4);
    useSlideFromTop(copyRef, 0.4);

    return (
        <footer className="w-full bg-neutral-900 px-10 lg:px-20 py-20 flex flex-col gap-16">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-10">
                <div ref={upleftRef} className="flex flex-col lg:gap-5 gap-3">
                    <h4 className="font-sans font-normal text-8xl text-neutral-100">Nexa</h4>
                    <p className="leading-[140%] lg:text-3xl text-xl text-neutral-400 lg:text-left font-sans font-normal">
                        Let&apos;s Make Something Cool
                    </p>
                </div>

                {/* Bagian Newsletter */}
                <div ref={uprightRef} className="flex flex-col gap-4 justify-left items-left">
                    <p className="text-neutral-400 font-sans font-normal text-xl">
                        Sign up for our newsletter
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className={`w-full flex items-center border-b transition ${error
                            ? "border-red-500"
                            : "border-neutral-700 focus-within:border-neutral-400"
                            }`}
                        noValidate
                    >
                        <input
                            ref={letterRef}
                            type="email"
                            placeholder="Your email here"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (error) setError(null);
                            }}
                            onBlur={handleBlur}
                            className="flex-1 bg-transparent outline-none text-neutral-200 placeholder-neutral-500 text-lg py-3"
                            aria-invalid={!!error}
                            aria-describedby={error ? "email-error" : undefined}
                            inputMode="email"
                            autoComplete="email"
                        />
                        <button
                            type="submit"
                            className="p-2 text-neutral-400 hover:text-white transition disabled:opacity-60"
                            disabled={status === "submitting"}
                        >
                            <ArrowRight size={22} />
                        </button>
                    </form>

                    {error ? (
                        <p id="email-error" className="text-red-400 text-sm mt-1">
                            {error}
                        </p>
                    ) : status === "success" ? (
                        <p className="text-emerald-400 text-sm mt-1">
                            Thank You , Your email has been verified.
                        </p>
                    ) : null}

                    <p className="text-neutral-600 font-sans font-normal text-lg">
                        By signing up to receive emails from Motto, you agree to our <br />
                        Privacy Policy. We treat your info responsibly. <br />
                        Unsubscribe anytime.
                    </p>
                </div>
            </div>

            {/* Middle Section */}
            <div ref={lowerRef} className="grid lg:grid-cols-3 md:grid-cols-3 gap-10">
                {/* Navigation */}
                <ul className="flex flex-col gap-5 justify-start items-start">
                    {navigation
                        .filter((item) => item.published)
                        .map((item, index) => (
                            <li
                                key={`${item.url}-${index}`}
                                className="font-normal text-neutral-400 text-xl"
                            >
                                <Link href={item.url} className="hover:text-neutral-100">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                </ul>

                {/* Footer links */}
                <ul className="flex flex-col gap-5 justify-start items-start">
                    {footer
                        .filter(
                            (item) =>
                                (item.hideInNavbar || item.published) &&
                                ["Awards", "Branding", "Careers", "Inquiries", "Contact Us"].includes(item.label)
                        )
                        .map((item, index) => (
                            <li
                                key={`${item.url}-${index}`}
                                className="font-normal text-neutral-400 text-xl"
                            >
                                <Link href={item.url} className="hover:text-neutral-100">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                </ul>

                {/* Socials & Info */}
                <div className="flex flex-col gap-4">
                    <ul className="flex flex-row gap-3">
                        {["Fb", "Ig", "Tw", "In", "Be"].map((item, index) => (
                            <li key={index} className="text-neutral-400 font-normal text-xl">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-neutral-400 font-normal text-xl">© 2024 Nexa.</p>
                    <p className="text-neutral-400 font-normal text-xl">NYC | UK | Dallas</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div ref={copyRef} className="border-t border-neutral-800 pt-8 flex flex-col lg:flex-row md:flex-row justify-between items-center gap-4">
                <p className="text-neutral-400 text-lg font-normal">Copyright © 2024 Nexa</p>
                <div className="flex items-center cursor-pointer gap-2 text-neutral-400 hover:text-white">
                    <Link href="#" className="text-neutral-400 text-lg font-normal">Back to top</Link>
                    <ArrowUpIcon size={18} />
                </div>
            </div>
        </footer>
    );
}





