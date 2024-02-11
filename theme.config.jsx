import Image from "next/image"
import { useConfig } from 'nextra-theme-docs'
export default {
    logo: <Image src="/meta.png" width={100} height={100} />,
    project: {
        link: "https://github.com/ravinthiranpartheepan1407/vertez"
    },
    footer: {
        text: (
          <span className="text-center">
            vertez {new Date().getFullYear()} ©{' '}
            <a href="https://vertez.org" target="_blank">
              Vertez
            </a>
          </span>
        )
    },
    banner: {
        key: "vertez",
        text: "vertez - An Open Source ML Toolkit",
    },
    chat: {
        link: "https://vertez.org",
    },
    docsRepositoryBase: "https://github.com/ravinthiranpartheepan1407/vertez",
    faviconGlyph: <Image src="/meta.png" width={100} height={100} />,
    useNextSeoProps() {
        const { frontMatter } = useConfig();
        return {
        additionalLinkTags: [
            {
            href: "/meta.png",
            rel: "apple-touch-icon",
            sizes: "180x180",
            },
            {
            href: "/meta.png",
            rel: "icon",
            sizes: "192x192",
            type: "image/png",
            },
            {
            href: "/meta.png",
            rel: "icon",
            sizes: "96x96",
            type: "image/png",
            },
            {
            href: "/meta.png",
            rel: "icon",
            sizes: "32x32",
            type: "image/png",
            },
            {
            href: "/meta.png",
            rel: "icon",
            sizes: "16x16",
            type: "image/png",
            },
        ],
        additionalMetaTags: [
            { content: "en", httpEquiv: "Content-Language" },
            { content: "vertez", name: "apple-mobile-web-app-title" },
            { content: "#fff", name: "msapplication-TileColor" },
            { content: "/meta.png", name: "msapplication-TileImage" },
        ],
        description:
            frontMatter.description ||
            "vertez: An Open Source GAN Toolkit",
        openGraph: {
            images: [{ url: frontMatter.image || "/meta.png" }],
        },
        titleTemplate: "%s – vertez",
        twitter: {
            cardType: "summary_large_image",
            site: "https://vertez.org",
        },
        };
    },
}