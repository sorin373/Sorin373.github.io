import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const repoName = process.env.GITHUB_PAGES_REPO || "";
const isUserSite = repoName.endsWith(".github.io");
const needsBasePath = process.env.DEPLOY_TARGET === "github-pages" && repoName.length > 0 && !isUserSite;

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGfm] }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  basePath: needsBasePath ? `/${repoName}` : undefined,
  assetPrefix: needsBasePath ? `/${repoName}/` : undefined
};

export default withMDX(nextConfig);
