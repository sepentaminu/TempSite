# Mont-Fort.com - GitHub Pages Deployment

[![Deploy to GitHub Pages](https://github.com/username/mont-fort-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/username/mont-fort-website/actions/workflows/deploy.yml)

This repository contains a complete static copy of the mont-fort.com website, optimized for GitHub Pages hosting.

## 🌐 Live Demo

Visit the GitHub Pages deployment: `https://username.github.io/mont-fort-website/`

## 📋 About

This is a static archive of **Montfort Group's** official website (https://mont-fort.com), created for:
- Educational purposes
- Web development reference
- Design inspiration
- Archival preservation

**Montfort Group** is a global commodity trading and asset investment company with operations across:
- **Montfort Trading** - Leading with innovation
- **Montfort Capital** - Maximizing investment value
- **Montfort Maritime** - Powering energy delivery
- **Fort Energy** - Advancing energy investments

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions:

1. **Automatic Deployment**: Pushes to `main`/`master` branch trigger deployment
2. **Manual Deployment**: Use the "Actions" tab → "Deploy to GitHub Pages" → "Run workflow"
3. **Pull Request Preview**: PRs create preview deployments

## 📁 Repository Structure

```
mont-fort.com/
├── _astro/              # CSS, JS, and media assets
├── .github/workflows/   # GitHub Actions deployment
├── trading/             # Trading division pages
├── capital/             # Capital division pages
├── maritime/            # Maritime division pages
├── fort-energy/         # Fort Energy division pages
├── news/                # News and press releases
├── contact/             # Contact information
├── who-we-are/          # Company information
├── privacy-policy/      # Privacy policy
├── terms-of-use/        # Terms of use
├── index.html           # Homepage
├── .nojekyll           # Disable Jekyll processing
├── CNAME               # Custom domain configuration
└── robots.txt          # Search engine directives
```

## ⚙️ GitHub Pages Configuration

### Required Settings

1. **Repository Settings** → **Pages**:
   - Source: "GitHub Actions"
   - Custom domain: (optional)

2. **Actions Permissions**:
   - Enable "Allow all actions and reusable workflows"
   - Enable "Allow GitHub Actions to create and approve pull requests"

### Optional Custom Domain

To use a custom domain:
1. Uncomment and edit the `CNAME` file
2. Configure DNS records:
   ```
   CNAME: your-domain.com → username.github.io
   ```

## 🛠️ Local Development

### Quick Start

```bash
# Clone the repository
git clone https://github.com/username/mont-fort-website.git
cd mont-fort-website

# Serve locally
python3 -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

Visit: `http://localhost:8000`

### File Structure

- **Static Assets**: All images, CSS, and JS are in `_astro/`
- **Relative Paths**: All links use relative paths for GitHub Pages compatibility
- **No Build Process**: Pure static HTML, ready to serve

## 📊 Website Statistics

- **Total Files**: 393 files
- **Total Size**: 194 MB
- **Technologies**: HTML5, CSS3, JavaScript (Astro framework)
- **Responsive**: Mobile, tablet, and desktop optimized
- **Performance**: Optimized images and minified assets

## 🌟 Key Features

- ✅ **Fully Responsive Design**
- ✅ **Interactive Animations**
- ✅ **Modern UI/UX**
- ✅ **Global Office Locations**
- ✅ **Company News & Updates**
- ✅ **ESG & Sustainability Content**
- ✅ **Contact Forms** (static display)
- ✅ **Multi-language Ready**

## 🔧 GitHub Pages Optimizations

- **`.nojekyll`**: Prevents Jekyll processing of `_astro` directory
- **Relative Paths**: All links work in subdirectory hosting
- **Asset Optimization**: Images and scripts optimized for web
- **SEO Ready**: Proper meta tags and sitemap included
- **Fast Loading**: Optimized for GitHub's CDN

## 📝 License & Attribution

This is a static copy of the original mont-fort.com website for educational and archival purposes.

- **Original Website**: https://mont-fort.com
- **Company**: Montfort Group
- **Archive Date**: August 7, 2025
- **Archive Purpose**: Educational/Reference

## 🤝 Contributing

This is an archived copy. For updates to the live website, contact Montfort Group directly.

For issues with this GitHub Pages deployment:
1. Check the Actions tab for deployment status
2. Verify GitHub Pages settings
3. Ensure all files are properly committed

## 📞 Contact

- **Original Website**: https://mont-fort.com
- **GitHub Repository**: https://github.com/username/mont-fort-website
- **Issues**: Use GitHub Issues for technical problems

---

**Note**: This is a static archive. Dynamic features like contact forms are preserved visually but do not function. For business inquiries, visit the original website at https://mont-fort.com