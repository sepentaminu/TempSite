# Mont-Fort.com Website Copy

This directory contains a complete local copy of the mont-fort.com website, downloaded on **August 7, 2025**, and **optimized for GitHub Pages hosting**.

## 🚀 GitHub Pages Ready

This website copy has been fully optimized for GitHub Pages deployment:

- ✅ **`.nojekyll`** file prevents Jekyll processing
- ✅ **Relative paths** for subdirectory hosting compatibility  
- ✅ **GitHub Actions workflow** for automatic deployment
- ✅ **Custom domain support** via CNAME file
- ✅ **SEO optimized** with proper meta tags and sitemap

### Quick Deploy to GitHub Pages

1. **Create a new repository** on GitHub
2. **Upload all files** from the `mont-fort.com/` directory
3. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"
4. **Automatic deployment** will start on push to main branch

Your site will be available at: `https://username.github.io/repository-name/`

## About Mont-Fort.com

Mont-Fort.com is the official website of **Montfort Group**, a global commodity trading and asset investment company. The company operates through several business divisions:

- **Montfort Trading** - Operating efficiently by leading with innovation
- **Montfort Capital** - Identifying and seizing opportunities that maximize value  
- **Montfort Maritime** - Powering progress, delivering energy
- **Fort Energy** - Advancing innovation in energy investments

## Website Structure

The downloaded copy includes:

### Main Sections
- **Homepage** (`index.html`) - Main company overview and navigation
- **Who We Are** (`who-we-are/`) - Company information and background
- **Trading** (`trading/`) - Montfort Trading division details
- **Capital** (`capital/`) - Montfort Capital division information
- **Maritime** (`maritime/`) - Montfort Maritime division content
- **Fort Energy** (`fort-energy/`) - Fort Energy division details
- **News** (`news/`) - Company news and press releases
- **Contact** (`contact/`) - Contact information and forms

### Supporting Pages
- **Privacy Policy** (`privacy-policy/`)
- **Terms of Use** (`terms-of-use/`)
- **Global Helpline** (`global-helpline.html`)
- **Sitemap** (`sitemap-index.xml`)

### Assets & Configuration
- **CSS & JavaScript** (`_astro/`) - All stylesheets and scripts
- **Images & Media** (`_astro/`) - All images, logos, and media files
- **CDN Assets** (`cdn-cgi/`) - Cloudflare CDN resources
- **GitHub Actions** (`.github/workflows/`) - Deployment automation
- **GitHub Pages Config** (`.nojekyll`, `CNAME`, `robots.txt`)

## Technical Details

- **Total Files Downloaded**: 393 files
- **Total Size**: 194 MB
- **Download Method**: wget with full mirroring
- **Link Conversion**: All links converted for local browsing
- **Asset Preservation**: All images, CSS, JS, and media files preserved
- **GitHub Pages Ready**: Optimized for seamless hosting

## Key Features

The website includes:
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Interactive Elements** - Animated sections and navigation
- **Global Presence** - Information about 15+ global offices
- **Sustainability Focus** - ESG (Environmental, Social, Governance) content
- **Corporate Social Responsibility** - Details about community initiatives
- **News Section** - Latest company news and announcements

## Running Locally

### Option 1: Simple HTTP Server
```bash
cd mont-fort.com
python3 -m http.server 8000
```

### Option 2: Node.js Serve
```bash
cd mont-fort.com
npx serve .
```

### Option 3: PHP Server
```bash
cd mont-fort.com
php -S localhost:8000
```

Open your browser and go to `http://localhost:8000`

## GitHub Pages Deployment

### Automatic Deployment
The included GitHub Actions workflow automatically deploys the site when you:
- Push to `main` or `master` branch
- Manually trigger via Actions tab

### Manual Setup Steps
1. **Repository Settings** → **Pages**:
   - Source: "GitHub Actions"
   - Branch: main/master (will be handled by Actions)

2. **Enable Actions** (if needed):
   - Settings → Actions → General
   - Allow all actions and reusable workflows

3. **Custom Domain** (optional):
   - Uncomment and edit `CNAME` file
   - Add your domain in Pages settings

## Company Information

**Montfort Group** is headquartered in:
- **Geneva, Switzerland** - 3rd & 4th floor, Rue du Mont-Blanc 14, 1201 Geneva
- **Dubai, UAE** - 1104 ICD Brookfield Place, DIFC
- **Singapore** - 0804 Marina One East Tower, 7 Straits View

The company operates globally with over 15 offices across six continents, serving both emerging and mature markets worldwide.

## Website Features

- **Modern Web Technologies** - Built with Astro framework
- **Performance Optimized** - Fast loading with optimized assets
- **SEO Friendly** - Proper meta tags and structured content
- **Accessibility** - WCAG compliant design elements
- **Multi-language Support** - Global audience considerations
- **GitHub Pages Compatible** - Ready for immediate deployment

## Download Information

- **Source**: https://mont-fort.com/
- **Download Date**: August 7, 2025
- **Method**: wget --mirror with full asset preservation
- **Status**: Complete copy with all functionality preserved
- **GitHub Pages**: Fully optimized and ready for deployment

## Deployment Examples

### Basic GitHub Pages
```bash
# 1. Create new repo on GitHub
# 2. Clone locally
git clone https://github.com/username/mont-fort-website.git
cd mont-fort-website

# 3. Copy all files from mont-fort.com/ directory
cp -r /path/to/mont-fort.com/* .

# 4. Commit and push
git add .
git commit -m "Initial website deployment"
git push origin main

# 5. Enable Pages in repo settings
# Site will be live at: https://username.github.io/mont-fort-website/
```

### With Custom Domain
```bash
# Edit CNAME file
echo "your-domain.com" > CNAME

# Configure DNS
# CNAME record: your-domain.com → username.github.io

# Deploy
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

## Notes

This is a static copy of the website as it appeared on the download date. Dynamic features requiring server-side processing (like contact forms) will not function in the local copy, but all content and styling is preserved exactly as it appeared on the live site.

The website showcases Montfort Group's position as a leading global commodity trading and asset investment company, with comprehensive information about their business divisions, global presence, sustainability initiatives, and corporate values.

**Perfect for**: Educational purposes, web development reference, design inspiration, and GitHub Pages hosting.