import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const repoName = process.env.GITHUB_PAGES_REPO || "";
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages" && repoName.length > 0;

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
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined
};

export default withMDX(nextConfig);
