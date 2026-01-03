import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOHead = ({
  title = "Richmond painter and decorator | Coopers Interiors | Checkatrade Approved | Rated 4.8/5",
  description = "Coopers Interiors: Checkatrade Approved Richmond painter and decorator rated 4.8/5. Expert interior design, painting, decorating, and plastering services across Richmond upon Thames, Ealing and Hounslow. Call 07725 349084 for a free, no-obligation quote.",
  keywords = "Coopers Interiors, Richmond painter and decorator, Richmond upon Thames painter, Ealing painter and decorator, Hounslow painter and decorator, interior design Richmond, interior design Ealing, interior design Hounslow, Checkatrade approved, plastering Ealing, Richmond decorating services",
  canonical = "https://www.coopersinteriors.co.uk/",
  ogImage = "https://www.coopersinteriors.co.uk/coopers-logo.png",
  ogType = "website",
  noindex = false,
  nofollow = false,
}: SEOHeadProps) => {
  const baseUrl = "https://www.coopersinteriors.co.uk";
  const fullCanonical = canonical.startsWith("http") ? canonical : `${baseUrl}${canonical}`;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`;
  
  const robotsContent = noindex || nofollow 
    ? `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <Helmet>
      {/* Enhanced Title Tag */}
      <title>{title}</title>

      {/* Enhanced Meta Description */}
      <meta name="description" content={description} />

      {/* Keywords Meta Tag */}
      <meta name="keywords" content={keywords} />

      {/* Author Meta Tag */}
      <meta name="author" content="Coopers Interiors" />

      {/* Enhanced Robots Meta */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="GB-RIC" />
      <meta name="geo.placename" content="Richmond, London" />
      <meta name="geo.position" content="51.4613;-0.3037" />
      <meta name="ICBM" content="51.4613, -0.3037" />
      <meta name="geo.country" content="GB" />

      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Coopers Interiors gold crest logo - Richmond painter and decorator" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="Coopers Interiors" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content="Coopers Interiors gold crest logo - Richmond painter and decorator" />
    </Helmet>
  );
};

export default SEOHead;

