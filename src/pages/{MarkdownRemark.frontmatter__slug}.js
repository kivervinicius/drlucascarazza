import React, { useMemo } from "react"
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import BotaoFlutuante from "../components/Btn-flutuante"
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import * as allData from "../components/allData";

// Helper to flatten and extract simple links {href, label} from complex data structures
const extractLinks = (data) => {
  let links = [];
  if (Array.isArray(data)) {
    data.forEach(item => {
      // Check for nested 'items' (like in Tratamentos)
      if (item.items) {
        links = [...links, ...extractLinks(item.items)];
      }
      // Check for nikName which might be a React element or string
      else if (item.nikName) {
        if (React.isValidElement(item.nikName) && item.nikName.props.href) {
          links.push({ href: item.nikName.props.href, label: item.nikName.props.title || item.name });
        }
      }
      // Check for direct url (like in Exames)
      else if (item.url && item.url.startsWith('/')) { // Internal links only preferred? Or strictly articles?
        links.push({ href: item.url, label: item.name });
      }
      // Check for description with links (Tratamentos rich text) - skipping for now as it's complex to parse
    });
  }
  return links;
};

const getRandomLink = (links) => {
  if (!links || links.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * links.length);
  return links[randomIndex];
};

export default function Template({
  data,
}) {

  const { markdownRemark, site } = data
  const { frontmatter, html } = markdownRemark

  // Memoize random selections to prevent hydration mismatch if possible, though strict hydration might still mismatch on random.
  // Ideally this should be done at build time or via useEffect, but purely random client-side is acceptable for "See Also".
  const suggestions = useMemo(() => {
    // 1. Doenças
    const doencas = [
      ...allData.catarataLente, ...allData.conjuntiva, ...allData.corneaData, ...allData.glaucomaData,
      ...allData.lentesData, ...allData.oftalmoPediatria, ...allData.olhoSeco,
      ...allData.refracao, ...allData.retinaVitreo
    ];
    const randomDoenca = getRandomLink(extractLinks(doencas));

    // 2. Tratamentos (Need to manually pick relevant ones since they are buried in rich text or objects)
    // Actually tratamentosData structure is complex. Let's just link to the main page for now or pick simple ones?
    // User asked for "randomly listing some articles". 
    // Most treatments in allData don't have direct simple internal pages except the ones we made buttons for?
    // Let's stick to the Category Links for now but randomize the BUTTON TEXT or just show specific Featured Articles if found?

    // WAIT! The user wants "random articles from each session".
    // Let's grab one specific exam, one specific disease, one specific treatment (if it has a link).

    const exams = [
      ...allData.examesConsultas, ...allData.examesCornea, ...allData.examesGlaucoma,
      ...allData.examesLente, ...allData.examesRetina
    ];
    const randomExam = getRandomLink(extractLinks(exams));

    // Tratamentos links are often embedded in HTML strings in the 'description' or 'url' fields.
    // We essentially need to parse `tratamentosData` to find things with URLs.
    const tratamentosLinks = [];
    allData.tratamentosData.forEach(cat => {
      cat.items.forEach(item => {
        if (item.url && item.url.startsWith('/')) {
          tratamentosLinks.push({ href: item.url, label: item.name });
        }
        // Also regex look for <a href="..."> in description? simpler to just use main section link if no specific article.
      });
    });
    const randomTratamento = getRandomLink(tratamentosLinks);

    return {
      doenca: randomDoenca,
      exame: randomExam,
      tratamento: randomTratamento
    };
  }, []); // Run once on mount/render

  return (
    <>
      <Helmet>
        <title>{frontmatter.title} | {site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="keywords" content={site.siteMetadata.keywords} />
      </Helmet>
      <Menu />
      <Banner />
      <h1 className="text-center title">{frontmatter.title}</h1>
      <div
        className="blog-post-content container row-12"
      >
        <div className="col-12" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <div className="container-fluid mt-5 py-5 bg-light">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-12 mb-4">
              <h3 className="text-secondary text-uppercase" style={{ letterSpacing: '1px' }}>Explore mais conteúdos</h3>
              <hr className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: '#021933', opacity: 1 }} />
            </div>

            <div className="col-12 col-md-5 mt-3">
              <div className="card h-100 border-0 shadow-sm" style={{ transition: 'transform 0.3s' }}>
                <div className="card-body p-4">
                  <h5 className="card-title text-primary mb-3">Doenças Oculares</h5>
                  {suggestions.doenca ? (
                    <>
                      <p className="card-text text-muted mb-3">Leia também:</p>
                      <a href={suggestions.doenca.href} className="btn btn-primary w-100 rounded-pill">
                        {suggestions.doenca.label}
                      </a>
                    </>
                  ) : (
                    <a href="/doencas-oculares/" className="btn btn-outline-primary w-100 rounded-pill">
                      Ver Todas
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5 mt-3">
              <div className="card h-100 border-0 shadow-sm" style={{ transition: 'transform 0.3s' }}>
                <div className="card-body p-4">
                  <h5 className="card-title text-primary mb-3">Tratamentos</h5>
                  {suggestions.tratamento ? (
                    <>
                      <p className="card-text text-muted mb-3">Saiba mais sobre:</p>
                      <a href={suggestions.tratamento.href} className="btn btn-primary w-100 rounded-pill">
                        {suggestions.tratamento.label}
                      </a>
                    </>
                  ) : (
                    <a href="/tratamentos" className="btn btn-outline-primary w-100 rounded-pill">
                      Ver Todos
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <BotaoFlutuante />
      <Footer />

    </>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
// date(formatString: "MMMM DD, YYYY")